import PropTypes from 'prop-types';
import AppBar from '../AppBar/AppBar';

function Layout({ onCloseSideBar, children }) {
  return (
    <>
      <AppBar onCloseSideBar={onCloseSideBar} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  onCloseSideBar: PropTypes.func,
};
