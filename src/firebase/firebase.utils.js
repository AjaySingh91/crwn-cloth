import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDAQw3l0RN4geG1Z3_orIfFuIKkss7avqE",
    authDomain: "crown-db-8f6e1.firebaseapp.com",
    projectId: "crown-db-8f6e1",
    storageBucket: "crown-db-8f6e1.appspot.com",
    messagingSenderId: "1072715658596",
    appId: "1:1072715658596:web:a0918ca165404719b87671",
    measurementId: "G-1JNVY0BZJH"
  };
  

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get();
if(!snapshot.exists){
  const {displayName, email} =userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log('erro creating user', error.message);
  }

} return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;