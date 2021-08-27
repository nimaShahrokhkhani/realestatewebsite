function logout() {
    getRequest('client/logout', {}, (response) => {
        localStorage.removeItem("user");
    window.location.href = 'home.html';
})
}
