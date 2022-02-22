import { precacheAndRoute } from "workbox-precaching";

import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import { firebaseConfig } from "./services/firebase";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", async (event) => {
  console.log("ACTIVATE!!!", event);

  console.log("MESSAGING", messaging);

  onBackgroundMessage(messaging, (message) => {
    console.log("MESSAGE", message);
  });
});

self.addEventListener("install", (event) => {
  console.log("INSTALL!!!");
});

self.addEventListener("online", (event) => {
  console.log("HELLUREI");
});
