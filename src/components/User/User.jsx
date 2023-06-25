import PropTypes from 'prop-types';
import { Address } from 'components/Address/Address';
import { Paragraph, Span } from './User.styled';

export const User = ({
  user: {
    name,
    email,
    address: { street, city },
  },
}) => {
  const isEnds = email.endsWith('biz');
  return (
    <>
      <Paragraph>
        Name: <Span>{name}</Span>
      </Paragraph>
      <Paragraph>
        Email: <Span isOrange={isEnds}>{email}</Span>
      </Paragraph>
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
