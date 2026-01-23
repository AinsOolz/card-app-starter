import { Link } from "react-router-dom";

// export default function Home() {
//   /* TODO: Design and complete the Home page
//     - display instructions
//     - link to Cards page
//     - style as a landing page */

//   return (
//     <main>
//       <h1>Welcome to Card App</h1>
//       <p>Manage your card collection here.</p>
//       <Link to="/cards">View Cards</Link>
//     </main>
//   );
// }

import Img from "../assets/image.png";

export default function Home() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#231a1a",
        color: "white"
      }}
    >
      <img
        className="img-feat"
        src={Img}
        alt="magic the gathering"

        style={{
          width: "900px",
          height: "auto",
          display: "block",
          margin: "0 auto"
        }} />

      <main>
        <h1>Welcome to the Magic the Gathering Card Web!</h1>
        <h5>In the Magic™ game, you are counted among the elite spellcasters of the Multiverse—the Planeswalkers. Some are
          friends and others are foes. All wield terrifying magic and command armies of creatures torn from the endless planes of
          reality. Your deck of cards represents all the weapons in your arsenal. It contains the spells you know and the creatures
          you can summon to fight for you. Customize your own Magic deck, then challenge your friends to see whose spark
          burns the brightest!</h5>
        <p>Manage your card collection here</p>
        <Link to="/cards">
          <button type="button" style={{ backgroundColor: "pink", color: "black" }}>View Cards</button>
        </Link>

      </main>
    </div>
  );
}
