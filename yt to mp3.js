let targetytUrl= "https://www.youtube.com/watch?v=2c1iSpk3u1A";
let furl = "//www.recordmp3.co/#/watch?v=" + targetytUrl.split("v=")[1];
document.body.innerHTML += `<iframe src=${furl} width="0" height="0"></iframe>`;
setTimeout(()=>{location.reload();},10000);