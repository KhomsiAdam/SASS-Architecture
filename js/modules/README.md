# JavaScript Modules

The `js/modules` contains all modules to be exported to `js/app.js`.

## Variables Module

The `js/modules/variables.js` module makes SASS variables `scss/abstracts/_variables.scss` accessible to use by JavaScript.

In your `scss/main.scss` file is a `load-variables` class on the body element with an `::after` pseudo class.

```scss

// ============================== //
// Export variables to JavaScript //
// ============================== //
// Load the SASS variables that you want into the body::after's content into a JSON format to be converted to a JS object
body.load-variables {
    &::after {
        position: absolute;
        visibility: hidden;
        font-size: 0;
        z-index: -1;
        // Name the object keys the names you want to use in JavaScript, access the variables values with the var() function with interpolation
        // To format the CSS content property in a readable format, the use of a backlash '\' at the end of each line make it possible to break strings
        content:
            '{\
                "colors": {\
                    "p_green": "#{var($colors, "primary", "green")}",\
                    "p_blue": "#{var($colors, "primary", "blue")}",\
                    "s_yellow": "#{var($colors, "secondary", "yellow")}",\
                    "s_red": "#{var($colors, "secondary", "red")}",\
                    "n_black": "#{var($colors, "neutral","black")}",\
                    "n_darkgray": "#{var($colors, "neutral","darkgray")}",\
                    "n_gray": "#{var($colors, "neutral","gray")}",\
                    "n_lightgray": "#{var($colors, "neutral","lightgray")}",\
                    "n_white": "#{var($colors, "neutral","white")}"\
                },\
                "font_weight": {\
                    "thin": "#{var($font-weight, "thin")}",\
                    "extralight": "#{var($font-weight, "extralight")}",\
                    "light": "#{var($font-weight, "light")}",\
                    "regular": "#{var($font-weight, "regular")}",\
                    "medium": "#{var($font-weight, "medium")}",\
                    "semibold": "#{var($font-weight, "semibold")}",\
                    "bold": "#{var($font-weight, "bold")}",\
                    "extrabold": "#{var($font-weight, "extrabold")}",\
                    "blackbold": "#{var($font-weight, "blackbold")}"\
                },\
                "breakpoints": {\
                    "320": "#{var($breakpoints, "320")}",\
                    "360": "#{var($breakpoints, "360")}",\
                    "375": "#{var($breakpoints, "375")}",\
                    "425": "#{var($breakpoints, "425")}",\
                    "768": "#{var($breakpoints, "768")}",\
                    "800": "#{var($breakpoints, "800")}",\
                    "900": "#{var($breakpoints, "900")}",\
                    "1024": "#{var($breakpoints, "1024")}",\
                    "1280": "#{var($breakpoints, "1280")}",\
                    "1366": "#{var($breakpoints, "1366")}",\
                    "1440": "#{var($breakpoints, "1440")}",\
                    "1600": "#{var($breakpoints, "1600")}",\
                    "1680": "#{var($breakpoints, "1680")}",\
                    "1920": "#{var($breakpoints, "1920")}",\
                    "2560": "#{var($breakpoints, "2560")}"\
                }\
            }';
    }
}

```

It's content property contains the variables (with the help of [Interpolation](https://sass-lang.com/documentation/interpolation)) you wish to export under a JSON format (with the use of backslashes `\`, it is possible to break lines in CSS's content property to make it in a readable format).

*The `var($variable, $keys...)` function is used to access key/values of SASS maps variables `scss/abstracts/_functions.scss`.

The class `load-variables` is assigned to the body element, then the JSON content is extracted with JavaScript and converted to a nested object and assigned to the window object as a property to make it global before removing the class from the body element.

```javascript
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

```

Then in `js/app.js`, you can either use the variables from the nested object directly, or declare new variable objects to contain each object separately (you can also delete the former nested window object containing all the variables by using `delete window.sass_vars`).

```javascript

// =============== //
// Modules imports //
// =============== //

/* Import variables from `scss/abstracts/_variables.scss` from the 'content' property of the body::after pseudo class
The variables are in a JSON format that gets converted into a JavaScript Object for access */
import "./modules/variables.js";

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

```