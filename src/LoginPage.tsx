import { useState } from "react"
import { Box, Card, TextField, Typography } from "@mui/material"
import { useLogin, useNotify } from "react-admin"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = useLogin()
  const notify = useNotify()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      await login({ username: email, password })
    } catch {
      notify("Email ou mot de passe incorrect", { type: "error" })
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `
          radial-gradient(ellipse at center, color-mix(in srgb, #a33b20 12%, transparent) 0%, transparent 70%),
          radial-gradient(ellipse at 30% 20%, color-mix(in srgb, #a47963 10%, transparent) 0%, transparent 50%),
          linear-gradient(to right, color-mix(in srgb, #a47963 20%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, #a47963 20%, transparent) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
        backgroundColor: "var(--home-bg, #ffffff)",
      }}
    >
      <Card
        sx={{
          width: 400,
          p: 4,
          borderRadius: "16px",
          border: "1px solid #d9c9c2",
          boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          sx={{ color: "#292f36", mb: 0.5 }}
        >
          EventSync
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "#a47963", mb: 3 }}
        >
          Administration
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Mot de passe"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />
          <button
            type="submit"
            className="sunset-btn"
            style={{
              width: "100%",
              padding: "10px 16px",
              border: "none",
              borderRadius: 10,
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
        </Box>
      </Card>
    </Box>
  )
}
