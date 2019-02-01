document.getElementsByTagName('body');
window.onload=init();

function init(){
	console.log("init");
}

function requeteMessenger(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}
function requeteFacebook(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteTwitter(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteTwitterMessanger(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteInstagram(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteInstagramMessaging(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteWebtoon(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}

function requeteSongKick(param,callBack){
	var httpRequest = new XMLHttpRequest();
    var url="https://api.twitch.tv/helix/streams?user_login="+param;
    httpRequest.open("GET", url, true);
    var key ="";
    httpRequest.setRequestHeader('Client-ID',key);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.addEventListener("load", function () {
        callBack(httpRequest,nomChaine);
    });
    httpRequest.send();
}