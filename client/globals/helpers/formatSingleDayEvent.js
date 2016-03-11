/**
 * returns format for single day events
 */
Template.registerHelper("formatSingleDayEvent", function (b,e) {
    let temp = moment(b._d).format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e._d).format("- HH:mm");
    return temp;
});

