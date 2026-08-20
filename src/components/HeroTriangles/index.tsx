import type {CSSProperties, ReactNode} from 'react';
import styles from './styles.module.css';

// Deterministic PRNG so the mesh is identical on server and client render
// (avoids React hydration mismatches from Math.random()).
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COLS = 9;
const ROWS = 5;
const WIDTH = 1200;
const HEIGHT = 520;
const JITTER = 0.38;
const SEED = 20260220;

type Point = [number, number];

type Triangle = {
  points: string;
  key: string;
  delay: number;
  duration: number;
  axis: 'X' | 'Y';
  origin: string;
  opacity: number;
};

function buildTriangles(): Triangle[] {
  const random = mulberry32(SEED);
  const cellW = WIDTH / COLS;
  const cellH = HEIGHT / ROWS;

  const grid: Point[][] = [];
  for (let j = 0; j <= ROWS; j++) {
    const row: Point[] = [];
    for (let i = 0; i <= COLS; i++) {
      const onLeftRight = i === 0 || i === COLS;
      const onTopBottom = j === 0 || j === ROWS;
      let x = i * cellW;
      let y = j * cellH;
      if (!onLeftRight) {
        x += (random() - 0.5) * JITTER * cellW;
      }
      if (!onTopBottom) {
        y += (random() - 0.5) * JITTER * cellH;
      }
      row.push([x, y]);
    }
    grid.push(row);
  }

  const triangles: Triangle[] = [];

  const pushTriangle = (a: Point, b: Point, c: Point, key: string) => {
    const points = `${a[0].toFixed(1)},${a[1].toFixed(1)} ${b[0].toFixed(
      1,
    )},${b[1].toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
    const axis: 'X' | 'Y' = random() < 0.5 ? 'X' : 'Y';
    const origin = random() < 0.5 ? '0%' : '100%';
    triangles.push({
      points,
      key,
      delay: -random() * 9,
      duration: 6 + random() * 7,
      axis,
      origin: axis === 'Y' ? `50% ${origin}` : `${origin} 50%`,
      opacity: 0.04 + random() * 0.1,
    });
  };

  for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
      const tl = grid[j][i];
      const tr = grid[j][i + 1];
      const bl = grid[j + 1][i];
      const br = grid[j + 1][i + 1];
      const splitTlBr = random() < 0.5;
      if (splitTlBr) {
        pushTriangle(tl, tr, br, `${i}-${j}-a`);
        pushTriangle(tl, br, bl, `${i}-${j}-b`);
      } else {
        pushTriangle(tl, tr, bl, `${i}-${j}-a`);
        pushTriangle(tr, br, bl, `${i}-${j}-b`);
      }
    }
  }

  return triangles;
}

const TRIANGLES = buildTriangles();

export default function HeroTriangles(): ReactNode {
  return (
    <svg
      className={styles.mesh}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true">
      {TRIANGLES.map((tri) => (
        <polygon
          key={tri.key}
          points={tri.points}
          className={
            tri.axis === 'Y' ? styles.triangleFoldY : styles.triangleFoldX
          }
          style={
            {
              '--delay': `${tri.delay}s`,
              '--duration': `${tri.duration}s`,
              '--origin': tri.origin,
              '--opacity': tri.opacity,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
}
