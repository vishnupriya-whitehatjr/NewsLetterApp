import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBGuKsNfkwtwJim-eKwL3dcriSD2P2_WYA',
  authDomain: 'newsapp-b7547.firebaseapp.com',
  databaseURL: 'https://newsapp-b7547.firebaseio.com',
  projectId: 'newsapp-b7547',
  storageBucket: 'newsapp-b7547.appspot.com',
  messagingSenderId: '831138458680',
  appId: '1:831138458680:web:eb91d6dbb9c1c17d194acd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
