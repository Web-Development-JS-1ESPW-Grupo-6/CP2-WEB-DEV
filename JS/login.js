//----Variaveis----
//Variaveis de login
const loginIndex = document.querySelector('#sign-up')
const loginClick = document.querySelector("#login-submit-btn")
const msgError = document.querySelector('.errorMsg')
//Variaveis de cadastro
const cadastroCard = document.querySelector('.cadastro-container')
const cadastroIndex = document.querySelector('#register')
const cadastroClick = document.querySelector("#cadastro-submit-btn")
const msgErrorC = document.querySelector('.errorMsgC')

//----Sistema de contas----
//Sistema para garantir permanencia de cadastros
let listaUser = JSON.parse(localStorage.getItem("usersList")) //busca de contas no localStorage
console.log(listaUser)

if (listaUser == null) {
  console.log('Lista de usuarios nao encontrada, criando uma nova...')
  const user1 = {  //admin
    name: "GaloAdmin",
    sobrenome: "admin",
    emailUser: "contatogalofiap@gmail.com",
    senhaUser: "12345"
  }
  let userList = []
  userList.push(user1) //adiciona o admin ao cadastro
  localStorage.setItem("usersList", JSON.stringify(userList)) //define a um localStorage todos os usuarios caso nao haja nenhum
} else {
  console.log('Lista de usuarios recuperada')
}

//----Login----
loginClick.addEventListener("click", (login) => {
  login.preventDefault() //previne recarregamento da tela

  let listaDeUsuario = JSON.parse(localStorage.getItem("usersList")); //busca contas no storage
  let emailInput = document.querySelector("#email").value;
  let senhaInput = document.querySelector("#senha").value;

  if (emailInput === "" || senhaInput === "") { //validações
    msgError.innerHTML = 'Preencha todos os campos'
    msgError.setAttribute('style', 'visibility: visible;')
  } else {
    const acharUsuario = listaDeUsuario.find(usuario => { //função .find para simplificar a busca de usuarios
      return usuario.emailUser === emailInput && usuario.senhaUser === senhaInput;
    });
    if (acharUsuario) {
      let logUser = [acharUsuario]; //define qual usuario foi logado
      localStorage.setItem("logedUser", JSON.stringify(logUser))
      window.location.href = "./index.html";
      console.log("Usuario Validado!")
    } else {
      msgError.setAttribute('style', 'visibility: visible;')
      msgError.innerHTML = 'Email ou senha incorretos'
      console.log("Usuario Invalido digite novamente")
    }
  }
})

//----Sistema toggle login/cadastro----
cadastroIndex.addEventListener("click", () => {
  cadastroCard.setAttribute('style', 'z-index: 2;')
})
loginIndex.addEventListener("click", () => {
  cadastroCard.setAttribute('style', 'z-index: -2;')
})

//----Cadastro----
//Variaveis de cadastro
let nameInputC = document.querySelector('#nameC').value;
let name2InputC = document.querySelector('#name2C').value;
let emailInputC = document.querySelector('#emailC').value;
let senhaInputC = document.querySelector('#senhaC').value;
let senhaConfirmInputC = document.querySelector('#senhaCC').value;
//Evento de cadastro
//nome
let nameInputCBlock = document.querySelector('#nameC')
nameInputCBlock.addEventListener('keyup', () => {
  if (nameInputCBlock.value.length < 5) {
    nameInputCBlock.setAttribute('style', 'color: #e50b03;')
  } else {
    nameInputCBlock.setAttribute('style', 'color: #333;')
  }
})
//sobrenome
let name2InputCBlock = document.querySelector('#name2C')
name2InputCBlock.addEventListener('keyup', () => {
  if (name2InputCBlock.value.length < 5) {
    name2InputCBlock.setAttribute('style', 'color: #e50b03;')
  } else {
    name2InputCBlock.setAttribute('style', 'color: #333;')
  }
})
//email
let emailInputCBlock = document.querySelector('#emailC')
emailInputCBlock.addEventListener('keyup', () => {
  if (emailInputCBlock.value.length < 5 || emailInputCBlock.value.indexOf('@') === -1) {
    emailInputCBlock.setAttribute('style', 'color: #e50b03;')
  } else {
    emailInputCBlock.setAttribute('style', 'color: #333;')
  }
})
//senha
let senhaInputCBlock = document.querySelector('#senhaC')
senhaInputCBlock.addEventListener('keyup', () => {
  if (senhaInputCBlock.value.length < 6 || senhaInputCBlock.value.length > 8) {
    senhaInputCBlock.setAttribute('style', 'color: #e50b03;')
  } else {
    senhaInputCBlock.setAttribute('style', 'color: #333;')
  }
})
//confirmaçao de senha
let senhaConfirmInputCBlock = document.querySelector('#senhaCC')
senhaConfirmInputCBlock.addEventListener('keyup', () => {
  if (senhaConfirmInputCBlock.value != senhaInputCBlock.value) {
    senhaConfirmInputCBlock.setAttribute('style', 'color: #e50b03;')
  } else {
    senhaConfirmInputCBlock.setAttribute('style', 'color: #333;')
  }
})

