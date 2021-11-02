/**
 * Detect element in all the viewport by default, reduce from rect_top and add to rect_bottom to reduce the detection space vertically
 * @param {string} element 
 * @returns {boolean}
 */
export function elementInView(
    element,
    rect_top = (window.innerHeight || document.documentElement.clientHeight),
    rect_right = 0,
    rect_bottom = 0,
    rect_left = (window.innerWidth || document.documentElement.clientWidth)) {
    
    let rect = element.getBoundingClientRect();

    return rect.bottom > rect_bottom &&
        rect.right > rect_right &&
        rect.left < rect_left &&
        rect.top < rect_top;
}

/**
 * Detect elements in viewport with top and bottom settings for specific area and class assignment
 * @param {string} elements - elements to detect in viewport
 * @param {string} assigned_class - class to assign
 * @param {number} zone[] - [top, bottom], percentage distance from top & bottom
 * @param {number} range - default behavior at 100
 */
export let getElementsInView = (function (doc_elem) {
    let viewport_height = doc_elem.clientHeight;

    return function (e, opts) {
        let found = [], i;
        if (e && e.type == 'resize')
            viewport_height = doc_elem.clientHeight;

        for (i = opts.elements.length; i--;) {
            let elm = opts.elements[i],
                pos = elm.getBoundingClientRect(),
                top_percentage = pos.top / viewport_height * 100,
                bottom_percentage = pos.bottom / viewport_height * 100,
                middle = (top_percentage + bottom_percentage) / 2,
                in_viewport = middle > opts.zone[1] &&
                    middle < (opts.range - opts.zone[1]);

            elm.classList.toggle(opts.assigned_class, in_viewport);

            if (in_viewport)
                found.push(elm);
        }
    };
})(document.documentElement);
// Example :
// getElementsInArea(e, {
//     elements: icons, // elements to detect in viewport
//     assigned_class: focused, // class to assign
//     zone: [30, 30], // percentage distance from top & bottom
//     range: 100 // default behavior 100
// });