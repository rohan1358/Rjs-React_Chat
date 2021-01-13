import  firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'send-msg-49cdf', 
    apiKey: 'AIzaSyBC4lbWtVqRhojoGKn_mKVhgqjDd3i8LOQ',
    databaseURL: 'https://send-msg-49cdf.firebaseio.com'
  };
firebase.initializeApp(config);


export default firebase;