import { IWines } from "../interfaces/wines";

function toPriceFormat(number: number): string | undefined {
    if (number)
        return number.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' });
    return undefined;
}

export function convertPricesWine(wine?: IWines){
    const price = toPriceFormat(wine?.price ?? 0)
    const priceMember = toPriceFormat(wine?.priceMember ?? 0)
    const priceNonMember = toPriceFormat(wine?.priceNonMember ?? 0)
    const priceMemberToString = wine?.priceMember.toFixed(2).toString().split(".")
    
    return { 
        price,
        priceMember,
        priceNonMember,
        priceMemberToString
    }
};
