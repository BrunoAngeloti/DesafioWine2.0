import { useSelector } from "react-redux";
import { IWines } from "src/Shared/interfaces/wines";
import { ApplicationState } from "../../index";
import { ItemsState } from "./types";

export const selectorItems = (): ItemsState =>{ 
    return useSelector((state: ApplicationState)=>state.items)
}

export const selectorItemsFiltreded = (id: number): IWines | undefined =>{ 
    return useSelector((state: ApplicationState) => 
        state.items.wines
            .map(wines => wines?.find(wine => wine.id == id))
            .find(wine=> wine !== undefined)
    )
}