// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;


// for (var i = 0; i < navMenuAnchorTags.length; i++) {
//     navMenuAnchorTags[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log(this.textContent);
//         var targetSection = document.getElementById(targetSectionID);
//         console.log(targetSection);
//         //    interval = setInterval(scrollVertically, 20, targetSection);

//         interval = setInterval(function () {
//             scrollVertically(targetSection);
//         }, 20);
//     });
// }


// function scrollVertically(targetSection) {
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if (targetSectionCoordinates.top <= 0) {
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }


fname = document.getElementById('fName');
fname.setAttribute('onfocusout' , 'nameval()');
let nameregex = /^[a-z ,.'-]+$/i;
let namespan = document.getElementById('name');

console.log(namespan);

function nameval() {
    if(nameregex.test(fname.value))
    {
        console.log(nameregex.test(fname.value));
        namespan.innerHTML ="Accepted";
    }
    else
    {
        namespan.innerHTML="Name cannot be empty";
    }
    
};



let fmail = document.getElementById('mail');

fmail.setAttribute('onfocusout' , 'mailval()');

let mailspan = document.getElementById('mails');

console.log(mailspan);

let mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log(mailreg.test());

function mailval() {
    if (mailreg.test(fmail.value))

    {

        console.log(fmail.value);

        console.log(mailreg.test(fmail.value));
  mailspan.innerHTML ='Accepted';
    }
    else
{
        mailspan.innerHTML ="Please enter valid email";
     }
}

// promises ,await and async .
let quote = document.getElementById("quote");
let author = document.getElementById("author");
const url =' http://quotes.stormconsultancy.co.uk/random.json';
let showQuote =  async () => {
await fetch(url)
  .then((data) => data.json())
  .then((item) => {
    console.log(item.quote);
    quote.innerHTML =  item.quote;
    author.innerHTML=  item.author;
  });
} 

window.addEventListener("load" , showQuote);

//currying
document.getElementById("my-name").innerHTML = useCurrying("Sourav")("Kumar");
       
       
function useCurrying(firstname) {
        return function(lastname) {
 
            return firstname + " " + lastname ;
        }
      }



      //closure
      function init() {
        var name = 'Submitted';
        function showAlert() {
          alert(name); 
     
        }
        showAlert();
      }
    



      //bind,call,apply
      var obj={
        num : "DAV"
     }
     var add = function(num2,num3,num4){
        return (called.innerHTML=(this.num +" "+ num2 +" "+ num3 +", "+ num4));
     }
  
    add.call(obj,"Public","School","Cheeka"); 


    var obj2={
      num0 : "DAV"
   }
   var add2 = function(num2,num3,num4){
      return (applied.innerHTML=(this.num0 +" "+ num2 +" "+ num3 +", "+ num4));
   }
   var arr2=["Public","School","Cheeka"];
  add2.apply(obj2,arr2); 

  var obj3={
    num:"Chitkara"
  }
  var add3=function(num,num1){
    return (binding.innerHTML=(this.num+" "+num1));
  }
  var bound=add3.bind(obj3);
  bound(obj3,'University, Punjab');
      
//callback
  function greeting(newname) {
  return callbackk.innerHTML=newname;
    }
    function processUserInput(callback) {
        newname='So you can contact me with below details';
        callback(newname);
    }
    processUserInput(greeting);


    //  class ,constructor

    class ImageApi {
      constructor() {
        this.API_KEY ='563492ad6f91700001000001e33dd89f65dc4f21931252edae871df2';
        this.gallery = document.querySelector('#about');
        console.log(this.gallery);
        this.eventHandle();
      }
      eventHandle() {
        document.addEventListener('DOMContentLoaded' , ()=> {
          this.getImg();
        })
      }
      async getImg() {
        const baseUrl = 'https://api.pexels.com/v1/curated?per_page=1';
        const data = await this.fetchImages(baseUrl);
        this.GenerateHTML(data.photos);
        
      }
      async fetchImages(baseUrl) {
        const responses = await fetch(baseUrl , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: this.API_KEY
          }
        });
        const data = await responses.json();
        return data;
      }

      GenerateHTML(photos) {
        photos.forEach(photo =>{
          const item = document.createElement('div');
          item.classList.add('center-div');
          item.innerHTML = `
          <img src = "${photo.src.medium}">
          `;
          this.gallery.appendChild(item);

        })
      }
    }

    const Image = new ImageApi();

   

    
