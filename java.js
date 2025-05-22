    
    function colorChange (){
    
    let num = '123456789abcdef';
    color = "#"
  //  6 time loop chalaya ga takey 6 times random number generate ho
    for(let i= 0; i< 6; i++){

        //pehley ham ne random number generate kia hai phir num se multiply kia hai
       let randomChar = num[Math.floor(Math.random()*num.length)]
       color += randomChar  // output #123456
     
        let text=document.getElementById("color") // get element by ID
        text.style.backgroundColor= color;  // apply on background color
    }
     
}


