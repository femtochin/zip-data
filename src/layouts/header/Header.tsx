import React from "react";
import FeatherIcon from "feather-icons-react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
// Dropdown Component
import SearchDD from "./SearchDD";
import ProfileDD from "./ProfileDD";
import IconBreadcrumbs from "../breadcrumbs/breadcrumbs";

type HeaderProps = {
  sx: object,
  customClass?: string,
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative',
  toggleSidebar?(): void,
  toggleMobileSidebar?(): void,
}

const Header = ({
  sx,
  customClass,
  toggleMobileSidebar,
  position,
}: HeaderProps) => {
  return (
    <AppBar sx={sx} position={position} elevation={0} className={customClass}>
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
          }}
        >
          <FeatherIcon icon="menu" width="20" height="20" />
        </IconButton>
        {/* Search Dropdown */}
        <SearchDD />

        <Box flexGrow={1} />

        <ProfileDD />
      </Toolbar>
      <IconBreadcrumbs />
    </AppBar>
  );
};

export default Header;
