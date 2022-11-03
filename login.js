let form = document.querySelector('#form');

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

const auth = firebase.auth();


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;


    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            localStorage.setItem("user", JSON.stringify(cred));
            localStorage.setItem("uid", cred.user["uid"]);
            window.alert("Welcome " + email);
            window.location.href = "home.html";
        })
        .catch(err => {
            alert(err.message);
        })
});