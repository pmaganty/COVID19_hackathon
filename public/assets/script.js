console.log("INSIDE SCRIPT"); //FOR DEBUG
        
//ajax call that makes POST request with user login data for backend to add to database
function addUserInfo(current_email, current_password, current_username, 
            current_identification, current_health, current_have_fever_chills_shakes, 
            current_have_cough, current_have_any_covid_symptoms, 
            current_have_travelled_outside_country, current_have_contact_with_symptoms) {
    //health care professional, researcher, regular person

    var userInfo = { 
        email: current_email,
        password: current_password,
        username: current_username,
        identification: current_identification,
        current_health: current_health,
        have_fever_chills_shakes: current_have_fever_chills_shakes,
        have_cough: current_have_cough,
        have_any_covid_symptoms: current_have_any_covid_symptoms,
        have_travelled_outside_country: current_have_travelled_outside_country,
        have_contact_with_symptoms: current_have_contact_with_symptoms
    }
    console.log(userInfo); //FOR DEBUG

    //after this ajax call executes, we can expect /api/userInfo to
    //show the updated api
    $.ajax("/", {
        type: "POST",
        data: userInfo
    }).then(
        function() {
        console.log("user info added");
        }
    );
}

//adding some dummy seeds
addUserInfo("pranithamaganty@gmail.com", "password", "pmaganty", "health care proffesional", "tested positive", true, true, true, false, false);
addUserInfo("someone@aol.com", "34523sdfds", "somebody15", "regular", "no symptoms", false, false, false, false, false);
addUserInfo("pgrs@msn.com", "covid", "user17", "researcher", "mild symptoms", false, true, true, false, false);
addUserInfo("hahaha@yahoo.com", "haha67", "hahaimauser", "regular", "tested positive", true, true, true, true, true);
addUserInfo("hannah@gmail.com", "passwordsarestupid", "hello", "health care proffesional", "mild symptoms", true, true, true, false, true);