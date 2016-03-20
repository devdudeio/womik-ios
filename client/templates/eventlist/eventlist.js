Template.eventlist.helpers({
    events: function () {

        //TODO: find citys
        return Events.find({hidden: false}, {sort: {begin: 1}});
    }
});
Template.eventlist.rendered = function () {
    var $$ = Dom7;
    var a = new Framework7();

    let areas = Areas.find({}, {sort: {name: 1}});
    let area_names = [];
    let area_ids = [];

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
                values: ['1', '2', '3'],
                displayValues: ['Dresden', 'Leipzig', 'Chemnitz']
            }
        ],
        onChange: function (p, v) {
            Session.set("orderByCityID", v);
        },
        onClose: function (p) {
            alert(Session.get("orderByCityID") + " itemstotal: " + Events.find().count());
        }
    });


};

Template.eventlist.onCreated(function () {


    //TODO template subscription ready stuff laterszzzZZZZz....r
});


Template.eventlist.events({
    'click .center .sliding': function () {
        Meteor.call("console", "click");


    }
});