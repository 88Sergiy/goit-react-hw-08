import { Box, CircularProgress } from '@mui/material';
import TypographyHeader from '../TypographyHeader/TypographyHeader';

const styles = {
  backgroundColor: 'primary.main',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '60px',
};

function AppLoader() {
  return (
    <Box sx={styles}>
      <TypographyHeader
        variant="h2"
        title="Welcome to HandyBook"
        styles={{
          color: 'primary.contrastText',
          fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.2rem' },
          textAlign: 'center',
          fontWeight: '600',
        }}
      />
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          width: '170px',
          height: '170px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress
          size={70}
          thickness={4.5}
          sx={{ color: 'secondary.main' }}
        />
      </Box>
    </Box>
  );
}

export default AppLoader;