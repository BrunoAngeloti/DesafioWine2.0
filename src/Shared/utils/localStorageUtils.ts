import { IItemCart } from "../interfaces/cart";


export function getLocalStorage(): Array<IItemCart> {
    return JSON.parse(localStorage.getItem('itemsOnCart') || "[]");
}

export function setLocalStorage(itemsOnCart:Array<IItemCart>){
    localStorage.setItem('itemsOnCart', JSON.stringify(itemsOnCart))
}