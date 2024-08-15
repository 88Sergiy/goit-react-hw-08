import { useErrorMessage } from '../../helpers/hooks/useErrorMessage.js';
import AuthLabel from '../../components/ui/AuthLabel/AuthLabel';
import AuthForm from '../../components/AuthForm/AuthForm';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';

import { Box } from '@mui/material';

function LoginPage() {
  const { errorMessage } = useErrorMessage('LoginPage');

  return (
    <Box
      component="section"
      sx={{
        py: '1rem',
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <AuthLabel textLabel="Sign in" />

      <AuthForm authType="Login" />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <OppositeOffer isRegistered={false} />
    </Box>
  );
}

export default LoginPage;