import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#a33b20",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#a47963",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#292f36",
      secondary: "#a47963",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#d9c9c2",
    action: {
      hover: "rgba(164, 121, 99, 0.08)",
      selected: "rgba(164, 121, 99, 0.12)",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
  components: {
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
          fontWeight: 500,
          fontSize: "0.875rem",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#8c331a",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
        notchedOutline: {
          borderColor: "#d9c9c2",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid #d9c9c2",
          boxShadow: "none",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontWeight: 600,
            color: "#a47963",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#d9c9c2",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
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
    MuiList: {
      styleOverrides: {
        root: {
          padding: "4px 0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
})
