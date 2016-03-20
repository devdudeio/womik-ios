Template.eventlist.helpers({
    events: function () {

        //TODO: find citys
        if (Session.get("orderByCityID") == 0) {
            return Events.find({hidden: false}, {sort: {begin: 1}});
        } else {
            let city_id = Session.get("orderByCityID");
            return Events.find({areas: city_id}, {sort: {begin: 1}});
        }
    }
});
Template.eventlist.rendered = function () {
    var $$ = Dom7;
    var a = new Framework7();

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
        onChange: function (p, v) {
            Session.set("orderByCityID_temp", v);
        },
        onClose: function (p) {
            Session.set("orderByCityID", Session.get("orderByCityID_temp"));
        }
    });
};

Template.eventlist.onCreated(function () {
    Session.setDefault("orderByCityID", 0);
});

Template.eventlist.events({
    'click .center .sliding': function () {
        Meteor.call("console", "click");
    }
});