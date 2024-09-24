import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AppBar, Box, Button, createTheme, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ThemeProvider, Toolbar, Typography } from "@mui/material";

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

const ToolbarButton = ({ text, href }: { text: string; href: string }) => {
  return (
    <Typography align="right" variant="h6" component="div" sx={{ padding: 1 }}>
      <Link href={href} color="inherit" underline="none">
        {text}
      </Link>
    </Typography>
  )
}

export default function RootLayout() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="inherit" underline="none">
                Delta Rho Sigma
              </Link>
            </Typography>
            <ToolbarButton text="Chapters" href="/" />
            <ToolbarButton text="Board" href="/" />
            <ToolbarButton text="Donate" href="/" />
            <ToolbarButton text="Contact us" href="/" />
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}