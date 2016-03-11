Template.eventlist.helpers({
    events: function () {
        return Events.find();
    }
});

Template.eventlist.rendered = function () {
    var $$ = Dom7;
    var myApp = new Framework7();
    //Meteor.call("console", Session.get("device"));
};

Template.eventlist.onCreated(function () {


    //TODO template subscription ready stuff laterszzzZZZZz....r
});