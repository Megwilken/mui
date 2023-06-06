import React from 'react';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export const User = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: '25px',
        marginLeft: '30px',
      }}
    >
      <Avatar
        alt="User Avatar"
        src="./user.png"
        sx={{ width: 240, height: 125 }}
      />
      <h4 style={{ marginTop: '1px' }}>Hello, Bob Jones!</h4>
    </Box>
  );
};
