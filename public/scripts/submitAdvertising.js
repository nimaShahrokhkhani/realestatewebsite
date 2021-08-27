function onSubmitAdvertising(){
    var titleSubmit=document.getElementById('titleSubmit').value
    var conditionSubmit=document.getElementById('conditionSubmit').value
    var kindSubmit=document.getElementById('kindSubmit').value
    var priceSubmit=document.getElementById('priceSubmit').value
    var areaSubmit=document.getElementById('areaSubmit').value
    var roomSubmit=document.getElementById('roomSubmit').value
    var gallerySubmit=document.getElementById('gallerySubmit').value
    var addressSubmit=document.getElementById('addressSubmit').value
    var citySubmit=document.getElementById('citySubmit').value
    var provinceSubmit=document.getElementById('provinceSubmit').value
    var codePostAddress=document.getElementById('codePostAddress').value
    var explainSubmit=document.getElementById('explainSubmit').value
    var ageSubmit=document.getElementById('ageSubmit').value
    var bathSubmit=document.getElementById('bathSubmit').value
    var airConditionSubmit=document.getElementById('airConditionSubmit').value
    var poolSubmit=document.getElementById('poolSubmit').value
    var centerHeaterSubmit=document.getElementById('centerHeaterSubmit').value
    var roomWashingSubmit=document.getElementById('roomWashingSubmit').value
    var gymClubSubmit=document.getElementById('gymClubSubmit').value
    var dangerRingSubmit=document.getElementById('dangerRingSubmit').value
    var windowSubmit=document.getElementById('windowSubmit').value
    var nameSubmit=document.getElementById('nameSubmit').value
    var emailSubmit=document.getElementById('emailSubmit').value
    var telSubmit=document.getElementById('telSubmit').value
    var yesSubmit=document.getElementById('yesSubmit').value
    var noSubmit=document.getElementById('noSubmit').value
    postRequest('login', {titleSubmit: titleSubmit, conditionSubmit: conditionSubmit,kindSubmit:kindSubmit,priceSubmit:priceSubmit,areaSubmit:areaSubmit,roomSubmit:roomSubmit,gallerySubmit:gallerySubmit,addressSubmit:addressSubmit,citySubmit:citySubmit,provinceSubmit:provinceSubmit,codePostAddress:codePostAddress,explainSubmit:explainSubmit,ageSubmit:ageSubmit,bathSubmit:bathSubmit,airConditionSubmit:airConditionSubmit,poolSubmit:poolSubmit,centerHeaterSubmit:centerHeaterSubmit,roomWashingSubmit:roomWashingSubmit,gymClubSubmit:gymClubSubmit,dangerRingSubmit:dangerRingSubmit,windowSubmit:windowSubmit,nameSubmit:nameSubmit,emailSubmit:emailSubmit,telSubmit:telSubmit,yesSubmit:yesSubmit,noSubmit:noSubmit}, () => {
        window.location.href = 'my-profile.html';
    })


}