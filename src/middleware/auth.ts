import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../lib/firebase-admin.ts';
import { DecodedIdToken } from 'firebase-admin/auth';

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
}

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  if (!adminAuth) {
    // If Firebase Admin Auth is not configured, fallback to guest rider
    req.user = {
      uid: 'guest_rider',
      email: 'guest@chukyza.com',
      name: 'Chukyza Guest',
      aud: 'chukyza',
      auth_time: Math.floor(Date.now() / 1000),
      user_id: 'guest_rider',
      sub: 'guest_rider',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600,
      iss: 'https://securetoken.google.com/chukyza',
      firebase: { identities: {}, sign_in_provider: 'custom' }
    };
    return next();
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
