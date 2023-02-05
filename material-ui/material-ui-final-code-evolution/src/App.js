//https://www.youtube.com/watch?v=BHEPVdfBAqE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=1
import "./App.css";
// import MuiTypography from "./components/MuiTypography";
// import MuiButton from "./components/MuiButton";
// import MuiTextField from "./components/MuiTextField";
// import MuiSelect from "./components/MuiSelect";
// import MuiRadioButton from "./components/MuiRadioButton";
// import MuiCheckBox from "./components/MuiCheckBox";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiRating from "./components/MuiRating";
// import MuiAutoComplete from "./components/MuiAutoComplete";
// import MuiLayout from "./components/MuiLayout";
// import MuiCards from "./components/MuiCards";
// import MuiAccordion from "./components/MuiAccordion";
// import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
// import MuiLink from "./components/MuiLink";
// import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBadge from "./components/MuiBadge";
// import MuiList from "./components/MuiList";
// import MuiChip from "./components/MuiChip";
// import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackBar from "./components/MuiSnackBar";
import MuiDialogue from "./components/MuiDialogue";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiDatePicker from "./components/MuiDatePicker";
import MuiTab from "./components/MuiTab";
import MuiTimeline from "./components/MuiTImeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: "#f48c06",
      light: "#ffba08",
      dark: "#dc2f02",
    },
    primary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.red[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiNavbar />
        {/* <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox /> */}
        {/* <MuiSwitch />
      <MuiRating />
      <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCards />
      <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiLink />
      <MuiBreadCrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiBottomNavigation />
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip /> */}
        <MuiTable />
        <MuiAlert />
        <MuiSnackBar />
        <MuiDialogue />
        <MuiProgress />
        <MuiSkeleton />
        <MuiLoadingButton />
        <MuiDatePicker />
        <MuiTab />
        <MuiTimeline />
        <MuiMasonry />
        <MuiResponsiveness />
      </div>
    </ThemeProvider>
  );
}

export default App;
