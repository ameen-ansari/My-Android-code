import React, { useState } from 'react';
import { Box, Typography, Modal, Button, Stack, Divider, TextField, MenuItem, Fade, Backdrop, IconButton } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const C = {
  bg: "#F8FAFC", card: "#FFFFFF", border: "#E9EBEF",
  text: "#0F172A", text2: "#64748B", text3: "#94A3B8",
  violet: "#7C5CFF", indigo: "#6366F1",
};

const modalStyle = {
  position: "absolute",
  bottom: 0, left: 0, right: 0,
  bgcolor: C.card,
  borderRadius: "28px 28px 0 0",
  p: 0,
  maxHeight: "90vh",
  outline: "none",
  overflow: "hidden",
  boxShadow: "0 -20px 60px rgba(0,0,0,0.15)",
  border: `1px solid ${C.border}`,
  borderBottom: "none",
};

// ===== NEW VIP ADD ACCOUNT MODAL =====
export function AddAccountModal({ open, onClose, onAdd }) {
  const [form, setForm] = useState({ 
    bank: "", 
    type: "Bank", 
    number: "", 
    balance: "",
    color: "#7C5CFF"
  });
  const [error, setError] = useState({});

  const banks = [
    { label: "HBL - Habib Bank", value: "HBL" },
    { label: "UBL - United Bank", value: "UBL" },
    { label: "Meezan Bank", value: "Meezan" },
    { label: "JazzCash", value: "JazzCash" },
    { label: "Easypaisa", value: "Easypaisa" },
    { label: "SadaPay", value: "SadaPay" },
    { label: "Nayapay", value: "Nayapay" },
  ];

  const colors = [
    { name: "Violet", hex: "#7C5CFF" },
    { name: "Green", hex: "#10B981" },
    { name: "Orange", hex: "#F59E0B" },
    { name: "Blue", hex: "#0EA5E9" },
    { name: "Pink", hex: "#EC4899" },
  ];

  const handleSave = () => {
    const errs = {};
    if (!form.bank) errs.bank = "Select bank";
    if (!form.number) errs.number = "Required";
    if (!form.balance) errs.balance = "Required";
    setError(errs);
    if (Object.keys(errs).length === 0) {
      if (onAdd) onAdd(form);
      onClose();
      setForm({ bank: "", type: "Bank", number: "", balance: "", color: "#7C5CFF" });
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      bgcolor: C.bg,
      fontSize: 14,
      fontWeight: 500,
      "& fieldset": { borderColor: C.border },
      "&:hover fieldset": { borderColor: "#CBD5E1" },
      "&.Mui-focused fieldset": { borderColor: C.violet, borderWidth: "1.5px" },
    },
    "& .MuiInputLabel-root": { fontSize: 13, color: C.text2 },
  };

  return (
    <Modal 
      open={open} 
      onClose={onClose} 
      closeAfterTransition 
      BackdropComponent={Backdrop} 
      BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          {/* HEADER */}
          <Box sx={{ p: 2.5, pb: 2 }}>
            <Box sx={{ width: 40, height: 5, bgcolor: "#E2E8F0", borderRadius: 10, mx: "auto", mb: 2.5 }} />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" spacing={1.6} alignItems="center">
                <Box sx={{ 
                  width: 48, height: 48, 
                  background: `linear-gradient(135deg, ${C.violet}15, #fff)`,
                  border: `1px solid ${C.violet}20`,
                  borderRadius: "16px", 
                  display: "grid", placeItems: "center", color: C.violet 
                }}>
                  <AccountBalanceRoundedIcon sx={{ fontSize: 22 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 17 }}>Add New Account</Typography>
                  <Typography sx={{ fontSize: 12.5, color: C.text2 }}>Connect your bank</Typography>
                </Box>
              </Stack>
              <IconButton onClick={onClose} sx={{ width: 40, height: 40, bgcolor: C.bg, border: `1px solid ${C.border}`, borderRadius: "12px" }}>
                <CloseRoundedIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: C.bg }} />

          {/* FORM */}
          <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1.8, overflowY: "auto", maxHeight: "60vh" }}>
            
            <TextField
              select
              label="Select Bank"
              value={form.bank}
              onChange={(e) => setForm({ ...form, bank: e.target.value })}
              error={!!error.bank}
              helperText={error.bank}
              fullWidth
              sx={inputSx}
            >
              {banks.map((b) => (
                <MenuItem key={b.value} value={b.value}>{b.label}</MenuItem>
              ))}
            </TextField>

            <Stack direction="row" spacing={1.2}>
              <TextField
                select
                label="Type"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                sx={{ ...inputSx, flex: 1 }}
              >
                <MenuItem value="Bank">Bank</MenuItem>
                <MenuItem value="Wallet">Wallet</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
              </TextField>

              <TextField
                label="Color"
                select
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
                sx={{ ...inputSx, flex: 1 }}
              >
                {colors.map((c) => (
                  <MenuItem key={c.hex} value={c.hex}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: 12, height: 12, bgcolor: c.hex, borderRadius: "50%" }} />
                      {c.name}
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <TextField
              label="Account Number / ID"
              placeholder="**** 1234"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
              error={!!error.number}
              helperText={error.number}
              fullWidth
              sx={inputSx}
            />

            <TextField
              label="Current Balance"
              placeholder="Rs 0"
              type="number"
              value={form.balance}
              onChange={(e) => setForm({ ...form, balance: e.target.value })}
              error={!!error.balance}
              helperText={error.balance}
              fullWidth
              sx={inputSx}
              InputProps={{ startAdornment: <Typography sx={{ fontSize: 14, fontWeight: 700, mr: 0.5, color: C.text2 }}>Rs</Typography> }}
            />

            {/* PREVIEW CARD */}
            <Box sx={{ 
              p: 2, borderRadius: "18px", 
              background: `linear-gradient(135deg, ${form.color}15, ${form.color}05)`,
              border: `1px solid ${form.color}20`,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              mt: 0.5
            }}>
              <Box>
                <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: form.color }}>PREVIEW</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 14, mt: 0.5 }}>{form.bank || "Select Bank"} • {form.type}</Typography>
                <Typography sx={{ fontSize: 12, color: C.text2 }}>{form.number || "**** ****"} • Rs {form.balance || "0"}</Typography>
              </Box>
              <Box sx={{ width: 12, height: 12, bgcolor: form.color, borderRadius: "50%", boxShadow: `0 0 0 5px ${form.color}20` }} />
            </Box>
          </Box>

          {/* ACTIONS */}
          <Box sx={{ p: 2.5, pt: 0, display: "flex", gap: 1.2 }}>
            <Button onClick={onClose} fullWidth sx={{ bgcolor: C.bg, color: C.text, border: `1px solid ${C.border}`, borderRadius: "16px", py: 1.7, textTransform: "none", fontWeight: 700 }}>Cancel</Button>
            <Button onClick={handleSave} fullWidth sx={{ background: `linear-gradient(135deg, ${C.violet} 0%, #6366F1 100%)`, color: "#fff", borderRadius: "16px", py: 1.7, textTransform: "none", fontWeight: 700, boxShadow: "0 6px 20px rgba(124,92,255,0.3)" }}>Add Account</Button>
          </Box>

        </Box>
      </Fade>
    </Modal>
  );
}