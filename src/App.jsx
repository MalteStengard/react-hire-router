import { useState, useEffect } from 'react'
import './App.css'
import { useNavigate, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50');
    const jsonData = await response.json();
    setPeople(jsonData.results);
    console.log(jsonData.results)
  }

  useEffect(() => {
      fetchPeople();
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header>
        <h1>People Market</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleNavigation('/dashboard')}>View Dashboard</button>
            </li>
            {/* <li>
              <button onClick={() => handleNavigation('/profiles')}>View Profiles</button>
            </li> */}
            <li>
              <button onClick={() => handleNavigation('/')}>Home</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
          <Route path="/View/:id" element={<PersonProfile people = {people} hiredPeople = {hiredPeople} setHiredPeople={setHiredPeople}/>} />
          <Route path="/" />
        </Routes>
      </main>
    </div>
  );
}

// function fetchPeople() {
//   const fetchPeople = async () => {
//     const response = await fetch('https://randomuser.me/api/?results=50');
//     const jsonData = await response.json();
//     return jsonData.results;
//   }

//   // useEffect(() => {
//   //   if (!people || people.length === 0) {
//   //     fetchPeople();
//   //   }
//   // }, []);
// }
