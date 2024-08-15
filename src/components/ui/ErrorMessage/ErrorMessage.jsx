import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function ErrorMessage({ message }) {
  return (
    <Typography
      paragraph
      sx={{
        marginTop: 2,
        fontSize: { xs: 12, sm: 14 },
        textAlign: 'center',
        color: 'error.dark',
      }}
    >
      {message}
    </Typography>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;