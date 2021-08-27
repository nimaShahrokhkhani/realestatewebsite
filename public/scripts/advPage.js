function onSearchAdv() {
    var addressAdv = document.getElementById('addressAdv').value
    postRequest('login', {addressAdv: addressAdv}, () => {
        window.location.href = 'my-profile.html';
    })

}

function findAdvPage() {
    var conAdvPage = document.getElementById('conAdvPage').value
    var kindAdvPage = document.getElementById('kindAdvPage').value
    var cityAdvPage = document.getElementById('cityAdvPage').value
    var roomAdvPage = document.getElementById('roomAdvPage').value
    var bathAdvPage = document.getElementById('bathAdvPage').value
    var priceAdvPage = document.getElementById('priceAdvPage').value
    var areaAdvPage = document.getElementById('areaAdvPage').value
    var airConditionAdvPage = document.getElementById('airConditionAdvPage').value
    var poolAdvPage = document.getElementById('poolAdvPage').value
    var centerHeaterAdvPage = document.getElementById('centerHeaterAdvPage').value
    var washingAdvPage = document.getElementById('washingAdvPage').value
    var gymAdvPage = document.getElementById('gymAdvPage').value
    var ringtoneAdvPage = document.getElementById('ringtoneAdvPage').value
    var windowAdvPage = document.getElementById('windowAdvPage').value
    postRequest('login', {conAdvPage: conAdvPage, kindAdvPage: kindAdvPage,cityAdvPage:cityAdvPage,roomAdvPage:roomAdvPage,bathAdvPage:bathAdvPage,areaAdvPage:areaAdvPage,priceAdvPage:priceAdvPage,airConditionAdvPage:airConditionAdvPage,poolAdvPage:poolAdvPage,centerHeaterAdvPage:centerHeaterAdvPage,washingAdvPage:washingAdvPage,gymAdvPage:gymAdvPage,ringtoneAdvPage:ringtoneAdvPage,windowAdvPage:windowAdvPage}, () => {
        window.location.href = 'my-profile.html';
    })

}
