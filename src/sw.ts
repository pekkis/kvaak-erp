import { precacheAndRoute } from "workbox-precaching";

import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
import { firebaseConfig } from "./services/firebase";

declare let self: ServiceWorkerGlobalScope;

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

/*
onBackgroundMessage(messaging, (message) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    message
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
*/

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", async (event) => {
  console.log("ACTIVATE!!!!!!", event);
});

self.addEventListener("install", (event) => {
  console.log("INSTALL!!!");
});

self.addEventListener("online", (event) => {
  console.log("HELLUREI");
});

console.log("PUSH IT");

self.addEventListener("push", async (e) => {
  console.log("PUSH IT", e);

  const data = e.data?.json();

  console.log("data", data);

  // console.log("[firebase-messaging-sw.js] Received background message ", e);
  // Customize notification here
  const notificationTitle = data.notification.title;
  const notificationOptions = {
    body: data.notification.body,
    icon: "/android-chrome-192x192.png"
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
