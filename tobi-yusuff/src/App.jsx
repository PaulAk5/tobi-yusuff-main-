import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav              from "./components/Nav";
import Footer           from "./components/Footer";
import HomePage         from "./pages/HomePage";
import AboutPage        from "./pages/AboutPage";
import ExpertisePage    from "./pages/ExpertisePage";
import MediaPage        from "./pages/MediaPage";
import PhilanthropyPage from "./pages/PhilanthropyPage";
import InsightsPage     from "./pages/InsightsPage";
import ContactPage      from "./pages/ContactPage";
import HiddenEconomics   from "./pages/articles/HiddenEconomics";
import BeyondRemittances from "./pages/articles/BeyondRemittances";
import UnlockingNigeria  from "./pages/articles/UnlockingNigeria";
import LupusSummit from "./pages/articles/LupusSummit";
import OilShocksReach from "./pages/articles/OilShocksReach";
import ElectionSignal from "./pages/articles/ElectionSignal";
import NigeriaInfrastructure from "./pages/articles/NigeriaInfrastructure";
import HomeOwnership from "./pages/articles/HomeOwnership";
import BusinessReality from "./pages/articles/BusinessReality";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = location.pathname.replace("/", "") || "home";
  const isArticlePage = location.pathname.startsWith("/insights/") || location.pathname.startsWith("/philanthropy/");

  const navigateTo = (p) => {
    const path = p === "home" ? "/" : p.startsWith("/") ? p : `/${p}`;
    navigate(path);
  };

  return (
    <>
    <ScrollToTop />
      <Nav
        currentPage={currentPage}
        navigate={navigateTo}
        transparent={isArticlePage}
        forceDark={
          !isArticlePage && (
            currentPage === "about" ||
            currentPage === "expertise" ||
            currentPage === "media" ||
            currentPage === "contact" ||
            currentPage === "philanthropy" ||
            currentPage === "insights"
          )
        }
      />
      <main>
        <Routes>
          <Route path="/"              element={<HomePage navigate={navigateTo} />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="/expertise"     element={<ExpertisePage />} />
          <Route path="/media"         element={<MediaPage navigate={navigateTo} />} />
          <Route path="/philanthropy"  element={<PhilanthropyPage />} />
          <Route path="/insights"      element={<InsightsPage />} />
          <Route path="/contact"       element={<ContactPage />} />
          <Route path="/insights/hidden-economics-off-plan"     element={<HiddenEconomics />} />
          <Route path="/insights/beyond-remittances"            element={<BeyondRemittances />} />
          <Route path="/insights/unlocking-nigeria-real-estate" element={<UnlockingNigeria />} />
          <Route path="/insights/when-oil-shocks-reach-nigeria" element={<OilShocksReach />} />
          <Route path="/insights/housing-and-ownership-in-nigeria"     element={<HomeOwnership />} />
          <Route path="/insights/nigerians-election-cycle-and-early-signals" element={<ElectionSignal />} />
          <Route path="/insights/the-true-cost-of-doing-business-in-nigeria" element={<BusinessReality />} />
          <Route path="/insights/nigeria-infrastructure-and-the-question-of-capital-allocation" element={<NigeriaInfrastructure />} />
          <Route path="/philanthropy/lupus-summit" element={<LupusSummit />} />
        </Routes>
      </main>
      <Footer navigate={navigateTo} />
    </>
  );
}