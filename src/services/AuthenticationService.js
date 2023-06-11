import { signInWithEmailAndPassword } from 'firebase/auth';
import firebaseAuth from '../firebase/firebase';
import MessageUtility from '../utils/MessageUtility';

export const loginWithCredentials = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    return resp.user.uid;
  } catch (error) {
    MessageUtility(error.message, 'error');
  }
};

export const logout = async () => await firebaseAuth.signOut();
