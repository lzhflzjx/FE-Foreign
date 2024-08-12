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
function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children
        }
    }
}
/**
 * @param {object} valid JSON presentation
 * @return {HTMLElement} 
 */
function render(json) {
    // create the top level emlement
    // recursively append the children
    // textnode
    // 如果json是字符串类型，就创建一个文本节点并返回。
    if (typeof json === 'string') {
        return document.createTextNode(json)
    }

    // 解构json对象获取类型type、子元素children和其他属性attrs
    const { type, props: { children, ...attrs } } = json
    // 根据类型type创建一个实际的DOM元素。
    const element = document.createElement(type)
    
    // 遍历其他属性attrs，将属性值赋给创建的DOM元素
    for (let [attr, value] of Object.entries(attrs)) {
        element[attr] = value
    }

    // 将子元素children转换为数组。
    const childrenArr = Array.isArray(children) ? children : [children]

    // 遍历子元素数组，递归调用render函数生成子元素的实际DOM元素，并将其挂载到父元素上。
    for (let child of childrenArr) {
        element.append(render(child))
    }
    
    // 返回创建的实际DOM元素。
    return element
}
