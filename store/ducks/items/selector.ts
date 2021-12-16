import { useSelector } from "react-redux";
import { ApplicationState } from "../../index";
import { ItemsState } from "./types";

export const selectorItems = (): ItemsState =>{ 
    return useSelector((state: ApplicationState)=>state.items)
}