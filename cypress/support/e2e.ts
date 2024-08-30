// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// @ts-ignore
import registerCypressGrep from '@cypress/grep'
import "./commands";

registerCypressGrep();

// Hide fetch/XHR requests
const app = window.top;

if (
  app &&
  !app.document.head.querySelector("[data-hide-command-log-request]")
) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");

  app.document.head.appendChild(style);
}

Cypress.on("uncaught:exception", (err, runnable) => {
  // Handle specific exceptions or ignore all
  console.log("Handling uncaught exception:", err.message);
  return false; // Prevent test failure
});
