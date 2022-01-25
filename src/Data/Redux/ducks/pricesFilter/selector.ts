import { useSelector } from "react-redux";
import { ApplicationState } from "../../index";
import { PriceFilterState } from "./types";

export const selectorPriceFilter = (): PriceFilterState =>{ 
    return useSelector((state: ApplicationState)=>state.pricesFilter);
}