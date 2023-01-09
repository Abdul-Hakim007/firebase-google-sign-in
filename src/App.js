import './App.css';
import { useState } from 'react';
import initFirebaseAuth from './Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initFirebaseAuth();
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const handleProvider = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        console.log(user);
        const loggedinUser = {
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(loggedinUser);
      }
      )
  }
  return (
    <div className="App">

      <button onClick={handleProvider}>Google SignIn</button>
      {
        user.email && <div>
          
          <h3>Welcome:{user.name}</h3>
          <h5>email:{user.email}</h5>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
