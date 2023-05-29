import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Globally-distributed cloud database',
    illustration: 'img/database.svg',
    description: (
      <>
        Deploy a multi-cloud database in over 90 regions across the three major cloud providers.
      </>
    ),
  },
  {
    title: 'Fully-integrated developer data platform',
    illustration: 'img/developer-data-platform.svg',
    description: (
      <>
        Build and run production-ready apps on top of Atlas in a fraction of the time with fully managed cloud services such as Functions, Triggers, and APIs.
      </>
    ),
  },
  {
    title: 'AI/ML capabilities',
    illustration: 'img/ai-ml.svg',
    description: (
      <>
        Leverage Google Cloud Natural Language API to extract sentiment from text and extract business insights.
      </>
    ),
  },
];

function Feature({illustration, title, description, fetchPriority}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={illustration}
          className={styles.featureImg}
          width="450px"
          height="100%"
          role="img"
          alt=""
          fetchpriority={fetchPriority}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} fetchPriority={idx ? 'low' : 'high'} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
