import { iWines } from "../interfaces/wines";

export function convertPricesWine(wine: iWines | undefined){
    const price = wine?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceMember = wine?.priceMember.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceNonMember = wine?.priceNonMember.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return { 
        price,
        priceMember,
        priceNonMember
    }
};
