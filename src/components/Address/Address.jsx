import PropTypes from 'prop-types';

export const Address = ({ street, city }) => {
  return (
    <>
      <h3>Address: </h3>
      <p>Street: {street}</p>
      <p>City: {city}</p>
    </>
  );
};

Address.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
}
