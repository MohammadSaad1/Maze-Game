import axios, { Method } from "axios"
import { keysToKebabCase } from "../../infrastructure/utility/keysToKebabCase";

export const axiosRequest = (url: string, method: Method, data?: any) => {
    const actualData = typeof data === 'object' ? keysToKebabCase(data) : data

    return axios({ url, method, data: actualData })
}