import { Box, Button, Card, TextField, Typography, Stack, Checkbox, FormControlLabel } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "@/Firebase/index";

export default function SignupScreen() {
  const navigate = useNavigate()

const onSubmit = async () => {
console.log("user");
await createUserWithEmailAndPassword(auth, "ameen55668@gmail.com", "password")
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
console.log(user);
    
    // ...
  })
  .catch((error) => {
console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};
  

  
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Card sx={{ width: 400, borderRadius: 5, p: 3.5, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        <Typography variant="h5" fontWeight={800}>Create account</Typography>
        <Typography fontSize={13} color="text.secondary" mt={0.5}>Start tracking your money today</Typography>

        <Stack spacing={2} mt={3}>
          <Stack direction="row" spacing={1.5}>
            <TextField label="First Name" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
            <TextField label="Last Name" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
          </Stack>
          <TextField label="Email Address" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
          <TextField label="Password" type="password" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} helperText="Min 8 chars, 1 number, 1 symbol" />
          <TextField label="Monthly Budget (Optional)" fullWidth size="small" placeholder="Rs 50,000" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />

          <FormControlLabel control={<Checkbox size="small" />} label={<Typography fontSize={12}>I agree to <Box component="span" fontWeight={700}>Terms & Privacy</Box></Typography>} />

          <Button onClick={onSubmit} variant="contained" fullWidth sx={{ bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700 }}>Create Account</Button>
        </Stack>

        <Box sx={{ bgcolor: "#f1f5f9", p: 1.5, borderRadius: 3, mt: 2.5, display: "flex", gap: 1 }}>
          <Box>🎁</Box>
          <Typography fontSize={11} color="text.secondary"><b>Free Pro for 7 days</b> - No credit card required. Cancel anytime.</Typography>
        </Box>

        <Typography textAlign="center" fontSize={13} mt={3}>Already have account? <Box onClick={()=>navigate("/login")} component="span" fontWeight={700}>Login</Box></Typography>
      </Card>
    </Box>
  )
}