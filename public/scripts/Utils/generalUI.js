if (localStorage.getItem("user") !== null) {
    let loginContainer = document.getElementById('loginContainer');
    let userContainer = document.getElementById('userContainer');
    loginContainer.hidden = true;
    userContainer.hidden = false;
    let usernameHeader = document.getElementById('usernameHeader');
    let name = (localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).name !== undefined) ? JSON.parse(localStorage.getItem("user")).name + ' ' : ''
    let lastname = (localStorage.getItem("user") !== null && JSON.parse(localStorage.getItem("user")).lastname !== undefined) ? JSON.parse(localStorage.getItem("user")).lastname + ' ' : ''
    usernameHeader.innerText = name + lastname + 'خوش آمدید';
}
