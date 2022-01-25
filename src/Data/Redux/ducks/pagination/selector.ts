import { useSelector } from "react-redux";
import { ApplicationState } from "../../index";
import { PaginationState } from "./types";

export const selectorPagination = (): PaginationState =>{ 
    return useSelector((state: ApplicationState)=>state.pagination);;
}

//export const selectorPagination = (state: ApplicationState) => state.pagination;