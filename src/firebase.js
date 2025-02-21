import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBMvG_Hn_f7dAmRyj1XCZsdVgHxmFtVVDk",
    authDomain: "auth-development-880ba.firebaseapp.com",
    projectId: "auth-development-880ba",
    storageBucket: "auth-development-880ba.appspot.com",
    messagingSenderId: "823699966437",
    appId: "1:823699966437:web:7bae0dc7b714c43bacc70c"
})

export const auth = app.auth()
export default app
