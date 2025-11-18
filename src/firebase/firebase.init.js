// firebase.init.js

import { initializeApp } from "firebase/app";

// import.meta.env ব্যবহার করে .env ফাইল থেকে ভ্যালু লোড করা
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// যদি আপনি Authentication বা অন্য কিছু ব্যবহার করেন, তবে সেগুলোকে এখানে এক্সপোর্ট করতে পারেন
// যেমন: import { getAuth } from "firebase/auth";
// export const auth = getAuth(app);

export default app; // Firebase অ্যাপ ইনস্ট্যান্স এক্সপোর্ট করা