// Sidebar imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';

// Sidebar Data
export const SidebarData = [
	{
		path: "dashboard-home",
		icon: DashboardIcon,
		heading: "Dashboard",
	},
	{
		path: "dashboard-Admin",
		icon: AdminPanelSettingsIcon,
		heading: "Admin",
	},
	{
		path: "dashboard-Patient",
		icon: PersonIcon,
		heading: "User",
	},
	{
		path: "dashboard-Treatment",
		icon: AddShoppingCartIcon,
		heading: "Products",
	},
	{
	  path: "/#home",
	  icon: LogoutIcon,
	  heading: "Logout",
	},
];
