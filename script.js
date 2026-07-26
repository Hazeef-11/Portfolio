var body=document.querySelector("body")
var hom=document.getElementById("home")
var prr=document.getElementById("pro")
var fulll=document.getElementById("full")
var two=document.getElementById("project")
var resum=document.getElementById("res")
var resu=document.getElementById("resume1")
var aboutt=document.getElementById("about")
var aboutmee=document.getElementById("aboutme")
var contac=document.getElementById("contact")
var contt=document.getElementById("cont")
var submit=document.getElementById("cn4")




hom.addEventListener("click",function(){
   fulll.style.display="block";
   two.style.display="none";
   resu.style.display="none";
   aboutmee.style.display="none";
   contt.style.display="none";
   

})

prr.addEventListener("click",function(){
   fulll.style.display="none";
   two.style.display="block";
   resu.style.display="none";
   aboutmee.style.display="none";
   contt.style.display="none";

})

resum.addEventListener("click",function(){
   fulll.style.display="none";
   two.style.display="none";
   resu.style.display="block";
   aboutmee.style.display="none";
   contt.style.display="none";
})

aboutt.addEventListener("click",function(){
   fulll.style.display="none";
   two.style.display="none";
   resu.style.display="none";
   aboutmee.style.display="block";
   contt.style.display="none";
})

contac.addEventListener("click",function(){
   fulll.style.display="none";
   two.style.display="none";
   resu.style.display="none";
   aboutmee.style.display="none";
   contt.style.display="block";
})




