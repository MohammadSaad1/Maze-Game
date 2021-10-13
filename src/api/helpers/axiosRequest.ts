import axios, { Method } from "axios"
import { keysToCamelCase } from "../../infrastructure/utility/keysToCamelCase";
import { keysToKebabCase } from "../../infrastructure/utility/keysToKebabCase";

const onObject = (data: any, callback: () => any) => {
    if (typeof data === 'object') {
        return callback()
    }

    return data
}

export const axiosRequest = (url: string, method: Method, data?: any) => {
    const actualData = onObject(data, () => keysToKebabCase(data))

    return axios({ url, method, data: actualData })
        .then(response => ({
            ...response,
            data: onObject(response.data, () => keysToCamelCase(response.data))
        }))
}