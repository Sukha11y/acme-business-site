// filepath: /workspaces/Acme-home-page/playwright/setupPlaywright.ts
import { setupUserway } from '@userway/a11y-playwright';

setupUserway({
  strict: false,
  elementScreenshots: false,
  reportPath: './uw-a11y-reports',
});