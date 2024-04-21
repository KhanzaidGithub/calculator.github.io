let display = document.getElementById('inputbox');

// queryselector just store one value from start 
// queryselectorall will fetch all elements all the nodes will be fetched
// array.from 
let buttons = document.querySelectorAll('button');
let buttonarray = Array.from(buttons);
// console.log(buttons);
//array.from this will convert nodelists to array form

// console.log(buttonarray);

//now we will run foreach loop for all button instead of calling one by one button

// all the elements are now on array form we will run loop foreach element
// all the elements will be now in form of variables

// buttonarray.forEach(function(btn){
//     console.log(btn);
// })

//arrow function short function


// buttonarray.forEach(btn=>{
//     console.log(btn);
//     btn.addEventListener('click',function(event){
//         console.log(event.target.innerHTML);
//     });

// });

// here we have all the buttons so we will add event on buttons all



// we apllied listner add one okay event is about when it clicks then play a function about event get in console event when we console event all data will come here .target specify that a specific button or element

// here after all we are getting complete tags with elements so we want inner html inner text so its very simple after target .innerhtml or inner txt 

//  let string = '';
// buttonarray.forEach(btn=>{
// btn.addEventListener('click',(e)=>{
//     string += e.target.innerHTML;
//     // when we enter a value so one removes to add another just add one thing +=

//     display.value=string;
//     console.log(e.target.innerHTML);})
// });

// now all the data goes to console but we want this in input

// for that we need to create a new empty variable where we will store all this data 

// string = e.target.innerHTML;
//display.value = string;

// here we will run complete funtion for operators

let string = '';
buttonarray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        }
        else if (e.target.innerHTML == '=') {
            //here we hvae one method that is eval to convert code to string 

            try {
                display.value = string;
                string = eval(string);
            }
            catch (error) {
                display.value = "Error";
            }

        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
});