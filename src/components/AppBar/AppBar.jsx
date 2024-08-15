import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Link as MuiLink,
  Avatar,
  Container,
} from '@mui/material';
import MobileMenuBtn from '../ui/MobileMenuBtn/MobileMenuBtn';
import MainHeader from '../ui/MainHeader/MainHeader';
import { useAvatar } from '../../helpers/hooks/useAvatar';

function AppBar({ onCloseSideBar }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const { avatar } = useAvatar(user.name);

  return (
    <MuiAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            padding: { xs: '12px 0 12px 0' },
          }}
        >
          {isLoggedIn && <MobileMenuBtn onCloseSideBar={onCloseSideBar} />}

          <MainHeader />

          {isLoggedIn ? (
            <Avatar {...avatar} />
          ) : (
            <MuiLink
              component={RouterLink}
              variant="body2"
              to="/login"
              color="primary.contrastText"
              underline="none"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
              }}
            >
              Login
            </MuiLink>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

AppBar.propTypes = {
  children: PropTypes.element,
  onCloseSideBar: PropTypes.func,
};

export default AppBar;