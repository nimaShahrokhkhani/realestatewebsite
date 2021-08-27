function sendContact(){
    var nameContact=document.getElementById('nameContact').value
    var emailContact=document.getElementById('emailContact').value
    var subjectContact=document.getElementById('subjectContact').value
    var commentsContact=document.getElementById('commentsContact').value
    postRequest('login', {name: nameContact, email: emailContact,subject:subjectContact,comments:commentsContact}, () => {
        window.location.href = 'my-profile.html';
    })



}
