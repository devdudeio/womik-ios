/**
 * returns format for multi day events
 */
Template.registerHelper("formatMultiDayEvent", function (b,e) {
    let temp = moment(b._d).format("dddd, DD.MM.YYYY HH:mm ");
    temp = temp + moment(e._d).format("- dddd, DD.MM.YYYY HH:mm");
    return temp;
});

