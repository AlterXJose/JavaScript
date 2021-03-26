const { TestScheduler } = require('@jest/core')
const {soma, subtrair, multiplicar, dividir} = require('./calculadora')

test('adds 1 + 2 to equal 3', () =>{
    expect(soma(1,2)).toBe(3)
})

test('adds 1 - 2 to equal -1', () =>{
    expect(subtrair(1,2)).toBe(-1)
})

test('adds 1 + 2 to equal 3', () =>{
    expect(multiplicar(1,2)).toBe(2)
})

test('adds 1 + 2 to equal 3', () =>{
    expect(dividir(1,2)).toBe(0.5)
})