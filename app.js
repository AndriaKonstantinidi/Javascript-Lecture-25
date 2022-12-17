// let test = confirm("are you ready");
// if(test){
//     alert("affirmative")
// }else{
//     console.log("error")
// }


let firstName = document.querySelector('#name');
let lastName = document.querySelector('#name2')
let mobileNumber = document.querySelector('#mobile');
let email = document.querySelector('#email')
let age = document.querySelector('#age')
let cardsArea = document.querySelector('.cards-area')
let image = document.querySelector('#img')

let btn = document.querySelector('button');

function getHumanObject(firstName,lastName,mobile,email,age,img){
    return{
        firstName:firstName,
        lastName:lastName,
        mobile:mobile,
        email:email,
        age:age,
        img:img
    }
}

btn.addEventListener('click',function(){
    let human = getHumanObject(firstName.value,lastName.value,mobileNumber.value,email.value,age.value,img.value)
    let obj = `<div class="card" style="width: 18rem;">
    <img src="${human.img}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${human.firstName}</h5>
      <h5 class="card-title">${human.lastName}</h5>
      <h5 class="card-title">${human.mobileNumber}</h5>
      <h5 class="card-title">${human.age}</h5>
      <h5 class="card-title">${human.email}</h5>
    </div>
  </div>`

  cardsArea.innerHTML = obj
})
