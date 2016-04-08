/**
 * returns format for single day events
 */
Template.registerHelper("formatSingleDayEvent", function (b,e) {
    let temp = moment(b).format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e).format("- HH:mm");
    return temp;
});

