import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDtTHYPfdYCLGPp3eOJaamVvKN5IeqOqDY",
  authDomain: "djamware-df153.firebaseapp.com",
  databaseURL: "https://djamware-df153.firebaseio.com",
  projectId: "djamware-df153",
  storageBucket: "djamware-df153.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
