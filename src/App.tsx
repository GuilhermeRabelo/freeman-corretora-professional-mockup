import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { SplashScreen } from "./components/SplashScreen";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const SPLASH_SESSION_KEY = "freeman-splash-shown";

function shouldShowSplash() {
  if (typeof window === "undefined") return false;
  try {
    return !window.sessionStorage.getItem(SPLASH_SESSION_KEY);
  } catch {
    return false;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(shouldShowSplash);

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={() => {
            try {
              window.sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
            } catch {
              // ignore — sessionStorage may be blocked
            }
            setShowSplash(false);
          }}
        />
      )}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
