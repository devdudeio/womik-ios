Meteor.startup(function () {
    //blazeroot
    BlazeLayout.setRoot('body');

    //layout
    $('body').addClass('theme-white');


    //moment language

    moment.locale('de');

    //save device information in session var when is cordova (not browser)

    /*
     device.cordova
     device.model
     device.platform
     device.uuid
     device.version
     device.manufacturer
     device.isVirtual
     device.serial
     */
    if (Meteor.isCordova) {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            Session.setDefault("device", device);
        }
    }
    Meteor.subscribe('areas');
    Meteor.subscribe('events');
    Meteor.subscribe('images');

    //Dead geolocation to ask user to enable geo
    var onSuccess = function(position) {
    };
    function onError(error) {
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
