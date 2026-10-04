import { Box, Button, Card, TextField, Typography, Stack, Divider, IconButton, InputAdornment } from "@mui/material"
import React, { useState } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Card sx={{ width: 380, borderRadius: 5, p: 3.5, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        <Box sx={{ width: 48, height: 48, bgcolor: "#111827", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, fontWeight: 800, mb: 2 }}>₨</Box>
        <Typography variant="h5" fontWeight={800}>Welcome back</Typography>
        <Typography fontSize={13} color="text.secondary" mt={0.5}>Login to manage your expenses</Typography>

        <Stack spacing={2} mt={3}>
          <TextField label="Email Address" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} defaultValue="ahmad@email.com" />
          <TextField label="Password" fullWidth size="small" type={show ? "text" : "password"} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
            InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShow(!show)} size="small">{show ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}</IconButton></InputAdornment> }} />
          <Typography textAlign="right" fontSize={12} fontWeight={600} sx={{ cursor: "pointer" }}>Forgot password?</Typography>
          <Button variant="contained" fullWidth sx={{ bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#000" } }}>Login</Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5} my={2.5}>
          <Divider sx={{ flex: 1 }} /><Typography fontSize={11} color="text.secondary">OR</Typography><Divider sx={{ flex: 1 }} />
        </Stack>

        <Stack spacing={1.2}>
          <Button fullWidth variant="outlined" sx={{ borderRadius: 3, textTransform: "none", color: "#111827", borderColor: "#e2e8f0", py: 1.2 }}>Continue with Google</Button>
          <Button fullWidth variant="outlined" sx={{ borderRadius: 3, textTransform: "none", color: "#111827", borderColor: "#e2e8f0", py: 1.2 }}>Continue with Apple</Button>
        </Stack>

        <Typography textAlign="center" fontSize={13} mt={3}>Don't have account? <Box onClick={()=>navigate("/signup")} component="span" fontWeight={700} sx={{ cursor: "pointer" }}>Sign Up</Box></Typography>
      </Card>
    </Box>
  )
}