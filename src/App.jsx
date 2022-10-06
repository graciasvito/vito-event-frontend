import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup";
import DetailPage from "./pages/Detail";
import OrderPage from "./pages/Order";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*AUTH*/}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/*MAIN*/}
        <Route path="/" element={<LandingPage />} />
        {/*Detail*/}
        <Route path="/detail/:eventId" element={<DetailPage />} />
        {/*Order*/}
        <Route path="/order" element={<OrderPage />} />
        {/* PAGE NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
