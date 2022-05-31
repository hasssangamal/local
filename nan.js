// function hassan(c){
//     document.body.style.background =c;
//     localStorage.setItem("gaga",c);
 
// }
// function far(){
//     document.body.style.background =localStorage.getItem("gaga");
// }
// far();

function aaz(){
   
localStorage.setItem("aaa",document.getElementById("s").value);
document.getElementById("s").value ="";
}
function vvv(){

localStorage.getItem("aaa");

}
vvv();
window.onscroll=function(){
    if(pageYOffset>500){
        document.getElementById("round").classList.add("go");
    }else{
        document.getElementById("round").classList.remove("go");
    }

}
function dw(){
    window.scrollTo({
        top:0,
        behavior:"smooth",


    });
}
let modier = ["Ahmed","Osama","Sayed" ,"stop","samir"];
let  mozaph= ["Amgad","tt", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia","Amr"];

document.write("<div>we have ${c.length} admins</div>");

for(var i =0;i<modier.length;i++){
    console.log(modier[i]);
    if(modier[i]=="stop"){
break;


}else{

    document.write("<div>")
    document.write(`<h3> taem member: </h3>`);
    let t =1;
    for(let j =0;j<mozaph.length;j++){
        if(modier[i][0]==mozaph[j][0]){
           
          document.write(`<p>${t}${mozaph[j]}</p>`);
            t++;
        }
    }
    document.write("<hr>")
    document.write("</div>")
}

}

var q =["hassan","gmal","adam"];
q.forEach(function(x,z){
    console.log(q[1]);
})
console.log("#"+Math.random().toString(16).slice(2,8));
var d = 12;
console.log(d.toString(2))
// ***************************************************************
const car =function(make,speed){
this.make =make;
this.speed =speed;
}
car.prototype.accrecible =function(){
    this.speed +=10;
    console.log(`${this.make} is going to ${this.speed}km/h`)
}
car.prototype.break =function(){
    this.speed -=5;
    console.log(`${this.make} is going to ${this.speed} km/h`)
}
var bmw =new car("bmw",120);
var mg =new car("mg",95);
mg.accrecible();
mg.accrecible();
mg.break();

// for(var i =0; i<3;i++){
 
//     setTimeout(()=>document.write("hello evry one" +"<br>"))
// }
// for(let i =0; i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

// let names =function(...names){
// return names;

// }
// console.log(names("string [hassan]","[gamal]","[mohamed]","[omar]","[ayman]=> done!").join());

let names =(...names)=>{
    return names;
    
    }
    console.log(names("string [hassan]","[gamal]","[mohamed]","[omar]","[ayman]=> done!").join());
    
    var e ="133cbjnk7";
    var w =e.split("").filter(function(ele){
        return !isNaN(parseInt(ele));
    }).map(function(ele){
        return ele* ele;
    })
    .join("");
    console.log(w);
  function clock(){
    let date =new Date();
let houors =date.getHours();
let minutes =date.getMinutes();
let seconds =date.getSeconds();
let flag ="am"
// console.log(houors);
// console.log(minutes);
// console.log(seconds);
if(houors == 0){
    houors =12;
}
if(houors > 12){
    houors =houors-12;
    flag="pm";
}
if(seconds <10){
 seconds = "0" + seconds; 
}
if(houors <10){
 houors= "0" + houors; 
}
if(minutes <10){
 minutes= "0" + minutes; 
}

document.querySelector(".clock").innerHTML =`${houors}:${minutes}:${seconds}:${flag}`
setTimeout(function(){
    clock()
})

}
clock();
let u ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let r =u.split("").filter(function(ele){
    return isNaN(parseInt(ele)) && ele != ","&& ele !="_";

// }).map(function(ele){
//     return ele.replace("_" , " ");
}).reduce(function(a,b){
    return  a!=b? `${a}${b}`:` ${a}`;
}) .slice(0, -1);
console.log(r);
for(let i = 1; i<=100;i++){
    let myD = document.createElement("div");
    let myH= document.createElement("h3");
    let myP = document.createElement("p");
    let myText=document.createTextNode("product title" +[i] );
    let myT= document.createTextNode("paragraph discreption" +[i] );
    myD.className="prudoct";
        myH.appendChild(myText);
        myP.appendChild(myT);
        myD.appendChild(myH);
        myD.appendChild(myP);
document.body.appendChild(myD);
};
// setInterval(function(){
//     console.log("hassan");
// },1000);
    
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
function kj(){
    exp.style.backgroundColor = localStorage.getItem("color");
    lis.forEach((li) => {
        li.classList.remove("active");
      });

      document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}
kj();

var dad = [];
 function jh (){
var inpur =document.getElementById("ki").value;
dad.push(inpur);

document.getElementById("ki").value ="";
vie();
}
function vie(){
    var wevoo ="";
    var cout =dad.length;
    for(i =0;i<cout;i++){
        wevoo += "<li>"+ dad[i] +"</li> <span onclick='del("+i+")'>delet</span> <span onclick='edi("+i+")'>edit</span>";
    }
    document.getElementById("res").innerHTML = wevoo ;

}
function del(index){
dad.splice(index);
vie();
}
function edi(index){
    document.getElementById("ki").value =dad[index];
    document.getElementById("uy").style.display ="block";
    document.getElementById("kl").style.display ="none";
    document.getElementById("ki2").value =index;
    }
    function up(){
        var r =document.getElementById("ki").value;
        var b =document.getElementById("ki2").value;
        dad[b]=r;
        vie();
        document.getElementById("ki").value ="";

    }
    up();