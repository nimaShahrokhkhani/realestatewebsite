if (localStorage.getItem("agencyUser") !== null) {
    let loginContainer = document.getElementById('loginContainer');
    let userContainer = document.getElementById('userContainer');
    loginContainer.hidden = true;
    userContainer.hidden = false;
    let usernameHeader = document.getElementById('usernameHeader');
    let agencyName = (localStorage.getItem("agencyUser") !== null && JSON.parse(localStorage.getItem("agencyUser")).name !== undefined) ? JSON.parse(localStorage.getItem("agencyUser")).name + ' ' : ''
    usernameHeader.innerText = agencyName + 'خوش آمدید';
}
