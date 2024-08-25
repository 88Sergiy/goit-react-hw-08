import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

function AlertMessage({ severity = 'success', message }) {
  return <Alert severity={severity}>{message}</Alert>;
}

AlertMessage.propTypes = {
  severity: PropTypes.string,
  message: PropTypes.string,
};
export default AlertMessage;