let msgCookies = document.getElementById('msg-cookies');

function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}
if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}
else{
    msgCookies.classList.add('mostrar')
}