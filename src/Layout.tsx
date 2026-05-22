import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material"
import { Layout, Menu, type LayoutProps } from "react-admin"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { useState, useEffect } from "react"

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof document === "undefined") return false
    return document.documentElement.classList.contains("dark")
  })

  useEffect(() => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [dark])

  return (
    <IconButton
      onClick={() => setDark(!dark)}
      sx={{ color: "inherit" }}
      aria-label="Basculer le mode sombre"
    >
      {dark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}

function MyAppBar() {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
          EventSync Admin
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </MuiAppBar>
  )
}

export function MyLayout(props: LayoutProps) {
  return <Layout {...props} appBar={MyAppBar} menu={Menu} />
}
