import AuthForm from '../../components/AuthForm/AuthForm';
import AuthLabel from '../../components/ui/AuthLabel/AuthLabel';
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';
import { useErrorMessage } from '../../helpers/hooks/useErrorMessage';
import { Box } from '@mui/material';

function RegistrationPage() {
  const { errorMessage } = useErrorMessage();

  return (
    <Box
      component="section"
      sx={{
        py: '1rem',
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <AuthLabel textLabel="Sign up" />

      <AuthForm authType="Register" />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <OppositeOffer isRegistered={true} />
    </Box>
  );
}

export default RegistrationPage;