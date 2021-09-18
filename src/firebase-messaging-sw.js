importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
 apiKey: "AIzaSyAXyw31e5KlG3OvK_qq9tuQFJ1CO068o80",
 authDomain: "test-v2-9b348.firebaseapp.com",
 projectId: "test-v2-9b348",
 storageBucket: "test-v2-9b348.appspot.com",
 messagingSenderId: "480445701814",
 appId: "1:480445701814:web:9ea34181b06438418dd017",
 measurementId: "G-TJVP6JD2SG"
});

const messaging = firebase.messaging();
