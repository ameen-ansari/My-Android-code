import React, { useState } from 'react';
import { Box, Typography, Modal, Button, Stack, Divider, Switch, Slider, Chip, IconButton, Fade, Backdrop } from "@mui/material";
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

const C = {
  bg: "#F8FAFC",
  card: "#FFFFFF",
  border: "#E9EBEF",
  text: "#0F172A",
  text2: "#64748B",
  text3: "#94A3B8",
  violet: "#7C5CFF",
  indigo: "#6366F1",
};

// VIP Bottom Sheet Style
const modalStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  bgcolor: C.card,
  borderRadius: "28px 28px 0 0",
  p: 0,
  maxHeight: "88vh",
  outline: "none",
  overflow: "hidden",
  boxShadow: "0 -20px 60px rgba(0,0,0,0.15)",
  border: `1px solid ${C.border}`,
  borderBottom: "none",
};

function ModalHeader({ icon: Icon, iconBg, iconColor, title, sub, onClose }) {
  return (
    <Box sx={{ p: 2.5, pb: 2 }}>
      <Box sx={{ width: 40, height: 5, bgcolor: "#E2E8F0", borderRadius: 10, mx: "auto", mb: 2.5 }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1.6} alignItems="center">
          <Box sx={{ 
            width: 48, height: 48, 
            background: `linear-gradient(135deg, ${iconBg} 0%, #fff 100%)`,
            border: `1px solid ${iconColor}15`,
            borderRadius: "16px", 
            display: "grid", placeItems: "center", color: iconColor,
            boxShadow: `0 4px 12px ${iconColor}15`
          }}>
            <Icon sx={{ fontSize: 22 }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>{title}</Typography>
            <Typography sx={{ fontSize: 12.5, color: C.text2, mt: 0.2 }}>{sub}</Typography>
          </Box>
        </Stack>
        <IconButton onClick={onClose} sx={{ width: 40, height: 40, bgcolor: C.bg, border: `1px solid ${C.border}`, borderRadius: "12px" }}>
          <CloseRoundedIcon sx={{ fontSize: 18, color: C.text2 }} />
        </IconButton>
      </Stack>
    </Box>
  );
}

// 1. ACCOUNTS - VIP
export function AccountsModal({ open, onClose, onAdd}) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}>
      <Fade in={open}>
        <Box sx={modalStyle}>
          <ModalHeader icon={AccountBalanceRoundedIcon} iconBg="#EEF2FF" iconColor={C.violet} title="Accounts" sub="Manage your money" onClose={onClose} />
          <Divider sx={{ borderColor: C.bg }} />
          <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1.2, overflowY: "auto", maxHeight: "50vh" }}>
            {[
              { bank: "HBL • Habib Bank", num: "**** 4582", bal: "Rs 420,000", color: "#10B981", active: true },
              { bank: "JazzCash Wallet", num: "**** 9012", bal: "Rs 85,500", color: "#F59E0B", active: false },
              { bank: "Easypaisa", num: "**** 1123", bal: "Rs 37,000", color: "#0EA5E9", active: false },
            ].map((a) => (
              <Box key={a.bank} sx={{ 
                p: 2, borderRadius: "18px", 
                border: `1px solid ${a.active ? C.violet + "30" : C.border}`,
                bgcolor: a.active ? "#F5F3FF" : C.bg,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                transition: "all 0.2s"
              }}>
                <Box sx={{ display: "flex", gap: 1.4, alignItems: "center" }}>
                  <Box sx={{ width: 46, height: 46, bgcolor: C.card, border: `1px solid ${C.border}`, borderRadius: "13px", display: "grid", placeItems: "center" }}>
                    <CreditCardRoundedIcon sx={{ fontSize: 20, color: a.color }} />
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: 14 }}>{a.bank}</Typography>
                      {a.active && <CheckCircleRoundedIcon sx={{ fontSize: 14, color: C.violet }} />}
                    </Box>
                    <Typography sx={{ fontSize: 12, color: C.text2 }}>{a.num} • {a.bal}</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: 10, height: 10, bgcolor: a.color, borderRadius: "50%", boxShadow: `0 0 0 4px ${a.color}20` }} />
              </Box>
            ))}
          </Box>
          <Box sx={{ p: 2.5, pt: 0 }}>
            <Button onClick={onAdd} fullWidth sx={{ bgcolor: C.text, color: "#fff", borderRadius: "16px", py: 1.7, textTransform: "none", fontWeight: 700, fontSize: 14, "&:hover": { bgcolor: "#1E293B" } }}>
              + Add New Account
            </Button>
            <Typography sx={{ textAlign: "center", fontSize: 11, color: C.text3, mt: 1.5 }}>Secured by 256-bit encryption</Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// 2. BUDGET LIMITS - VIP
