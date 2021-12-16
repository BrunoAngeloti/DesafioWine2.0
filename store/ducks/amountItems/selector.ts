import { useSelector } from "react-redux";
import { ApplicationState } from "../../index";
import { AmountItemsState } from "./types";

export const selectorAmountItems = (): AmountItemsState =>{ 
    return useSelector((state: ApplicationState)=>state.amountItems);
}