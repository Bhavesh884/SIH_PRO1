import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop5 from "./pages/desktop5";
import Desktop4 from "./pages/desktop4";
import Desktop6 from "./pages/desktop6";
import Desktop12 from "./pages/desktop12";
import Desktop9 from "./pages/desktop9";
import Desktop10 from "./pages/desktop10";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop5 />} />
      <Route path="/home" element={<Desktop4 />} />
      <Route path="/register" element={<Desktop6 />} />
      <Route path="/profile" element={<Desktop12 />} />
      <Route path="/today" element={<Desktop9 />} />
      <Route path="/contacts" element={<Desktop10 />} />
    </Routes>
  );
}
export default App;
