type MyRequired<T extends Object> = {

    [K in keyof T]-?: T[K]
}

// all properties are optional
type Foo = {
  a?: string
  b?: number
  c?: boolean
}


const a: MyRequired<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}
// Error

const b: MyRequired<Foo> = {
  a: 'BFE.dev'
}
// Error

const c: MyRequired<Foo> = {
  b: 123
}
// Error

const d: MyRequired<Foo> = {
  b: 123,
  c: true
}
// Error

const e: MyRequired<Foo> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}
// valid