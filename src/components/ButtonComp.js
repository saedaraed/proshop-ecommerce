import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonComp  ({children , styleBackground} ) {
  const buttonStyles = {
    color: '#242424',
    fontSize: '18px',
    background: styleBackground ? '#FCDD06' : '#F2F2F2',
    boxShadow:'none',
    transition: 'background 0.3s ease', 
    '&:hover': {
      background: styleBackground ? '#FCDD06' : '#F2F2F2',
      boxShadow:'none',

    },
  };

  return (
    <Stack direction="row" spacing={2}>
    <Button variant="contained" sx={buttonStyles}>{children}</Button>
    </Stack>
  )
}
