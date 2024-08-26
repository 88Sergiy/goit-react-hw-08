import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import OppositeOffer from '../../components/ui/OppositeOffer/OppositeOffer';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { Box, Button, Container, Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

function HomePage() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <Box component="section" sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Box
          sx={{
            py: 3,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { md: '1.5rem' },
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: '15px',
              flex: { md: '1 1 55%' },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: '600', color: 'primary.dark' }}
            >
              To be connected
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '28px', sm: '30px', md: '48px' },
                maxWidth: '520px',
                fontWeight: '700',
                lineHeight: 1.5,
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              HandyBook is the powerful tool to keep touch
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: '450px',
                textAlign: { xs: 'center', md: 'start' },
              }}
            >
              Simply manager for your contacts. Add, delete, edit in one place.
              No more needs!
            </Typography>

            <Button
              component={RouterLink}
              to={isLogged ? '/contacts' : '/register'}
              variant="contained"
              endIcon={<KeyboardArrowRightOutlinedIcon />}
            >
              {isLogged ? 'To my contacts' : 'Get started'}
            </Button>

            {!isLogged && (
              <OppositeOffer
                isRegistered={true}
                style={{
                  fontSize: { xs: 13, md: 15 },
                  textAlign: { xs: 'center' },
                  color: 'text.secondary',
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              flex: { md: '1 1 45%' },
              mt: { xs: '3rem', md: 0 },
              maxWidth: { xs: '366px', md: '100%' },
              height: 'auto',
              borderRadius: '10px',
              overflow: 'hidden',
              aspectRatio: { md: '1 / 1' },
              '& img': {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            }}
          >
            <img src="/homeImage.png" alt="promo image" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;