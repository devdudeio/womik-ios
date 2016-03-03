Template.eventlist.helpers({
    events: function () {
        return Events.find();
    }
});

Template.eventlist.rendered = function () {
    var $$ = Dom7;
    var myApp = new Framework7();
};
