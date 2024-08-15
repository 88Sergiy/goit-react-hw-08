import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/auth/operations';

import {
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';

const TemporaryDrawer = ({ isActive, onCloseSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handeLogoutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  const DrawerList = (
    <List sx={{ width: { xs: 200, md: 300 } }} onClick={onCloseSideBar}>
      <ListItem disablePadding divider>
        <ListItemButton>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <MuiLink
            component={RouterLink}
            to="/contacts"
            color="text.primary"
            underline="none"
          >
            <ListItemText>My contacts</ListItemText>
          </MuiLink>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={handeLogoutClick}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <Drawer open={isActive} onClose={onCloseSideBar}>
      {DrawerList}
    </Drawer>
  );
};

TemporaryDrawer.propTypes = {
  isActive: PropTypes.bool,
  onCloseSideBar: PropTypes.func,
};

export default TemporaryDrawer;