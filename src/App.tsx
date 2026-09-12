import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import { SplashScreen } from "./components/SplashScreen";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Sinistros = lazy(() => import("./pages/Sinistros"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
    window.scrollTo(0, 0);
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
        <Suspense fallback={null}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/sinistros" element={<Sinistros />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
