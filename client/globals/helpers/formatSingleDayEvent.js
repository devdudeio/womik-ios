/**
 * returns format for single day events
 */
Template.registerHelper("formatSingleDayEvent", function (b,e) {
    let temp = moment(b).subtract(1, 'hours').format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e).subtract(1, 'hours').format("- HH:mm");
    return temp;
});

