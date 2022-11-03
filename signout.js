const firebaseConfig = {
    apiKey: "AIzaSyAR1TP71oIf_MZucujLQAcNNFJ-proqPjU",
    authDomain: "my-notes-app-8a386.firebaseapp.com",
    projectId: "my-notes-app-8a386",
    storageBucket: "my-notes-app-8a386.appspot.com",
    messagingSenderId: "761751534877",
    appId: "1:761751534877:web:a21d6a741d2d0120c6f5f4",
    measurementId: "G-RN38CS4QTG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const dbRef = firebase.database()
const auth = firebase.auth();


let fsignout = 0;
//Authentication function to check if any user is logged in
firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        //Logout Function
        document.querySelector('#signout').addEventListener('click', function () {
            auth.signOut()
                .then(() => {
                    // Sign-out successful.
                    fsignout = 1;
                    window.alert("You have Logged Out Succesfully.");
                    window.location = "index.html";
                }).catch((error) => {
                    // An error happened.
                    alert(error.message);
                });
        });
    }
    else if (fsignout == 0) {
        window.alert("You need to LogIn First.Redirecting to Home Page.");
        window.location = "index.html";
    }
});