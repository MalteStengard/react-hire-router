import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'
import EditForm from './components/EditForm'

function PersonProfile({ people, hiredPeople, setHiredPeople }) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundPerson = people.find((p, index) => index.toString() === id);
    setPerson(foundPerson);
  }, [id, people]);

  if (!person) return <p>Loading...</p>

  const handleEditClick = () => {
    setIsEditing(true);
    console.log(isEditing)
  };

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />
      <button onClick={handleEditClick}>Edit</button>
      {isEditing &&(
        <EditForm person={person} hiredPeople={hiredPeople} setHiredPeople={setHiredPeople}/>
      )}

    </article>
  )
}

export default PersonProfile
