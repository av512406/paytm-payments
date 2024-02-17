// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
// import { Dashboard } from "./pages/Dashboard";
// import { SendMoney } from "./pages/SendMoney";

// function App() {
//   return (
//     <>
//        <BrowserRouter>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/send" element={<SendMoney />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App



import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { useState } from "react";
import Toastcheck from "./pages/Toastcheck";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSignIn = (loggedIn) => {
  //   setIsLoggedIn(loggedIn);
  // };
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          {/* <Route path="/dashboard" element={isLoggedIn? <Dashboard  setIsLoggedIn={setIsLoggedIn}/> : <Signin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  /> } > */}
          <Route path="/dashboard" element={isLoggedIn? <Dashboard  setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/signin" />} />
          <Route path="/send" element={<SendMoney />} />
          {/* <Route path="/" element={<Toastcheck />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App