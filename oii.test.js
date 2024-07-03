const removeDuplicada = require('./array')

test('retira duplicadas da minha array', () => {
    const entrada = [1,2,2,3,4,4,5]
    const saida = [1,2,3,4,5]
    expect(removeDuplicada(entrada)).toEqual(saida)
}
);


test('remove letra da string', () => {
    const entrada =
})