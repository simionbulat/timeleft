module.exports.ShowHowMuchTimeLeft = (data) => {
    let timeNow = new Date().getTime();
    let dataTime = (new Date(data)).getTime();
    let diff = timeNow - dataTime
    return (Math.floor(diff / (60 * 60 * 24 * (Math.floor(365 / 12)) * 1000)))
}