import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const AgenticFrameworkIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 6.5V10M10.3 13.3 6.7 15.7M13.7 13.3l3.6 2.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const BusinessUseCasesIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.25" fill="currentColor" />
  </svg>
);

const TechModernizationIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 4 4 8l8 4 8-4-8-4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M4 12l8 4 8-4M4 16l8 4 8-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InHouseEngineeringIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3.5 5 6.3v5.4c0 4.2 3 6.9 7 8.8 4-1.9 7-4.6 7-8.8V6.3l-7-2.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="m9 12 2 2 4-4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StrategicCollaborationIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="7" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2.5 19c.8-2.9 2.8-4.5 4.5-4.5s3.7 1.6 4.5 4.5M12.5 19c.8-2.9 2.8-4.5 4.5-4.5s3.7 1.6 4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

type FeatureItem = {
  title: string;
  Icon: IconComponent;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Agentic Framework',
    Icon: AgenticFrameworkIcon,
    description: (
      <>
        Leverages autonomous, multi-agent AI design to orchestrate complex
        workflows, enabling intelligent orchestration across diverse
        business processes.
      </>
    ),
  },
  {
    title: 'Targeted Wealth Business Use Cases',
    Icon: BusinessUseCasesIcon,
    description: (
      <>
        Powers domain-specific AI applications across Wealth and Private
        Banking to elevate operational efficiency, empower advisors, and
        enhance client experiences.
      </>
    ),
  },
  {
    title: 'Continuous Tech Modernization',
    Icon: TechModernizationIcon,
    description: (
      <>
        Designed with a modular architecture that seamlessly integrates
        state-of-the-art AI advancements to maintain a competitive
        technological edge.
      </>
    ),
  },
  {
    title: 'In-House Engineering',
    Icon: InHouseEngineeringIcon,
    description: (
      <>
        Fully developed, owned, and maintained within Wealth Solutions
        Technology, ensuring deep integration with core financial systems
        and strict compliance standards.
      </>
    ),
  },
  {
    title: 'Group AI Platform Collaboration',
    Icon: StrategicCollaborationIcon,
    description: (
      <>
        Developed in close partnership with the HSBC Group AI Team, ensuring
        alignment with global enterprise AI standards, security protocols,
        and ethical AI governance.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>
        <Icon className={styles.featureIcon} />
      </div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <Heading as="h2">Key Architecture &amp; Capabilities</Heading>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
