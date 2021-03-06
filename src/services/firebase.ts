// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging as gM, getToken, Messaging } from "firebase/messaging";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY as string,
  authDomain: "hardcore-react-training.firebaseapp.com",
  projectId: "hardcore-react-training",
  storageBucket: "hardcore-react-training.appspot.com",
  messagingSenderId: "1022336729329",
  appId: "1:1022336729329:web:cd868eb12049ee4dd62950"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const getMessaging = async (
  registration: ServiceWorkerRegistration
): Promise<[string, Messaging]> => {
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  const messaging = gM(app);

  const opts = {
    vapidKey: import.meta.env.VITE_VAPID as string,
    serviceWorkerRegistration: registration
  };

  console.log("OPTS", opts);

  try {
    const token = await getToken(messaging, opts);

    if (!token) {
      console.log(
        "No registration token available. Request permission to generate one."
      );
      throw new Error("Hiphei");
    }

    console.log("TOKEN", token);

    return [token, messaging];
  } catch (e) {
    console.log("An error occurred while retrieving token. ", e);
    throw e;
  }
};
