

function myFunction (name){
  var x = document.getElementById("a1"),
      y = document.getElementById("a2"),
      z = document.getElementById("a3"),
      t = document.getElementById("a4");
  if(window.innerWidth > 600){
    switch (name) {
      case 0:
        x.className = "cl1 ";
        y.className = "cl1c ";
        z.className = "cl1c top ";
        t.className = "cl1c ";
         break;
      case 1:
        x.className = "cl1c";
        y.className = "cl1 ";
        z.className = "cl1c top";
        t.className = "cl1c ";
         break;
      case 2:
       x.className = "cl1c ";
       y.className = "cl1c ";
       z.className = "cl1  ";
       t.className = "cl1c ";
         break;  
      case 3:
        x.className = "cl1c ";
        y.className = "cl1c ";
        z.className = "cl1c top";
        t.className = "cl1 ";
         break;    
      default:
        x.className = "col-3 cl";
        y.className = "col-3 cl";
        z.className = "col-3 cl top";
        t.className = "col-3 cl";
        break;
    }
  }else{
    x.className = "col-12 cll";
    y.className = "col-12 cll";
      z.className = "col-12 cll";
      t.className = "col-12 cll";
  }
}
function icon(name){
  var x = document.getElementById("c1"),
      y = document.getElementById("c2"),
      z = document.getElementById("c3"),
      t = document.getElementById("c4");
 
    switch (name) {
      case 0:
        x.src = "/images/icon/riskc.svg";
        y.src = "/images/icon/team.svg ";
        z.src = "/images/icon/contract.svg ";
        t.src = "/images/icon/book.svg ";
         break;
      case 1:
        x.src = "/images/icon/risk.svg";
        y.src = "/images/icon/teamc.svg ";
        z.src = "/images/icon/contract.svg ";
        t.src = "/images/icon/book.svg ";
         break;
      case 2:
        x.src = "/images/icon/risk.svg";
        y.src = "/images/icon/team.svg ";
        z.src = "/images/icon/contractc.svg ";
        t.src = "/images/icon/book.svg ";
         break;     
      case 3:
        x.src = "/images/icon/risk.svg";
        y.src = "/images/icon/team.svg ";
        z.src = "/images/icon/contract.svg ";
        t.src = "/images/icon/bookc.svg ";
         break;     
      default:
        x.src = "/images/icon/risk.svg";
        y.src = "/images/icon/team.svg ";
        z.src = "/images/icon/contract.svg ";
        t.src = "/images/icon/book.svg ";
        break;

   }
  }
  function display(){
    x=document.getElementById("cont");
    y=document.getElementById("cont1");
    x.style.display ="none";
    y.style.display ="block";
  }
  switch (window.location.pathname) {
    case '/administratif%20et%20financier':
      display();
      icon(0);
      break;
    case '/gestion%20urbaine':
      display();
      icon(1);
      break;
    case '/affaires%20juridiques%20et%20foncieres':
      display();
      icon(2);
      break;
    case '/etudes':
      display();
      icon(3);
      break;       
    case '/autre':
      display();
      icon(4);
      break;
      
  }

  function affichage(p){
  var   x=document.getElementById("titre"+p+"").innerHTML,
        y=document.getElementById("msg"+p+"").innerHTML,
        z=document.getElementById("mail"+p+"").innerHTML
        t=document.getElementById("det"+p+"").innerHTML,
        k=document.getElementById("rps"+p+"").innerHTML,
        l=document.getElementById("rpsaf"),
        i=document.getElementById("input1"),
        btn1= document.getElementById("btns1"),
        btn2= document.getElementById("btns2");
       
    if (k=="") {
      i.style.display = "block";
      l.style.display = "none";
      document.getElementById('repo').innerHTML = 'répondre:';
      btn2.style.display = "none";
      btn1.style.display = "block";
    } else {
      i.style.display = "none";
      l.style.display = "block";
      document.getElementById('repo').innerHTML = 'réponse:';
      btn2.style.display = "block";
      btn1.style.display = "none";
    }
     
    document.getElementById("dis").className="col-12 p-5";
    document.getElementById("rpsaf").innerHTML = k;
    document.getElementById("titreaf").innerHTML= x;
    document.getElementById("msgaf").innerHTML = y;
    document.getElementById("mailaf").innerHTML =z;
    document.getElementById("get").value =t;
  }
function modifier(){
  i.style.display = "block";
  l.style.display = "none";
  document.getElementById('repo').innerHTML = 'répondre:';
  btn2.style.display = "none";
  btn1.style.display = "block";
}
 