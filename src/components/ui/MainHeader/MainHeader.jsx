import { Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function MainHeader() {
  return (
    <Stack
      direction="column"
      sx={{
        flexGrow: 1,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'flex-start' },
        alignItems: { sm: 'center' },
        gap: { sm: 1.5 },
      }}
    >
      <Typography
        component="span"
        variant="subtitle1"
        sx={{ fontSize: { xs: 14, sm: 18 }, fontWeight: 400 }}
      >
        Welcome to
      </Typography>

      <Typography component="h1">
        <MuiLink
          to="/"
          component={RouterLink}
          color="primary.contrastText"
          underline="none"
          sx={{
            fontSize: { xs: 18, sm: 24 },
            letterSpacing: 0.8,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          HandyBook
        </MuiLink>
      </Typography>
    </Stack>
  );
}

export default MainHeader;