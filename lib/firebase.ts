// lib/firebase.ts
// Firebase v9+ uses a modular syntax that is different from previous versions
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase only if there are no initialized apps
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth, app };