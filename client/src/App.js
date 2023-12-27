// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";

// import { Outlet } from "react-router-dom";
// import Home from "./Home.js";
// import Walkers from "./Walker.js";
// import Cities from "./City.js";

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Navbar color="light" expand="md">
//           <Nav navbar>
//             <NavbarBrand href="/" element={<Home />}>🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>

//             <NavItem>
//               <NavLink href="/walkers" element={<Walkers />}>Walkers</NavLink>
//             </NavItem>

//             <NavItem>
//               <NavLink href="/cities" element={<Cities />}>Cities</NavLink>
//             </NavItem>

//           </Nav>
//         </Navbar>
//         <Outlet />
//       </>
//     </div>
//   );
// }

// export default App;
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import Walkers from "./Walker.js";
import Cities from "./City.js";
import DogDetail from "./DogDetails.js";

function App() {
  return (
    <div className="App">
      <>
        <Navbar color="light" expand="md">
          <Nav navbar>
            <NavbarBrand href="/">🐕‍🦺 🐩 DeShawn's Dog Walking</NavbarBrand>

            <NavItem>
              <NavLink href="/walkers">Walkers</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/cities">Cities</NavLink>
            </NavItem>

          </Nav>
        </Navbar>
        <Routes>
          <Route path="/walkers" element={<Walkers />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/" element={<Home />} />
          <Route path="/dog-detail/:dogId" element={<DogDetail />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
