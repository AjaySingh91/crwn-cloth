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
 
export const addCollecctionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef ,obj);
    // console.log(newDocRef);
  })
  return await batch.commit();
}
 
export const convertCollectionSnapshotToMap = (collections) =>{
  const  transfermedCollection = collections.docs.map( doc =>{
    const {title , items} = doc.data();
    return{
      routeNAme: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
     }
  })
  console.log(transfermedCollection);
 return transfermedCollection.reduce( (accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } ,{});
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;