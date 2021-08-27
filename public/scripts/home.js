// function onTabClick(tab) {
//     var tab1=document.getElementById('tab1')
//     var tab2=document.getElementById('tab2')
//     if(tab === 'tab1'){
//         tab1.style.display = 'block'
//         tab2.style.display = 'none'
//     }else{
//         tab2.style.display = 'block'
//         tab1.style.display = 'none'
//     }
// }
function onSaleSearch(){
    var searchSaleAddress=document.getElementById('searchSaleAddress').value
    var selectKind=document.getElementById('selectKind').value
    var saleMin=document.getElementById('saleMin').value
    var saleMax=document.getElementById('saleMax').value
    var areaMin=document.getElementById('areaMin').value
    var areaMax=document.getElementById('areaMax').value
    var roomNumber=document.getElementById('roomNumber').value
    var bath=document.getElementById('bath').value
    var airCondition=document.getElementById('airCondition').value
    var pool=document.getElementById('pool').value
    var centerHeat=document.getElementById('centerHeat').value
    var roomWashing=document.getElementById('roomWashing').value
    var gymClub=document.getElementById('gymClub').value
    var dangerRing=document.getElementById('dangerRing').value
    var window=document.getElementById('window').value
    postRequest('login', {username: usernamePanel, password: passwordPanel}, () => {
        window.location.href = 'my-profile.html';
    })

}
function onRentSearch(){
    var selectKindRent=document.getElementById('selectKindRent').value
    var rentRahnMin=document.getElementById('rentRahnMin').value
    var rentRahnMax=document.getElementById('rentRahnMax').value
    var rentMin=document.getElementById('rentMin').value
    var rentMax=document.getElementById('rentMax').value
    var areaMinRent=document.getElementById('areaMinRent').value
    var areaMaxRent=document.getElementById('areaMaxRent').value
    var roomNumberRent=document.getElementById('roomNumberRent').value
    var bathRent=document.getElementById('bathRent').value
    var airConditionRent=document.getElementById('airConditionRent').value
    var poolRent=document.getElementById('poolRent').value
    var centerHeatRent=document.getElementById('centerHeatRent').value
    var roomWashingRent=document.getElementById('roomWashingRent').value
    var gymClubRent=document.getElementById('gymClubRent').value
    var dangerRingRent=document.getElementById('dangerRingRent').value
    var windowRent=document.getElementById('windowRent').value
    postRequest('login', {username: usernamePanel, password: passwordPanel}, () => {
        window.location.href = 'my-profile.html';
    })

}
