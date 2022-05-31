// var note=[];
// function list(){
    
//     var input= document.getElementById("text").value;
//    note.push(input);
//      document.getElementById("text").value ="";
//      view();
//  }
// function view(){
//     var dar="";
// var count =note.length;
//     for(var i=0;note[i];i++){
// dar += "<li>"+note[i]+"</li> <span onclick ='del("+i+")'>delet</span> <span onclick ='edit("+i+")'>|| edit</span>" ;
//     }
//     document.getElementById("result").innerHTML = dar;
// }
// function del(index){
//     note.splice(index);
//     view();
// }
// function edit(index){
//     document.getElementById("text").value = note[index];

//     document.getElementById("btn").style.display="none";
//     document.getElementById("btn2").style.display="block";
//     document.getElementById("text1").value =index;
// }
// function update(){
//      var newValue = document.getElementById("text1").value;
//      var oldValue = document.getElementById("text").value;

//  note[newValue] =oldValue;

//  view();
 
// }
// note =[];
// function list(){
//     var input =document.getElementById("text").value;
//     note.push(input);
//     document.getElementById("text").value ="";
//     view();

// }
// function view(){
//   var  dar ="";
//     for(var i=0;note[i];i++){
// dar += "<li>"+note[i]+"</li> <span onclick='del("+i+")'>delet</span> <sapn onclick='edit("+i+")'>||edit</sapn>";
//     }
//     document.getElementById("result").innerHTML =dar;
// }

// function del(index){
// note.splice(index);
// view();
// }
// function edit(index){
//     document.getElementById("text").value =note[index];
//     document.getElementById("btn").style.display ="none";
//     document.getElementById("btn2").style.display ="block";
//     document.getElementById("text1").value =index;

// }
// function update(){
//    note[document.getElementById("text1").value]=document.getElementById("text").value;
//    view();
//    document.getElementById("btn").style.display ="block";
//     document.getElementById("btn2").style.display ="none";
//     document.getElementById("text").value="";

// }

// var pageTitle = "ELZERO",pageDesc ="ELZERO WEB SCHOOL",pageDte ="25/12";
// var div =`<div class="card"> 
// <h3>${pageTitle}</h3>
// <p>${pageDesc}</p>
// <span>${pageDte}</span>
// </div>

// `;
// document.write(div.repeat(5));



// var e =20;
// console.log(++e);


// document.getElementById("equel").onclick=function(){
    
//  +( document.getElementById("sa").value);
//  +( document.getElementById("sa1").value) ;
//   document.getElementById("sel").value
//     if(document.getElementById("sel").value =="+"){
// document.getElementById("o").innerHTML=+( document.getElementById("sa").value)+
// parseFloat( document.getElementById("sa1").value) ;
//     }
//     else if(document.getElementById("sel").value =="-"){
//         document.getElementById("o").innerHTML=+( document.getElementById("sa").value)-
// parseFloat( document.getElementById("sa1").value) ;
//     }else if(document.getElementById("sel").value =="*"){
//         document.getElementById("o").innerHTML=+( document.getElementById("sa").value)*
//        +( document.getElementById("sa1").value) ;
//     }
//     else
//     {
//         document.getElementById("o").innerHTML=+( document.getElementById("sa").value)/
//        +( document.getElementById("sa1").value) ;
//     }

// }
// function slide(x){
//     document.getElementById("cs").src = x;
// }
// var a =100;
// var b = 200.5;
// var c =1e2;
// var d =2.4;
// console.log(Math.trunc(Math.min(a,b,c,d)));
// console.log(a**Math.trunc(d));
// console.log(Math.floor(d));
// console.log(parseInt(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// var z =Math.trunc(b)/ Math.ceil(d);
// console.log(z.toFixed(2));
// console.log(Math.ceil(z));
// var m ="Elzero Web School";
// console.log(m.charAt(2).toUpperCase()+m.slice(3,6));
// console.log(m.charAt(13).toUpperCase().repeat(8));
// console.log(m.split(" ",1))
// console.log(m.substr(0,6) +" " + m.substr(11));
// console.log(m.charAt(m.length-1));
// var photos =["pexels-jovin-joseph-1231755.jpg","pexels-miguel-á-padriñán-194096.jpg","pexels-pixabay-289586.jpg","pexels-pixabay-161945.jpg"];
// var i =0;
// function slideShow(){
//     var slide =photos[i];
//     document.getElementById("cs").src =slide;
//     i++;
//     if(i>=photos.length){
//         i=0;
//     }
// }
// setInterval('slideShow()',2000);
// var holidays =4;
// var money = 0;
// if(holidays===0){
//     money +=5000;
//     console.log(money);
// }else if(holidays===1 || holidays===2){
// money+=3000;
// console.log(money);
// }else if(holidays===3){
//     money +=2000;
//     console.log(money);

// }else
// {
//     console.log(money);
// }
// :
function fer(){
    for(var i=0;i<100;i++){
        document.write("dsbnsu"+"<br>");
        
        }
}
