Meteor.publish('events', function () {

    return Events.find({hidden: false}, {sort: {begin: 1}});
});


/*

 max_diff = 13;
 const diff = moment().diff(begin, 'days');
 if (diff >= -max_diff && diff <= 0) {
 return true;
 } else {
 return false;
 }


 */