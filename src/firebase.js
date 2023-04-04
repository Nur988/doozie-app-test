import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from 'firebase/app';




const config = {
    apiKey: "AIzaSyDSgQ_3nOJCG7rBChoJymR6RSP45LduRuQ",
    authDomain: "doozie-app-f9ccc.firebaseapp.com",
    projectId: "doozie-app-f9ccc",
    storageBucket: "doozie-app-f9ccc.appspot.com",
    messagingSenderId: "493671688296",
    appId: "1:493671688296:web:b12e1751045e01c3c373dd",
    measurementId: "G-PK6WSLQHWW"
}


const firebaseApp = initializeApp(config);
const messaging = getMessaging(firebaseApp);
// const messaging = getMessaging(app);
// // Add the public key generated from the console here.
// const token= await getToken(messaging, {vapidKey: "BJONgh0nofF8pXQXdVXAFEmROJhquPjvNH0bryQXDT5DGaKfUdvJEqlko_MSuZsi7QkQL_ylvFjIj-itwRMrnAI"});
// console.log(token)


function gettoken(){
getToken(messaging, { vapidKey: 'BJONgh0nofF8pXQXdVXAFEmROJhquPjvNH0bryQXDT5DGaKfUdvJEqlko_MSuZsi7QkQL_ylvFjIj-itwRMrnAI' }).then((currentToken) => {
    if (currentToken) {
        console.log(String(currentToken));     
    
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
    } else {
        console.log('No registration token available. Request permission to generate one.');
        
        // shows on the UI that permission is required 
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
});}

export {gettoken};


