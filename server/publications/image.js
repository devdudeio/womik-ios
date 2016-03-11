//subscribe to only one Image
Meteor.publish("image", function(image_id){
    check(image_id, String);
    if(Images.findOne(image_id)){
        console.log("there is one image");
    }else{
        console.log("nope, nothing found (image)");
    }

});