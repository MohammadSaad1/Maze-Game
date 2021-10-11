import { toKebabCase } from "./toKebabCase"

export const keysToKebabCase = (data: object) => {
    return Object.keys(data).reduce((accumulator, key) => {
        accumulator[toKebabCase(key) as keyof object] = data[key as keyof object]

        return accumulator
    }, {})
}