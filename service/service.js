
console.log("js connected");
 const icons=document.querySelectorAll(".heart");


 
 for(const i of icons)
 {
    i.addEventListener("click",function()
   {
      const p = document.getElementById("heart-cnt");
      const pre=parseInt(p.innerText);
      const post=pre+1;
      p.innerText=post;
      return;

      
   })
 }


//  call section

  function getNameAndNum(id1,id2,id3){

    const p1=document.getElementById(id1);
    const p2=document.getElementById(id2);
    
    
    alert("Calling "+p1.innerText+" "+
       p2.innerText);
    const taka=document.getElementById("taka");
    const pre=taka.innerText;
    const post =parseInt(pre)-20;
    taka.innerText=post;
   const newP1=document.createElement('p');
   const newP2=document.createElement('p');
   const newP3=document.createElement('p');
   newP1.innerText=p1.innerText;
   newP2.innerText=p2.innerText;
   newP1.style.fontWeight='bold';
   newP2.style.fontWeight='bold';
       const date=new Date().toLocaleTimeString();
       newP3.innerText=date;
   
    const div=document.createElement('div');
    const div1=document.createElement('div');
    const div2=document.createElement('div');

    div.appendChild(newP1);
    div.appendChild(newP2);
    div1.appendChild(newP3);
    div2.appendChild(div);
    div2.appendChild(div1);
    div2.style.display='flex';
     div2.style.justifyContent='space-between';
      div2.style.alignItems='center';
      div2.style.borderRadius='12px';
      div2.style.padding='5px';
      div2.style.marginTop='10px';
      div2.style.border='2px lightgrey solid';
     
    div2.style.backgroundColor='#fafafa';
    const callHistory= document.getElementById(id3);
    console.log(callHistory);
    callHistory.appendChild(div2);

}

  
 const call=document.getElementById("call-emergency");
 call.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('emergency','em-num','history');
 });

 const call1=document.getElementById("call-police");
 call1.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('police','police-num','history');
 });

 const call2=document.getElementById("call-fire");
 call2.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('fire','fire-num','history');
 });


 const call3=document.getElementById("women-call");
 call3.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('women','women-num','history');
 });


 const call4=document.getElementById("anti-call");
 call4.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('anti','anti-num','history');
 });


 const call5=document.getElementById("Electricity-call");
 call5.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('Electricity','Electricity-num','history');
 });


 const call6=document.getElementById("ambulance-call");
 call6.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('ambulance','ambulance-num','history');
 });


 const call7=document.getElementById("brac-call");
 call7.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('brac','brac-num','history');
 });


 const call8=document.getElementById("railway-call");
 call8.addEventListener('click',function(e){
         e.preventDefault();
         getNameAndNum('railway','railway-num','history');
 });







 


  




