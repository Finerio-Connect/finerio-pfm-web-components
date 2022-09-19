class Sidenav extends HTMLElement {
  _elementSelected = null;
  constructor() {
    super(); /* 
    if (this.hasAttribute("element-selected")) {
      this._elementSelected = this.getAttribute("element-selected");
    } */
  }

  static get observedAttributes() {
    return ["element-selected"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === "element-selected") {
        this._elementSelected = newValue;
      }
    }
  }


  connectedCallback() {
    this.innerHTML = `
            <style>
              .sidenav {
                height: 100%;
                width: 176px;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #333F65;
                overflow-x: hidden;
                padding: 20px 12px;
              }

              .sidenav .logo{
                display: block;
                width: 112px;
                height: 28px;
                margin: 22px 0 31px 10px;
              }

              .sidenav .list{
                display: flex;
                flex-direction: column;
                width: 100%;
              }

              .sidenav .list .list-item{
                position: relative;
                display: flex;
                align-items: center;
                height: 36px;
                margin: 3px 0;
                transition: all 0.25s linear;
              }

              .sidenav .list .list-item:hover{
                background-color: #656E8D;
                border-radius: 3px;
              }

              .sidenav .list .list-item a{
                min-height: 36px;
                width: 100%;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 36px;
                color: #E3E5EB;
                text-decoration: none;
                padding-left: 38px;
              }

              .sidenav .list .list-item img{
                position: absolute;
                display: block;
                width: 16px;
                height: 16px;
                left: 12px;
                pointer-events: none;
              }

              .sidenav .list .list-item.selected{
                background-color: #00113D;
                border-radius: 3px;
              }

              .sidenav .list .list-item.selected a{
                color: #3FD8AF;
                pointer-events: none;
              }
            </style>
            <div class="sidenav">
              <img class="logo" src="assets/logo.png" />
              <div class="list">
                  <div class="list-item${
                    this._elementSelected === "summary" ? " selected" : ""
                  }"><img src="assets/summary${
      this._elementSelected === "summary" ? "-selected" : ""
    }-icon.png" /><a href="summary.html">Resumen</a></div>
                  <div class="list-item${
                    this._elementSelected === "movements" ? " selected" : ""
                  }"><img src="assets/movements${
      this._elementSelected === "movements" ? "-selected" : ""
    }-icon.png" /><a href="movements.html">Movimientos</a></div>
                  <div class="list-item${
                    this._elementSelected === "accounts" ? " selected" : ""
                  }"><img src="assets/accounts${
      this._elementSelected === "accounts" ? "-selected" : ""
    }-icon.png" /><a href="accounts.html">Mis Cuentas</a></div>
                  <div class="list-item${
                    this._elementSelected === "budgets" ? " selected" : ""
                  }"><img src="assets/budgets${
      this._elementSelected === "budgets" ? "-selected" : ""
    }-icon.png" /><a href="budgets.html">Presupuestos</a></div>
                  <div class="list-item${
                    this._elementSelected === "categories" ? " selected" : ""
                  }"><img src="assets/category${
      this._elementSelected === "categories" ? "-selected" : ""
    }-icon.png" /><a href="categories.html">Categorías</a></div>
              </div>
            </div>
        `;
  }
}

customElements.define("sidenav-component", Sidenav);
