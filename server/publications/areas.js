Meteor.publish('areas', function () {
    return Areas.find({}, {sort: {name: 1}});
});