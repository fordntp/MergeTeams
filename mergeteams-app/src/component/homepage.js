import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

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

const Homepage = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appDataCollection = collection(firestore, 'appData');
        const unsubscribe = onSnapshot(appDataCollection, (snapshot) => {
          const teamDataArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setTeamData(teamDataArray);
        });

        return () => {
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // You might want to set an error state here for better user feedback
      }
    };

    fetchData();
  }, [firestore]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">Mergeteams</h1>
      <div className='text-center'>
        <ul className=' bg-white p-5 mx-80'>
          {teamData.map((teamMember) => (
            <li key={teamMember.id}>{teamMember.Team}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
