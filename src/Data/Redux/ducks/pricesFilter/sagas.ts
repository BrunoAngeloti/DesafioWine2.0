import { action } from "typesafe-actions";
import { PriceFilterTypes } from "./types";


export const changePriceFilter = (data: PriceFilterTypes) => action(PriceFilterTypes.CHANGE_PRICE_FILTER, data)