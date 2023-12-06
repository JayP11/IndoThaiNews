import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import NavLatestNews from "./common/navlatestnews/NavLatestNews";
import NavTop from "./common/navtop/NavTop";
import Homepage from "./pages/homepage/Homepage";
import NavTime from "./common/navtime/NavTime";
import BusinessPage from "./pages/businesspage/BusinessPage";
import SportsPage from "./pages/sportspage/SportsPage";
import LifestylePage from "./pages/LifestylePage/LifestylePage";
import PoliticsPage from "./pages/politicspage/PoliticsPage";
import EntertainmentPage from "./pages/entertainmentpage/EntertainmentPage";
import TechnologyPage from "./pages/technologypage/TechnologyPage";
import NationalPage from "./pages/nationalpage/NationalPage";
import WorldPage from "./pages/worldpage/WorldPage";
import TravelPage from "./pages/travelpage/TravelPage";
import ContactPage from "./pages/contactpage/ContactPage";
import SingleNewsPage from "./pages/singlenewspage/SingleNewsPage";
import CategoryNewsPage from "./pages/categorynewspage/CategoryNewsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavTime />
        <NavTop />
        <Navbar />

        <NavLatestNews />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Business" element={<BusinessPage />}></Route>
          <Route path="/Sports" element={<SportsPage />}></Route>
          <Route path="/Lifestyle" element={<LifestylePage />}></Route>
          <Route path="/Politics" element={<PoliticsPage />}></Route>
          <Route path="/Entertainment" element={<EntertainmentPage />}></Route>
          <Route path="/Technology" element={<TechnologyPage />}></Route>
          <Route path="/National" element={<NationalPage />}></Route>
          <Route path="/World" element={<WorldPage />}></Route>
          <Route path="/Travel" element={<TravelPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route
            path="/CategoryNewsPage"
            element={<CategoryNewsPage />}></Route>
          <Route path="/SingleNewsPage" element={<SingleNewsPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
