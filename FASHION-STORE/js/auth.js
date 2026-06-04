// Register User
$("#registerForm").submit(function(e){

    e.preventDefault();

    let user = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href = "login.html";

});

// Login User

$("#loginForm").submit(function(e){

    e.preventDefault();

    const email =
    $("#email").val();

    const password =
    $("#password").val();

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    if(
        email === user.email &&
        password === user.password
    ){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        window.location.href =
        "getstarted.html";

    }else{

        alert("Wrong Login");

    }

});