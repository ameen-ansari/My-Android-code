import { Box, Button, Typography, LinearProgress } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { useDispatch } from 'react-redux';
import { logout } from '@/Store/profile';

const C = {
  bg: "#F8FAFC",          // Main background - Light
  card: "#FFFFFF",        // Card - White
  card2: "#F1F5F9",
  border: "#E9EBEF",      // Fixed border
  text: "#0F172A",        // Dark text
  text2: "#64748B",
  text3: "#94A3B8",
  violet: "#7C5CFF",
  indigo: "#5B6CFF",
  emerald: "#10B981",
  pink: "#FF5C8A",
  orange: "#F59E0B",
  blue: "#3B82F6",
  red: "#EF4444",
}

export default function Dashboard() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  const cardStyle = {
    bgcolor: C.card,
    border: `1px solid ${C.border}`,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: C.bg, color: C.text, p: "18px", fontFamily: "'Geist','Inter',sans-serif", pb: "100px" }}>
      
      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box>
          <Typography sx={{ fontSize: 11, color: C.text2, fontWeight: 600, letterSpacing: "0.08em" }}>THU • 13 MAY • EVENING</Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", mt: 0.3 }}>Ameen<span style={{ color: C.violet }}>.</span></Typography>
        </Box>
        <Box sx={{ width: 40, height: 40, borderRadius: "14px", background: `linear-gradient(135deg, ${C.violet}, ${C.indigo})`, display: "grid", placeItems: "center", fontWeight: 800, color: "#fff" }}>H</Box>
      </Box>

      {/* HERO BALANCE - stays gradient but clean */}
      <Box sx={{ background: `linear-gradient(135deg, ${C.violet} 0%, ${C.indigo} 100%)`, borderRadius: "28px", p: 2.8, mt: 2.5, position: "relative", overflow: "hidden", color: "#fff" }}>
        <Typography sx={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", opacity: 0.7 }}>TOTAL BALANCE</Typography>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.6, mt: 1.2 }}>
          <Typography sx={{ fontSize: 16, opacity: 0.8 }}>₹</Typography>
          <Typography sx={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>412,840</Typography>
          <Typography sx={{ fontSize: 20, opacity: 0.5 }}>.50</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 2.8 }}>
          {[
            { label: "INCOME", value: "₹ 28.5k" },
            { label: "EXPENSES", value: "₹ 15.6k" },
            { label: "SAVINGS", value: "₹ 12.8k" },
          ].map(i => (
            <Box key={i.label} sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "16px", p: 1.5, border: "1px solid rgba(255,255,255,0.2)" }}>
              <Typography sx={{ fontSize: 9, fontWeight: 800, opacity: 0.7 }}>{i.label}</Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 800, mt: 0.5 }}>{i.value}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* EXPENSES / SAVINGS / REPORT */}
      <Box sx={{ display: "flex", gap: 1.2, mt: 1.4 }}>
        {[
          { title: "EXPENSES", value: "₹ 15.6k", sub: "↑ 8% this month", color: C.orange },
          { title: "SAVINGS", value: "₹ 12.8k", sub: "↑ 12% saved", color: C.emerald },
          { title: "REPORT", value: "May", sub: "View →", color: C.blue },
        ].map(c => (
          <Box key={c.title} sx={{ ...cardStyle, flex: 1, borderRadius: "18px", p: 1.6, borderLeft: `3px solid ${c.color}` }}>
            <Typography sx={{ fontSize: 9, fontWeight: 800, color: C.text3 }}>{c.title}</Typography>
            <Typography sx={{ fontSize: 13, fontWeight: 700, mt: 0.5 }}>{c.value}</Typography>
            <Typography sx={{ fontSize: 10, color: c.color, fontWeight: 700, mt: 0.2 }}>{c.sub}</Typography>
          </Box>
        ))}
      </Box>

      {/* PENDING PAYS */}
      <Box sx={{ mt: 2.8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 800 }}>Pending Pays</Typography>
            <Box sx={{ bgcolor: C.red, color: "#fff", borderRadius: "20px", px: 1, py: 0.2, fontSize: 10, fontWeight: 800 }}>4</Box>
          </Box>
          <Typography sx={{ fontSize: 12, color: C.text2, fontWeight: 600, cursor: "pointer" }}>Pay all</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            { name: "Office Rent", amount: 12000, due: "Tomorrow", status: "due", color: C.orange, icon: "⌂" },
            { name: "Figma Team", amount: 450, due: "2 days left", status: "pending", color: C.violet, icon: "◐" },
            { name: "Electric Bill", amount: 1850, due: "Overdue • 1 day", status: "overdue", color: C.red, icon: "⚡" },
            { name: "Client Ahmed", amount: 25000, due: "Expected 18 May", status: "incoming", color: C.emerald, icon: "↗" },
          ].map(p => (
            <Box key={p.name} sx={{
              ...cardStyle,
              bgcolor: p.status === "overdue" ? "#FEF2F2" : C.card,
              border: `1px solid ${p.status === "overdue" ? "#FECACA" : C.border}`,
              borderRadius: "18px", p: 1.6, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <Box sx={{ display: "flex", gap: 1.3, alignItems: "center" }}>
                <Box sx={{ width: 42, height: 42, bgcolor: `${p.color}15`, borderRadius: "12px", border: `1px solid ${p.color}20`, display: "grid", placeItems: "center", color: p.color, fontWeight: 700 }}>{p.icon}</Box>
                <Box>
                  <Typography sx={{ fontSize: 13.5, fontWeight: 650, display: "flex", gap: 0.6, alignItems: "center" }}>{p.name} {p.status === "overdue" && <WarningAmberRoundedIcon sx={{ fontSize: 13, color: C.red }} />}</Typography>
                  <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", mt: 0.2 }}>
                    <AccessTimeRoundedIcon sx={{ fontSize: 11, color: p.status === "overdue" ? C.red : C.text2 }} />
                    <Typography sx={{ fontSize: 11, color: p.status === "overdue" ? C.red : C.text2, fontWeight: p.status === "overdue" ? 700 : 400 }}>{p.due}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography sx={{ fontSize: 13.5, fontWeight: 800, color: p.status === "incoming" ? C.emerald : C.text }}>{p.status === "incoming" ? "+" : "-"}₹ {p.amount.toLocaleString()}</Typography>
                <Box sx={{ mt: 0.4, fontSize: 9, fontWeight: 800, px: 1, py: 0.2, borderRadius: "20px", bgcolor: `${p.color}15`, color: p.color, display: "inline-block" }}>{p.status.toUpperCase()}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* SPENDING FLOW */}
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 1.2 }}>Spending flow</Typography>
        <Box sx={{ ...cardStyle, borderRadius: "22px", p: 2.2 }}>
          {[
            { name: "Food & Drinks", amount: 4200, pct: 62, color: C.orange },
            { name: "Transport", amount: 1800, pct: 35, color: C.blue },
            { name: "Shopping", amount: 3200, pct: 78, color: C.pink },
            { name: "Bills", amount: 2100, pct: 45, color: C.violet },
          ].map(cat => (
            <Box key={cat.name} sx={{ mb: 2.4, "&:last-child": { mb: 0 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.9 }}>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}><Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: cat.color }} /><Typography sx={{ fontSize: 13, fontWeight: 600 }}>{cat.name}</Typography></Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: C.text2 }}>₹ {cat.amount}</Typography>
              </Box>
              <LinearProgress variant="determinate" value={cat.pct} sx={{ height: 6, borderRadius: 10, bgcolor: C.card2, "& .MuiLinearProgress-bar": { bgcolor: cat.color, borderRadius: 10 } }} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* BUDGETS */}
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 1.2 }}>Active budgets</Typography>
        <Box sx={{ display: "flex", gap: 1.2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" } }}>
          {[
            { title: "Food", spent: 4200, total: 6000, color: C.orange },
            { title: "Travel", spent: 1800, total: 5000, color: C.blue },
            { title: "Shopping", spent: 3200, total: 4000, color: C.pink },
          ].map(b => (
            <Box key={b.title} sx={{ ...cardStyle, minWidth: 145, borderRadius: "20px", p: 1.8 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}><Typography sx={{ fontSize: 12, fontWeight: 700 }}>{b.title}</Typography><Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: b.color }} /></Box>
              <Typography sx={{ fontSize: 11, color: C.text2, mt: 0.4 }}>₹ {b.spent} / ₹ {b.total}</Typography>
              <Box sx={{ mt: 1.4, height: 4, bgcolor: C.card2, borderRadius: 10 }}><Box sx={{ width: `${(b.spent / b.total) * 100}%`, height: "100%", bgcolor: b.color, borderRadius: 10 }} /></Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* RECENT TRANSACTIONS */}
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 1.2 }}>Recent transactions</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            { n: "Figma Pro", a: -129, col: C.violet },
            { n: "Salary", a: 4500, col: C.emerald, up: true },
            { n: "Starbucks", a: -8.5, col: C.orange },
            { n: "Netflix", a: -15.99, col: C.pink },
            { n: "Uber", a: -24, col: C.blue },
          ].map(x => (
            <Box key={x.n} sx={{ ...cardStyle, borderRadius: "18px", p: 1.6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: 1.2, alignItems: "center" }}>
                <Box sx={{ width: 36, height: 36, bgcolor: `${x.col}15`, borderRadius: "11px", border: `1px solid ${x.col}20`, display: "grid", placeItems: "center", color: x.col, fontSize: 12 }}>●</Box>
                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{x.n}</Typography>
              </Box>
              <Typography sx={{ fontSize: 13, fontWeight: 800, color: x.up ? C.emerald : C.text }}>{x.a > 0 ? "+" : ""}₹ {Math.abs(x.a)}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* INSIGHT - Light version */}
      <Box sx={{ mt: 3, bgcolor: "#F5F3FF", border: `1px solid #EDE9FE`, borderRadius: "22px", p: 2.4, borderLeft: `3px solid ${C.violet}` }}>
        <Typography sx={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: C.violet }}>INSIGHT • AI</Typography>
        <Typography sx={{ fontSize: 13.5, fontWeight: 600, mt: 1, lineHeight: 1.5, color: C.text2 }}>Food is 23% up this week. Cook 2x more → save <span style={{ color: C.emerald, fontWeight: 800 }}>₹1.2k</span></Typography>
      </Box>

      <Button onClick={onLogout} fullWidth sx={{ mt: 4, borderRadius: "16px", textTransform: "none", bgcolor: C.card, border: `1px solid ${C.border}`, color: C.text2, py: 1.5, fontWeight: 600, "&:hover": { bgcolor: C.card2 } }}>Logout</Button>

      <Box sx={{ height: 20 }} />
    </Box>
  );
}