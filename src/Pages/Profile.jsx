import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, Typography, Button, Stack, List, ListItem, ListItemText, Divider, Chip } from "@mui/material"
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { AccountsModal, BudgetLimitsModal} from '@/Utils/Components/ProfileModals'
import {AddAccountModal} from '@/Utils/Components/OnAddAccount'

const C = {
  bg: "#F8FAFC", card: "#FFFFFF", border: "#E9EBEF",
  text: "#0F172A", text2: "#64748B", text3: "#94A3B8",
}

export default function ProfileScreen({ onLogout }) {
  const [ accountModal, setAccountModal ] = useState(false);
  const [ addAccountModal, setAddAccountModal ] = useState(false);
  const [ budgetLimitModal, setBudgetLimitsModal ] = useState(false);
  const cardStyle = {
    borderRadius: "20px", bgcolor: C.card,
    border: `1px solid ${C.border}`,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)", mx: 2,
  };

  const settings = [
    { onClick: () => setAccountModal(true), icon: AccountBalanceRoundedIcon, iconBg: "#EEF2FF", iconColor: "#7C5CFF", title: "Accounts", sub: "3 bank accounts linked" },
    {onClick: () => setBudgetLimitsModal(true),  icon: PieChartRoundedIcon, iconBg: "#FFF7ED", iconColor: "#F59E0B", title: "Budget Limits", sub: "Monthly • Rs 100,000" },
    { icon: NotificationsRoundedIcon, iconBg: "#ECFDF5", iconColor: "#10B981", title: "Notifications", sub: "Expense alerts on" },
    { icon: LockRoundedIcon, iconBg: "#FEF2F2", iconColor: "#EF4444", title: "Privacy & Security", sub: "Password, Face ID" },
    { icon: FileDownloadRoundedIcon, iconBg: "#F0F9FF", iconColor: "#0EA5E9", title: "Export Data", sub: "CSV, PDF" },
  ];

  return (
    <Box sx={{ bgcolor: C.bg, minHeight: "100vh", pb: 3 }}>

      {/* CLEAN HEADER - NO ICON IN CORNER */}
      <Box sx={{ px: 2.5, pt: 3.5, pb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: C.text3, mb: 0.5 }}>
          ACCOUNT
        </Typography>
        <Typography sx={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em", color: C.text, lineHeight: 1 }}>
          Profile
        </Typography>
      </Box>

      {/* USER CARD - Setting is now here if needed */}
      <Card sx={{ ...cardStyle, mt: 1, p: 0, overflow: "hidden", textAlign: "center" }}>
        <Box sx={{ p: 3, pb: 2.5 }}>
          <Avatar src="https://i.pravatar.cc/150?u=ahmad" sx={{ width: 84, height: 84, mx: "auto", mb: 1.5, border: `1px solid ${C.border}` }} />
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Ahmad Khan</Typography>
          <Typography sx={{ fontSize: 13, color: C.text2, mt: 0.2 }}>ahmad.khan@email.com</Typography>
          <Chip label="Premium Member" size="small" sx={{ mt: 1.2, bgcolor: "#0F172A", color: "#fff", fontWeight: 600, fontSize: 11, height: 24, borderRadius: "20px" }} />
        </Box>
        <Box sx={{ display: "flex", borderTop: `1px solid ${C.border}` }}>
          <Box sx={{ flex: 1, py: 1.8, textAlign: "center", borderRight: `1px solid ${C.border}` }}>
            <Typography sx={{ fontWeight: 800, fontSize: 15 }}>128</Typography>
            <Typography sx={{ fontSize: 11, color: C.text2 }}>Transactions</Typography>
          </Box>
          <Box sx={{ flex: 1, py: 1.8, textAlign: "center" }}>
            <Typography sx={{ fontWeight: 800, fontSize: 15 }}>3</Typography>
            <Typography sx={{ fontSize: 11, color: C.text2 }}>Accounts</Typography>
          </Box>
        </Box>
      </Card>

      {/* BALANCE */}
      <Card sx={{ ...cardStyle, mt: 2 }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: C.text3 }}>TOTAL BALANCE</Typography>
          <Typography sx={{ fontWeight: 800, fontSize: 30, mt: 0.5 }}>Rs 842,500</Typography>
          <Stack direction="row" spacing={1.5} mt={2}>
            <Box sx={{ flex: 1, bgcolor: C.bg, p: 1.5, borderRadius: 3, border: `1px solid ${C.border}` }}>
              <Typography sx={{ fontSize: 11, color: C.text3 }}>Income</Typography>
              <Typography sx={{ fontWeight: 700 }}>Rs 1.2M</Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: C.bg, p: 1.5, borderRadius: 3, border: `1px solid ${C.border}` }}>
              <Typography sx={{ fontSize: 11, color: C.text3 }}>Expense</Typography>
              <Typography sx={{ fontWeight: 700 }}>Rs 3.8L</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* SETTINGS LIST - Setting is here, not in header corner */}
      <Card sx={{ ...cardStyle, mt: 2, p: 0 }}>
        <List dense disablePadding>
          {settings.map((item, i) => (
            <Box key={item.title}>
              <ListItem onClick={item.onClick} sx={{ px: 2, py: 1.7, "&:hover": { bgcolor: C.bg } }}>
                <Box sx={{ width: 36, height: 36, bgcolor: item.iconBg, borderRadius: "10px", display: "grid", placeItems: "center", mr: 1.5, color: item.iconColor }}>
                  <item.icon sx={{ fontSize: 18 }} />
                </Box>
                <ListItemText primary={<Typography sx={{ fontSize: 14, fontWeight: 600 }}>{item.title}</Typography>} secondary={<Typography sx={{ fontSize: 12, color: C.text2 }}>{item.sub}</Typography>} />
                <ArrowForwardIosRoundedIcon sx={{ fontSize: 14, color: C.text3 }} />
              </ListItem>
              {i !== settings.length - 1 && <Divider sx={{ ml: 7.5, borderColor: C.bg }} />}
            </Box>
          ))}
        </List>
      </Card>

      <Box sx={{ mx: 2, mt: 3, pb: 10 }}>
        <Button fullWidth sx={{ bgcolor: C.text, color: "#fff", borderRadius: "14px", py: 1.6, textTransform: "none", fontWeight: 700 }}>Edit Profile</Button>
        <Button onClick={onLogout} fullWidth sx={{ mt: 1, color: "#EF4444", textTransform: "none" }}>Log Out</Button>
      </Box>
      <AccountsModal open={accountModal} onClose={() => setAccountModal(false)} onAdd ={()=>setAddAccountModal(true)}/>
      <BudgetLimitsModal open={budgetLimitModal} onClose={() => setBudgetLimitsModal(false)} />
      <AddAccountModal open={addAccountModal} onClose={() => setAddAccountModal(false)} />

    </Box>
  )
}