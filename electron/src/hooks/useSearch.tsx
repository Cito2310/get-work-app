import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { changeCurrentSearch, useAppDispatch } from "../store";

export const useSearch = () => {
    const { register, watch, getValues } = useForm({defaultValues:{ search: "" }});
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch( changeCurrentSearch( getValues("search") ) )
    }, [watch("search")])

    return {
        register
    }
}
