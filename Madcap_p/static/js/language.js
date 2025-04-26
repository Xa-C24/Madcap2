document.addEventListener("DOMContentLoaded", function () {
  let languageSwitcher = document.querySelector(".language-option");

  if (languageSwitcher) {
      languageSwitcher.addEventListener("click", function (event) {
          event.preventDefault();

          let currentLang = document.cookie.replace(/(?:(?:^|.*;\s*)django_language\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "fr";
          let newLang = currentLang === "fr" ? "en" : "fr";

          document.cookie = "django_language=" + newLang + "; path=/";
          window.location.href = "/change-language/" + newLang + "/";
      });
  }
});
