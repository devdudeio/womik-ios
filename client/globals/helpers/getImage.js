Template.registerHelper("getImage", function (image_id) {
    return Images.findOne(image_id);
});