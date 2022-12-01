import data from '../data';

let User = null;
let HasChecked = false;

firebase.auth().onAuthStateChanged(function(user) {
    User = user; // user is undefined if no user signed in
});

function isLoggedIn() {
    return User;
}

function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data)=>{
            HasChecked = false;
            return data;
        })
        .catch(function(error) {
            error = error || {};
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }

            return error;
        });
}

function logout(nextState, replace, callback) {
    firebase.auth().signOut().then((error) => {
        User = null;
        replace('login');
        callback();
    });
}

function ifLoggedIn(nextState, replace, callback) {
    // callback();
    // return;

    if(User){
        replace('admin');
        callback();
    } else if(!HasChecked){
        HasChecked = true;
        firebase.auth().onAuthStateChanged(function(user) {
            User = user; // user is undefined if no user signed in
            if(User){
                replace('admin');
                callback();
            } else {
                callback();
            }
        });
    } else {
        callback();
    }
}

function requireAuth(nextState, replace, callback) {
    // callback();
    // return;
    if(User){
        callback();
    } else if(!HasChecked){
        HasChecked = true;
        firebase.auth().onAuthStateChanged(function(user) {
            User = user; // user is undefined if no user signed in
            if(User){
                callback();
            } else {
                replace('login');
                callback();
            }
        });
    } else {
        replace('login');
        callback();
    }
}

export default {
    login,
    logout,
    ifLoggedIn,
    isLoggedIn,
    requireAuth
}