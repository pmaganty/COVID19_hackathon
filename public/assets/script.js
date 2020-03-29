
//ajax call that makes POST request with user login data for backend to add to database
function addUserInfo(current_email, current_password, current_username) {

    var userInfo = { 
        email: current_email,
        password: current_password,
        username: current_username
    }
    console.log(userInfo); //FOR DEBUG

    //after this ajax call executes and prints "user info added", we can expect /api/userInfo to
    //show the updated api
    $.ajax("/api/userInfo", {
        type: "POST",
        data: userInfo
    }).then(
        function() {
        console.log("user info added");
        }
    );
}

//adding some dummy seeds



