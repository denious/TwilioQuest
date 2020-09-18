console.log(getLaserSetting(process.argv[2]));

function getLaserSetting(value) {
    return value == "please" ? "OFF" : "ON";
}