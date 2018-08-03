const sendButton = document.querySelector("#send-button")
const conversationList = document.querySelector("#conversation-content")
const textInput = document.querySelector("#text-input")
const signInButton = document.querySelector("#sign-in-button")
const signOutButton = document.querySelector("#sign-out-button")
const authDropdownItem = document.querySelector("#auth-dropdown-button")

document.addEventListener('DOMContentLoaded', function() {
  let options = { }
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
})

sendButton.addEventListener("click", e=> {
  var text = textInput.value
  conversationList.innerHTML += `<li>${text}</li>`
  textInput.value = ""
})

signInButton.addEventListener("click", e => {
  signInWithGoogle()
})

signOutButton.addEventListener("click", e => {
  signOutWithGoogle()
})

function updateUIforSignIn(avatarSrc) {
  authDropdownItem.innerHTML = `<i><img class="avatar-image" src="${avatarSrc}"/></i>`
}

function updateUIforSignOut() {
  authDropdownItem.innerHTML = `<i class="material-icons">more_vert</i>`
}

const contactList = 

    function updateUIwithNewContact(userInfo){
  contactList.innerHTML += 
  `
    <li onclick="displayTextsFrom('${userInfo.id}')" class="contact-item avatar">
      <img src="${userInfo.photoURL}" class="circle avatar-image" />
      <div class="contact-name-and-text">
        <h6 class="title">${userInfo.name}</h6>
        <p class="grey-text last-text-message">This is a fake text...</p>
      </div>
      <div class="contact-timestamp">
        <p class="grey-text">3:00 PM</p>
      </div>      
    </li>
  `
}
    
}