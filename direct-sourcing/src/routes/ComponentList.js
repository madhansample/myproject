import Home from "../component/home/Index";
import ClientAdmin from "../component/client/admin/Index";
import ClientCurator from "../component/client/curator/Index";
import ClientHiringManager from "../component/client/hiringmanager/Index";
import ClientTalentCommunity from "../component/client/talentcommunity/Index";
import StaffingAgencyAdmin from "../component/staffingagency/admin/Index";
import StaffingAgencyCurator from "../component/staffingagency/curator/Index";
import StaffingAgencyCustomerSuccess from "../component/staffingagency/customersuccess/Index";
import StaffingAgencyTalentCommunity from "../component/staffingagency/talentcommunity/Index";
import Index from "../component/job/viewjob/Index.js";

export const ComponentList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/client/admin",
    element: <ClientAdmin />,
  },
  {
    path: "/client/curator",
    element: <ClientCurator />,
  },
  {
    path: "/client/hiringmanager",
    element: <ClientHiringManager />,
  },
  {
    path: "/client/talentcommunity",
    element: <ClientTalentCommunity />,
  },
  {
    path: "/staffingagency/admin",
    element: <StaffingAgencyAdmin />,
  },
  {
    path: "/staffingagency/curator",
    element: <StaffingAgencyCurator />,
  },
  {
    path: "/staffingagency/customersuccess",
    element: <StaffingAgencyCustomerSuccess />,
  },
  {
    path: "/staffingagency/talentcommunity",
    element: <StaffingAgencyTalentCommunity />,
  },
  {
    path: "/carriers",
    element: <Index />,
  }

];
