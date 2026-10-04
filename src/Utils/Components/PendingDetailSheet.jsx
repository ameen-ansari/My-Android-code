import React, { useState } from 'react';
import { Box, Typography, Drawer, Button, TextField } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";

const C = {
  bg: "#070711",
  card: "#12122A",
  card2: "#1E1E3F",
  border: "#2D2D5A",
  text: "#FFFFFF",
  text2: "#9A9AC0",
  text3: "#5E5E8A",
  violet: "#A78BFA",
  indigo: "#818CF8",
  emerald: "#34D399",
  pink: "#F472B6",
  orange: "#FB923C",
  blue: "#60A5FA",
  red: "#FB7185",
}

const initialPays = [
  { id: "pp_1", name: "Office Rent", amount: 12000, due: "Tomorrow", status: "due", color: "#FF8A3D", icon: "⌂", cat: "Office", payFrom: "Main • ₹12,840" },
  { id: "pp_2", name: "Figma Team", amount: 450, due: "2 days left", status: "pending", color: "#7C5CFF", icon: "◐", cat: "Software", payFrom: "Main • ₹12,840" },
  { id: "pp_3", name: "Electric Bill", amount: 1850, due: "Overdue • 1 day", status: "overdue", color: "#FF4D6A", icon: "⚡", cat: "Bills", payFrom: "Main • ₹12,840" },
  { id: "pp_4", name: "Client Ahmed", amount: 25000, due: "Expected 18 May", status: "incoming", color: "#00D9A3", icon: "↗", cat: "Income", payFrom: "Incoming" },
  { id: "pp_5", name: "Adobe CC", amount: 3200, due: "5 days left", status: "pending", color: "#3D9CFF", icon: "◒", cat: "Software", payFrom: "Main • ₹12,840" },
  { id: "pp_6", name: "Car EMI", amount: 8500, due: "Due 20 May", status: "due", color: "#FF8A3D", icon: "◑", cat: "EMI", payFrom: "Main • ₹12,840" },
  { id: "pp_7", name: "Internet Bill", amount: 999, due: "Overdue • 3 days", status: "overdue", color: "#FF4D6A", icon: "◎", cat: "Bills", payFrom: "Main • ₹12,840" },
  { id: "pp_8", name: "Upwork Client", amount: 30000, due: "Expected 22 May", status: "incoming", color: "#00D9A3", icon: "↗", cat: "Income", payFrom: "Incoming" },
];

