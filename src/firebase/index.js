import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
import { get } from 'lodash';
import config from '../services/api/config';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvnEbCKdr4d-Zpf-d35t9QPlm-gLHbAmM",
    authDomain: "se-img.firebaseapp.com",
    projectId: "se-img",
    storageBucket: "se-img.appspot.com",
    messagingSenderId: "953876135257",
    appId: "1:953876135257:web:f666277bc14ca2d63e6048",
    measurementId: "G-97ZZJW0RJS"
  };

  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);