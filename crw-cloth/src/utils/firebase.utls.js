import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,EmailAuthProvider,signInWithEmailAndPassword, createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore , doc , getDoc , setDoc} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyB_rwnvbl4BBmxvD-GduZ8Znjit2wA4AIU',
  authDomain: 'crw-cloth-17e89.firebaseapp.com',
  projectId: 'crw-cloth-17e89',
  storageBucket: 'crw-cloth-17e89.appspot.com',
  messagingSenderId: '1075796175824',
  appId: '1:1075796175824:web:57ca32b42ffd32ed56e7d5',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    console.log(userAuth);
  };
  
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth , googleProvider);


export const db = getFirestore

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if (!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()) {
        const {displayName , email } = userAuth;
        const createAt = new Date();

        try { 
            await setDoc(userDocRef, {displayName,email,createAt, ...additionalInformation});
        } catch (error) {
            console.log('error createing the user',error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
};