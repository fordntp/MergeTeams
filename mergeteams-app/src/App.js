import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginPage from './component/loginPage';
import Homepage from './component/homepage';

const firebaseConfig = {
  apiKey: "AIzaSyBArKezZu3iFNLPLZ3RcBBPy0sFqCnZ-Lc",
  authDomain: "mergeteams.firebaseapp.com",
  databaseURL: "https://mergeteams-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mergeteams",
  storageBucket: "mergeteams.appspot.com",
  messagingSenderId: "218618412652",
  appId: "1:218618412652:web:1d638527f3be2a7bd66249",
  measurementId: "G-SX5JC9NLLG"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const unsubscribeUser = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
  
        return () => {
          // Unsubscribe when the component unmounts
          unsubscribeUser();
        };
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, [auth]);
  

  return (
    <div className="App" >
      <div>
      <Homepage />
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <p>Email: {user.email}</p>
          <button className='btn btn-blue' onClick={() => auth.signOut()}>Sign out</button>
        </div>
      ) : (
        <LoginPage auth={auth} />
      )}
    </div>
    </div>
    
  );
}

export default App;
