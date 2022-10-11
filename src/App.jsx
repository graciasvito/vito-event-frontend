import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

import Signin from "./pages/Signin/";
import Signup from "./pages/Signup";

import DetailPage from "./pages/Detail";
import OrderPage from "./pages/Order/example.jsx";

import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";
import ManageEvent from "./pages/ManageEvent";
import Counter from "./pages/Counter/functional-component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*AUTH*/}
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          {/*MAIN*/}
          <Route path="/" element={<LandingPage />} />
          {/*Detail*/}
          <Route path="/detail/:eventId" element={<DetailPage />} />
          {/*Order*/}
          <Route path="/order" element={<OrderPage />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/manage-event" element={<ManageEvent />} />
        </Route>

        {/* PAGE NOT FOUND */}

        <Route path="/*" element={<NotFound />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
