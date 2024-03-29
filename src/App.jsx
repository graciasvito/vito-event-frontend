import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

import Signin from "./pages/Signin/";
import Signup from "./pages/Signup";

import DetailPage from "./pages/Detail";
import OrderPage from "./pages/Order/";
import Payment from "./pages/Payment";

import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";

// import ManageEvent from "./pages/ManageEvent";
import CreateEvent from "./pages/Profile/createEvent";
import Counter from "./pages/Counter/functional-component";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/Profile/updatePassword";
import MyBooking from "./pages/Profile/myBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*AUTH*/}
        {/* PUBLIC AUTH ROUTE */}
        <Route element={<PublicRoute />}>
          {/* AUTH */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* PRIVATE ROUTE */}
        <Route element={<PrivateRoute />}>
          {/* MAIN */}
          <Route path="/" element={<LandingPage />} />

          {/* Payment */}
          <Route path="/payment" element={<Payment />} />
          {/*Detail*/}
          <Route path="/detail/:eventId" element={<DetailPage />} />
          {/*Order*/}
          <Route path="/order" element={<OrderPage />} />
          {/* Profile */}
          <Route path="/profile/edit-profile" element={<Profile />} />
          <Route path="/profile/updatepass" element={<UpdateProfile />} />
          <Route path="/profile/mybooking" element={<MyBooking />} />
        </Route>

        {/* PRIVATE ADMIN ROUTE */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          {/* <Route path="/manage-event" element={<ManageEvent />} /> */}
          <Route path="/create-event" element={<CreateEvent />} />
        </Route>

        {/* MAIN */}
        <Route path="/" element={<LandingPage />} />
        {/*Detail*/}
        <Route path="/detail/:eventId" element={<DetailPage />} />
        {/*Order*/}
        <Route path="/order" element={<OrderPage />} />

        {/* PAGE NOT FOUND */}

        <Route path="/*" element={<NotFound />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
