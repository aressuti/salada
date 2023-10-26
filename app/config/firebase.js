import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.getApps().length) {
    firebase.initializeApp(
        {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
        }
    )
}

export default firebase;