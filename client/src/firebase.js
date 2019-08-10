import keys from'../firebaseConfig.json';
import * as firebase from 'firebase';


firebase.initializeApp(keys);

export default firebase;