App.accessRule('*');  // TODO restrict later


//set color to petrol
App.setPreference('StatusBarBackgroundColor', '#006973');
/*
 'iphone': '60x60',
 'iphone_2x': '120x120',
 'iphone_3x': '180x180',
 'ipad': '76x76',
 'ipad_2x': '152x152'


 const launchIosSizes = {
 'iphone': '320x480',
 'iphone_2x': '640x960',
 'iphone5': '640x1136',
 'iphone6': '750x1334',
 'iphone6p_portrait': '1242x2208',
 'iphone6p_landscape': '2208x1242',
 'ipad_portrait': '768x1004',
 'ipad_portrait_2x': '1536x2008',
 'ipad_landscape': '1024x748',
 'ipad_landscape_2x': '2048x1496'
 };


 'iphone_2x': 'resources/icons/icon-60x60@2x.png',

 */

App.info({
    name: 'womik',
    description: 'cool events for parents and their children',
    author: 'Robert Lech',
    email: 'robert.lech@icloud.com',
    website: 'http://womik.de',
    version: '1.0.0'
});

App.icons({
    // iOS
    'iphone': 'assets/icons/icon-60x60.png',
    'iphone_2x': 'assets/icons/icon-60x60@2x.png',
    'iphone_3x': 'assets/icons/icon-60x60@3x.png'

});

App.launchScreens({
    // iOS
    'iphone': 'assets/splash/splash-320x480.png',
    'iphone_2x': 'assets/splash/splash-320x480@2x.png',
    'iphone5': 'assets/splash/splash-320x568@2x.png',
    'iphone6': 'assets/splash/splash-750x1334.png',
    'iphone6p_portrait': 'assets/splash/splash-6p_portrait.png',
    'iphone6p_landscape': 'assets/splash/splash-6p_landscape.png'

});