/**
 * returns an awesome date format for our awesome eventlist view
 */
Template.registerHelper("eventlistDateFormat", function (b) {
    const begin = moment(b);
    const now = Date.now();
    return begin.calendar(now);
});

