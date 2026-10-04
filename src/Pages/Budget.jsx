import { Box, Card, CardContent, Typography, Stack, LinearProgress, Chip, Button, Divider, Avatar } from "@mui/material"

export default function BudgetScreen() {
  const budgets = [
    { cat: "Food & Grocery", spent: 35000, limit: 50000, icon: "🛒", color: "#22c55e" },
    { cat: "Transport", spent: 18000, limit: 20000, icon: "⛽", color: "#f59e0b" },
    { cat: "Bills", spent: 25000, limit: 25000, icon: "💡", color: "#ef4444" },
    { cat: "Shopping", spent: 12000, limit: 30000, icon: "🛍️", color: "#8b5cf6" },
    { cat: "Rent", spent: 40000, limit: 40000, icon: "🏠", color: "#06b6d4" },
  ]

  const totalSpent = budgets.reduce((a, b) => a + b.spent, 0)
  const totalLimit = budgets.reduce((a, b) => a + b.limit, 0)
  const percent = Math.round((totalSpent / totalLimit) * 100)

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", p: 2, pb: 4 }}>

      {/* TOP CARD */}
      <Card sx={{ borderRadius: 4, bgcolor: "#111827", color: "white" }}>
        <CardContent sx={{ p: 2.5 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={13} sx={{ opacity: 0.7 }}>Monthly Budget - Oct 2025</Typography>
            <Chip label={`${percent}% Used`} size="small" sx={{ bgcolor: percent > 80 ? "#ef4444" : "#22c55e", color: "white", fontWeight: 700, height: 22, fontSize: 11 }} />
          </Stack>
          <Typography fontWeight={800} fontSize={26} mt={1}>Rs {totalSpent.toLocaleString()} / Rs {totalLimit.toLocaleString()}</Typography>
          <LinearProgress variant="determinate" value={percent} sx={{ mt: 2, height: 8, borderRadius: 10, bgcolor: "rgba(255,255,255,0.1)", "& .MuiLinearProgress-bar": { bgcolor: percent > 80 ? "#ef4444" : "#22c55e" } }} />
          <Typography fontSize={11} sx={{ opacity: 0.6, mt: 1 }}>{totalLimit - totalSpent > 0 ? `Rs ${(totalLimit - totalSpent).toLocaleString()} left to spend` : "Budget exceeded!"}</Typography>

          <Stack direction="row" spacing={1.5} mt={2.5}>
            <Box sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.08)", p: 1.2, borderRadius: 3, textAlign: "center" }}>
              <Typography fontSize={11} sx={{ opacity: 0.6 }}>Spent</Typography>
              <Typography fontWeight={700}>Rs {(totalSpent/1000).toFixed(0)}k</Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.08)", p: 1.2, borderRadius: 3, textAlign: "center" }}>
              <Typography fontSize={11} sx={{ opacity: 0.6 }}>Saved</Typography>
              <Typography fontWeight={700} color="#22c55e">Rs {(totalLimit-totalSpent>0? totalLimit-totalSpent : 0).toLocaleString()}</Typography>
            </Box>
            <Box sx={{ flex: 1, bgcolor: "rgba(255,255,255,0.08)", p: 1.2, borderRadius: 3, textAlign: "center" }}>
              <Typography fontSize={11} sx={{ opacity: 0.6 }}>Daily Limit</Typography>
              <Typography fontWeight={700}>Rs {Math.round((totalLimit-totalSpent)/10).toLocaleString()}</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* CATEGORY BUDGETS */}
      <Typography fontWeight={700} mt={3} mb={1.5}>Category Breakdown</Typography>
      <Stack spacing={1.5}>
        {budgets.map(b => {
          const p = Math.round((b.spent / b.limit) * 100)
          return (
            <Card key={b.cat} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar sx={{ bgcolor: "#f1f5f9", width: 36, height: 36, fontSize: 18 }}>{b.icon}</Avatar>
                    <Box>
                      <Typography fontWeight={600} fontSize={14}>{b.cat}</Typography>
                      <Typography fontSize={11} color="text.secondary">Rs {b.spent.toLocaleString()} of Rs {b.limit.toLocaleString()}</Typography>
                    </Box>
                  </Stack>
                  <Typography fontWeight={700} fontSize={13} color={p > 90 ? "error.main" : "text.primary"}>{p}%</Typography>
                </Stack>
                <LinearProgress variant="determinate" value={p > 100 ? 100 : p} sx={{ mt: 1.5, height: 6, borderRadius: 10, bgcolor: "#f1f5f9", "& .MuiLinearProgress-bar": { bgcolor: b.color } }} />
              </CardContent>
            </Card>
          )
        })}
      </Stack>

      {/* AI SUGGESTIONS */}
      <Card sx={{ mt: 3, borderRadius: 4, border: "1px solid #e2e8f0" }}>
        <CardContent sx={{ p: 2.5 }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={1.5}>
            <Box sx={{ bgcolor: "#fef3c7", width: 32, height: 32, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>💡</Box>
            <Typography fontWeight={700}>Smart Suggestions</Typography>
            <Chip label="AI" size="small" sx={{ height: 18, fontSize: 10, fontWeight: 700, bgcolor: "#111827", color: "white" }} />
          </Stack>

          <Stack spacing={1.5}>
            <Box sx={{ bgcolor: "#fef2f2", p: 1.5, borderRadius: 3, borderLeft: "4px solid #ef4444" }}>
              <Typography fontSize={13} fontWeight={600}>⚠️ Transport almost over!</Typography>
              <Typography fontSize={12} color="text.secondary" mt={0.5}>You spent 90% of transport budget in 15 days. Try to limit Rs 200/day for remaining days to save Rs 2,000.</Typography>
            </Box>
            <Box sx={{ bgcolor: "#f0fdf4", p: 1.5, borderRadius: 3, borderLeft: "4px solid #22c55e" }}>
              <Typography fontSize={13} fontWeight={600}>✅ Great job on Shopping!</Typography>
              <Typography fontSize={12} color="text.secondary" mt={0.5}>You saved Rs 18,000 from shopping. Move Rs 10,000 to emergency saving, you will have Rs 50k saved this month.</Typography>
            </Box>
            <Box sx={{ bgcolor: "#eff6ff", p: 1.5, borderRadius: 3, borderLeft: "4px solid #3b82f6" }}>
              <Typography fontSize={13} fontWeight={600}>💰 Saving Idea</Typography>
              <Typography fontSize={12} color="text.secondary" mt={0.5}>If you cut Food delivery by 30%, you can save Rs 10,500. Cook at home 4 days/week.</Typography>
            </Box>
          </Stack>

          <Button fullWidth sx={{ mt: 2, bgcolor: "#111827", color: "white", borderRadius: 3, textTransform: "none", fontWeight: 700, py: 1.2, "&:hover": { bgcolor: "#000" } }}>Create Saving Goal</Button>
        </CardContent>
      </Card>

      {/* SAVING GOAL */}
      <Card sx={{ mt: 2, borderRadius: 4 }}>
        <CardContent sx={{ p: 2.5 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={700}>My Saving Goal</Typography>
            <Typography fontSize={12} color="text.secondary">🎯 Bike</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mt={1.5}>
            <Typography fontSize={13}>Rs 65,000 / Rs 150,000</Typography>
            <Typography fontSize={13} fontWeight={700} color="#22c55e">43%</Typography>
          </Stack>
          <LinearProgress variant="determinate" value={43} sx={{ mt: 1, height: 8, borderRadius: 10 }} color="success" />
          <Typography fontSize={11} color="text.secondary" mt={1}>You need Rs 28,300/month for 3 months to reach goal</Typography>
        </CardContent>
      </Card>

    </Box>
  )
}