import { useSelector } from "react-redux";
import { iWines } from "../../../interfaces/wines";
import { ApplicationState } from "../../index";
import { ItemsState } from "./types";

export const selectorItems = (): ItemsState =>{ 
    return useSelector((state: ApplicationState)=>state.items)
}

export const selectorItemsFiltreded = (id: number): iWines | undefined =>{ 
    return useSelector((state: ApplicationState) => 
        state.items.wines
            .map(wines => wines?.find(wine => wine.id == id))
            .find(wine=> wine !== undefined)
    )
}