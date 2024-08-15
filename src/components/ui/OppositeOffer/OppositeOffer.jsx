import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetAuthError } from '../../../redux/auth/slice';

function OppositeOffer({ isRegistered, style = null }) {
  const dispatch = useDispatch();

  const displayedTextQuestion = isRegistered
    ? 'Already have an account?'
    : 'Have no account yet?';
  const displayedTextOffer = isRegistered ? 'Login.' : 'Register now!';

  return (
    <Typography
      paragraph
      sx={
        style
          ? style
          : {
              fontSize: { xs: 13, md: 15 },
              marginTop: { xs: 2 },
              textAlign: { xs: 'center' },
              color: 'text.secondary',
            }
      }
    >
      {displayedTextQuestion}{' '}
      <MuiLink
        component={RouterLink}
        to={isRegistered ? '/login' : '/register'}
        color="secondary"
        underline="none"
        onClick={() => dispatch(resetAuthError())}
      >
        {displayedTextOffer}
      </MuiLink>
    </Typography>
  );
}

OppositeOffer.propTypes = {
  isRegistered: PropTypes.bool,
  style: PropTypes.object,
};

export default OppositeOffer;