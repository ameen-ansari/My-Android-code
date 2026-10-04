import { Box, Button, Card, Typography, Stack, TextField } from "@mui/material"

export default function OtpScreen() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Card sx={{ width: 360, borderRadius: 5, p: 3.5, textAlign: "center" }}>
        <Typography fontWeight={800} variant="h6">Verify your email</Typography>
        <Typography fontSize={13} color="text.secondary" mt={1}>We sent code to ahmad@email.com</Typography>
        <Stack direction="row" spacing={1} mt={3} justifyContent="center">
          {[1,2,3,4].map(i => <TextField key={i} inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: 20, fontWeight: 700 } }} sx={{ width: 56, "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />)}
        </Stack>
        <Button fullWidth variant="contained" sx={{ mt: 3, bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700 }}>Verify</Button>
        <Typography fontSize={12} mt={2}>Resend code in 32s</Typography>
      </Card>
    </Box>
  )
}