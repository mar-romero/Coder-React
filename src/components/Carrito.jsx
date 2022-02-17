import React from "react";
import Chango from "../img/Chango.png";
function Carrito() {
  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={Chango}  height="40" width="40" ></img>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1"></ul>
      </div>
    </>
  );
}

export default Carrito;