export function BudgetLimitsModal({ open, onClose }) {
  const [budget, setBudget] = useState(100000);
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}>
      <Fade in={open}>
        <Box sx={modalStyle}>
          <ModalHeader icon={PieChartRoundedIcon} iconBg="#FFF7ED" iconColor="#F59E0B" title="Budget Limits" sub="Stay in control" onClose={onClose} />
          <Divider sx={{ borderColor: C.bg }} />
          <Box sx={{ p: 2.5 }}>
            <Box sx={{ bgcolor: "#FFFBEB", border: "1px solid #FDE68A", p: 2, borderRadius: "16px", textAlign: "center" }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#92400E" }}>MONTHLY LIMIT</Typography>
              <Typography sx={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", mt: 0.5 }}>Rs {budget.toLocaleString()}</Typography>
              <Slider value={budget} min={20000} max={500000} step={10000} onChange={(e, v) => setBudget(v)}
                sx={{ mt: 1, color: C.violet, height: 6, "& .MuiSlider-thumb": { width: 24, height: 24, bgcolor: "#fff", border: `4px solid ${C.violet}`, boxShadow: "0 2px 10px rgba(124,92,255,0.3)" }, "& .MuiSlider-track": { height: 6, borderRadius: 10 }, "& .MuiSlider-rail": { height: 6, bgcolor: "#E9EBEF", borderRadius: 10 } }} />
            </Box>
            <Stack direction="row" spacing={1.2} mt={2}>
              <Box sx={{ flex: 1, p: 1.6, borderRadius: "16px", bgcolor: C.bg, border: `1px solid ${C.border}` }}>
                <Typography sx={{ fontSize: 11, fontWeight: 700, color: C.text3 }}>FOOD • 42%</Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 700, mt: 0.5 }}>Rs 42k / 40k</Typography>
                <Box sx={{ mt: 1, height: 4, bgcolor: "#fff", borderRadius: 10 }}><Box sx={{ width: "85%", height: "100%", bgcolor: "#EF4444", borderRadius: 10 }} /></Box>
              </Box>
              <Box sx={{ flex: 1, p: 1.6, borderRadius: "16px", bgcolor: C.bg, border: `1px solid ${C.border}` }}>
                <Typography sx={{ fontSize: 11, fontWeight: 700, color: C.text3 }}>SHOPPING • 18%</Typography>
                <Typography sx={{ fontSize: 13, fontWeight: 700, mt: 0.5 }}>Rs 18k / 30k</Typography>
                <Box sx={{ mt: 1, height: 4, bgcolor: "#fff", borderRadius: 10 }}><Box sx={{ width: "60%", height: "100%", bgcolor: C.violet, borderRadius: 10 }} /></Box>
              </Box>
            </Stack>
            <Button fullWidth sx={{ mt: 2.5, background: `linear-gradient(135deg, ${C.violet} 0%, ${C.indigo} 100%)`, color: "#fff", borderRadius: "16px", py: 1.7, textTransform: "none", fontWeight: 700, boxShadow: "0 6px 20px rgba(124,92,255,0.3)" }}>Save Budget</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// 3. NOTIFICATIONS - VIP
