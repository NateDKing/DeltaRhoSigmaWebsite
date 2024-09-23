import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AppBar, Box, createTheme, Drawer, IconButton, Link, List, ListItem, ListItemButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color: 'inherit',
          backgroundColor: 'inherit',
        },
      },
    },
  },
});

export default function RootLayout() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{flexGrow: 1}}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}