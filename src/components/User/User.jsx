import PropTypes from 'prop-types';
import { Address } from 'components/Address/Address';

export const User = ({
  user: {
    name,
    email,
    address: { street, city },
  },
}) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Address street={street} city={city} />
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
