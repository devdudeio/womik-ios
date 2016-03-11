//subscribe to only one Event
Meteor.publish("event", function (event_id) {
    check(event_id, String);
    if (Events.findOne(event_id)) {
        return Events.find(event_id);
    } else {
        return null;
    }

});