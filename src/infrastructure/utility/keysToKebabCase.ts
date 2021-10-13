import kebabCase from 'lodash.kebabcase'

export const keysToKebabCase = (data: object) => {
    return Object.keys(data).reduce((accumulator, key) => {
        accumulator[kebabCase(key) as keyof object] = data[key as keyof object]

        return accumulator
    }, {})
}