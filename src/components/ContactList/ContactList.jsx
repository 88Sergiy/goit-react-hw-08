import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsContactsFetching,
} from '../../redux/contacts/selectors';
import ContactCard from '../ContactCard/ContactCard';

import {
  Card,
  CardHeader,
  List,
  ListItem,
  Skeleton,
  Stack,
  useMediaQuery,
} from '@mui/material';
import TypographyHeader from '../ui/TypographyHeader/TypographyHeader';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isContactsFetching = useSelector(selectIsContactsFetching);
  const isMobile = useMediaQuery('(max-width:600px)');

  const generateCardSkeletons = () => {
    const cardSkeletons = [];

    for (let i = 0; i < 3; i++) {
      cardSkeletons.push(
        <Card variant="outlined" sx={{ flex: '1 1 auto' }} key={i}>
          <CardHeader
            avatar={
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            }
            title={
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            }
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
            sx={{ overflow: 'hidden' }}
          />
        </Card>
      );
    }

    return cardSkeletons;
  };

  if (contacts.length <= 0 && !isContactsFetching) {
    return (
      <TypographyHeader
        variant="h3"
        title="There is no contacts"
        styles={{
          textAlign: 'center',
          fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
          my: 5,
        }}
      />
    );
  }

  return (
    <>
      {isContactsFetching ? (
        <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
          {generateCardSkeletons()}
        </Stack>
      ) : (
        <List
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '15px' },
            flexWrap: 'wrap',
          }}
        >
          {contacts.map(contact => (
            <ListItem
              sx={{
                padding: '0',
                flex: {
                  sm: '1 1 calc(50% - 30px)',
                  md: '1 1 calc(33.33% - 45px)',
                },
              }}
              key={contact.id}
            >
              <ContactCard {...contact} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default ContactList;