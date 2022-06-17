import React from "react";
import NextLink from "next/link";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  Stack, 
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import LogoIcon from "../logo/LogoIcon";
import Menuitems from "./MenuItems";
import Buynow from "./Buynow";
import { useRouter } from "next/router";
import SvgIcon from '@mui/material/SvgIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';

const HomeIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

type SidebarProp = {
    isMobileSidebarOpen: boolean,
    onSidebarClose(): void,
    isSidebarOpen: boolean,
} 


const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: SidebarProp) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const handleClick = (index: any) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  }

  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <Stack spacing={2} direction="row" height="100%">
      <Box height="100%" width="70px">
        <div className="iconlist">
          <Box sx={{ width: '100%' }}  className="logoBox">
            <LogoIcon />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
              <Link className="listIconBttn"><HomeIcon color="primary" /></Link>
              <Link className="listIconBttn"><DashboardIcon color="primary" /></Link>
              <Link className="listIconBttn"><BarChartIcon color="primary" /></Link>
              <Link className="listIconBttn"><TableChartIcon color="primary" /></Link>
            </Stack>
          </Box>          
        </div>
      </Box>
      <Box height="100%">
      <Box sx={{ width: '100%' }}  className="logoText">
          Zip Data
      </Box>
      <Box mt={2}>
        <List>
          {Menuitems.map((item, index) => (
            <List component="li" disablePadding key={item.title}>
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => handleClick(index)}
                  button
                  selected={location === item.href}
                  sx={{
                    mb: 1,
                    ...(location === item.href && {
                      color: "white",
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon>
                    <FeatherIcon
                      style={{
                        color: `${location === item.href ? "white" : ""} `,
                      }}
                      icon={item.icon}
                      width="20"
                      height="20"
                    />
                  </ListItemIcon>

                  <ListItemText onClick={onSidebarClose}>
                    {item.title}
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>
      </Box>
    </Box>
    </Stack>
  )
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    )
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  )
}

export default Sidebar
