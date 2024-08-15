import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectLoading } from '../../redux/contacts/selectors';
import { useAvatar } from '../../helpers/hooks/useAvatar';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import {
  MODAL_DELETE_CONTACT,
  MODAL_EDIT_CONTACT,
} from '../../helpers/constants/modalConstants';

import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function ContactCard({ name, number, id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { handleModalOpen } = useContext(ModalWindowContext);

  const handleDeleteClick = contactId => {
    handleMenuClose();
    handleModalOpen(MODAL_DELETE_CONTACT, contactId);
  };

  const handleEditClick = contactId => {
    handleMenuClose();
    handleModalOpen(MODAL_EDIT_CONTACT, contactId);
  };

  const { avatar } = useAvatar(name);
  const isLoading = useSelector(selectLoading);

  return (
    <Card variant="outlined" sx={{ flex: '1 1 auto' }}>
      <CardHeader
        avatar={
          isLoading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar {...avatar} aria-label="recipe" alt={name} />
          )
        }
        action={
          isLoading ? null : (
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertOutlinedIcon />
            </IconButton>
          )
        }
        title={
          isLoading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            name
          )
        }
        subheader={
          isLoading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            number
          )
        }
        sx={{ overflow: 'hidden' }}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEditClick(id)}>
          <ListItemIcon>
            <EditOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>

        <MenuItem
          sx={{ color: 'error.main' }}
          onClick={() => handleDeleteClick(id)}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DeleteOutlineOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Card>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactCard;