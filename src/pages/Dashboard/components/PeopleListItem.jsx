import HireForm from "../../PersonProfile/components/HireForm"
import { Link } from 'react-router-dom';

function PeopleListItem({person, index}) {
  return (
    <li>
      <h3>
      <Link to={`/view/${index}`}>
        {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}


export default PeopleListItem
