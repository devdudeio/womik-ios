Meteor.publish('events', function () {
    return Events.find({hidden: false}, {sort: {begin: -1}});                //TODO: on frontend later only publish !hidden events
});