import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              FreakyNews
            </Link> 
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                  Business
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link> 
                </li>
              </ul>
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
              <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Checkbox dropdown
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
            <a className="dropdown-item" href="/">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Checkme1" />
                    <label className="form-check-label" htmlFor="Checkme1">Check me</label>
                </div>
            </a>
        </li>
        <li>
            <a className="dropdown-item" href="/">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Checkme2" />
                    <label className="form-check-label" htmlFor="Checkme2">Check me</label>
                </div>
            </a>
        </li>
        <li>
            <a className="dropdown-item" href="/">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Checkme3" />
                    <label className="form-check-label" htmlFor="Checkme3">Check me</label>
                </div>
            </a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
            <a className="dropdown-item" href="/">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Checkme4" />
                    <label className="form-check-label" htmlFor="Checkme4">Check me</label>
                </div>
            </a>
        </li>
    </ul>
</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
// export default function Navbar(props) {
//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           {props.title}
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">
//                 {props.aboutText}
//               </Link>
//             </li>
//           </ul>
//           {/* <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form> */}
//           <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//               onClick={props.toggleMode}
//             />
//             <label className="form-check-label" htmlhtmlFor="flexSwitchCheckDefault">
//               Enable DarkMode
//             </label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.prototypetype = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };
// Navbar.defaultProps = {
//   title: "Set Title Please",
//   aboutText: "Set About",
// };
