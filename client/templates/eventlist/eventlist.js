Template.eventlist.helpers({
    events: function () {

        //TODO: find citys
        if (Session.get("orderByCityID") == 0) {
            return Events.find({hidden: false}, {sort: {begin: 1}});
        } else {
            let city_id = Session.get("orderByCityID");
            return Events.find({areas: city_id}, {sort: {begin: 1}});
        }
    },
    selectedCity: function(){
        return Session.get("selectedCity");
    }
});
Template.eventlist.rendered = function () {
    var $$ = Dom7;
    var a = new Framework7();
    $$('.open-login').on('click', function () {
        a.loginScreen();
    });
    var myPicker = a.picker({
        input: '#picker-text',
        rotateEffect: true,
        toolbarCloseText: 'Auswählen',
        cols: [
            {
                textAlign: 'center',
                values: [0, 'gKpCkBSpqs8PQzLKB', 'jfAR5hwsfZcnSfNGe', 'XebXvEt3Er8GjJoDb'],
                displayValues: ['Alle Städte', 'Chemnitz', 'Dresden', 'Leipzig']
            }
        ],
        onChange: function (p, v, d) {
            Session.set("orderByCityID_temp", v);
            Session.set("selectedCity_temp", d[0]);
        },
        onClose: function (p) {
            Session.set("orderByCityID", Session.get("orderByCityID_temp"));
            Session.set("selectedCity", Session.get("selectedCity_temp"));

        }
    });
};

Template.eventlist.onCreated(function () {
    Session.setDefault("orderByCityID", 0);
    Session.setDefault("selectedCity", "Alle Städte");
});

Template.eventlist.events({
    'click .center .sliding': function () {
        Meteor.call("console", "click");
    },
    'click .js-add-tipp': function(){
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            window.open = cordova.InAppBrowser.open("mailto:redaktion@womik.de?subject=Neuer Geheimtipp", "_system");
        }
    }
});