// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function() {
  var config = {
    apiKey: "AIzaSyDbGRgijckNEwhlK7URM-WxQ-srgxj9-Sw",
    authDomain: "fir-storage-c70bf.firebaseapp.com",
    databaseURL: "https://fir-storage-c70bf.firebaseio.com",
    storageBucket: "fir-storage-c70bf.appspot.com",
    messagingSenderId: "210349180720"
  };
  firebase.initializeApp(config);
})
.controller('MyCtrl', function($scope, $firebaseArray){
    var ref = firebase.database().ref();
     var messagesRef = ref.child("messages");
    var data = $firebaseArray(messagesRef);
    $scope.submit=function(title,message){
      data.$add({
        Message:message,
        Title:title
      }).then(function(ref){
        alert("success")
      });
    }  
  });
