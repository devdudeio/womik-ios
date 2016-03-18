Meteor.publish('events', function () {
    return Events.find({hidden: false}, {sort: {begin: -1}});
});