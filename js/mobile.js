(() => {
  const refs = {
    openMonileBtn: document.querySelector("[data-menu-open]"),
    closeMobileBtn: document.querySelector("[data-menu-close]"),
    mobile: document.querySelector("[data-menu]"),
  };

  refs.openMonileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle("is-open");
  }
})();
