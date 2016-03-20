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

    Meteor.subscribe("areas");

    let areas = Areas.find({}, {sort: {name: 1}});
    let area_names = ['Alle Städte'];
    let area_ids = [0];

    areas.forEach(function (e) {
        area_ids.push(e._id);
        area_names.push(e.name);
    });

    Meteor.call("console", area_ids);
    Meteor.call("console", area_names);

    var myPicker = a.picker({
        input: '#picker-text',
        rotateEffect: true,
        toolbarCloseText: 'Auswählen',
        cols: [
            {
                textAlign: 'center',
                values: area_ids,
                displayValues: area_names
            }
        ],
        onChange: function (p, v) {
            Session.set("orderByCityID", v);
        },
        onClose: function (p) {
            //alert(Session.get("orderByCityID") + " itemstotal: " + Events.find().count());
        }
    });


};

Template.eventlist.onCreated(function () {
    Session.setDefault("orderByCityID", 0);

    //TODO template subscription ready stuff laterszzzZZZZz....r
});


Template.eventlist.events({
    'click .center .sliding': function () {
        Meteor.call("console", "click");


    }
});