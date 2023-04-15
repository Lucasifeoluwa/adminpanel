import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  AccountCircle,
  Assessment,
  Fitbit,
  LocalShipping,
  Logout,
  MonitorHeart,
  Notifications,
  Settings,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FikunAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Assessment className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeart className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Fitbit className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
