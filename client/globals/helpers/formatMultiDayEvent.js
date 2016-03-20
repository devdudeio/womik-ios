/**
 * returns format for multi day events
 */
Template.registerHelper("formatMultiDayEvent", function (b,e) {
    let temp = moment(b).format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e).format("- dddd, DD.MM.YYYY HH:mm");
    Meteor.call("console", M)
    return temp;
});

