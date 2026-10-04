import { Box, Button, Card, TextField, Typography, Stack } from "@mui/material"

export default function ForgotPasswordScreen() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Card sx={{ width: 380, borderRadius: 5, p: 3.5, textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        <Box sx={{ width: 56, height: 56, bgcolor: "#fef3c7", borderRadius: 3, mx: "auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🔑</Box>
        <Typography variant="h6" fontWeight={800} mt={2}>Forgot password?</Typography>
        <Typography fontSize={13} color="text.secondary" mt={1}>No worries, we'll send you reset instructions</Typography>

        <Stack spacing={2} mt={3} textAlign="left">
          <TextField label="Email Address" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
          <Button variant="contained" fullWidth sx={{ bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700 }}>Send Reset Link</Button>
          <Button fullWidth variant="text" sx={{ textTransform: "none", color: "#111827", fontWeight: 600 }}>← Back to Login</Button>
        </Stack>

        <Box sx={{ mt: 3, p: 1.5, bgcolor: "#f8fafc", borderRadius: 3 }}>
          <Typography fontSize={11} color="text.secondary">Check spam folder if you don't see email in 2 mins</Typography>
        </Box>
      </Card>
    </Box>
  )
}