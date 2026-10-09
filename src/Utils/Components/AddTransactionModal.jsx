import React, { forwardRef, useState } from 'react';
import {
  Dialog, Box, Typography, TextField, Select, MenuItem,
  Chip, Switch, Button, IconButton, Slide
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const COLORS = {
  bg: "#F5F7FA",
  card: "#FFFFFF",
  border: "#E9EBEF", // Fixed: was null
  text: "#0F172A",
  text2: "#64748B",
  text3: "#94A3B8",
  activeTag: "#0F172A",
}

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddExpenseModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
    amount: "",
    expenseType: "Expense",
    account: "Cash",
    isDefault: false,
    date: "2026-05-13",
    time: "14:30",
    tags: ["Food"],
    note: ""
  });

  const allTags = ["Food", "Travel", "Bills", "Office", "Personal", "Urgent"];

  const handleTagToggle = (t) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.includes(t) ? prev.tags.filter(x => x !== t) : [...prev.tags, t]
    }));
  };

  const handleSave = () => {
    const finalData = {
      ...form,
      amount: Number(form.amount),
      createdAt: new Date(`${form.date}T${form.time}`).toISOString(),
    };
    console.log("Expense Data:", finalData);
    if(onSave) onSave(finalData); // send to parent
    onClose();
  };

  const commonInputSx = {
    "& .MuiOutlinedInput-root": {
      bgcolor: COLORS.card,
      borderRadius: "14px",
      height: 52,
      fontSize: 14,
      fontWeight: 500,
      "& fieldset": { borderColor: `${COLORS.border} !important`, borderWidth: "1px" },
      "&:hover fieldset": { borderColor: "#D1D5DB !important" },
      "&.Mui-focused fieldset": { borderColor: "#0F172A !important" },
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullScreen TransitionComponent={Transition}>
      <Box sx={{
        p: "20px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        height: "100%",
        overflowY: "auto",
        bgcolor: COLORS.bg,
        '&::-webkit-scrollbar': { display: 'none' }
      }}>

        {/* HEADER */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Add expense</Typography>
            <Typography sx={{ fontSize: 13, color: COLORS.text2, mt: 0.5 }}>Track where your money goes</Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ width: 36, height: 36, bgcolor: COLORS.card, border: `1px solid ${COLORS.border}` }}>
            <CloseRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* AMOUNT */}
        <Box sx={{ bgcolor: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "20px", p: 2.2, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: COLORS.text3 }}>AMOUNT</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Typography sx={{ fontSize: 24, fontWeight: 400, color: COLORS.text3, mr: 1 }}>Rs.</Typography>
            <TextField
              variant="standard"
              placeholder="0"
              type="number"
              fullWidth
              value={form.amount}
              onChange={(e) => setForm({...form, amount: e.target.value})}
              InputProps={{
                disableUnderline: true,
                sx: { fontSize: 44, fontWeight: 700, color: COLORS.text, }
              }}
            />
          </Box>
        </Box>

        {/* TYPE + ACCOUNT */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>EXPENSE TYPE</Typography>
            <Select fullWidth value={form.expenseType} onChange={e => setForm({...form, expenseType: e.target.value})}
              sx={{ bgcolor: COLORS.card, borderRadius: "14px", height: 52, "& fieldset": { borderColor: COLORS.border } }}>
              {["Income", "Expense", "Savings", "BC1" ,"BC2"].map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>ACCOUNT</Typography>
            <Select fullWidth value={form.account} onChange={e => setForm({...form, account: e.target.value})}
              sx={{ bgcolor: COLORS.card, borderRadius: "14px", height: 52, "& fieldset": { borderColor: COLORS.border } }}>
              {["Cash", "Bank", "UPI", "Card"].map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
            </Select>
          </Box>
        </Box>

        {/* DEFAULT */}
        <Box sx={{ bgcolor: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "14px", px: 2, py: 1.2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontSize: 13.5, fontWeight: 600 }}>Set as default</Typography>
            <Typography sx={{ fontSize: 12, color: COLORS.text2 }}>Use {form.account} for future</Typography>
          </Box>
          <Switch checked={form.isDefault} onChange={e => setForm({...form, isDefault: e.target.checked})} size="small" />
        </Box>

        {/* DATE TIME */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: COLORS.text3, mb: 1 }}>DATE</Typography>
            <TextField fullWidth type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} sx={commonInputSx} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, color: COLORS.text3, mb: 1 }}>TIME</Typography>
            <TextField fullWidth type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} sx={commonInputSx} />
          </Box>
        </Box>

        {/* TAGS */}
        <Box>
          <Typography sx={{ fontSize: 10, fontWeight: 600, color: COLORS.text3, mb: 1.2 }}>TAGS</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {allTags.map(t => {
              const active = form.tags.includes(t);
              return (
                <Chip key={t} label={t} onClick={() => handleTagToggle(t)}
                  sx={{
                    height: 34, borderRadius: "10px", fontSize: 13, fontWeight: active ? 600 : 500,
                    bgcolor: active ? COLORS.activeTag : COLORS.card,
                    color: active ? "#fff" : COLORS.text2,
                    border: `1px solid ${active ? COLORS.activeTag : COLORS.border}`,
                  }}
                />
              )
            })}
          </Box>
        </Box>

        {/* NOTE */}
        <Box>
          <Typography sx={{ fontSize: 10, fontWeight: 600, color: COLORS.text3, mb: 1 }}>NOTE</Typography>
          <TextField fullWidth multiline minRows={2} placeholder="What was this for?" value={form.note}
            onChange={e => setForm({...form, note: e.target.value})}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: COLORS.card, borderRadius: "14px",
                "& fieldset": { borderColor: COLORS.border },
                "& textarea": { fontSize: 14 }
              }
            }} />
        </Box>

        {/* FOOTER */}
        <Box sx={{ mt: "auto", pt: 2 }}>
          <Button fullWidth onClick={handleSave} disabled={!form.amount}
            sx={{
              bgcolor: COLORS.text, color: "#fff", height: 54, borderRadius: "16px",
              fontSize: 15, fontWeight: 700, textTransform: "none",
              "&:hover": { bgcolor: "#1E293B" }, "&:disabled": { bgcolor: "#E2E8F0", color: "#94A3B8" }
            }}>
            Save expense - Rs.{form.amount || 0}
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}