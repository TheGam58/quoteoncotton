// Vite plugin to ensure _redirects file is copied to dist
import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

export default function copyRedirects() {
  return {
    name: 'copy-redirects',
    closeBundle() {
      const src = join(process.cwd(), 'public', '_redirects');
      const dest = join(process.cwd(), 'dist', '_redirects');
      
      if (existsSync(src)) {
        copyFileSync(src, dest);
        console.log('✓ Copied _redirects to dist');
      } else {
        console.warn('⚠ _redirects file not found in public folder');
      }
    }
  };
}
