import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';

import Layout from './components/Layout/Layout';
import AppLoader from './components/ui/AppLoader/AppLoader';
import TemporaryDrawer from './components/Drawer/Drawer';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const toggleSideBar = () => setActiveSideBar(active => !active);

  return isRefreshing ? (
    <AppLoader />
  ) : (
    <Suspense fallback={<AppLoader />}>
      <Layout onCloseSideBar={toggleSideBar}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<div>Not found page</div>} />
        </Routes>

        {isLoggedIn && (
          <TemporaryDrawer
            isActive={activeSideBar}
            onCloseSideBar={toggleSideBar}
          />
        )}
      </Layout>
    </Suspense>
  );
}

export default App;