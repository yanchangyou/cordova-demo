cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-plugin-QRCode.QRCode",
        "file": "plugins/cordova-plugin-QRCode/www/QRCode.js",
        "pluginId": "cordova-plugin-QRCode",
        "clobbers": [
            "QRCode"
        ]
    },
    {
        "id": "cordova-plugin-qrscanner.QRScanner",
        "file": "plugins/cordova-plugin-qrscanner/www/QRScanner.js",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "id": "br.com.brunogrossi.MediaScannerPlugin.MediaScannerPlugin",
        "file": "plugins/br.com.brunogrossi.MediaScannerPlugin/www/MediaScannerPlugin.js",
        "pluginId": "br.com.brunogrossi.MediaScannerPlugin",
        "clobbers": [
            "cordova.plugins.MediaScannerPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-camera": "2.2.0",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-vibration": "2.1.1",
    "cordova-plugin-whitelist": "1.2.2",
    "phonegap-plugin-barcodescanner": "6.0.1",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-QRCode": "1.1.1-dev",
    "cordova-plugin-qrscanner": "2.1.1",
    "br.com.brunogrossi.MediaScannerPlugin": "0.1.3"
};
// BOTTOM OF METADATA
});