import { Avatar, Box, Card, CardContent, Typography, Button, Stack, List, ListItem, ListItemText, Divider, Chip, LinearProgress } from "@mui/material"

export default function ProfileScreen() {
  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", pb: 3 }}>

      {/* HEADER */}
      <Box sx={{ background: "linear-gradient(135deg,#111827 0%,#1f2937 100%)", p: 3, pb: 8, borderRadius: "0 0 24px 24px" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography color="white" fontWeight={700}>Profile</Typography>
          <Box sx={{ width: 32, height: 32, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>⚙️</Box>
        </Stack>
      </Box>

      {/* USER CARD */}
      <Card sx={{ mx: 2, mt: -5, borderRadius: 4, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
        <CardContent sx={{ textAlign: "center", p: 3 }}>
          <Avatar src="https://i.pravatar.cc/150" sx={{ width: 72, height: 72, mx: "auto", mb: 1.5 }} />
          <Typography fontWeight={700} fontSize={18}>Ahmad Khan</Typography>
          <Typography fontSize={13} color="text.secondary">ahmad.khan@email.com</Typography>
          <Chip label="Premium Member" size="small" sx={{ mt: 1, bgcolor: "#fef3c7", color: "#b45309", fontWeight: 700, fontSize: 11 }} />
        </CardContent>
      </Card>

      {/* BALANCE OVERVIEW */}
      <Card sx={{ mx: 2, mt: 2, borderRadius: 4, bgcolor: "#111827", color: "white" }}>
        <CardContent sx={{ p: 2.5 }}>
          <Typography fontSize={12} sx={{ opacity: 0.6 }}>Total Balance</Typography>
          <Typography fontWeight={800} fontSize={28} mt={0.5}>Rs 842,500</Typography>
          
          <Stack direction="row" spacing={2} mt={2.5}>
            <Box sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.08)", p: 1.5, borderRadius: 3 }}>
              <Typography fontSize={11} sx={{ opacity: 0.6 }}>↑ Income</Typography>
              <Typography fontWeight={700}>Rs 1.2M</Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mt: 1, height: 4, borderRadius: 2, bgcolor: "rgba(255,255,255,0.1)", "& .MuiLinearProgress-bar": { bgcolor: "#22c55e" } }} />
            </Box>
            <Box sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.08)", p: 1.5, borderRadius: 3 }}>
              <Typography fontSize={11} sx={{ opacity: 0.6 }}>↓ Expense</Typography>
              <Typography fontWeight={700}>Rs 3.8L</Typography>
              <LinearProgress variant="determinate" value={40} sx={{ mt: 1, height: 4, borderRadius: 2, bgcolor: "rgba(255,255,255,0.1)", "& .MuiLinearProgress-bar": { bgcolor: "#ef4444" } }} />
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* SETTINGS */}
      <Card sx={{ mx: 2, mt: 2, borderRadius: 4 }}>
        <List dense>
          {[
            ["💳", "Accounts", "3 bank accounts linked"],
            ["📊", "Budget Limits", "Monthly • Rs 100,000"],
            ["🔔", "Notifications", "Expense alerts on"],
            ["🔒", "Privacy & Security", "Password, Face ID"],
            ["💾", "Export Data", "CSV, PDF"],
          ].map(([icon, title, sub], i, arr) => (
            <Box key={title}>
              <ListItem>
                <Box sx={{ width: 36, height: 36, bgcolor: "#f1f5f9", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", mr: 1.5 }}>{icon}</Box>
                <ListItemText primary={<Typography fontSize={14} fontWeight={600}>{title}</Typography>} secondary={<Typography fontSize={12} color="text.secondary">{sub}</Typography>} />
                <Typography color="#cbd5e1">›</Typography>
              </ListItem>
              {i !== arr.length - 1 && <Divider sx={{ ml: 7 }} />}
            </Box>
          ))}
        </List>
      </Card>

      <Box sx={{ mx: 2, mt: 2 ,pb:16}}>
        <Button fullWidth variant="contained" sx={{ bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700 }}>Edit Profile</Button>
        <Button fullWidth variant="text" color="error" sx={{ mt: 1, textTransform: "none" }}>Log Out</Button>
      </Box>

    </Box>
  )
}