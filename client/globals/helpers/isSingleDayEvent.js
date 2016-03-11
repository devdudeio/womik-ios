//is begin and endday not the same
Template.registerHelper("isSingleDayEvent", function (b, e) {


    const begin = moment(b._d);
    const end = moment(e._d);

    if (begin.day() != end.day()) {
        return false;
    }else{
        return true;
    }


});

