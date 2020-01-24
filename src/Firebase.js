import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "Your_Firebase_API_KEY",
  databaseURL: "Your_Firebase_Database_URL",
  projectId: "Your_Firebase_Project_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
