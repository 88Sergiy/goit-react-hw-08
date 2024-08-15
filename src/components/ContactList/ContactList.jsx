import { useContext, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { editContact } from '../../redux/contacts/operations';
import {
  selectContactById,
  selectLoading,
} from '../../redux/contacts/selectors';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import { MODAL_EDIT_CONTACT } from '../../helpers/constants/modalConstants';
import { addContactSchema as editContactSchema } from '../../helpers/schemasValidation/addContactSchemaValidation.js';
import AlertMessage from '../ui/AlertMessage/AlertMessage';

import {
  Button,
  ButtonGroup,
  CircularProgress,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function ContactEditForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { getModalData, handleModalClose } = useContext(ModalWindowContext);

  const [contact] = useSelector(
    selectContactById(getModalData(MODAL_EDIT_CONTACT))
  );

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initValues = {
    name: contact?.name || null,
    number: contact?.number || null,
  };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: editContactSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(editedContact, actions) {
    try {
      await dispatch(
        editContact({ id: contact.id, ...editedContact })
      ).unwrap();

      toast.custom(<AlertMessage message="Contact has been edited" />);
      handleModalClose(MODAL_EDIT_CONTACT);
      actions.resetForm();
    } catch (error) {
      toast.custom(
        <AlertMessage
          severity="error"
          message="Something went wrong. Please, try again!"
        />
      );
    }
  }

  const isScreenXS = useMediaQuery('(max-width:600px)');
  const circularProgressProp = {
    size: isScreenXS ? 25 : 40,
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      sx={{
        mt: 4,
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <TextField
          id={nameFieldId}
          name="name"
          label="Full name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id={numberFieldId}
          name="number"
          label="Phone number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <ButtonGroup
        orientation="vertical"
        disabled={isLoading}
        sx={{ gap: '10px', mt: 3 }}
      >
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress
              {...circularProgressProp}
              sx={{ color: 'secondary.main' }}
            />
          ) : (
            'Edit contact'
          )}
        </Button>

        <Button
          variant="text"
          onClick={() => handleModalClose(MODAL_EDIT_CONTACT)}
          disabled={isLoading}
        >
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ContactEditForm;