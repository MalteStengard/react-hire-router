import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditForm({ hiredPeople, setHiredPeople, person }) {
    const [firstName, setFirstName] = useState(person.name.first);
    const [lastName, setLastName] = useState(person.name.last);
    const navigate = useNavigate();

    function handleEdit(event) {
        event.preventDefault();
        const updatedPerson = { ...person, name: { first: firstName, last: lastName }};
        const updatedHiredPeople = hiredPeople.map(p => 
          p.id === person.id ? updatedPerson : p
        );
        setHiredPeople(updatedHiredPeople);
        navigate('/');
      }

      return (
        <form onSubmit={handleEdit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
          <button type="submit">Save</button>
        </form>
      )
}

export default EditForm