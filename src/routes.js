/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import PurchaseManagement from "views/purchasemanagement.js"
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/xxx",
    name: "User Search",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/yyy",
    name: "Product Search",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/purchasemanagement",
    name: "Purchase Management",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: PurchaseManagement,
    layout: "/admin"
  },
  {
    path: "/employeemaster",
    name: "Employee Master",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/productmaster",
    name: "Product Master",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  //{
  //  path: "/dashboard",
  //  name: "Dashboard",
  //  rtlName: "لوحة القيادة",
  //  icon: Dashboard,
  //  component: DashboardPage,
  //  layout: "/admin"
  //},
  //{
  //  path: "/user",
  //  name: "User Profile",
  //  rtlName: "ملف تعريفي للمستخدم",
  //  icon: Person,
  //  component: UserProfile,
  //  layout: "/admin"
  //},
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
  ,
  //{
  //  path: "/typography",
  //  name: "Typography",
  //  rtlName: "طباعة",
  //  icon: LibraryBooks,
  //  component: Typography,
  //  layout: "/admin"
  //},
  //{
  //  path: "/icons",
  //  name: "Icons",
  //  rtlName: "الرموز",
  //  icon: BubbleChart,
  //  component: Icons,
  //  layout: "/admin"
  //},
  //{
  //  path: "/maps",
  //  name: "Maps",
  //  rtlName: "خرائط",
  //  icon: LocationOn,
  //  component: Maps,
  //  layout: "/admin"
  //},
  //{
  //  path: "/notifications",
  //  name: "Notifications",
  //  rtlName: "إخطارات",
  //  icon: Notifications,
  //  component: NotificationsPage,
  //  layout: "/admin"
  //},
  //{
  //  path: "/rtl-page",
  //  name: "RTL Support",
  //  rtlName: "پشتیبانی از راست به چپ",
  //  icon: Language,
  //  component: RTLPage,
  //  layout: "/rtl"
  //},
  //{
  //  path: "/upgrade-to-pro",
  //  name: "Upgrade To PRO",
  //  rtlName: "التطور للاحترافية",
  //  icon: Unarchive,
  //  component: UpgradeToPro,
  //  layout: "/admin"
  //}
];

export default dashboardRoutes;
