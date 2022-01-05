import { IWines } from "../interfaces/wines";

function toPriceFormat(number: number | undefined): string | undefined {
    if(number)
        return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return undefined;
}

export function convertPricesWine(wine: IWines | undefined){
    const price = toPriceFormat(wine?.price)
    const priceMember = toPriceFormat(wine?.priceMember)
    const priceNonMember = toPriceFormat(wine?.priceNonMember)
    const priceMemberToString = wine?.priceMember.toFixed(2).toString().split(".")
    
    return { 
        price,
        priceMember,
        priceNonMember,
        priceMemberToString
    }
};
