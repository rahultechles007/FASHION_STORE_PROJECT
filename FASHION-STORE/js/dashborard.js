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