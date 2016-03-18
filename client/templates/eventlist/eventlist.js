Template.eventlist.helpers({
    events: function () {

        //TODO: find citys
        return Events.find({hidden: false}, {sort: {begin: 1}});
    }
});
Template.eventlist.rendered = function () {
    var $$ = Dom7;

    var a = new Framework7();


    //var cities = Events.find();

    var myPicker = a.picker({
        input: '#picker-text',
        rotateEffect: true,
        toolbarCloseText:'Auswählen',
        cols: [
            {
                textAlign: 'center',
                values: ['1', '2', '3'],
                displayValues: ['Dresden', 'Leipzig', 'Chemnitz']
            }
        ],
        onChange: function(p,v){
            Session.set("orderByCityID", v);
        },
        onClose: function(p){
            alert(Session.get("orderByCityID")+ " itemstotal: " + Events.find().count());
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