import PropTypes from 'prop-types';
import { User } from '../User/User';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, ...user }) => (
        <li key={id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}
