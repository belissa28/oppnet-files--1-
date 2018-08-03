const auth = firebase.auth()
const database = firebase.firestore()

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('profile')
provider.addScope('email')

window.onload = function() {
  initializeApp()
}

// ---------- KEEPS YOU LOGGED IN OR OUT ----------
function initializeApp() {
  auth.onAuthStateChanged(function(user){
    if (user) {
      const avatarSrc = user.photoURL
      updateUIforSignIn(avatarSrc)
      getUsersFriends()
    } else {
      updateUIforSignOut()
    }
  })
}

function signInWithGoogle() {
  console.log('sign in')
  auth.signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken
    // The signed-in user info.
    var user = result.user
    const avatarSrc = user.photoURL
    const name = user.displayName
    const email = user.email
    const userId = user.uid
    const userInfo = {
      name: name,
      id: userId,
      photoURL: avatarSrc,
      email: email
    }
    addUserToDatabase(userInfo, userId)
    updateUIforSignIn(avatarSrc)
  })
}

function addUserToDatabase(userInfo, userId) {
  // Get a reference to the collection you need
  const userCollectionRef = database.collection("users")
  // Create a document in that collection
  const newUserRef = userCollectionRef.doc(userId)
  // Set the info equal to what you want
  newUserRef.set(userInfo)
}

function signOutWithGoogle() {
  auth.signOut()
  .then(function() {
    console.log('sign out')
    updateUIforSignOut()
  })
}

function getUsersFriends(){
  console.log('getting the users friends')
  const user = auth.currentUser
  const userId = user.uid
  
  const query = database.collection('users')
  .get()
  .then(snapshot => {
  if snapshot.forEach(doc=> {
    let userInfo = doc.data()
    updateUIwithNewContact(userInfo)
      })
    }
  })
}
