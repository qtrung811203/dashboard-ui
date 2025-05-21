import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  UserCheck,
  Calendar,
  Shield,
  UserCog,
} from "lucide-react";

import { Settings } from "lucide-react";
import SettingsDialog from "./SettingsDialog";

const DashboardSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#" },
    { icon: UserCheck, label: "Pending Suppliers", href: "#" },
    { icon: Calendar, label: "Pending Events", href: "#" },
    { icon: Shield, label: "Moderate Posts", href: "#" },
    { icon: UserCog, label: "User Management", href: "#" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4 font-medium">Admin Dashboard</div>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild tooltip={item.label}>
                <a href={item.href} className="flex items-center gap-2 py-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SettingsDialog>
              <SidebarMenuButton tooltip="Settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SettingsDialog>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
