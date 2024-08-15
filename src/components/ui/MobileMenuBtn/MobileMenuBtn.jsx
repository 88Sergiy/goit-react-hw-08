import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

function MobileMenuBtn({ onCloseSideBar }) {
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 1 }}
      onClick={onCloseSideBar}
    >
      <MenuIcon />
    </IconButton>
  );
}

MobileMenuBtn.propTypes = {
  onCloseSideBar: PropTypes.func,
};

export default MobileMenuBtn;