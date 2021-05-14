(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\Coding\JavaScript\Aplicaciones Web ITESO\Asistencias Clase\proyectoItesoAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "04Es":
/*!*********************************************************!*\
  !*** ./src/app/components/browser/browser.component.ts ***!
  \*********************************************************/
/*! exports provided: BrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserComponent", function() { return BrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/proyecto.service */ "TMDr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BrowserComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aviso");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No se puede visualizar la informacion detalla de los eventos porque no has iniciado seccion o registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Preciona aqui para iniciar seccion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BrowserComponent {
    constructor(authService, proyectoService) {
        this.authService = authService;
        this.proyectoService = proyectoService;
        this.totalPages = 1;
        this.actualPage = 1;
        this.NAME_FILTER = '';
        this.PAGES = {
            current: 1,
            currentIndex: 0,
        };
        this.ban = true;
        this.ban2 = true;
        this.loggedIn = false;
    }
    gameToHTML(game) {
        return `
    <div class="media">
        <img style="width: 30px; height: 30px;"
        src="${game.image}"
        class="mr-3" alt="...">
        <div class="media-body border-1">
        <h5 class="mt-0">${game.nombre}</h5> Puntaje: ${game.clas}
        </div>
    </div>
    `;
    }
    gameListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.gameToHTML).join('');
        }
    }
    paginado(listp, cases) {
        let actualPage = 1;
        switch (cases) {
            case 1:
                listp[1].querySelector('a').innerHTML = actualPage - 1;
                listp[2].querySelector('a').innerHTML = actualPage;
                listp[3].querySelector('a').innerHTML = actualPage + 1;
                break;
            case 2:
                listp[0].classList.remove('disabled');
                listp[1].classList.remove('active');
                listp[1].querySelector('a').innerHTML = actualPage - 1;
                listp[2].classList.add('active');
                listp[2].querySelector('a').innerHTML = actualPage;
                listp[3].innerHTML = `<a class="page-link" id="last">${actualPage + 1}</a>`;
                break;
            case 3:
                listp[1].querySelector('a').innerHTML = actualPage - 1;
                listp[2].querySelector('a').innerHTML = actualPage;
                listp[3].innerHTML = '';
                listp[4].classList.add('disabled');
                break;
            case 4:
                listp[1].querySelector('a').innerHTML = actualPage - 1;
                listp[2].querySelector('a').innerHTML = actualPage;
                listp[3].innerHTML = `<a class="page-link" id="last">${actualPage + 1}</a>`;
                listp[4].classList.remove('disabled');
                break;
            case 5:
                listp[0].classList.add('disabled');
                listp[1].classList.add('active');
                listp[2].classList.remove('active');
                listp[3].innerHTML = '';
                break;
            default:
                break;
        }
    }
    carouselToHTML(tourney) {
        return `
     <div class="${tourney.pos === 1 ? "carousel-item active" : "carousel-item"}">
          <img src="${tourney.image}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
              <span class="d-block p-2 bg-dark text-white">
                  <h5>${tourney.nombre}</h5>
                  <p>${tourney.juego}</p>
                  <p>${tourney.fechai}</p>
                  <a href="/detail?id=${tourney._id}" type="button" class="btn btn-primary btn-lg btn-block">Ver Torneo</a>
              </span>
          </div>
      </div>`;
    }
    tourneyToHTML(tourneys) {
        return `
    <div class="media col-8 mt-2">
        <div class="media-left align-self-center mr-3">
            <img class="rounded-circle" style="width: 200px; height: 200px" src="${tourneys.image}">
        </div>
        <div class="media-body">
                <h4>${tourneys.nombre}</h4>
                <p>Juego: ${JSON.stringify(tourneys.juego)}</p>
                <p>Fecha: ${tourneys.fechai} </p>
                <p>Costo: ${tourneys.cost} </p>
                <p>Direccion: ${tourneys.place}</p>
            </div>
        <div class="media-right align-self-center" *ngIf="!loggedIn">
            <div class="row" >
                <div  class="btn btn-primary" data-user='${JSON.stringify(tourneys)}' > <a class="text-white"
                 href="/detail?id=${tourneys._id}"><i class="fas fa-search"></i></a></div>
            </div>

        </div>
    </div>`;
    }
    tourneyListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.tourneyToHTML).join('');
        }
    }
    getTourneysPage(page, filter) {
        this.proyectoService.getTourneysFilter(filter, page).then(result => {
            let listTourneys = result.content;
            this.totalPages = result.totalPages;
            this.tourneyListToHTML(listTourneys, 'lista');
        });
    }
    ngOnInit() {
        this.authService.loginStatus.subscribe(status => {
            this.loggedIn = status;
        });
        this.getTourneysPage(1, this.NAME_FILTER);
        const filterInput = document.getElementById('filterInput');
        filterInput.addEventListener('change', (e) => {
            this.NAME_FILTER = `&name=${e.target.value}`;
            this.getTourneysPage(this.PAGES.current, this.NAME_FILTER);
        });
        const ulHTML = document.getElementById('pagesList');
        const list = ulHTML.querySelectorAll('li');
        list[0].classList.add('disabled');
        list[3].innerHTML = '';
        ulHTML.addEventListener('click', (e) => {
            if ((e.target.id === 'second' && this.actualPage == 1) || e.target.id === 'next' || (e.target.id === 'last' && this.actualPage !== this.totalPages)) {
                this.getTourneysPage(++this.actualPage, this.NAME_FILTER);
                if (this.actualPage < this.totalPages) {
                    if (!this.ban) {
                        this.paginado(list, 1);
                    }
                    else {
                        this.paginado(list, 2);
                        this.ban = false;
                    }
                }
                else {
                    this.paginado(list, 3);
                    this.ban2 = true;
                }
            }
            if ((e.target.id === 'first' && this.actualPage == this.totalPages) || e.target.id === 'prev' || (e.target.id === 'first' && this.actualPage !== 1)) {
                this.getTourneysPage(--this.actualPage, this.NAME_FILTER);
                if (this.actualPage > 1) {
                    if (!this.ban2) {
                        this.paginado(list, 1);
                    }
                    else {
                        this.paginado(list, 4);
                        this.ban2 = false;
                    }
                }
                else {
                    this.paginado(list, 5);
                    this.actualPage = 1;
                    this.ban = true;
                }
            }
        });
    }
}
BrowserComponent.ɵfac = function BrowserComponent_Factory(t) { return new (t || BrowserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"])); };
BrowserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrowserComponent, selectors: [["app-browser"]], decls: 177, vars: 1, consts: [[1, "content"], ["id", "imgHome"], [1, "container"], [1, "row", "mt-3"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [1, "col-6"], [1, "form-group"], ["type", "text", "name", "", "id", "filterInput", "placeholder", "Nombre de torneo...", "aria-describedby", "helpId", 1, "form-control"], ["id", "helpId", 1, "text-muted"], [1, "col-4"], ["id", "lista", 1, "row", "mt-4"], ["id", "modelo2", 1, "media", "col-8", "mt-2"], [1, "media-left", "align-self-center", "mr-3"], ["src", "https://images.smash.gg/images/tournament/1102/image-940d52c5a424351b8624d4d4bc777eaf.png?format=auto&width=280&height=280&fit=cover", 1, "rounded-circle", 2, "height", "100px", "width", "100px"], [1, "media-body"], [1, "media-right", "align-self-center"], [1, "row"], ["href", "#", 1, "btn", "btn-primary", "edit"], [1, "fas", "fa-search", "edit"], ["href", "#", 1, "btn", "btn-primary", "mt-2"], [1, "fas", "fa-pencil-alt", "edit"], ["id", "modelo", 1, "media", "col-8", "mt-2"], ["aria-label", "Page navigation", 1, "row", "mt-3"], ["id", "pagesList", 1, "pagination"], [1, "page-item"], ["id", "prev", 1, "page-link"], [1, "page-item", "active"], ["id", "first", 1, "page-link"], ["id", "second", 1, "page-link"], ["id", "last", 1, "page-link"], ["id", "next", 1, "page-link"], ["id", "idModalLogin", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "cascading-modal"], [1, "modal-content"], [1, "modal-c-tabs"], ["role", "tablist", 1, "nav", "nav-tabs", "md-tabs", "tabs-2", "light-blue", "darken-3"], [1, "nav-item"], ["data-toggle", "tab", "href", "#panel7", "role", "tab", 1, "nav-link", "active"], [1, "fas", "fa-user", "mr-1"], ["data-toggle", "tab", "href", "#panel8", "role", "tab", 1, "nav-link"], [1, "fas", "fa-user-plus", "mr-1"], [1, "tab-content"], ["id", "panel7", "role", "tabpanel", 1, "tab-pane", "fade", "in", "show", "active"], [1, "modal-body", "mb-1"], [1, "md-form", "form-sm", "mb-5"], [1, "fas", "fa-envelope", "prefix"], ["type", "email", "id", "modalLRInput10", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput10"], [1, "md-form", "form-sm", "mb-4"], [1, "fas", "fa-lock", "prefix"], ["type", "password", "id", "modalLRInput11", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput11"], [1, "text-center", "mt-2"], ["id", "loginBtn", 1, "btn", "btn-primary", "btn-block"], [1, "fas", "fa-sign-in", "ml-1"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-info", "waves-effect", "ml-auto"], ["id", "panel8", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "modal-body", "mx-1"], [1, "md-form", "form-sm", "mb-2"], [1, "fas", "fa-user"], ["type", "text", "id", "nick", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "nick"], ["type", "text", "id", "name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "name"], ["type", "text", "id", "last-name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "last-name"], ["type", "email", "id", "email", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "email"], ["type", "email", "id", "emailpassword1", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "emailpassword1"], ["type", "password", "id", "password2", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "password2"], [1, "text-center", "form-sm", "mt-2"], ["id", "createUserBtn", "disabled", "", 1, "btn", "btn-primary", "btn-block"], ["id", "responseMSG", 1, "response"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-4"], ["src", "https://randomuser.me/api/portraits/men/4.jpg", "alt", "...", 1, "rounded-circle", "userData", "card-img", 2, "width", "150px", "height", "150px"], [1, "col-md-8"], [1, "card-body"], [1, "card-title", "userData"], [1, "card-text"], [1, "text-muted", "userData"], [1, "card-text", "userData"], ["id", "listGamesOfUser", 2, "overflow-y", "scroll", "width", "500px", "height", "125px", "display", "flex", "flex-direction", "column-reverse"], [1, "mt-0"], [1, "text-center"], ["routerLink", "/user", "role", "button", 1, "btn", "btn-primary", "btn-lg", "m-2"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "m-2"], ["role", "alert", 1, "alert", "alert-warning"], [1, "alert-heading"], [1, "mb-0"], ["href", "#", 1, "alert-link"]], template: function BrowserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrowserComponent_div_4_Template, 9, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Buscar torneo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The Big House 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Juego: Super Smash Bros. Melee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fecha: 4-12-2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Costo: 30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Direccion: Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The Big House 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Juego: Super Smash Bros. Ultimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Fecha: 4-12-2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Costo: 30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Direccion: Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Your nick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Your last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "OscarElCrack777");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "small", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Oscar Electronica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "oscar@iteso.mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h4", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Usted no tiene ningun historial de juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Editar Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicm93c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "151J":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/proyecto.service */ "TMDr");
/* harmony import */ var src_app_common_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/user.service */ "zgZh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function DetailComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function DetailComponent_form_4_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.formNtourney(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Juego:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Escoge que juego se jugara en tu torneo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dragon Ball FighterZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HearthStone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "League Of Legends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Overwatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Super Smash Bros. Melee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Super Smash Bros. Ultimate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nombre del torneo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Ingrese un nombre valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "# maximo de jugadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ingrese numero de jugadores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fecha de inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Ingrese una fecha valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Fecha de terminacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Ingrese una fecha valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Ingrese una hora valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Escoge un logo para tu torneo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "No se escogio un archivo valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Direccion (puedes poner online)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "No es valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Upgrade form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailComponent_div_7_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editarTorneo(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailComponent_div_7_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.eliminarTorneo(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Juego: ", item_r4.juego, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fecha de inicio: ", item_r4.fechai, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hora: ", item_r4.hora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Costo: ", item_r4.cost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lugar: ", item_r4.place, " ");
} }
class DetailComponent {
    constructor(authService, proyectoService, userService, router) {
        this.authService = authService;
        this.proyectoService = proyectoService;
        this.userService = userService;
        this.router = router;
        this.user = {
            userName: "",
            lastName: "",
            email: "",
            password: "",
            picture: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
        };
        this.loggedIn = false;
        this.listTourney = [];
        this.userID = "";
        this.isAdmin = false;
    }
    gameToHTML(game) {
        return `
    <div class="media">
        <img style="width: 30px; height: 30px;"
        src="${game.image}"
        class="mr-3" alt="...">
        <div class="media-body border-1">
        <h5 class="mt-0">${game.nombre}</h5> Puntaje: ${game.clas}
        </div>
    </div>
    `;
    }
    gameUserToHTML(game) {
        return `
    <div class="media">
        <img class="rounded-circle width" style="width: 30px; height: 30px;"
        src="${game.image}"
        class="mr-3" alt="...">
        <div class="media-body border-1">
        <h5 class="mt-0">${game.nombre}</h5>
        </div>
    </div>
    `;
    }
    tourneyToHtml(tourney) {
        return `
    <div class="col-8 mt-2" >
        <div class="media col-11 mt-2 border text-center">
            <div class="media-left align-self-center mr-3">
                <img class="rounded-circle width" style="width: 200px; height: 200px"
                        src="${tourney.image}">
            </div>
            <div class="media-body">
                <h4>${tourney.nombre}</h4>
                <p>Juego: ${tourney.juego} </p>
                <p>Fecha de inicio: ${tourney.fechai}</p>
                <p>Hora: ${tourney.hora}</p>
                <p>Costo: ${tourney.cost}</p>
                <p>Lugar: ${tourney.place}</p>
            </div>
        </div>
    </div>
    <div class="align-self-center text-right bg-light mx-2">
        <div class="row">
            <a id="editTourney" class="btn btn-primary mt-2" data-tourney='${JSON.stringify(tourney)}' data-toggle="modal" data-target="#updateFormModal"><i class="fas fa-pencil-alt edit"></i></a>
        </div>
        <div class="row">
            <a id="deleteTourney" class="btn btn-primary mt-2" data-toggle="modal" data-target="#deleteFormModal"><i class="fas fa-trash-alt  remove"></i></a>
        </div>
    </div>
    `;
    }
    gameUserListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.gameUserToHTML).join('');
        }
    }
    userToHTML(user) {
        return `
      <div class="media col-11 mt-2 border text-center">
          <div class="media-left align-self-center mr-3">
              <img class="rounded-circle" style="width: 150px; height: 150px"
                  src="${user.image}" alt="user image">
          </div>
          <div class="media-body">
              <h4>${user.nick}</h4>
              <p>${user.nombre} ${user.apellidos}</p>
              <p>Correo: ${user.email}</p>
          </div>
      </div>
          <div class="align-self-center text-right mx-2">
              <div class="row justify-content-end px-3">
              <div class="btn btn-primary mx-3" data-user='${JSON.stringify(user)}' data-toggle="modal" data-target="#updateFormModal"><i class="fas fa-pencil-alt edit"></i></div>
          </div>
      </div>
    `;
    }
    userListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.userToHTML).join(' ');
        }
    }
    tourneyDataToHTML(tourney, id) {
        if (id && tourney && document.getElementById(id)) {
            document.getElementById(id).innerHTML = this.tourneyToHtml(tourney);
        }
    }
    gameListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.gameToHTML).join('');
        }
    }
    updateTourney() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id') || '';
        let form = document.getElementById('updateFormModal');
        let listInputs = form.querySelectorAll('input');
        const data = {
            nombre: listInputs[0].value,
            fechai: listInputs[1].value,
            fechaf: listInputs[2].value,
            cost: listInputs[3].value,
            place: listInputs[4].value,
            image: listInputs[5].value
        };
        this.proyectoService.updateTourney(myParam, data).then(result => {
        });
    }
    ngOnInit() {
        this.authService.loginStatus.subscribe(status => {
            this.loggedIn = status;
        });
        this.userID = this.authService.getToken().split("-").pop();
        /*this.userService.getUserbyId().then(results => {
          console.log("resultado correcto ", results);
          this.user = results.user;
          this.userService.statusUs({
            userName: this.user.userName,
            usPic: this.user.picture
          })
        }).catch(err => {
          console.log("resultado incorrecto ", err);
        })*/
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id');
        this.proyectoService.getTourney(myParam || '').then(result => {
            let tourneyData = result;
            this.listTourney = [result];
            //this.tourneyDataToHTML(tourneyData, 'tourney');
            this.gameUserListToHTML(tourneyData.gamelist, 'listGamesAccount');
        });
    }
    editarTorneo(item) {
        this.editTourney = item;
        if (this.userID == item.admin) {
            this.isAdmin = true;
        }
    }
    formNtourney() {
        let formTourn = document.getElementById('falseForm');
        let list = formTourn.querySelectorAll('.formTourney');
        this.updateMyTourney(list);
    }
    updateMyTourney(valforms) {
        let tourney = {
            nombre: valforms[1].value,
            juego: valforms[0].value,
            fechai: valforms[3].value,
            fechaf: valforms[4].value,
            hora: valforms[5].value,
            limit: +valforms[2].value,
            place: valforms[7].value,
            image: valforms[6].value,
        };
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id') || '';
        this.proyectoService.updateMyTourney(tourney, myParam).then(res => {
            this.router.navigate(['/browser']);
        }).catch(err => {
            console.log("respuesta de error");
            console.log(err);
        });
    }
    eliminarTorneo(item) {
        if (this.userID == item.admin) {
            const urlParams = new URLSearchParams(window.location.search);
            const myParam = urlParams.get('id') || '';
            this.proyectoService.deleteTourney(myParam).then(res => {
                this.router.navigate(['/browser']);
            }).catch(err => {
                console.log("respuesta de error");
                console.log(err);
            });
        }
    }
    addUsertoTourney() {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('id') || '';
        this.proyectoService.addUserToTourney(myParam).then(res => {
            //window.location.reload()
            this.proyectoService.getTourney(myParam || '').then(result => {
                let tourneyData = result;
                this.listTourney = [result];
                //this.tourneyDataToHTML(tourneyData, 'tourney');
                this.gameUserListToHTML(tourneyData.gamelist, 'listGamesAccount');
            });
        }).catch(err => {
            console.log("respuesta de error");
            console.log(err);
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 131, vars: 2, consts: [[1, "content"], ["id", "imgHome"], [1, "container", "p-4"], [1, "col"], ["class", "needs-validation", "id", "falseForm", 3, "submit", 4, "ngIf"], [1, "textHome"], [1, "container"], ["class", "row  justify-content-center", "id", "tourney", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "my-3"], [1, "row", "justify-content-center"], ["id", "listGamesAccount", 1, "", 2, "overflow-y", "scroll", "width", "70%", "height", "125px", "display", "flex", "flex-direction", "column-reverse"], [1, "media"], ["src", "https://randomuser.me/api/portraits/men/4.jpg", "alt", "...", 1, "mr-3", 2, "width", "30px", "height", "30px"], [1, "media-body", "border-1"], [1, "mt-0"], [1, "align-self-center", "text-right", "mx-2"], [1, "row"], ["id", "addParticipant", "data-toggle", "modal", "data-target", "#addFormModal", 1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "fas", "fa-user-plus"], [1, "row", "my-3", "align-self-center"], ["href", "https://challonge.com/es/tournament/bracket_generator", "type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block"], ["id", "idModalLogin", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "cascading-modal"], [1, "modal-content"], [1, "modal-c-tabs"], ["role", "tablist", 1, "nav", "nav-tabs", "md-tabs", "tabs-2", "light-blue", "darken-3"], [1, "nav-item"], ["data-toggle", "tab", "href", "#panel7", "role", "tab", 1, "nav-link", "active"], [1, "fas", "fa-user", "mr-1"], ["data-toggle", "tab", "href", "#panel8", "role", "tab", 1, "nav-link"], [1, "fas", "fa-user-plus", "mr-1"], [1, "tab-content"], ["id", "panel7", "role", "tabpanel", 1, "tab-pane", "fade", "in", "show", "active"], [1, "modal-body", "mb-1"], [1, "md-form", "form-sm", "mb-5"], [1, "fas", "fa-envelope", "prefix"], ["type", "email", "id", "modalLRInput10", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput10"], [1, "md-form", "form-sm", "mb-4"], [1, "fas", "fa-lock", "prefix"], ["type", "password", "id", "modalLRInput11", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput11"], [1, "text-center", "mt-2"], ["id", "loginBtn", 1, "btn", "btn-primary", "btn-block"], [1, "fas", "fa-sign-in", "ml-1"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-info", "waves-effect", "ml-auto"], ["id", "panel8", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "modal-body", "mx-1"], [1, "md-form", "form-sm", "mb-2"], [1, "fas", "fa-user"], ["type", "text", "id", "nick", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "nick"], ["type", "text", "id", "name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "name"], ["type", "text", "id", "last-name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "last-name"], ["type", "email", "id", "email", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "email"], ["type", "password", "id", "password1", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["type", "password", "id", "password2", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "password2"], [1, "text-center", "form-sm", "mt-2"], ["id", "createUserBtn", "disabled", "", 1, "btn", "btn-primary", "btn-block"], ["id", "responseMSG", 1, "response"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-4"], ["src", "https://randomuser.me/api/portraits/men/4.jpg", "alt", "...", 1, "rounded-circle", "userData", "card-img", 2, "width", "150px", "height", "150px"], [1, "col-md-8"], [1, "card-body"], [1, "card-title", "userData"], [1, "card-text"], [1, "text-muted", "userData"], [1, "card-text", "userData"], ["id", "listGamesOfUser", 2, "overflow-y", "scroll", "width", "500px", "height", "125px", "display", "flex", "flex-direction", "column-reverse"], [1, "text-center"], ["routerLink", "", "role", "button", 1, "btn", "btn-primary", "btn-lg", "m-2"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "m-2"], ["id", "falseForm", 1, "needs-validation", 3, "submit"], [1, "form-group"], ["size", "1", "id", "torneoGame", "required", "", 1, "custom-select", "custom-select-lg", "mb-3", "formTourney"], ["value", ""], ["value", "dbz"], ["value", "hs"], ["value", "lol"], ["value", "ow"], ["value", "ssbm"], ["value", "ssbu"], ["type", "text", "id", "nomTorneo", "placeholder", "Ingresa el nombre del torneo...", "required", "", 1, "form-control", "formTourney"], [1, "invalid-tooltip"], [1, "form-row"], [1, "col-md-4", "mb-3"], ["type", "number", "id", "numTorneo", "placeholder", "Ingrese numero de jugadores", "required", "", 1, "form-control", "formTourney"], ["type", "date", "id", "fechaTorneo", "required", "", 1, "form-control", "formTourney"], ["type", "time", "id", "horaTorneo", "required", "", 1, "form-control", "formTourney"], ["type", "text", "id", "numTorneo", "placeholder", "Ingrese URL de imagen", "required", "", 1, "form-control", "formTourney"], [1, "invalid-feedback"], ["type", "text", "id", "dirTorneo", "placeholder", "indique la direccion del torneo", "required", "", 1, "form-control", "formTourney"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "tourney", 1, "row", "justify-content-center"], [1, "col-8", "mt-2"], [1, "media", "col-11", "mt-2", "border", "text-center"], [1, "media-left", "align-self-center", "mr-3"], [1, "rounded-circle", "width", 2, "width", "200px", "height", "200px", 3, "src"], [1, "media-body"], [1, "align-self-center", "text-right", "bg-light", "mx-2"], ["id", "editTourney", "data-user", "", "data-toggle", "modal", "data-target", "#updateFormModal", 1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "fas", "fa-pencil-alt", "edit"], ["id", "deleteTourney", "data-toggle", "modal", "data-target", "#deleteFormModal", 1, "btn", "btn-primary", "mt-2", 3, "click"], [1, "fas", "fa-trash-alt", "remove"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailComponent_form_4_Template, 65, 0, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DetailComponent_div_7_Template, 25, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jugadores Inscritos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OscarRex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailComponent_Template_a_click_20_listener() { return ctx.addUsertoTourney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pagina recomendada para generar brackets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Your nick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Your last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "OscarElCrack777");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "small", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Oscar Electronica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "oscar@iteso.mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Usted no tiene ningun historial de juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Editar Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "p");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTourney);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "6g7h":
/*!****************************************************!*\
  !*** ./src/app/common/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SessionService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    googleLogin(idToken) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}api/google_login`;
        return this.httpClient.post(url, { idToken: idToken }).toPromise();
    }
    loginByCredentials(userCred) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}api/login`;
        return this.httpClient.post(url, userCred).toPromise();
    }
    googleRegister(idToken) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}api/google_register`;
        return this.httpClient.post(url, { idToken: idToken }).toPromise();
    }
    registerByCredentials(userCred) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}api/register`;
        return this.httpClient.post(url, userCred).toPromise();
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7S+s":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/ngbd-modal/ngbd-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NgbdModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgbdModalComponent.ɵfac = function NgbdModalComponent_Factory(t) { return new (t || NgbdModalComponent)(); };
NgbdModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdModalComponent, selectors: [["app-ngbd-modal"]], decls: 2, vars: 0, template: function NgbdModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ngbd-modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ2JkLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AhZb":
/*!*************************************************!*\
  !*** ./src/app/common/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() {
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.loginStatus.next(this.isLoggedIn());
    }
    isLoggedIn() {
        return !!localStorage.getItem('token') || false;
    }
    saveToken(token) {
        localStorage.setItem('token', token);
        this.loginStatus.next(true);
    }
    getToken() {
        return localStorage.getItem('token') ? localStorage.getItem('token') : " ";
    }
    logOut() {
        localStorage.clear();
        this.loginStatus.next(false);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://itesogaming-backend.herokuapp.com/',
    socketUrl: 'https://itesogaming-backend.herokuapp.com/',
    clientId: '212340102233-gnesaidfls8cm0tg91vacap2v3dd6euc.apps.googleusercontent.com',
    clientSecret: 'GUmeG3r7Sq7_mCHDEMDPXOYa'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/proyecto.service */ "TMDr");



class HomeComponent {
    constructor(authService, proyectoService) {
        this.authService = authService;
        this.proyectoService = proyectoService;
        this.loggedIn = false;
    }
    gameToHTML(game) {
        return `
    <div class="media">
        <img style="width: 30px; height: 30px;"
        src="${game.image}"
        class="mr-3" alt="...">
        <div class="media-body border-1">
        <h5 class="mt-0">${game.nombre}</h5> Puntaje: ${game.clas}
        </div>
    </div>
    `;
    }
    gameListToHTML(list, id) {
        if (id && list && document.getElementById(id)) {
            document.getElementById(id).innerHTML = list.map(this.gameToHTML).join('');
        }
    }
    carouselToHTML(tourney) {
        return `
     <div class="${tourney.pos === 1 ? "carousel-item active" : "carousel-item"}">
          <img src="${tourney.image}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
              <span class="d-block p-2 bg-dark text-white">
                  <h5>${tourney.nombre}</h5>
                  <p>${tourney.juego}</p>
                  <p>${tourney.fechai}</p>
                  <a href="../html/oneTourney.html?id=${tourney._id}" type="button" class="btn btn-primary btn-lg btn-block">Ver Torneo</a>
              </span>
          </div>
      </div>`;
    }
    ngOnInit() {
        this.authService.loginStatus.subscribe(status => {
            this.loggedIn = status;
        });
        this.proyectoService.getTourneys().then(result => {
            const listTourneys = result.content;
            document.getElementById('tourneysDestacados').innerHTML = listTourneys.map(this.carouselToHTML).join('');
        }).catch(err => {
            console.log("error en lista de Torneos: ", err);
        });
        this.proyectoService.getTourneys2().then(result => {
            const listTourneys = result.content;
            document.getElementById('tourneysRecientes').innerHTML = listTourneys.map(this.carouselToHTML).join('');
        }).catch(err => {
            console.log("error en lista de Torneos: ", err);
        });
        this.proyectoService.getTourneys3().then(result => {
            const listTourneys = result.content;
            document.getElementById('tourneysProximos').innerHTML = listTourneys.map(this.carouselToHTML).join('');
        }).catch(err => {
            console.log("error en lista de Torneos: ", err);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 245, vars: 0, consts: [[1, "content"], ["id", "imgHome"], [1, "textHome"], [1, "container"], [1, "row", "d-flex", "justify-content-center"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "3"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "4"], ["id", "tourneysDestacados", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://www.nintenderos.com/wp-content/uploads/2020/10/super-smash-bros-ultimate-minecraft-1200x720-Cropped.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLZ9qhg-Dlfv4H8Kh-48ZLzyNjXAsGLY_Mg&usqp=CAU", "alt", "...", 1, "d-block", "w-100"], ["src", "assets/ITESOGAMING.jpg", "alt", "...", 1, "d-block", "w-100"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon", "dark"], [1, "sr-only"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon", "dark"], ["id", "carouselExampleCaptions2", "data-ride", "carouse2", 1, "carousel", "slide"], ["data-target", "#carouselExampleCaptions2", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions2", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions2", "data-slide-to", "2"], ["id", "tourneysRecientes", 1, "carousel-inner"], ["href", "#carouselExampleCaptions2", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleCaptions2", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "carouselExampleCaptions3", "data-ride", "carouse2", 1, "carousel", "slide"], ["id", "tourneysProximos", 1, "carousel-inne", "r"], ["href", "#carouselExampleCaptions3", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#carouselExampleCaptions3", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["id", "idModalLogin", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "cascading-modal"], [1, "modal-content"], [1, "modal-c-tabs"], ["role", "tablist", 1, "nav", "nav-tabs", "md-tabs", "tabs-2", "light-blue", "darken-3"], [1, "nav-item"], ["data-toggle", "tab", "href", "#panel7", "role", "tab", 1, "nav-link", "active"], [1, "fas", "fa-user", "mr-1"], ["data-toggle", "tab", "href", "#panel8", "role", "tab", 1, "nav-link"], [1, "fas", "fa-user-plus", "mr-1"], [1, "tab-content"], ["id", "panel7", "role", "tabpanel", 1, "tab-pane", "fade", "in", "show", "active"], [1, "modal-body", "mb-1"], [1, "md-form", "form-sm", "mb-5"], [1, "fas", "fa-envelope", "prefix"], ["type", "email", "id", "modalLRInput10", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput10"], [1, "md-form", "form-sm", "mb-4"], [1, "fas", "fa-lock", "prefix"], ["type", "password", "id", "modalLRInput11", 1, "form-control", "form-control-sm", "validate"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput11"], [1, "text-center", "mt-2"], ["id", "loginBtn", 1, "btn", "btn-primary", "btn-block"], [1, "fas", "fa-sign-in", "ml-1"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-outline-info", "waves-effect", "ml-auto"], ["id", "panel8", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "modal-body", "mx-1"], [1, "md-form", "form-sm", "mb-2"], [1, "fas", "fa-user"], ["type", "text", "id", "nick", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "nick"], ["type", "text", "id", "name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "name"], ["type", "text", "id", "last-name", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "last-name"], ["type", "email", "id", "modalLRInput4", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "modalLRInput4"], ["type", "password", "id", "password1", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "password1"], ["type", "password", "id", "password2", "required", "", 1, "form-control", "form-control-sm", "validate", "inputRegister"], ["data-error", "wrong", "data-success", "right", "for", "password2"], [1, "text-center", "form-sm", "mt-2"], ["id", "createUserBtn", "disabled", "", 1, "btn", "btn-primary", "btn-block"], ["id", "responseMSG", 1, "response"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-4"], ["src", "https://randomuser.me/api/portraits/men/4.jpg", "alt", "...", 1, "rounded-circle", "userData", "card-img", 2, "width", "150px", "height", "150px"], [1, "col-md-8"], [1, "card-body"], [1, "card-title", "userData"], [1, "card-text"], [1, "text-muted", "userData"], [1, "card-text", "userData"], ["id", "listGamesOfUser", 2, "overflow-y", "scroll", "width", "500px", "height", "125px", "display", "flex", "flex-direction", "column-reverse"], [1, "mt-0"], [1, "text-center"], ["href", "/user", "role", "button", 1, "btn", "btn-primary", "btn-lg", "m-2"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "m-2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Torneos destacados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Torneo Rubius");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Espa\u00F1a 2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sepa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Torneos recientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "First slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Torneos proximos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "First slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Your nick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Your last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Repeat password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h5", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "OscarElCrack777");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "small", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Oscar Electronica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "oscar@iteso.mx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Usted no tiene ningun historial de juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Editar Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "p");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/proyecto.service */ "TMDr");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfileComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Editar ususario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Imagen(URL)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_19_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.cancelarEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_19_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.formUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formData);
} }
class ProfileComponent {
    constructor(formBuilder, proyectoService, authService, router) {
        this.formBuilder = formBuilder;
        this.proyectoService = proyectoService;
        this.authService = authService;
        this.router = router;
        this.formData = this.formBuilder.group({
            nombre: [''],
            apellidos: [''],
            image: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
        });
        this.user = {
            apellidos: "",
            email: "",
            image: "",
            nick: "",
            nombre: "",
        };
        this.bandera2 = false;
    }
    ngOnInit() {
        this.proyectoService.getUserbyId().then(res => {
            this.user = {
                apellidos: res.apellidos,
                email: res.email,
                image: res.image,
                nick: res.nick,
                nombre: res.nombre,
            };
        }).catch(err => {
            console.log(err);
        });
    }
    editbutton() {
        this.bandera2 = true;
    }
    formUser() {
        let data = this.formData.value;
        let dataUs = {
            nombre: data.nombre == '' ? undefined : data.nombre,
            apellidos: data.apellidos == '' ? undefined : data.apellidos,
            image: data.image == '' ? undefined : data.image,
            password: data.password == '' ? undefined : data.password
        };
        this.proyectoService.updateUser(dataUs).then(res => {
            this.bandera2 = false;
        }).catch(err => {
            console.log("no se pudo actualizar");
            this.bandera2 = false;
        });
        //console.log("efe")
    }
    cancelarEdit() {
        this.bandera2 = false;
    }
    logout() {
        this.authService.logOut();
        this.router.navigate(['/login']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 35, vars: 6, consts: [[1, "content"], ["id", "imgHome"], ["src", "../images/194477.png", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], [1, "container"], ["id", "listaUser", 1, "fb-profile"], ["align", "left", "alt", "Profile image example", 1, "fb-image-profile", "thumbnail", "rounded-lg", 3, "src"], [1, "row", "d-flex", "justify-content-between", "align-items-center"], [1, "fb-profile-text", "col"], [1, "col"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", "mx-3", "my-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-lg", "mx-3", "my-1", 3, "click"], ["class", "container ", 4, "ngIf"], [1, "row", "justify-content-center", "my-3"], [1, "row", "justify-content-center"], ["id", "listGamesAccount", 1, "", 2, "overflow-y", "scroll", "width", "70%", "height", "125px", "display", "flex", "flex-direction", "column-reverse"], [1, "media"], ["src", "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ_image1600w.jpg", "alt", "...", 1, "mr-3", 2, "width", "30px", "height", "30px"], [1, "media-body", "border-1"], [1, "mt-0"], [1, "align-self-center", "text-right", "mx-2"], [1, "row"], ["id", "addParticipant", "data-toggle", "modal", "data-target", "#addFormModal", 1, "btn", "btn-primary", "mt-2"], [1, "fas", "fa-user-plus"], [1, "m-4", 3, "formGroup"], [1, "text-center", "my-3"], [1, "col", "form-group"], ["for", ""], ["type", "text", "name", "nombre", "id", "nombre", "name", "nombre", "required", "", "formControlName", "nombre", 1, "form-control", "col-8"], ["type", "text", "name", "apellidos", "id", "apellidos", "name", "apellidos", "required", "", "formControlName", "apellidos", 1, "form-control", "col-8"], ["type", "text", "name", "image", "id", "image", "name", "image", "required", "", "formControlName", "image", 1, "form-control", "col-8"], ["type", "password", "name", "password", "id", "password", "name", "password", "required", "", "formControlName", "password", 1, "form-control", "col-8"], ["type", "button", 1, "btn", "btn-primary", "mx-2", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_15_listener() { return ctx.editbutton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Editar Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_17_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_div_19_Template, 27, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lista de Juegos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Dragon Ball FighterZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.nick);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.user.nombre, " ", ctx.user.apellidos, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bandera2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".fb-profile[_ngcontent-%COMP%]   img.fb-image-lg[_ngcontent-%COMP%] {\n  z-index: 0;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.fb-image-profile[_ngcontent-%COMP%] {\n  margin: -90px 10px 0px 50px;\n  z-index: 9;\n  width: 20%;\n}\n@media (max-width: 768px) {\n  .fb-profile-text[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 16px;\n  }\n\n  .fb-image-profile[_ngcontent-%COMP%] {\n    margin: -45px 10px 0px 25px;\n    z-index: 9;\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzsrRUFBQTtBQUlHO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFQO0FBR0c7RUFFSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRFA7QUFJRztFQUdBO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VBSEw7O0VBTUM7SUFFSSwyQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBSkw7QUFDRiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgQXV0aG9yJ3MgY3VzdG9tIHN0eWxlc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICBcclxuICAgLmZiLXByb2ZpbGUgaW1nLmZiLWltYWdlLWxne1xyXG4gICAgICAgei1pbmRleDogMDtcclxuICAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZmItaW1hZ2UtcHJvZmlsZVxyXG4gICB7XHJcbiAgICAgICBtYXJnaW46IC05MHB4IDEwcHggMHB4IDUwcHg7XHJcbiAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgd2lkdGg6IDIwJTsgXHJcbiAgIH1cclxuICAgXHJcbiAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KVxyXG4gICB7XHJcbiAgICAgICBcclxuICAgLmZiLXByb2ZpbGUtdGV4dD5oMXtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgfVxyXG4gICBcclxuICAgLmZiLWltYWdlLXByb2ZpbGVcclxuICAge1xyXG4gICAgICAgbWFyZ2luOiAtNDVweCAxMHB4IDBweCAyNXB4O1xyXG4gICAgICAgei1pbmRleDogOTtcclxuICAgICAgIHdpZHRoOiAyMCU7IFxyXG4gICB9XHJcbiAgIH0iXX0= */"] });


/***/ }),

/***/ "H3jT":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "page-footer", "font-small", "bg-secondary"], [1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-6"], [1, "embed-responsive", "embed-responsive-16by9", "mb-4"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/GTUOwqDPgKI", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "footer-copyright", "text-center", "py-3", "text-white-50", "font-weight-light", "bg-info"], ["href", "./index.html", 1, "text-white", "font-weight-normal"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2020 ITESO Gaming \u2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ItesoGaming.gg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-footer[_ngcontent-%COMP%] {\n  background-color: #df9f56;\n}\n\n.divFooter[_ngcontent-%COMP%] {\n  color: #10110d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wYWdlLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY5ZjU2O1xufVxuXG4uZGl2Rm9vdGVye1xuICAgIGNvbG9yOiAjMTAxMTBkO1xufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/header/header.component */ "gK8K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "H3jT");




class AppComponent {
    constructor() {
        this.title = 'frondendangular';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TMDr":
/*!*****************************************************!*\
  !*** ./src/app/common/services/proyecto.service.ts ***!
  \*****************************************************/
/*! exports provided: ProyectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoService", function() { return ProyectoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "AhZb");





class ProyectoService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    getUserbyId() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/users?_id=${this.authService.getToken().split("-").pop()}`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    updateUser(user) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/users?_id=${this.authService.getToken().split("-").pop()}`;
        return this.httpClient.put(url, user, { headers: hedersIn }).toPromise();
    }
    getTourneys() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/carousel?order=highlighted&limit=5`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    getTourneys2() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/carousel?order=old&limit=5`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    getTourneys3() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/carousel?order=next&limit=5`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    getTourneysFilter(filter, page) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const nfilter = (filter) ? `${filter}` : '';
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys?page=${page}&limit=3${nfilter}`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    updateTourney(id, data) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/${id}`;
        return this.httpClient.put(url, data, { headers: hedersIn }).toPromise();
    }
    getTourney(id) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/${id}`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    addTourney(tourney) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys?uid=${this.authService.getToken().split("-").pop()}`;
        return this.httpClient.post(url, tourney, { headers: hedersIn }).toPromise();
    }
    updateMyTourney(tourney, tid) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/${tid}`;
        return this.httpClient.put(url, tourney, { headers: hedersIn }).toPromise();
    }
    deleteTourney(tid) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/${tid}`;
        return this.httpClient.delete(url, { headers: hedersIn }).toPromise();
    }
    addUserToTourney(tid) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'Authorization': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}api/tourneys/${tid}/participant/${this.authService.getToken().split("-").pop()}`;
        return this.httpClient.put(url, { headers: hedersIn }).toPromise();
    }
}
ProyectoService.ɵfac = function ProyectoService_Factory(t) { return new (t || ProyectoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ProyectoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProyectoService, factory: ProyectoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(socialAuthServices, sessionService, router, authService) {
        this.socialAuthServices = socialAuthServices;
        this.sessionService = sessionService;
        this.router = router;
        this.authService = authService;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.socialAuthServices.authState.subscribe(user => {
            if (user) {
                this.sessionService.googleLogin(user.idToken).then(res => {
                    this.authService.saveToken(res.token);
                    this.router.navigate(['/home']);
                }).catch(err => {
                    console.log('No se pudo iniciar sesion :c sad', err.error.err);
                });
            }
            else {
                console.log('No hay sesion');
            }
        });
    }
    loginByGoogle() {
        this.socialAuthServices.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID);
    }
    loginCredentials() {
        //CUANDO PRECionan en boton de login te regresa ya los datos que ingreso el ususario en el console salen como prueba
        //Ahora mandas ese objeto con email y password para comparar con el back y mongo
        //si el usuario existe te regresa el token y te manda a HOME guarda el token too
        this.sessionService.loginByCredentials(this.credentials).then(res => {
            this.authService.saveToken(res.token);
            this.router.navigate(['/home']);
        }).catch(err => {
            console.log('No se pudo logear: ', err);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 38, vars: 2, consts: [[1, "bgimage"], [1, "container"], [1, "p-5"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-end", "social_icon"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-discord"], [1, "card-body"], [3, "submit"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "fab", "fa-google"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_15_listener() { return ctx.loginCredentials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() { return ctx.loginByGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Numans\");\n.bgimage[_ngcontent-%COMP%] {\n  background-image: url('ITESOGAMING.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.card[_ngcontent-%COMP%] {\n  height: 370px;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.658) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #ffffff;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #3459aa;\n  cursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background-color: #28427a;\n  color: white;\n  border: 0 !important;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n.remember[_ngcontent-%COMP%] {\n  color: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #28427a;\n  width: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n.links[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUdSO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUlBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuXHJcblxyXG4uYmdpbWFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL0lURVNPR0FNSU5HLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1OCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiAjMzQ1OWFhO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogLTQ1cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODQyN2E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlbWVtYmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZW1lbWJlciBpbnB1dCB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4NDI3YTtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxpbmtzIGEge1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/session.service */ "6g7h");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RegisterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Por favor llenar los campos correctamente para completar el registro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(formBuilder, socialAuthServices, sessionService, authService, router) {
        this.formBuilder = formBuilder;
        this.socialAuthServices = socialAuthServices;
        this.sessionService = sessionService;
        this.authService = authService;
        this.router = router;
        this.formReg = this.formBuilder.group({
            nick: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmpass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]]
        }, {
            validators: () => {
                if (!this.formReg)
                    return;
                if (this.formReg.controls.password.value == this.formReg.controls.confirmpass.value) {
                    return null;
                }
                else {
                    return {
                        confirmPassword: true
                    };
                }
            }
        });
        this.formError = false;
    }
    ngOnInit() {
        this.socialAuthServices.authState.subscribe(user => {
            if (user) {
                this.sessionService.googleRegister(user.idToken).then(res => {
                    this.authService.saveToken(res.token);
                    this.router.navigate(['/home']);
                }).catch(err => {
                    console.log('No se pudo iniciar sesion :c sad', err.error.err);
                });
            }
        });
    }
    registerByGoogle() {
        this.socialAuthServices.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID);
    }
    formRegister() {
        if (this.formReg.valid) {
            let data = this.formReg.value;
            //GUARDAS EL USUARIO EN LA VARAIBLE con sus atrivutos como los guardas en mongodb osea dataUs se va a guardar en mongodb
            let dataUs = {
                email: data.email,
                apellidos: data.apellido,
                nick: data.nick,
                nombre: data.nombre,
                password: data.password
            };
            this.sessionService.registerByCredentials(dataUs).then(res => {
                this.authService.saveToken(res.token);
                this.router.navigate(['/home']);
            }).catch(err => {
                console.log('No se pudo logear: ', err);
            });
        }
        else {
            console.log('faltan datos');
            this.formError = true;
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_0__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 60, vars: 2, consts: [[1, "bgimage"], [1, "container"], [1, "p-5"], ["class", "alert alert-danger text-center mb-4", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "d-flex", "justify-content-end", "social_icon"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-discord"], [1, "card-body"], [3, "formGroup", "submit"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "nick", "name", "nick", "required", "", "formControlName", "nick", 1, "form-control"], ["type", "text", "placeholder", "nombre", "name", "nombre", "required", "", "formControlName", "nombre", 1, "form-control"], ["type", "text", "placeholder", "apellidos", "name", "apellido", "required", "", "formControlName", "apellido", 1, "form-control"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "email", "name", "email", "required", "", "formControlName", "email", 1, "form-control"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "password", "name", "password", "required", "", "formControlName", "password", 1, "form-control"], ["type", "password", "placeholder", "Repeat password", "name", "confirmpass", "formControlName", "confirmpass", 1, "form-control"], [1, "form-group"], ["type", "submit", "value", "Sign Up", 1, "btn", "float-right", "login_btn"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "fab", "fa-google"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["routerLink", "/login"], ["role", "alert", 1, "alert", "alert-danger", "text-center", "mb-4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RegisterComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_17_listener() { return ctx.formRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_51_listener() { return ctx.registerByGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " If you have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formReg);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Numans\");\n.bgimage[_ngcontent-%COMP%] {\n  background-image: url('ITESOGAMING.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.card[_ngcontent-%COMP%] {\n  height: 70%;\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 400px;\n  background-color: rgba(0, 0, 0, 0.658) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-left: 10px;\n  color: #ffffff;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #3459aa;\n  cursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n}\n.social_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 50px;\n  background-color: #28427a;\n  color: white;\n  border: 0 !important;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n.remember[_ngcontent-%COMP%] {\n  color: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-left: 15px;\n  margin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #28427a;\n  width: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover {\n  color: black;\n  background-color: white;\n}\n.links[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUVSO0VBQ0ksd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUVBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFDQTtBQUNBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVBO0FBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdBO0FBREE7RUFDQSxZQUFBO0FBSUE7QUFGQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFLQTtBQUhBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBTUE7QUFKQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUFPQTtBQUxBO0VBQ0EsWUFBQTtBQVFBO0FBTkE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFRQTtBQU5BO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQVNBO0FBUEE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFVQTtBQVJBO0VBQ0EsY0FBQTtBQVdBO0FBVEE7RUFDQSxnQkFBQTtBQVlBIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcclxuXHJcbi5iZ2ltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvSVRFU09HQU1JTkcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2FyZHtcclxuaGVpZ2h0OiA3MCU7XHJcbm1hcmdpbi10b3A6IGF1dG87XHJcbm1hcmdpbi1ib3R0b206IGF1dG87XHJcbndpZHRoOiA0MDBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1OCkgIWltcG9ydGFudDtcclxufVxyXG4uc29jaWFsX2ljb24gc3BhbntcclxuZm9udC1zaXplOiA2MHB4O1xyXG5tYXJnaW4tbGVmdDogMTBweDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XHJcbmNvbG9yOiAjMzQ1OWFhO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmQtaGVhZGVyIGgze1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuLnNvY2lhbF9pY29ue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnJpZ2h0OiAyMHB4O1xyXG50b3A6IC00NXB4O1xyXG59XHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XHJcbndpZHRoOiA1MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjg0MjdhO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJvcmRlcjowICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG4ucmVtZW1iZXJ7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucmVtZW1iZXIgaW5wdXRcclxue1xyXG53aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmxvZ2luX2J0bntcclxuY29sb3I6IHdoaXRlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjg0MjdhO1xyXG53aWR0aDogMTAwcHg7XHJcbn1cclxuLmxvZ2luX2J0bjpob3ZlcntcclxuY29sb3I6IGJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGlua3N7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5saW5rcyBhe1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-order-pipe */ "cudM");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/services/proyecto.service */ "TMDr");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_browser_browser_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/browser/browser.component */ "04Es");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layout/header/header.component */ "gK8K");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "H3jT");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_layout_ngbd_modal_ngbd_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layout/ngbd-modal/ngbd-modal.component */ "7S+s");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_new_tourney_new_tourney_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/new-tourney/new-tourney.component */ "vKwm");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        _common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_9__["ProyectoService"],
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"](_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].clientId)
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
            ng2_order_pipe__WEBPACK_IMPORTED_MODULE_4__["Ng2OrderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _components_browser_browser_component__WEBPACK_IMPORTED_MODULE_11__["BrowserComponent"],
        _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _components_layout_ngbd_modal_ngbd_modal_component__WEBPACK_IMPORTED_MODULE_16__["NgbdModalComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
        _components_new_tourney_new_tourney_component__WEBPACK_IMPORTED_MODULE_19__["NewTourneyComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["SocialLoginModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
        ng2_order_pipe__WEBPACK_IMPORTED_MODULE_4__["Ng2OrderModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();


/***/ }),

/***/ "gK8K":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/user.service */ "zgZh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.loggedIn = false;
        this.userName = "";
        this.pic = "";
    }
    ngOnInit() {
        this.authService.loginStatus.subscribe(status => {
            this.loggedIn = status;
        });
        this.userService.statusUser.subscribe(res => {
            this.userName = res.userName;
            this.pic = res.usPic;
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "nav-pills"], ["href", "/", 1, "navbar-brand"], ["src", "assets/194477.png", "width", "30", "height", "30", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLink", "/home", "title", "Home", 1, "nav-item", "nav-link", "active", "mx-2"], [1, "fas", "fa-home", "fa-lg"], ["class", "nav-item nav-link", "id", "addTourney", "data-toggle", "tooltip", "title", "Crear un torneo", "routerLink", "/newTourney", 4, "ngIf"], ["routerLink", "/browser", "id", "search", "title", "Torneos", 1, "nav-item", "nav-link", "mx-2"], [1, "fas", "fa-trophy", "fa-lg"], ["href", "https://www.facebook.com/groups/GamingITESO", "title", "Facebook", 1, "nav-item", "nav-link", "mx-2"], [1, "fab", "fa-facebook-f", "fa-lg"], ["href", "https://discord.gg/Z37ydDqw", "title", "Discord", 1, "nav-item", "nav-link", "mx-2"], [1, "fab", "fa-discord", "fa-lg"], ["class", "nav-item nav-link mx-2", "id", "user-status", "routerLink", "/profile", "title", "User Acount", 4, "ngIf"], ["class", "nav-item nav-link mx-2", "routerLink", "/login", "id", "user-status", "title", "User Acount", 4, "ngIf"], ["id", "addTourney", "data-toggle", "tooltip", "title", "Crear un torneo", "routerLink", "/newTourney", 1, "nav-item", "nav-link"], [1, "fas", "fa-plus", "fa-lg"], ["id", "user-status", "routerLink", "/profile", "title", "User Acount", 1, "nav-item", "nav-link", "mx-2"], [1, "fas", "fa-user-circle", "fa-lg"], ["routerLink", "/login", "id", "user-status", "title", "User Acount", 1, "nav-item", "nav-link", "mx-2"], [1, "fas", "fa-sign-in-alt"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ITESO Gaming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_a_8_Template, 2, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_a_16_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #393c50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzkzYzUwO1xufVxuIl19 */"] });


/***/ }),

/***/ "vKwm":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-tourney/new-tourney.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewTourneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTourneyComponent", function() { return NewTourneyComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/proyecto.service */ "TMDr");
/* harmony import */ var src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/auth.service */ "AhZb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class NewTourneyComponent {
    constructor(formBuilder, proyectoService, authService, router) {
        this.formBuilder = formBuilder;
        this.proyectoService = proyectoService;
        this.authService = authService;
        this.router = router;
        this.formNewTourney = this.formBuilder.group({
            juego: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nombreTorneo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            jugadores: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            costo: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            fechaI: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,]],
            fechaF: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            hora: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    formNtourney() {
        let formTourn = document.getElementById('falseForm');
        let list = formTourn.querySelectorAll('.formTourney');
        this.createTourney(list);
    }
    createTourney(valforms) {
        let tourney = {
            nombre: valforms[1].value,
            juego: valforms[0].value,
            fechai: valforms[4].value,
            fechaf: valforms[5].value,
            hora: valforms[6].value,
            limit: +valforms[2].value,
            cost: +valforms[3].value,
            place: valforms[8].value,
            plat: "https://seeklogo.com/images/M/minecraft-logo-5EAD3A1535-seeklogo.com.png",
            image: valforms[7].value,
        };
        this.proyectoService.addTourney(tourney).then(res => {
            this.router.navigate(['/browser']);
        }).catch(err => {
            console.log("respuesta de error");
            console.log(err);
        });
    }
}
NewTourneyComponent.ɵfac = function NewTourneyComponent_Factory(t) { return new (t || NewTourneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewTourneyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewTourneyComponent, selectors: [["app-new-tourney"]], decls: 74, vars: 1, consts: [[1, "content"], [3, "formGroup", "submit"], ["id", "falseForm", 1, "textHome"], ["id", "addTourneyF"], ["size", "1", "id", "torneoGame", "required", "", 1, "custom-select", "custom-select-lg", "mb-3", "formTourney"], ["value", ""], ["value", "609850ec1b6352c7e492b9e0"], ["value", "6098510f1b6352c7e492b9e1"], ["value", "609851241b6352c7e492b9e2"], ["value", "609851331b6352c7e492b9e3"], ["value", "609851431b6352c7e492b9e4"], ["value", "6098514c1b6352c7e492b9e5"], [1, "form-group"], ["type", "text", "id", "nomTorneo", "placeholder", "Ingresa el nombre del torneo...", "required", "", 1, "form-control", "formTourney"], [1, "invalid-tooltip"], [1, "form-row"], [1, "col-md-4", "mb-3"], ["type", "number", "id", "numTorneo", "placeholder", "Ingrese numero de jugadores", "required", "", 1, "form-control", "formTourney"], ["type", "number", "id", "precio", "placeholder", "Ingrese costo", "required", "", 1, "form-control", "formTourney"], ["type", "date", "id", "fechaTorneo", "required", "", 1, "form-control", "formTourney"], ["type", "time", "id", "horaTorneo", "required", "", 1, "form-control", "formTourney"], ["type", "text", "id", "dirTorneo", "placeholder", "indique el logo del torneo", "required", "", 1, "form-control", "formTourney"], ["type", "text", "id", "dirTorneo", "placeholder", "indique la direcci\u00F3n del torneo (Ubicacion)", 1, "form-control", "formTourney"], ["id", "controlbtnForm", 1, "btn", "btn-success"]], template: function NewTourneyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function NewTourneyComponent_Template_form_submit_1_listener() { return ctx.formNtourney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Agregar un torneo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Juego:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Escoge que juego se jugara en tu torneo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dragon Ball FighterZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "HearthStone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "League Of Legends");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Overwatch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Super Smash Bros. Melee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Super Smash Bros. Ultimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Nombre del torneo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Ingrese un nombre valido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "# maximo de jugadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Ingrese numero de jugadores ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Costo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Costo del evento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Fecha de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Ingrese una fecha valida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Fecha de terminacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Ingrese una fecha valida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Ingrese una hora valida ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Logo para tu torneo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "No es valido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Direcci\u00F3n (puedes poner online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "No es valido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Crear Torneo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formNewTourney);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdG91cm5leS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_browser_browser_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/browser/browser.component */ "04Es");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_new_tourney_new_tourney_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-tourney/new-tourney.component */ "vKwm");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'browser', component: _components_browser_browser_component__WEBPACK_IMPORTED_MODULE_2__["BrowserComponent"] },
    { path: 'detail', component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"] },
    { path: 'newTourney', component: _components_new_tourney_new_tourney_component__WEBPACK_IMPORTED_MODULE_6__["NewTourneyComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zgZh":
/*!*************************************************!*\
  !*** ./src/app/common/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "AhZb");






class UserService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.statusUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ userName: "", usPic: "" });
        this.userName = " ";
        this.usPic = " ";
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        this.statusUser.subscribe((res) => {
            this.userName = res.userName;
            this.usPic = res.usPic;
        });
    }
    statusUs(obj) {
        this.statusUser.next(obj);
    }
    getUserbyId() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/one-us`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    //GETlist AddItem DeleteItem sobre lista de vuelos favoritos del usuario
    getFavoriteListUser() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/flights_list`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    addItemFavoriteFlightsListUser(vuelo) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/favorite_list_addItm`;
        return this.httpClient.post(url, vuelo, { headers: hedersIn }).toPromise();
    }
    deleteItemFavoriteListUser(vuelo) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/favorite_list_deleteItm?vueloNum=${vuelo}`;
        return this.httpClient.delete(url, { headers: hedersIn }).toPromise();
    }
    //GETList AddItem DeleteItem sobre lista de aeropuertos del usuario
    getFavAirportsListUser() {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/favAirports_list`;
        return this.httpClient.get(url, { headers: hedersIn }).toPromise();
    }
    addItemFavAirportsListUser(airport) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/favAirports_list_addItm`;
        return this.httpClient.post(url, airport, { headers: hedersIn }).toPromise();
    }
    deleteItemFavAirportsListUser(codeIata) {
        const hedersIn = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'content-type': 'application/json',
            'x-auth-user': this.authService.getToken()
        });
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}users/favAirports_list_deleteItm?iata_code=${codeIata}`;
        return this.httpClient.delete(url, { headers: hedersIn }).toPromise();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map