Template.event.rendered = function () {
    var $$ = Dom7;
    var myApp = new Framework7();

};

Template.event.events({});

Template.event.helpers({
    event: function () {
        return Events.findOne(FlowRouter.current().params._id);
    }
});


Template.event.onCreated(function () {
    const instance = this;
    instance.subscribe("event", FlowRouter.current().params._id, {
        onReady: function () {
            Meteor.call("console", "ready ;)");

            drawMap = function () {
                var map = L.map('map', {scrollWheelZoom: false, zoomControl: false}).setView([51.0474, 13.7384], 16);
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                    detectRetina: true
                }).addTo(map);
            };

            setTimeout(drawMap, 250);

        }
    });
});