import { IWines } from "../interfaces/wines";

export function convertPricesWine(wine: IWines | undefined){
    const price = wine?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceMember = wine?.priceMember.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceNonMember = wine?.priceNonMember.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceMemberToString = wine?.priceMember.toFixed(2).toString().split(".")
    
    return { 
        price,
        priceMember,
        priceNonMember,
        priceMemberToString
    }
};