export function NotificationsModal({ open, onClose }) {
  const [t, setT] = useState({ expense: true, budget: true, weekly: false });
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}>
      <Fade in={open}>
        <Box sx={modalStyle}>
          <ModalHeader icon={NotificationsRoundedIcon} iconBg="#ECFDF5" iconColor="#10B981" title="Notifications" sub="Stay updated" onClose={onClose} />
          <Divider sx={{ borderColor: C.bg }} />
          <Box sx={{ p: 1, px: 2.5 }}>
            {[
              { k: "expense", title: "Expense Alerts", desc: "Instant push for every transaction", pro: true },
              { k: "budget", title: "Budget Warning", desc: "Alert at 80% limit reached" },
              { k: "weekly", title: "Weekly Report", desc: "Summary every Monday 9AM" },
            ].map((i) => (
              <Box key={i.k} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 2, borderBottom: `1px solid ${C.bg}`, "&:last-child": { border: 0 } }}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontWeight: 650, fontSize: 14 }}>{i.title}</Typography>
                    {i.pro && <Chip label="PRO" sx={{ height: 18, fontSize: 9, fontWeight: 800, bgcolor: "#0F172A", color: "#fff" }} />}
                  </Box>
                  <Typography sx={{ fontSize: 12, color: C.text2, mt: 0.2 }}>{i.desc}</Typography>
                </Box>
                <Switch checked={t[i.k]} onChange={(e) => setT({ ...t, [i.k]: e.target.checked })} sx={{ "& .MuiSwitch-switchBase.Mui-checked": { color: C.violet }, "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { bgcolor: C.violet } }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// 4. PRIVACY & SECURITY - VIP
export function PrivacySecurityModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}>
      <Fade in={open}>
        <Box sx={modalStyle}>
          <ModalHeader icon={LockRoundedIcon} iconBg="#FEF2F2" iconColor="#EF4444" title="Privacy & Security" sub="Your data is safe" onClose={onClose} />
          <Divider sx={{ borderColor: C.bg }} />
          <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ p: 2, borderRadius: "16px", border: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box><Typography sx={{ fontWeight: 650, fontSize: 14 }}>Change Password</Typography><Typography sx={{ fontSize: 12, color: C.text2 }}>Last changed 2 months ago</Typography></Box>
              <Typography sx={{ fontSize: 13, color: C.text3 }}>›</Typography>
            </Box>
            <Box sx={{ p: 2, borderRadius: "16px", border: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box><Typography sx={{ fontWeight: 650, fontSize: 14 }}>Face ID</Typography><Typography sx={{ fontSize: 12, color: C.text2 }}>Unlock with biometrics</Typography></Box>
              <Switch defaultChecked sx={{ "& .MuiSwitch-switchBase.Mui-checked": { color: C.violet }, "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { bgcolor: C.violet } }} />
            </Box>
            <Box sx={{ p: 2, borderRadius: "16px", bgcolor: "#0F172A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box><Typography sx={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>Two-Factor Auth</Typography><Typography sx={{ fontSize: 12, color: "#94A3B8" }}>Recommended for security</Typography></Box>
              <Button size="small" sx={{ bgcolor: "#fff", color: "#0F172A", borderRadius: "20px", textTransform: "none", fontWeight: 700, px: 2 }}>Enable</Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

// 5. EXPORT DATA - VIP
export function ExportDataModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ sx: { backdropFilter: "blur(8px)", bgcolor: "rgba(15,23,42,0.4)" } }}>
      <Fade in={open}>
        <Box sx={modalStyle}>
          <ModalHeader icon={FileDownloadRoundedIcon} iconBg="#F0F9FF" iconColor="#0EA5E9" title="Export Data" sub="Download your reports" onClose={onClose} />
          <Divider sx={{ borderColor: C.bg }} />
          <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", gap: 1.2 }}>
            <Box sx={{ p: 2.2, borderRadius: "18px", border: `1px solid ${C.border}`, bgcolor: C.bg, display: "flex", gap: 1.5, alignItems: "center", cursor: "pointer", "&:hover": { borderColor: C.violet + "40", bgcolor: "#F5F3FF" } }}>
              <Box sx={{ width: 44, height: 44, bgcolor: "#fff", borderRadius: "12px", display: "grid", placeItems: "center", fontSize: 20 }}>📄</Box>
              <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 700, fontSize: 14 }}>Export as PDF</Typography><Typography sx={{ fontSize: 12, color: C.text2 }}>Full report with charts & summary</Typography></Box>
              <Chip label="VIP" sx={{ height: 22, bgcolor: C.violet, color: "#fff", fontWeight: 700, fontSize: 10 }} />
            </Box>
            <Box sx={{ p: 2.2, borderRadius: "18px", border: `1px solid ${C.border}`, bgcolor: C.bg, display: "flex", gap: 1.5, alignItems: "center", cursor: "pointer" }}>
              <Box sx={{ width: 44, height: 44, bgcolor: "#fff", borderRadius: "12px", display: "grid", placeItems: "center", fontSize: 20 }}>📊</Box>
              <Box sx={{ flex: 1 }}><Typography sx={{ fontWeight: 700, fontSize: 14 }}>Export as CSV</Typography><Typography sx={{ fontSize: 12, color: C.text2 }}>For Excel & Google Sheets</Typography></Box>
            </Box>
            <Button fullWidth sx={{ mt: 1, bgcolor: C.text, color: "#fff", borderRadius: "16px", py: 1.7, textTransform: "none", fontWeight: 700 }}>Export Now</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}