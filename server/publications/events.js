Meteor.publish('events', function(){
   return Events.find();                //TODO: on frontend later only publish !hidden events
});