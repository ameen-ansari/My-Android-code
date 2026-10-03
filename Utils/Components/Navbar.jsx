import React, { useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Fab, Box, Dialog, DialogTitle, DialogContent, Button, TextField, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function MobileNavbar({handleAdd}) {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');


  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      
      <Fab
        onClick={() => handleAdd(true)}
        sx={{
          position: 'fixed', bottom: 56, left: '50%',
          transform: 'translateX(-50%)', zIndex: 1001,
          bgcolor: 'black', color: 'white'
        }}
      >
        <AddRoundedIcon />
      </Fab>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000, borderRadius: '20px 20px 0 0' }} elevation={10}>
        <BottomNavigation showLabels value={value} onChange={(e, v) => setValue(v)} sx={{ bgcolor: '#111', height: 70 }}>
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} sx={{ color: '#666', '&.Mui-selected': { color: 'white' } }} />
          <BottomNavigationAction label="Expenses" icon={<ReceiptLongRoundedIcon />} sx={{ color: '#666', '&.Mui-selected': { color: 'white' } }} />
          <BottomNavigationAction label="" disabled sx={{ minWidth: 40 }} />
          <BottomNavigationAction label="Budget" icon={<AccountBalanceWalletRoundedIcon />} sx={{ color: '#666', '&.Mui-selected': { color: 'white' } }} />
          <BottomNavigationAction label="Profile" icon={<PersonRoundedIcon />} sx={{ color: '#666', '&.Mui-selected': { color: 'white' } }} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}