function DetailSheet({ open, onClose, data, onStatusChange }) {
  if (!data) return null;
  const isOverdue = data.status === "overdue";
  const isIncoming = data.status === "incoming" || data.status === "received";
  const isPaid = data.status === "paid" || data.status === "received";

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose} PaperProps={{ sx: { bgcolor: C.violet, borderTopLeftRadius: "28px", borderTopRightRadius: "28px", borderTop: `1px solid ${C.border}`, backgroundImage: "none" } }}>
      <Box sx={{ p: 2.2, pb: 3,bgcolor: C.card }}>
        <Box sx={{ width: 36, height: 4, bgcolor: C.border, borderRadius: 10, mx: "auto", mb: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
            <Box sx={{ width: 48, height: 48, bgcolor: `${data.color}18`, borderRadius: "14px", border: `1px solid ${data.color}30`, display: "grid", placeItems: "center", color: data.color, fontWeight: 800 }}>{data.icon}</Box>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 800 ,color:C.text}}>{data.name}</Typography>
              <Typography sx={{ fontSize: 11, color: isOverdue ? C.red : C.text2 }}>{data.due}</Typography>
            </Box>
          </Box>
          <Box onClick={onClose} sx={{ width: 34, height: 34, bgcolor: C.card2, borderRadius: "50%", display: "grid", placeItems: "center" }}><CloseRoundedIcon sx={{ fontSize: 16, color: C.text2 }} /></Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 3, mb: 2 }}>
          <Typography sx={{ fontSize: 42, fontWeight: 900, color: data.status === "incoming" ? C.emerald : data.status === "received" || data.status === "paid" ? C.text3 : C.text }}>{data.status === "incoming" ? "+" : data.status === "received" ? "+" : "-"}₹ {data.amount.toLocaleString()}</Typography>
          <Box sx={{ mt: 1, display: "inline-flex", gap: 0.6, alignItems: "center", px: 1.5, py: 0.4, borderRadius: "20px", bgcolor: `${data.color}18`, color: data.color, fontSize: 10, fontWeight: 800 }}>{data.status === "paid" ? <CheckCircleRoundedIcon sx={{ fontSize: 12 }} /> : null} {data.status.toUpperCase()}</Box>
        </Box>

        {/* STATUS SWITCHER - FINAL TOUCH */}
        <Typography sx={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", color: C.text2, mb: 1 }}>CHANGE STATUS</Typography>
        <Box sx={{ display: "flex", gap: 0.8, mb: 2.2 }}>
          {[
            { key: "pending", label: "Pending", col: C.orange },
            { key: "due", label: "Due", col: C.blue },
            { key: "overdue", label: "Overdue", col: C.red },
            { key: "paid", label: "Paid", col: C.text3 },
            { key: "received", label: "Received", col: C.emerald },
            { key: "incoming", label: "Incoming", col: C.emerald },
          ].map(s => (
            <Box key={s.key} onClick={() => onStatusChange(data.id, s.key)}
              sx={{
                px: 1.4, py: 0.7, borderRadius: "20px", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
                bgcolor: data.status === s.key ? s.col : C.card2,
                color: data.status === s.key ? s.key === "paid" ? "#FFF" : "#FFF" : C.text2,
                border: `1px solid ${data.status === s.key ? s.col : C.border}`,
                display: "flex", alignItems: "center", gap: 0.4
              }}>
              {data.status === s.key && <CheckCircleRoundedIcon sx={{ fontSize: 12 }} />} {s.label}
            </Box>
          ))}
        </Box>

        <Box sx={{ bgcolor: C.bg, borderRadius: "18px", p: 1.8, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 1.4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}><Typography sx={{ fontSize: 12, color: C.text2 }}>Category</Typography><Typography sx={{ fontSize: 12, fontWeight: 650 }}>{data.cat}</Typography></Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}><Typography sx={{ fontSize: 12, color: C.text2 }}>Pay from</Typography><Typography sx={{ fontSize: 12, fontWeight: 650 }}>{data.payFrom}</Typography></Box>
        </Box>

        {/* MAIN ACTION */}
        <Box sx={{ display: "flex", gap: 1.2, mt: 2.5 }}>
          {data.status === "incoming" ? (
            <Button fullWidth onClick={() => { onStatusChange(data.id, "received"); onClose(); }} sx={{ height: 52, borderRadius: "16px", bgcolor: C.emerald, color: "#000", fontWeight: 800, textTransform: "none" }}>Mark as Received ✓</Button>
          ) : data.status === "pending" || data.status === "due" || data.status === "overdue" ? (
            <Button fullWidth onClick={() => { onStatusChange(data.id, "paid"); onClose(); }} sx={{ height: 52, borderRadius: "16px", bgcolor: "#FFF", color: "#000", fontWeight: 800, textTransform: "none" }}>Mark as Paid ✓</Button>
          ) : (
            <Button fullWidth onClick={() => { onStatusChange(data.id, "pending"); onClose(); }} variant="outlined" sx={{ height: 52, borderRadius: "16px", borderColor: C.border, color: C.text, fontWeight: 700, textTransform: "none" }}><ChangeCircleRoundedIcon sx={{ fontSize: 16, mr: 0.6 }} /> Move back to Pending</Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}

export default function PendingScreen() {
  const [pays, setPays] = useState(initialPays);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    setPays(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    setSelected(prev => prev && prev.id === id ? { ...prev, status: newStatus } : prev);
  };

  const filtered = pays.filter(p => {
    if (filter !== "all" && p.status !== filter) return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const totalOut = pays.filter(p => ["due", "pending", "overdue"].includes(p.status)).reduce((s, p) => s + p.amount, 0);
  const totalIn = pays.filter(p => p.status === "incoming").reduce((s, p) => s + p.amount, 0);
  const totalReceived = pays.filter(p => p.status === "received").reduce((s, p) => s + p.amount, 0);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: C.bg, color: C.text, p: "18px", pb: "40px" }}>
      <Typography sx={{ fontSize: 22, fontWeight: 900 }}>Pending Pays</Typography>
      <Typography sx={{ fontSize: 12, color: C.text2 }}>{pays.length} items • Paid/Received handled</Typography>

      <Box sx={{ display: "flex", gap: 1.2, mt: 2 }}>
        <Box sx={{ flex: 1, background: `linear-gradient(135deg, ${C.red}, #B91C3A)`, borderRadius: "20px", p: 1.8 }}>
          <Typography sx={{ fontSize: 10, fontWeight: 800, opacity: 0.7 }}>TO PAY</Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>₹ {totalOut.toLocaleString()}</Typography>
        </Box>
        <Box sx={{ flex: 1, background: `linear-gradient(135deg, ${C.emerald}, #0A8C6A)`, borderRadius: "20px", p: 1.8 }}>
          <Typography sx={{ fontSize: 10, fontWeight: 800, opacity: 0.7 }}>RECEIVED</Typography>
          <Typography sx={{ fontSize: 20, fontWeight: 900 }}>₹ {totalReceived.toLocaleString()}</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2, position: "relative" }}>
        <SearchRoundedIcon sx={{ position: "absolute", left: 14, top: 14, color: C.text3, fontSize: 18 }} />
        <TextField placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)} fullWidth size="small"
          sx={{ "& .MuiOutlinedInput-root": { bgcolor: C.card, borderRadius: "14px", pl: 3.5, height: 46, color: C.text, "& fieldset": { borderColor: C.border } } }} />
      </Box>

      <Box sx={{ display: "flex", gap: 0.8, mt: 1.6, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" } }}>
        {[
          { key: "all", label: "All" },
          { key: "pending", label: "Pending" },
          { key: "overdue", label: "Overdue" },
          { key: "due", label: "Due" },
          { key: "paid", label: "Paid" },
          { key: "received", label: "Received" },
          { key: "incoming", label: "Incoming" },
        ].map(f => (
          <Box key={f.key} onClick={() => setFilter(f.key)}
            sx={{ px: 1.6, py: 0.7, borderRadius: "20px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", bgcolor: filter === f.key ? "#FFF" : C.card, color: filter === f.key ? "#000" : C.text2, border: `1px solid ${filter === f.key ? "#FFF" : C.border}` }}>
            {f.label}
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        {filtered.map(p => (
          <Box key={p.id} onClick={() => { setSelected(p); setOpen(true); }}
            sx={{
              bgcolor: p.status === "overdue" ? "#1F1520" : p.status === "paid" || p.status === "received" ? "#11111A" : C.card,
              border: `1px solid ${p.status === "overdue" ? "#3A1F2E" : C.border}`,
              borderRadius: "18px", p: 1.6, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", opacity: p.status === "paid" || p.status === "received" ? 0.6 : 1
            }}>
            <Box sx={{ display: "flex", gap: 1.3, alignItems: "center" }}>
              <Box sx={{ width: 44, height: 44, bgcolor: `${p.color}18`, borderRadius: "13px", display: "grid", placeItems: "center", color: p.color, fontWeight: 800 }}>{p.icon}</Box>
              <Box>
                <Typography sx={{ fontSize: 13.5, fontWeight: 700, display: "flex", gap: 0.5, alignItems: "center" }}>{p.name} {(p.status === "paid" || p.status === "received") && <CheckCircleRoundedIcon sx={{ fontSize: 14, color: C.emerald }} />}</Typography>
                <Typography sx={{ fontSize: 11, color: p.status === "overdue" ? C.red : C.text2 }}>{p.due}</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: 14, fontWeight: 800, textDecoration: p.status === "paid" || p.status === "received" ? "line-through" : "none" }}>₹ {p.amount.toLocaleString()}</Typography>
              <Box sx={{ mt: 0.3, fontSize: 9, fontWeight: 800, px: 1, py: 0.2, borderRadius: "20px", bgcolor: `${p.color}18`, color: p.color, display: "inline-block" }}>{p.status.toUpperCase()}</Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ height: 40, mt: 3 }} />
      <Box sx={{ height: 40 }} />

      <DetailSheet open={open} onClose={() => setOpen(false)} data={selected} onStatusChange={handleStatusChange} />
    </Box>
  );
}