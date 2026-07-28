import { initializeApp, getApps } from 'firebase-admin/app';
import { getAuth, Auth } from 'firebase-admin/auth';
import fs from 'fs';
import path from 'path';

let adminAuth: Auth | null = null;

try {
  const configPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
  if (fs.existsSync(configPath)) {
    const raw = fs.readFileSync(configPath, 'utf-8');
    const firebaseConfig = JSON.parse(raw);
    if (!getApps().length && firebaseConfig?.projectId) {
      initializeApp({
        projectId: firebaseConfig.projectId,
      });
    }
    if (getApps().length > 0) {
      adminAuth = getAuth();
    }
  }
} catch (error) {
  console.warn('Firebase Admin SDK setup skipped:', error);
}

export { adminAuth };

