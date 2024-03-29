Template.event.rendered = function () {
    var $$ = Dom7;
    var myApp = new Framework7();

};

Template.event.events({
    'click .js-open-browser': function (e) {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            window.open = cordova.InAppBrowser.open($(e.target).attr('href'), "_system");
        }
    },
    'click .js-open-maps': function () {
        launchnavigator.navigate(
            [Session.get("lat"), Session.get("lon")],null,
            function () {
                //alert("Plugin success");
            },
            function (error) {
                //alert("Plugin error: " + error);
            });
    }
});

Template.event.helpers({
    event: function () {
        return Events.findOne(FlowRouter.current().params._id);
    }
});


Template.event.onCreated(function () {
    Session.setDefault("lon", 0);
    Session.setDefault("lat", 0);
    const instance = this;
    instance.subscribe("event", FlowRouter.current().params._id, {
        onReady: function () {
            let lon = 0;
            let lat = 0;
            let e = Events.findOne(FlowRouter.current().params._id);

            let requestURL = "http://nominatim.openstreetmap.org/search/de/" + e.vendor_city + "/" + e.vendor_street + "/" + e.vendor_streetnr + "?format=json&addressdetails=1";
            console.log("calling: " + requestURL);
            $.getJSON(requestURL, function (data) {

                lon = data[0].lon;
                lat = data[0].lat;
                Session.set("lon", lon);
                Session.set("lat", lat);
                drawMap = function () {
                    L.Icon.Default.imagePath = '/images';
                    var map = L.map('map', {
                        scrollWheelZoom: false,
                        zoomControl: false,
                        attributionControl: false
                    }).setView([lat, lon], 16);
                    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                        maxZoom: 18,
                        detectRetina: true
                    }).addTo(map);
                    var marker = L.marker([lat, lon]).addTo(map);

                };
                setTimeout(drawMap, 500);

            });


        }
    });
});