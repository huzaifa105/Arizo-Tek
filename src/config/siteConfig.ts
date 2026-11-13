/**
 * ArizoTek Site Configuration
 *
 * Replace the placeholder contact details, social URLs, and Formspree endpoint
 * below before deploying to production on GitHub Pages.
 */

export const SITE_CONFIG = {
  businessName: 'ArizoTek',
  tagline: 'IT Automation for Small to Mid-Size Businesses',
  logoPath: './assets/aistudio/image_d534bb24.png',

  /**
   * Static Form Integration (Formspree)
   *
   * To activate the Contact Us form on a static GitHub Pages deployment:
   * 1. Create a free form at https://formspree.io
   * 2. Paste your form endpoint URL below, e.g.:
   *    formspreeEndpoint: 'https://formspree.io/f/your_form_id'
   *
   * Leave empty ('') while unconfigured so visitors see an honest setup notice
   * instead of a false submission confirmation.
   */
  formspreeEndpoint: '',

  /**
   * Editable Business Contact Placeholders
   * Replace these values with official ArizoTek contact details.
   */
  contact: {
    email: 'contact@arizotek-placeholder.com',
    emailLabel: 'Editable placeholder — replace with your official business email',
    phone: '+1 (000) 000-0000',
    phoneLabel: 'Editable placeholder — replace with your business phone number',
    location: 'Phoenix, AZ (Placeholder Location)',
    locationLabel: 'Editable placeholder — replace with your office city or service region',
  },

  /**
   * Configurable Social Media Placeholders
   * Set url to your live profile link when ready.
   */
  socialLinks: [
    {
      name: 'LinkedIn',
      href: '#linkedin-placeholder',
      isPlaceholder: true,
    },
    {
      name: 'X (Twitter)',
      href: '#x-placeholder',
      isPlaceholder: true,
    },
    {
      name: 'GitHub',
      href: '#github-placeholder',
      isPlaceholder: true,
    },
  ],
} as const;
