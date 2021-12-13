import { loadingWines } from './sagas'

test('deve retornar o valor inicial da quantidade de itens no carrinho', () => {
    //const gen = loadingWines({payload:{filter:{min: 0, max:999999}, pageAtual:1, wines: []}});
    //expect(gen.next().value).toEqual(0);
    //expect(gen.next().done).toBeTruthy();
})
/*  
test('deve retornar o valor alterado de um item no carrinho', () => {
    localStorage.setItem('itemsOnCart', JSON.stringify([
      {qtdWine: 1}
    ]))
    const gen = getItemsCart();
    expect(gen.next().value.payload.action.payload).toEqual(1);
    expect(gen.next().done).toBeTruthy();
})

test('deve retornar o valor alterado de 2 ou mais itens no carrinho', () => {
    localStorage.setItem('itemsOnCart', JSON.stringify([
        {qtdWine: 2},
        {qtdWine: 1},
        {qtdWine: 3}
    ]))
    const gen = getItemsCart();
    expect(gen.next().value.payload.action.payload).toEqual(6);
    expect(gen.next().done).toBeTruthy();
})*/