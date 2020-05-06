import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDM8HWWg322qtG5VUlqPw-gamy7Umn_1jA",
	authDomain: "wppclone-ad57d.firebaseapp.com",
	databaseURL: "https://wppclone-ad57d.firebaseio.com",
	projectId: "wppclone-ad57d",
	storageBucket: "wppclone-ad57d.appspot.com",
	messagingSenderId: "161840787955",
	appId: "1:161840787955:web:f34ad8a0489d3e08cae286",
	measurementId: "G-YEM5GT6S8S"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
