// SASS Variables
var sass_vars;

// Add the load-variables class to the body
document.body.classList.add('load-variables');
// To remove quotes from the content property
function removeQuotes(string) {
    if (typeof string === 'string' || string instanceof String) {
        string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
    }
    return string;
}
// Check if the body contains the load-variables class
if (document.body.classList.contains('load-variables')) {
    let body_content = null;
    // Get the content property's value of the body's after pseudo element
    if (window.getComputedStyle && window.getComputedStyle(document.body, '::after')) {
        body_content = window.getComputedStyle(document.body, '::after');
        body_content = body_content.content;
    }
    // Convert the JSON content to a JS object (window.variable to make it global)
    window.sass_vars = JSON.parse(removeQuotes(body_content));
    // Remove the load-variables class from the body element
    document.body.classList.remove('load-variables');
}