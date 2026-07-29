import type { PortalConfig } from '@forklaunch/healthcare-leadgen-ui';

/** UChicago Medicine customization — the entire diff from the template. */
export const config: PortalConfig = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:9101',
  organization: {
    slug: 'uchicago-medicine',
    displayName: 'UChicago Medicine'
  },
  branding: {
    institution: 'The University of Chicago Medicine',
    portalName: 'Ideas Portal',
    tagline:
      'A confidential waitlist for clinical innovation ideas · HIPAA simulation — a demonstration of PHI-grade data handling',
    heroEyebrow: 'UChicago Medicine · Clinical Innovation Program',
    emailPlaceholder: 'you@uchicagomedicine.org'
  }
  // UChicago maroon + gold is the package default theme.
};
