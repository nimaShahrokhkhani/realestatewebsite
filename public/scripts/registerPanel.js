function enterPanel() {
    var usernamePanel = document.getElementById('usernamePanel').value
    var passwordPanel = document.getElementById('passwordPanel').value
    postRequest('base/login', {username: usernamePanel, password: passwordPanel}, (response) => {
        localStorage.setItem("agencyUser", JSON.stringify(response));
        window.location.href = 'panel-house.html';
    })

}

function submittPanel() {
    var username2Panel = document.getElementById('username2Panel').value
    var email2Panel = document.getElementById('email2Panel').value
    var password1Panel = document.getElementById('password1Panel').value
    var password2Panel = document.getElementById('password2Panel').value
    var nameManagment2Panel = document.getElementById('nameManagment2Panel').value
    var numberAgance2Panel = document.getElementById('numberAgance2Panel').value
    var numberManagment2Panel = document.getElementById('numberManagment2Panel').value
    var nameAgance2Panel = document.getElementById('nameAgance2Panel').value
    postRequest('login', {username: username2Panel,username:nameAgance2Panel,username:nameManagment2Panel,email:email2Panel,numberAgance:numberAgance2Panel,numberAgance:numberManagment2Panel,password1Panel:password1Panel,password2Panel:password2Panel, password: passwordPanel}, () => {
        window.location.href = 'my-profile.html';
    })



}
