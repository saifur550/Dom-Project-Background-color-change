/*
*project Requirements
*Change the background color by Generating random rbg color by clicking a button

*/



//  step 1 - create onload handler 


window.onload = ()=> {
    main()
}



// create function 


function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click'  , function(){
        root.style.backgroundColor = colorRgbGenerator()
    })

}


// step 2 - random generator function 

function colorRgbGenerator (){
  const red = Math.floor(Math.random () * 255);
  const green = Math.floor(Math.random () * 255);
  const blue = Math.floor(Math.random () * 255);

  return `rgb(${red}, ${green} , ${blue})`
}


