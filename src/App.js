
// import HomePage from "./Pages/Home";
import DashboardPage from "./Pages/DashboardPage";
import CreatePage from './Pages/CreatePage'
import UpdatePage from "./Pages/UpdatePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import SalaryPage from "./Pages/Head/SalaryPage";
import SellPage from "./Pages/Head/SellPage";
import OfficeRentPage from "./Pages/Head/OfficeRentPage";
import StationaryPage from "./Pages/Head/StationaryPage";
import SummaryPage from "./Pages/SummaryPage";
import TotalTypePage from "./Pages/TotalTypePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/CreatePage" element={<CreatePage />} />
          <Route path="/SalaryPage" element={<SalaryPage />} />
          <Route path="/SellPage" element={<SellPage />} />
          <Route path="/OfficeRentPage" element={<OfficeRentPage />} />
          <Route path="/StationaryPage" element={<StationaryPage />} />
          <Route path="/SummaryPage" element={<SummaryPage />} />
          <Route path="/TotalTypePage" element={<TotalTypePage />} />
          <Route path="/UpdatePage/:UserID" element={<UpdatePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
