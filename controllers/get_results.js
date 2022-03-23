const { ShowHowMuchTimeLeft } = require("../middleware/middleware");
const countriesData = require("../entities/countries")

module.exports.CreateResultsPage = (req, res) => {
    const data = { ...req.body }
    const dateOfBirth = data.date_of_birth.split("-").join("/")
    const months_lived = ShowHowMuchTimeLeft(dateOfBirth);
    const timeLeft = data.sex == 'male' ?
        countriesData.COUNTRY_NAME[data.location].male :
        countriesData.COUNTRY_NAME[data.location].female
    const result = {
        months_lived,
        location: data.location,
        sex: data.sex,
        timeLeft: timeLeft * 12
    }
    res.render("results", { data: result })
}

module.exports.GetResultsPage = (req, res) => {
    res.render("results", { data: "" });
}


