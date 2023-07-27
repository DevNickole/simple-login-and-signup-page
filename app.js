let navToSignup = document.querySelector('.navtosignup')
let loginForm = document.querySelector('#login-form')
let signupForm = document.querySelector('#signup-form')

navToSignup.addEventListener('click',(e)=>{
    e.preventDefault()
    loginForm.style.animation = 'fade 1s ease forwards';
    loginForm.addEventListener('animationend' ,function(){
        loginForm.style.display = 'none'
        signupForm.style.display = 'flex'
        signupForm.style.animation = 'show 2s ease forwards'
    } 
    )
})

let loginbtn = document.querySelector('#login')
let loginUsernameInput = document.querySelector('#login-usernameinput')
let loginPasswordInput = document.querySelector('#login-passwordinput')

loginbtn.addEventListener('click',function(){
    let username = loginUsernameInput.value
    let password = loginPasswordInput.value
    console.log(signupUsernameInput)
    if(password.length >= 8){
        alert(`welcome ${username}`)
    }
})

let signupUsernameInput = document.querySelector('#signup-usernameinput')
let signupPassword = document.querySelector('#signup-passwordinput')
let signupConfirmPassword = document.querySelector('#signup-confirmpasswordinput')
let signupBtn = document.querySelector('#signup')

signupBtn.addEventListener('click',(e)=>{
    
    let password = signupPassword.value
    let confirmpassword = signupConfirmPassword.value
    if(password.length >= 8){
        if(password === confirmpassword){
            alert(`Welcome ${signupUsernameInput.value}`)
        }else{
            alert('The password you enter did not match please try again')
            e.preventDefault()
        }
    }else{
        alert('your password is to short')
        e.preventDefault()
    }
}
)


