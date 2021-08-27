function changePass(){
    var passPresent = document.getElementById('passPresent')
    var passNew = document.getElementById('passNew')
    var sbtNewPass = document.getElementById('sbtNewPass')
    postRequest('login', {passPresent: passPresent,passNew:passNew,sbtNewPass:sbtNewPass}, () => {
        window.location.href = 'my-profile.html';
    })

}