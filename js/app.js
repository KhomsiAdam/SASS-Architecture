// =============== //
// Modules imports //
// =============== //

/* Import variables from `scss/abstracts/_variables.scss` from the 'content' property of the body::after pseudo class
The variables are in a JSON format that gets converted into a JavaScript Object for access */
import "./modules/variables.js";
/* Detection Module */
// import { elementInView, getElementsInView } from "./modules/detection.js";

// === //
// App //
// === //

// Extract your SASS variables from the sass_vars object *optional
const colors = sass_vars.colors;
const font_weight = sass_vars.font_weight;
const breakpoints = sass_vars.breakpoints;
// Delete the sass_vars property of the window object if it's not used *optional
delete window.sass_vars;

// Any code that needs to run after the document loads
document.addEventListener('DOMContentLoaded', () => {
})

// Any code that needs to run after the document fully loads with all the assets
window.addEventListener('load', () => {
})