// import { baseURL } from "./Base.js";
// to fetch user data from form
 let form = document.getElementById("ContactForm")
 form.addEventListener("submit", function(){
    alert("Form working")
    event.preventDefault()
    let name = form.name.value ;
    let email = form.email.value ;
    let number = form.number.value;
    // let gender = form.gender.value;
    let feedback = form.Feedback.value;
    // alert("signup success")
    let Userobj ={name,email,number,feedback}

//     // to check existing user from data 
//   fetch("https://righteous-satin-building.glitch.me/PortfolioContact")
//   .then((res)=> res.json())
//   .then((data)=>{
//     let user = data.filter((el,i)=> el.email==email)
//     if(user.length>0){
//         //user present
//         alert("User already exit, Please login")
//         window.location.href = "Login.html"

//     }
    
     // user not present
          fetch("https://righteous-satin-building.glitch.me/PortfolioContact",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(Userobj)
          }).then(()=>{
            alert("Submitted succesfully")
            window.location.href = "index.html"
           
          }).catch((err)=>{
    console.log(err)
    alert("Something went wrong, please try again")
  })
 })

  
