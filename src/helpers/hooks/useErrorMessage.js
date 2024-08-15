import { useSelector } from 'react-redux';
import { selectIsAuthError } from '../../redux/auth/selectors';

export function useErrorMessage(pageType = 'RegisterPage') {
  const isError = useSelector(selectIsAuthError);
  if (!isError) return '';
  let errorMessage;

  if (pageType === 'LoginPage') {
    errorMessage =
      isError === 400
        ? "Login or Password isn't correct"
        : 'Something went wrong. Please, try later!';
  } else {
    errorMessage =
      isError === 400
        ? 'Email already exist'
        : 'Something went wrong. Please, try later!';
  }

  return { errorMessage };
}