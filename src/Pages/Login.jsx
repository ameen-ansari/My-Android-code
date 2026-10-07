import { Box, Button, Card, TextField, Typography, Stack, Divider, IconButton, InputAdornment } from "@mui/material"
import React, { useState } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useNavigate } from 'react-router-dom';
import { auth } from "@/Firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '@/Store/profile';

export default function LoginScreen() {
  const [ loading, setLoading ] = useState(false)
  const dispatch = useDispatch();
  let myData = {}
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (myData?.email && myData?.pwd) {
      const user = await signInWithEmailAndPassword(auth, myData?.email, myData?.pwd)
      if (user?.user) {
        dispatch(login({
          user:user?.user,
          token:user?.user?.uid
        }))
        setLoading(false)
      }
    } else {
      console.log("something went wrong");
      setLoading(false)
    }
  };

  const onChangeHandler = ({ target }) => {
    if (target) {
      myData = { ...myData, [ target?.name ]: target.value }
    }
  };

  return (
    <Box sx={{ minHeight: "100%", display: "flex", alignItems: "center", justifyContent: "center", px: 2 }}>
      <Card sx={{ width: 380, borderRadius: 5, p: 3.5, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
        <Box sx={{ width: 48, p:1,height: "auto", bgcolor: "#111827", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 22, fontWeight: 800, mb: 2 }}>₨</Box>
        <Typography variant="h5" fontWeight={800}>Welcome back</Typography>
        <Typography sx={{pb:2}} fontSize={13} color="text.secondary" >Login to manage your expenses</Typography>

        <Stack spacing={2} mt={3}>
          <TextField name="email" onChange={onChangeHandler} label="Email Address" fullWidth size="small" sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} defaultValue="ameeen55668@gmail.com" />
          <TextField name="pwd" onChange={onChangeHandler} label="Password" fullWidth size="small" defaultValue="aminoooo" type={"password"} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
          <Typography textAlign="right" fontSize={12} fontWeight={600} sx={{ cursor: "pointer" }}>Forgot password?</Typography>
          <Button  loading={loading} onClick={onSubmit} variant="contained" fullWidth sx={{ bgcolor: "#111827", borderRadius: 3, py: 1.4, textTransform: "none", fontWeight: 700, "&:hover": { bgcolor: "#000" } }}>Login</Button>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5} sx={{py:2}}>
          <Divider sx={{ flex: 1}} /><Typography fontSize={11} color="text.secondary" sx={{mt:20}}>OR</Typography><Divider sx={{ flex: 1 }} />
        </Stack>

        <Stack spacing={1.2}>
          <Button disabled fullWidth variant="outlined" sx={{ borderRadius: 3, textTransform: "none", color: "#111827", borderColor: "#e2e8f0", py: 1.2 }}>Continue with Google</Button>
          <Button disabled fullWidth variant="outlined" sx={{ borderRadius: 3, textTransform: "none", color: "#111827", borderColor: "#e2e8f0", py: 1.2 }}>Continue with Apple</Button>
        </Stack>

        <Typography sx={{py:2 ,userSelect:"none"}} textAlign="center" fontSize={13} mt={3}>Don't have account? <Box onClick={() => navigate("/signup")} component="span" fontWeight={700} sx={{ cursor: "pointer" }}>Sign Up</Box></Typography>
      </Card>
    </Box>
  )
}