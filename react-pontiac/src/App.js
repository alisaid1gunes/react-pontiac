import React from "react";
import "./style.css";

export default function App() {
  const DATA = {
    navItems: ["Home", "Gallery", "About"],
    headTextItems: ["Pontiac", "GTO"],
    midTextItems: [
      "Type",
      "Convertible",
      "Fuel",
      "Gasoline",
      "Class",
      "Sport",
      "Production",
      "1964-1974"
    ],
   
  };

  function SearchBar() {
    return (
      <div
        className="input-group  border rounded-pill p-1 bg-light"
        id="searchbar">
        <div className="input-group-prepend border-0">
          <button
            id="button-addon4"
            type="button"
            className="btn btn-link text-dark img-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-search  text-dark"
              viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <input
          type="search"
          placeholder="Try Cadillac Eldorado"
          aria-describedby="button-addon4"
          className="input bg-none border-0 bg-light w-75"/>
      </div>
    );
  }

  function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid p-2 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-muted p-3"
                  aria-current="page"
                  href="#">
                  <h5>{DATA.navItems[0]}</h5>
                </a>
              </li>
              <li className="nav-item bg-light">
                <a className="nav-link  bg-light p-3" href="#">
                  <h5>{DATA.navItems[1]}</h5>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-muted p-3"
                  href="about.html"
                  tabIndex={-1}>
                  <h5>{DATA.navItems[2]}</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  function HeadText() {
    return (
      <div>
        <p className="mt-3 " id="big-pontiac">
          {DATA.headTextItems[0]}
        </p>
        <p id="gto">{DATA.headTextItems[1]}</p>
      </div>
    );
  }

  function MidText() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6 ">
            <p className="feature-text text-muted">{DATA.midTextItems[0]}</p>
            <p className="feature-text-bold">{DATA.midTextItems[1]}</p>
            <p className="feature-text text-muted">{DATA.midTextItems[2]}</p>
            <p className="feature-text-bold">{DATA.midTextItems[3]}</p>
          </div>
          <div className="col-sm-6">
            <p className="feature-text text-muted">{DATA.midTextItems[4]}</p>
            <p className="feature-text-bold">{DATA.midTextItems[5]}</p>
            <p className="feature-text text-muted">{DATA.midTextItems[6]}</p>
            <p className="feature-text-bold">{DATA.midTextItems[7]}</p>
          </div>
        </div>
      </div>
    );
  }
  function DescriptionText() {
    return (
      <div className="row mt-5 fs-6">
        <div className="col text-muted">
          <p>
            Pontiac GTO is a convertible with
            <br />
            2 doors and a front mounted power <br />
            plant which delivers its power through the <br />
            rear wheels. Its engine is a naturally aspirated <br />
            petrol, 6.4 litre. It runs with the power of 400 horses.
          </p>
        </div>
      </div>
    );
  }

  function PontiacImage() {
    return (
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <img
            src="https://i.imgyukle.com/2021/01/13/a0UA4o.png"
            alt="pontiac"
            className="img-fluid w-75"
            id="pontiac-image"/>
        </div>
      </div>
    );
  }
  function BottomText() {
    return (
      <div className="col-md-6 mt-5">
        <p className="fs-5 me-5 d-flex justify-content-start text-muted mb-3">
          For more our social media handles:
        </p>
      </div>
    );
  }

  function BottomImages() {
    return (
      <div class="row  mb-3 mt-5">
        <div class="col ms-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </div>
        <div class="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </div>
        <div class="col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-3" id="gray-background">
      <div className="container-fluid ps-5 pe-5" id="black-background">
        <div className="row ">
          <div className="col-md-4 mt-3">
            <div className="row">
              <div className="col-md-12">
                <div className="row d-flex align-start">
                  <SearchBar />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-light  d-flex justify-content-end">
            <div className="row ">
              <div className="col-md-4" id="col-nav">
                <NavBar />
              </div>
            </div>
          </div>
        </div>
        <div className="row text-light">
          <div className="col-md-4">
            <HeadText />
            <div className="row mt-5">
              <MidText />
              <DescriptionText />
            </div>
          </div>
          <div className="col-md-8 mt-5">
            <PontiacImage />
            <div className="row mt-5">
              <div className="row mt-2">
                <BottomText />
                <div className="col-md-6">
                  <BottomImages />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
