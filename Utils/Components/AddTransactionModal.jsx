import React, { useState } from 'react';
import {
  Dialog, Box, Typography, TextField, Select, MenuItem,
  Chip, Switch, Button, IconButton, Slide
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const COLORS = {
  bg: "#080808",
  card: "#141414",
  card2: "#1C1C1C",
  border: "#232323",
  text: "#FFFFFF",
  text2: "#8A8A8E",
  text3: "#5A5A5E",
}

const Transition = (props) => <Slide direction="up" {...props} />;

export default function AddExpenseModal({ open, onClose }) {
  const [expenseType, setExpenseType] = useState("Food");
  const [account, setAccount] = useState("Cash");
  const [tags, setTags] = useState(["Food"]);

  const allTags = ["Food", "Travel", "Bills", "Office", "Personal", "Urgent"];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          bgcolor: COLORS.bg,
          color: COLORS.text,
          backgroundImage: "none",
          fontFamily: "'Geist','Inter',sans-serif"
        }
      }}
    >
      {/* CONTAINER */}
      <Box sx={{
        p: "20px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        height: "100%",
        overflowY: "auto",
        bgcolor: COLORS.bg,
          color: COLORS.text,
          backgroundImage: "none",
        '&::-webkit-scrollbar': { display: 'none' }
      }}>

        {/* HEADER - Pro */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Add expense</Typography>
            <Typography sx={{ fontSize: 13, color: COLORS.text2, mt: 0.5, fontWeight: 400 }}>Track where your money goes</Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ width: 36, height: 36, bgcolor: COLORS.card, border: `1px solid ${COLORS.border}`, color: COLORS.text2 }}>
            <CloseRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        {/* AMOUNT - Hero Card */}
        <Box sx={{
          bgcolor: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "20px",
          p: 2.2,
        }}>
          <Typography sx={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: COLORS.text3 }}>AMOUNT</Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", mt: 1.5, gap: 1 }}>
            <Typography sx={{ fontSize: 32, fontWeight: 300, color: COLORS.text3 }}>₹</Typography>
            <TextField
              variant="standard"
              placeholder="0"
              type="number"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", color: COLORS.text,
                  "& input::placeholder": { color: "#2A2A2A" }
                }
              }}
            />
          </Box>
        </Box>

        {/* FIELDS GRID */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          {[
            { label: "EXPENSE TYPE", value: expenseType, setter: setExpenseType, options: ["Food", "Transport", "Shopping", "Rent"] },
            { label: "ACCOUNT", value: account, setter: setAccount, options: ["Cash", "Bank", "UPI", "Card"] },
          ].map((f) => (
            <Box key={f.label} sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>{f.label}</Typography>
              <Select
                fullWidth
                value={f.value}
                onChange={e => f.setter(e.target.value)}
                sx={{
                  bgcolor: COLORS.card,
                  color: COLORS.text,
                  borderRadius: "14px",
                  height: 52,
                  fontSize: 14, fontWeight: 500,
                  "& fieldset": { borderColor: `${COLORS.border} !important` },
                  "& .MuiSvgIcon-root": { color: COLORS.text3 }
                }}
              >
                {f.options.map(o => <MenuItem key={o} value={o} sx={{ fontSize: 14 }}>{o}</MenuItem>)}
              </Select>
            </Box>
          ))}
        </Box>

        {/* DEFAULT */}
        <Box sx={{
          bgcolor: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "14px",
          px: 2, py: 1.2,
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <Box>
            <Typography sx={{ fontSize: 13.5, fontWeight: 600 }}>Set as default</Typography>
            <Typography sx={{ fontSize: 12, color: COLORS.text2 }}>Use {account} for future</Typography>
          </Box>
          <Switch size="small" sx={{ "& .MuiSwitch-thumb": { bgcolor: "white" } }} />
        </Box>

        {/* DATE TIME */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>DATE</Typography>
            <TextField fullWidth type="date" defaultValue="2026-05-13" sx={{
              "& .MuiOutlinedInput-root": { bgcolor: COLORS.card, borderRadius: "14px", height: 50, "& fieldset": { borderColor: COLORS.border }, "& input": { color: COLORS.text, fontSize: 13 } }
            }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>TIME</Typography>
            <TextField fullWidth type="time" defaultValue="14:30" sx={{
              "& .MuiOutlinedInput-root": { bgcolor: COLORS.card, borderRadius: "14px", height: 50, "& fieldset": { borderColor: COLORS.border }, "& input": { color: COLORS.text, fontSize: 13 } }
            }} />
          </Box>
        </Box>

        {/* TAGS */}
        <Box>
          <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1.2 }}>TAGS</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {allTags.map(t => {
              const active = tags.includes(t);
              return (
                <Chip
                  key={t}
                  label={t}
                  onClick={() => setTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])}
                  sx={{
                    height: 32,
                    borderRadius: "10px",
                    fontSize: 12.5, fontWeight: active ? 600 : 450,
                    bgcolor: active ? COLORS.text : COLORS.card,
                    color: active ? "#000" : COLORS.text2,
                    border: `1px solid ${active ? COLORS.text : COLORS.border}`,
                    transition: "all .15s ease"
                  }}
                />
              )
            })}
          </Box>
        </Box>

        {/* NOTE */}
        <Box>
          <Typography sx={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: COLORS.text3, mb: 1 }}>NOTE</Typography>
          <TextField fullWidth multiline minRows={2} placeholder="What was this for?" sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: COLORS.card, borderRadius: "14px",
              "& fieldset": { borderColor: COLORS.border },
              "& textarea": { color: COLORS.text, fontSize: 14, "&::placeholder": { color: COLORS.text3 } }
            }
          }} />
        </Box>

        {/* FOOTER BUTTON */}
        <Box sx={{ mt: "auto", pt: 2 }}>
          <Button fullWidth sx={{
            bgcolor: COLORS.text,
            color: "#000",
            height: 54,
            borderRadius: "16px",
            fontSize: 15, fontWeight: 700,
            letterSpacing: "-0.01em",
            textTransform: "none",
            "&:hover": { bgcolor: "#EAEAEA" }
          }}>
            Save expense
          </Button>
          <Typography sx={{ textAlign: "center", fontSize: 11, color: COLORS.text3, mt: 1.5, fontWeight: 500 }}>
            Swipe down or tap X to close
          </Typography>
        </Box>

      </Box>
    </Dialog>
  )
}