let person = {
    name: 'spark',
    say: function (word) {
        console.log(`${this.name}${word}`)
    }
}

let man = {
    name:'rain'
}
// person.say('真帅')

// function.call(thisArg, arg1, arg2, ...)

person.say.call(man,'真帅')
person.say.apply(man,['真帅'])
let newPersonFunc = person.say.bind(man,'真帅')
newPersonFunc()