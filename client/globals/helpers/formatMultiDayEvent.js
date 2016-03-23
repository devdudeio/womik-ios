/**
 * returns format for multi day events
 */
Template.registerHelper("formatMultiDayEvent", function (b,e) {
    let temp = moment(b).subtract(1, 'hours').format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e).subtract(1, 'hours').format("- dddd, DD.MM.YYYY HH:mm");
    return temp;
});

