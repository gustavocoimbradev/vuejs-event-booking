import { getFirestore } from "firebase/firestore"

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3u1MQ3FHXGfzdhN8V2Yo-MlOhtN_lShY",
  authDomain: "event-booking-8288b.firebaseapp.com",
  projectId: "event-booking-8288b",
  storageBucket: "event-booking-8288b.firebasestorage.app",
  messagingSenderId: "760515817317",
  appId: "1:760515817317:web:fdb908eb4be69f0c07fb8c",
  measurementId: "G-SGFVL43PRT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export { db }