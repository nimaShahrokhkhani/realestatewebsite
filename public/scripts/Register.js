function enterRegister() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    postRequest('client/login', {username: username, password: password}, (response) => {
        localStorage.setItem("user", JSON.stringify(response));
    window.location.href = 'my-profile.html';
})

}

function sbtRegister() {
    var username2 = document.getElementById('username2').value
    var email2 = document.getElementById('email2').value
    var password1 = document.getElementById('password1').value
    var password2 = document.getElementById('password2').value
    postRequest('login', {username: username2, email: email2, password1: password1, password2: password2}, () => {
        window.location.href = 'my-profile.html';
})


}
