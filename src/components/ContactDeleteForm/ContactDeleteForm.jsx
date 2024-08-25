import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import { MODAL_DELETE_CONTACT } from '../../helpers/constants/modalConstants';
import AlertMessage from '../ui/AlertMessage/AlertMessage';

import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from '@mui/material';

function ContactDeleteForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const { handleModalClose, getModalData } = useContext(ModalWindowContext);

  async function handleDeleteClick() {
    try {
      await dispatch(
        deleteContact(getModalData(MODAL_DELETE_CONTACT))
      ).unwrap();
      handleModalClose(MODAL_DELETE_CONTACT);
      toast.custom(<AlertMessage message="Contact has been deleted" />);
    } catch (error) {
      toast.custom(
        <AlertMessage
          severity="error"
          message="Something went wrong. Please, try again!"
        />
      );
    }
  }

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <Typography variant="body1" align="center">
        Are you sure to delete this contact?
      </Typography>

      <ButtonGroup
        orientation="horizontal"
        disabled={isLoading}
        sx={{ gap: '10px' }}
      >
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleDeleteClick}
        >
          {isLoading ? (
            <CircularProgress size={25} sx={{ color: 'secondary.main' }} />
          ) : (
            'Delete'
          )}
        </Button>

        <Button
          variant="text"
          onClick={() => handleModalClose(MODAL_DELETE_CONTACT)}
        >
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ContactDeleteForm;