import { useSelector } from "react-redux";
import { ApplicationState } from "../../index";
import { AmountItemsState } from "./types";

export const selectorAmountItems = (): AmountItemsState =>{ 
    return useSelector((state: ApplicationState) => state.amountItems);
}

//export const bruninhoVioladorDeHooks = (state: ApplicationState) => state.amountItems;


//const elVioladorDeHooks = useSelector(bruninhoVioladorDeHooks);