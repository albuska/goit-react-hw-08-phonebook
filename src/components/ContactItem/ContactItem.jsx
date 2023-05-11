import PropTypes from 'prop-types';
import { Paragraph } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <>
      <Paragraph>
        {name}: {number}
      </Paragraph>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