//Cadastro
cadastroClick.addEventListener("click", (cadastro) => {
  cadastro.preventDefault()

  // let regiaoInput = document.querySelector('#regiaoC').value;
  if (nameInputC == "" || emailInputC == "" || senhaInputC == "" || senhaConfirmInputC === "") {
    msgErrorC.innerHTML = 'Todos os campos devem ser preenchidos'
    console.log('Todos os campos devem ser preenchidos');
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //nome
  if (nameInputC.length < 5) {
    console.log('Nome deve conter mais de 5 letras')
    msgErrorC.innerHTML = 'Nome deve conter mais de 5 caracteres'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //sobrenome
  if (name2InputC.length < 5) {
    console.log('Sobrenome deve conter mais de 5 letras')
    msgErrorC.innerHTML = 'Sobrenome deve conter mais de 5 caracteres'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //email
  if (emailInputC.length < 5) {
    console.log('email com menos de 5 letras');
    msgErrorC.innerHTML = 'Email deve conter mais de 5 caracteres'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  } else if (emailInputC.indexOf('@') === -1) {
    console.log('email invalido nao contem "@"');
    msgErrorC.innerHTML = 'Email deve conter "@"'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //senha
  if (senhaInputC.length < 6) {
    console.log('senha deve conter no minimo 6 digitos');
    msgErrorC.innerHTML = 'Senha deve conter no minimo 6 digitos'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  if (senhaInputC.length > 8) {
    console.log('senha deve conter no maximo 8 digitos');
    msgErrorC.innerHTML = 'Senha deve conter no maximo 8 digitos'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //confirmar senha
  if (senhaConfirmInputC != senhaInputC) {
    msgErrorC.innerHTML = 'Senhas digitadas não coincidem'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    console.log('senhas nao coincidem')
    return;
  }
  console.log('to funcionando');
  msgErrorC.innerHTML = 'Cadastro efetuado com sucesso!';
  msgErrorC.setAttribute('style', 'visibility: visible; color: #46f548;');
  let nameInputCLEAR = document.querySelector('#nameC')
  let emailInputCLEAR = document.querySelector('#emailC')
  let senhaInputCLEAR = document.querySelector('#senhaC')
  let senhaConfirmInputCLEAR = document.querySelector('#senhaCC')
  nameInputCLEAR.value = ""
  emailInputCLEAR.value = ""
  senhaInputCLEAR.value = ""
  senhaConfirmInputCLEAR.value = ""
  const newUser = {
    name: nameInputC,
    sobrenome: name2InputC,
    emailUser: emailInputC,
    senhaUser: senhaInputC
  }
  let listaDeUsuarioCadastro = JSON.parse(localStorage.getItem("usersList"));
  listaDeUsuarioCadastro.push(newUser);
  localStorage.setItem("usersList", JSON.stringify(listaDeUsuarioCadastro));
  console.log(newUser)
})

//Evento de olho
let eyeLogin = document.querySelector('#openLEye')
eyeLogin.addEventListener('click', ()=>{
  const loginPass = document.querySelector("#senha");
  if(loginPass.getAttribute('type') == 'password'){
    loginPass.setAttribute("type","text");
    eyeLogin.setAttribute("class","fa-regular fa-eye");
  }else{
    loginPass.setAttribute("type","password");
    eyeLogin.setAttribute("class","fa-regular fa-eye-slash");
    
  }
})

let eyeCadastro = document.querySelector('#openCEye')
eyeCadastro.addEventListener('click', ()=>{
  const cadastroPass = document.querySelector("#senhaC");
  if(cadastroPass.getAttribute('type') == 'password'){
    cadastroPass.setAttribute("type","text");
    eyeCadastro.setAttribute("class","fa-regular fa-eye");
  }else{
    cadastroPass.setAttribute("type","password");
    eyeCadastro.setAttribute("class","fa-regular fa-eye-slash");
    
  }
})

let eyeCadastro2 = document.querySelector('#openCEye2')
eyeCadastro2.addEventListener('click', ()=>{
  const cadastroPass2 = document.querySelector("#senhaCC");
  if(cadastroPass2.getAttribute('type') == 'password'){
    cadastroPass2.setAttribute("type","text");
    eyeCadastro2.setAttribute("class","fa-regular fa-eye");
  }else{
    cadastroPass2.setAttribute("type","password");
    eyeCadastro2.setAttribute("class","fa-regular fa-eye-slash");
    
  }
})

//Dark mode botao
let toggleBox = document.querySelector('#dark-mode');
let body = document.querySelector('body');
let loginContainer = document.querySelector('.login-container');
let loginContainerLabel = document.querySelector('label');

toggleBox.addEventListener('change', () => {
    if (toggleBox.checked) {
        console.log("Checkbox marcada");
        body.setAttribute('style', 'background-color: #2b2b2b; color: #fff;');
        loginContainer.setAttribute('style', 'background-color: #2b2b2b;')
        loginContainerLabel.setAttribute('style', 'color: #fff;')
    } else {
        console.log("Checkbox desmarcada");
        body.setAttribute('style', 'background-color: #fff; color: #2b2b2b;');
        loginContainer.setAttribute('style', 'background-color: #fff;')
        loginContainerLabel.setAttribute('style', 'color: #333;')
    }
});