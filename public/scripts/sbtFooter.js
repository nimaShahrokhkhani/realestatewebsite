function sbtFooter(){
    var nameFooter = document.getElementById('nameFooter').value
    var emailFooter = document.getElementById('emailFooter').value
    var commentsFooter = document.getElementById('commentsFooter').value
    postRequest('login', {nameFooter: nameFooter, emailFooter: emailFooter,commentsFooter:commentsFooter}, () => {
        window.location.href = 'my-profile.html';
    })


}