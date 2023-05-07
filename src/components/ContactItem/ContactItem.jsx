import PropTypes from 'prop-types';
import { Paragraph } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, phone } }) => {
  return (
    <>
      <Paragraph>
        {name}: {phone}
      </Paragraph>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
