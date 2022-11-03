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

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            localStorage.setItem("user", JSON.stringify(cred));
            window.alert("Successfully Registered");
            window.location.href = "index.html";
        })
        .catch(err => {
            alert(err.message);
        })
});