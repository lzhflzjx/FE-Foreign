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
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

function setAttributes(el, attrs) {
    for(const key in attrs) {
      // stupid problem to keep className and expect same from dom element.
      el.setAttribute(key === 'className' ? 'class' : key, attrs[key]);
    }
  }
  
  /**
   * @param { string } type - valid HTML tag name
   * @param { object } [props] - properties.
   * @param { ...MyNode} [children] - elements as rest arguments
   * @return { MyElement }
   */
  function createElement(type, props, ...children) {
    // your code here
    const element = document.createElement(type);
    setAttributes(element, props);
    return {
      element,
      childrens: children.map(child => {
        if (typeof child !== 'string') {
          return child;
        }
        return {
          element: document.createTextNode(child),
          childrens: [],
        }
      })
    }
  }
  
  
  /**
   * @param { MyElement }
   * @returns { HTMLElement } 
   */
  function render(myElement) {
    // your code here
    const { element, childrens } = myElement;
    childrens.forEach(child => {
      element.appendChild(render(child));
    })
    return element;
  }