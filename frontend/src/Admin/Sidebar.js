// Sidebar.js
import React from 'react';
import { SidebarContainer, SidebarLink, SidebarLogo } from '../StyledComponents/AdminPageStyles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogo>ADMIN</SidebarLogo>
      <SidebarLink href="#dashboard">Dashboard</SidebarLink>
      <SidebarLink href="#profile">Profile</SidebarLink>
      {/* <SidebarLink href="#">Subscription</SidebarLink>
      <SidebarLink href="#">Notification</SidebarLink>
      <SidebarLink href="#">Settings</SidebarLink> */}
    </SidebarContainer>
  );
};

export default Sidebar;
