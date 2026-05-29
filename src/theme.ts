import { createTheme } from "@mui/material/styles"

const shared = {
  typography: {
    fontFamily:
      '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 10,
  },
} as const

const cardOverrides = {
  root: {
    borderRadius: 12,
    boxShadow: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    },
  },
}

const sharedComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: 10,
        fontWeight: 500,
        fontSize: "0.875rem",
      },
      containedPrimary: { "&:hover": { backgroundColor: "#8c331a" } },
    },
  },
  MuiInputBase: { styleOverrides: { root: { borderRadius: 10 } } },
  MuiOutlinedInput: {
    styleOverrides: {
      root: { borderRadius: 10 },
    },
  },
  MuiCard: { styleOverrides: cardOverrides },
  MuiChip: { styleOverrides: { root: { borderRadius: 8 } } },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        margin: "2px 8px",
      },
    },
  },
  MuiList: { styleOverrides: { root: { padding: "4px 0" } } },
  MuiPaper: {
    styleOverrides: {
      root: { backgroundImage: "none" },
    },
  },
}

export const lightTheme = createTheme({
  ...shared,
  palette: {
    primary: { main: "#a33b20", contrastText: "#ffffff" },
    secondary: { main: "#a47963", contrastText: "#ffffff" },
    text: { primary: "#292f36", secondary: "#a47963" },
    background: { default: "#faf8f7", paper: "#ffffff" },
    divider: "#d9c9c2",
    action: {
      hover: "rgba(164, 121, 99, 0.08)",
      selected: "rgba(164, 121, 99, 0.12)",
    },
  },
  components: {
    ...sharedComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#292f36",
          boxShadow: "none",
          borderBottom: "1px solid #d9c9c2",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #d9c9c2",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "#d9c9c2" },
      },
    },
    MuiCard: {
      styleOverrides: {
        ...cardOverrides,
        root: cardOverrides.root,
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontWeight: 600,
<<<<<<< feat/style-improvement
            color: "#7a5c4d",
=======
            color: "#a47963",
>>>>>>> develop-admin
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottomColor: "#d9c9c2" },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          "&.Mui-selected": {
            backgroundColor: "rgba(163, 59, 32, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(163, 59, 32, 0.15)",
            },
          },
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  ...shared,
  palette: {
    mode: "dark",
    primary: { main: "#a33b20", contrastText: "#ffffff" },
    secondary: { main: "#a47963", contrastText: "#ffffff" },
    text: { primary: "#ffffff", secondary: "#c9a894" },
    background: { default: "#292f36", paper: "#1e2329" },
    divider: "#4a3f3a",
    action: {
      hover: "rgba(164, 121, 99, 0.15)",
      selected: "rgba(164, 121, 99, 0.25)",
    },
  },
  components: {
    ...sharedComponents,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e2329",
          boxShadow: "none",
          borderBottom: "1px solid #4a3f3a",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #4a3f3a",
          backgroundColor: "#292f36",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: "#4a3f3a" },
      },
    },
    MuiCard: {
      styleOverrides: {
        ...cardOverrides,
        root: cardOverrides.root,
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontWeight: 600,
<<<<<<< feat/style-improvement
            color: "#c9a894",
=======
            color: "#a47963",
>>>>>>> develop-admin
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottomColor: "#4a3f3a" },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 8px",
          color: "#ffffff",
          "&.Mui-selected": {
            backgroundColor: "rgba(163, 59, 32, 0.25)",
            "&:hover": {
              backgroundColor: "rgba(163, 59, 32, 0.35)",
            },
          },
        },
      },
    },
  },
})
