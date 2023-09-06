import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.firebase_api_key ,
  authDomain: import.meta.env.firebase_auth_domain,
  projectId: "multivendor-ecommerce-ap-b2da7",
  storageBucket: "multivendor-ecommerce-ap-b2da7.appspot.com",
  messagingSenderId: "742328463738",
  appId: import.meta.env.firebase_app_id,
  measurementId: "G-LSMKLPN6NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , import.meta.env.firebase_folder_path);