export const isNumberSameOrBetween = (value: number, lowerbound: number, upperbound: number) => {
    console.log(lowerbound <= value && value <= upperbound, lowerbound, value, upperbound)
    return lowerbound <= value && value <= upperbound
}