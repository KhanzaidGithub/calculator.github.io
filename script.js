let display = document.getElementById('inputbox');

// queryselector just store one value from start 
// queryselectorall will fetch all elements all the nodes will be fetched
// array.from 
let buttons = document.querySelectorAll('button');
let buttonarray = Array.from(buttons);
// console.log(buttons);
//array.from this will convert nodelists inot arrya form

// console.log(buttonarray);

//now we will run foreach loop for all button instead of calling one by one button

// all the elements are now on array form we will run loop foreach element
// all the elements will be now in form of variables

// buttonarray.forEach(function(btn){
//     console.log(btn);
// })
//arrow function short function
buttonarray.forEach(btn=>{
    // console.log(btn);
    // here we have all the buttons so we will add event on buttons all
    btn.addEventListener('click',function(event){
        console.log(event.target);
    });
});