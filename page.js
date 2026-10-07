
let allusers=[];
function Log(){
    let user={
        f_name:document.getElementById('n1').value,
        l_name:document.getElementById('n2').value,
        email:document.getElementById('em').value,
        phone:document.getElementById('ph').value,
        password:document.getElementById('p').value
    }
    let users=JSON.parse(localStorage.getItem('allusers')) || [];
    users.push(user);
    localStorage.setItem('allusers', JSON.stringify(users));
    window.location.href="./page4.html";
}
function user(){
    let emailInput=document.getElementById('e').value;
    let passInput=document.getElementById('pa').value;
    let allusers=JSON.parse(localStorage.getItem('allusers')) || [];
    let i=0;
    for( i=0;i<allusers.length;i++){
        if(allusers[i].email==emailInput&&allusers[i].password==passInput){
            sessionStorage.setItem('allusers', JSON.stringify(allusers[i]));
            window.location.href="./page4.html";
            return;
        }
    }
    if(i==allusers.length)
      connect2();
}
function connect(){
    window.location.href="./page1.html";
}
function connect2(){
    window.location.href="./page3.html";
}
