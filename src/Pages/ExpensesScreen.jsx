import React, { useState } from 'react'

export default function ExpensesScreen() {
  const [view, setView] = useState("card")

  const expenses = [
    { id: 1, title: "Office Rent", amount: 50000, date: "2025-10-04", category: "Rent", type: "expense", icon: "🏢" },
    { id: 2, title: "Client Payment", amount: 120000, date: "2025-10-04", category: "Project", type: "income", icon: "💰" },
    { id: 3, title: "Steel Payment Pending", amount: 80000, date: "2025-10-03", category: "Material", type: "pending", icon: "🧱" },
    { id: 4, title: "Electricity Bill Done", amount: 12000, date: "2025-10-03", category: "Bills", type: "done", icon: "💡" },
    { id: 5, title: "Diesel", amount: 15000, date: "2025-10-02", category: "Fuel", type: "expense", icon: "⛽" },
    { id: 6, title: "Advance Received", amount: 50000, date: "2025-10-02", category: "Advance", type: "income", icon: "💵" },
    { id: 7, title: "Office Rent", amount: 50000, date: "2025-10-04", category: "Rent", type: "expense", icon: "🏢" },
    { id: 88, title: "Client Payment", amount: 120000, date: "2025-10-04", category: "Project", type: "income", icon: "💰" },
    { id: 8, title: "Steel Payment Pending", amount: 80000, date: "2025-10-03", category: "Material", type: "pending", icon: "🧱" },
    { id: 9, title: "Electricity Bill Done", amount: 12000, date: "2025-10-03", category: "Bills", type: "done", icon: "💡" },
    { id: 0, title: "Diesel", amount: 15000, date: "2025-10-02", category: "Fuel", type: "expense", icon: "⛽" },
    { id: 69, title: "Advance Received", amount: 50000, date: "2025-10-02", category: "Advance", type: "income", icon: "💵" },
  ]

  // group by date
  const grouped = expenses.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = []
    acc[item.date].push(item)
    return acc
  }, {})

  const getTypeStyle = (type) => {
    switch (type) {
      case "pending": return { bg: "#fef3c7", color: "#d97706", label: "PENDING" }
      case "done": return { bg: "#dcfce7", color: "#16a34a", label: "DONE" }
      case "expense": return { bg: "#fee2e2", color: "#dc2626", label: "EXPENSE" }
      case "income": return { bg: "#dbeafe", color: "#2563eb", label: "INCOME" }
      default: return { bg: "#eee", color: "#000", label: type }
    }
  }

  return (
    <div style={{ padding: 16, background: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Expenses</h2>
        <div style={{ display: "flex", gap: 8, background: "#fff", padding: 4, borderRadius: 8 }}>
          <button onClick={() => setView("card")} style={{ background: view==="card"?"#000":"#fff", color: view==="card"?"#fff":"#000", border: "none", padding: "6px 12px", borderRadius: 6 }}>Card</button>
          <button onClick={() => setView("list")} style={{ background: view==="list"?"#000":"#fff", color: view==="list"?"#fff":"#000", border: "none", padding: "6px 12px", borderRadius: 6 }}>List</button>
        </div>
      </div>

      {/* DATE GROUPED */}
      {Object.keys(grouped).sort().reverse().map(date => (
        <div key={date} style={{ marginTop: 20 }}>
          <h4 style={{ margin: "0 0 10px 4px", color: "#666" }}>📅 {date}</h4>

          {view === "card"? (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {grouped[date].map(item => {
                const style = getTypeStyle(item.type)
                return (
                  <div key={item.id} style={{ background: "#fff", padding: 14, borderRadius: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 28 }}>{item.icon}</span>
                      <span style={{ background: style.bg, color: style.color, fontSize: 10, fontWeight: "700", padding: "4px 8px", borderRadius: 20, height: "fit-content" }}>{style.label}</span>
                    </div>
                    <h4 style={{ margin: "8px 0 2px" }}>{item.title}</h4>
                    <p style={{ margin: 0, color: "#888", fontSize: 11 }}>{item.category}</p>
                    <h3 style={{ margin: "8px 0 0", color: item.type === "income"? "#2563eb" : "#e11d48" }}>Rs {item.amount.toLocaleString()}</h3>
                  </div>
                )
              })}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {grouped[date].map(item => {
                const style = getTypeStyle(item.type)
                return (
                  <div key={item.id} style={{ background: "#fff", padding: 12, borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div style={{ width: 44, height: 44, background: "#f5f5f5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: "600", display: "flex", gap: 6, alignItems: "center" }}>
                          {item.title} <span style={{ background: style.bg, color: style.color, fontSize: 9, padding: "2px 6px", borderRadius: 10 }}>{style.label}</span>
                        </div>
                        <div style={{ fontSize: 11, color: "#888" }}>{item.category}</div>
                      </div>
                    </div>
                    <div style={{ fontWeight: "700" }}>Rs {item.amount.toLocaleString()}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}