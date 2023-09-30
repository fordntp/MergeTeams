import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

function App() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reference to the "appData" collection
        const appDataCollection = collection(firestore, 'appData');

        // Get data from the "appData" collection
        const snapshot = await getDocs(appDataCollection);

        // Extract the data from the snapshot
        const teamDataArray = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTeamData(teamDataArray);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [firestore]);

  return (
    <div className="App">
      <h1>Team Data from Firestore</h1>
      <ul>
        {teamData.map((teamMember) => (
          <li key={teamMember.id}>{teamMember.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
