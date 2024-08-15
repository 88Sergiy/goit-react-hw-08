import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function TypographyHeader({ variant, title, styles = null }) {
  return (
    <Typography variant={variant} sx={styles}>
      {title}
    </Typography>
  );
}

TypographyHeader.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  styles: PropTypes.object,
};

export default TypographyHeader;