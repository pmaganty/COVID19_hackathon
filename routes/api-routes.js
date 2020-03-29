// Requiring our models
var db = require("../models");

//defining get and post routes to create / deploy api
module.exports = function (app) {

    //getting user info api
    app.get("/api/userInfo", function (req, res) {
        db.UserInfo.findAll().then(function(result) {
            res.json(result);
        });
    });

    //adding to user info database
    app.post("/", function (req, res) {
        console.log(req.body); //FOR DEBUG

        //console.log(req.body.current_identification); //FOR DEBUG
        
        db.UserInfo.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            identification: req.body.identification,
            current_health: req.body.current_health,
            have_fever_chills_shakes: req.body.have_fever_chills_shakes,
            have_cough: req.body.have_cough,
            have_any_covid_symptoms: req.body.have_any_covid_symptoms,
            have_travelled_outside_country: req.body.have_travelled_outside_country,
            have_contact_with_symptoms: req.body.have_contact_with_symptoms
          });
    });
};
