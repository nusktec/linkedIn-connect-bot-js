var __gaps=100,t=document.getElementsByClassName("artdeco-button"),n=0,d=0,m=setInterval((()=>{++n>t.length?(console.log(d+" connections sent out"),clearInterval(m)):"Connect"===t[n].innerText&&(t[n].click(),console.log("Connection sent..."),d++)}),__gaps);console.log("Runner thread: "+m);
