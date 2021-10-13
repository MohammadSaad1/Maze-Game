import {camelCase} from 'lodash'

export const keysToCamelCase = (data: object) => {
    return Object.keys(data).reduce((accumulator, key) => {
        accumulator[camelCase(key) as keyof object] = data[key as keyof object]

        return accumulator
    }, {})
}