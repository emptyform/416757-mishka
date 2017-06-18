var MainNav = document.querySelector(".main-nav");
var MainNavToggler = document.querySelector(".main-nav__toggler");

MainNav.classList.remove("main-nav--no-js");

MainNavToggler.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (MainNav.classList.contains("main-nav--opened")) {

      MainNav.classList.remove("main-nav--opened");
      console.log("MainNav.classList.remove--main-nav--opened");
      MainNav.classList.add("main-nav--closed");
      console.log("MainNav.classList.add-main-nav--closed");
    }

    else  {

      MainNav.classList.remove("main-nav--closed");
      console.log("MainNav.classList.remove--main-nav--closed");
      MainNav.classList.add("main-nav--opened");
      console.log("MainNav.classList.add--main-nav--opened");
    }
});

var FeaturedBuy = document.querySelector(".featured-item__buy-btn");
var CatalogBuy = document.querySelector(".catalog-item__buy-btn");
var ModalOrder = document.querySelector(".modal-order");

function ModalBuyShow() {
  ModalOrder.classList.remove("modal-order--closed");
}

function ModalBuyHide() {
  ModalOrder.classList.add("modal-order--closed");
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!ModalOrder.classList.contains("modal-order--closed")) {
            ModalBuyHide();
        }
    }
});


if (FeaturedBuy) {
FeaturedBuy.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (ModalOrder.classList.contains("modal-order--closed")) {

      ModalBuyShow();
    }
});

}


if (CatalogBuy) {
CatalogBuy.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (ModalOrder.classList.contains("modal-order--closed")) {

      ModalBuyShow();
    }
});
}

