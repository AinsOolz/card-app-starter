// import { NavLink } from "react-router-dom";


// export default function Navbar() {
//   return (
//     <header>
//       <strong>Card App</strong>
//       <nav 
//         style={{ backgroundColor: "black", padding: "10px 20px"}}>
//       <div
//         style={{
//           display: "flex",
//           gap: "20px"}}>
//           <NavLink to="/"> Home </NavLink>
//           <NavLink to="/cards"> Cards </NavLink>
//           <NavLink to="/cards/new"> Add Card </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// }

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav
        style={{backgroundColor: "black", padding: "12px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "35px" }}>

          <strong style={{ color: "Yellow" }}>Card App</strong>

          <NavLink to="/" style={{ color: "pink",}}> Home </NavLink>
          <NavLink to="/cards" style={{ color: "pink",}}> Cards </NavLink>
          <NavLink to="/cards/new" style={{ color: "pink",}}> Add Card </NavLink>
        </div>
      </nav>
    </header>
  );
}
