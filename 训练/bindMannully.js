Function.prototype.myApply = function (context) {
    if (typeof this != 'function') {
        throw new console.error('no function');
    }
    let result = null;
    context = context || window
    context.fn = this
    console.log('arguments', arguments)
    if (arguments[1]) {
        result = context.fn(arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this != 'function') {
        throw new console.error('no function');
    }
    let args = [...arguments].slice(1)
    let fn = this
    return function Fn() {
        return fn.myApply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        )
    }
}

let person = {
    name: 'spark',
    say: function (word) {
        console.log(`${this.name}${word}`)
    }
}

let man = {
    name: 'rain'
}


let newMan = person.say.bind(man, '666')
newMan()

person.say.myApply(man, ['666'])