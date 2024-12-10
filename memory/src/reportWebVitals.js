

import { reportWebVitals as webVitals } from 'web-vitals';

const reportWebVitals = (metric) => {
  console.log(metric);
};

// Use webVitals instead of reportWebVitals if needed
webVitals((metric) => {
  console.log(metric);
});