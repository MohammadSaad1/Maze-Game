import { Dispatch, SetStateAction } from "react";

export interface Details {
    setMethod: Dispatch<SetStateAction<any>>,
    validation?: (value: any) => boolean
}