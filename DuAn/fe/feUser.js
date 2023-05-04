function showFormLogin(){
    let html = `
    <form id="loginForm">
    <input type="text" id="username" placeholder="username">
    <input type="password" id="password" placeholder="password">
    <button onclick="login()">Login</button> 
    </form>
    <br>
    <p>Don't have an account? <a href="#" onclick="showSignUpForm()">Sign up</a></p>`;
    $('#body').html(html);
}


function login(){
    let username = $('#username').val()
    let password = $('#password').val()

    let user = {
        username: username,
        password: password
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users/login",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(user),
        success: (message) => {
            // window.location.href = "http://localhost:3000/products";
            btn()
        },
        error: (error) => {
        }
    })
}

function showSignUpForm(){
    let html = `
    <form id="signupForm">
    <input type="text" id="username" placeholder="username">
    <input type="password" id="password" placeholder="password">
    <input type="email" id="email" placeholder="email">
    <button onclick="signup()">Sign up</button> 
    </form>
    <br>
    <p>Already have an account? <a href="#" onclick="showFormLogin()">Log in</a></p>`;
    $('#body').html(html);
}
function signup() {
    let username = $('#username').val()
    let password = $('#password').val()
    let email = $('#email').val()

    let user = {
        username: username,
        password: password,
        email: email
    }
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users/signup",
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(user),
        success: (message) => {
        },
        error: (error) => {
        }
    })
}