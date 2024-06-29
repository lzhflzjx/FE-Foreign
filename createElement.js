const h = createElement

render(h(
'div',
{},
h('h1', {}, ' this is '),
h(
'p',
{ className: 'paragraph' },
' a ',
h('button', {}, ' button '),
' from ',
h('a',
{ href: 'https://bfe.dev' },
h('b', {}, 'BFE'),
'.dev')
)
))

/**
* @param { string } type - valid HTML tag name
* @param { object } [props] - properties.
* @param { ...MyNode} [children] - elements as rest arguments
* @return { MyElement }
*/
function createElement(type, props, ...children) {
return {
type,
props: {
// Data attributes
...attrs,
children
}
}
}

// So we have obtained the data structure required by the render function.

/**
* @param {object} valid JSON presentation
* @return {HTMLElement}
*/
function render(json) {
// create the top level element
// recursively append the children
// text node
// If json is of type string, create a text node and return.
if (typeof json === 'string') {
return document.createTextNode(json)
}

// element
// Destructure json object to extract type, children, and other attributes
const {type, props: {children, ...attrs}} = json
// Create a real dom element based on type
const element = document.createElement(type)
// Iterate over other attributes using Object.entries, assign attribute values to created dom element
for (let [attr, value] of Object.entries(attrs)) {
element[attr] = value
}
// Check if children is an array, if not, convert it to an array
const childrenArr = Array.isArray(children) ? children : [children]
// Iterate over child elements array, recursively call render function to generate real dom elements for children
for (let child of childrenArr) {
element.append(render(child))
}
// Append the created element to the document body
// document.body.appendChild(element)
// Return the generated real dom element
return element
}
