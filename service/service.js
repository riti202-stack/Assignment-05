
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

  const calls=document.getElementsByClassName("call-btn");
  for(const call of calls)
  {
    call.addEventListener("click",function(){
        
        const name=document.getElementsByClassName("name");
        const num=document.getElementsByClassName("num");
               
        for()

    })
  }


