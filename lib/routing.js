//avoid error when page is not found -> return to index
FlowRouter.notFound = {
    action: function () {
        FlowRouter.go('/');
    }
};




//open eventlist on start
FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('eventlist');
    },
    name: "eventlist" // optional
});

//open event
FlowRouter.route('/event/:_id', {
    action: function (params) {
        console.log(FlowRouter.current().params._id);
        BlazeLayout.render('event');
    },
    name: "event" // optional
});

