export const toKebabCase = (pascalString: string) => {
   return pascalString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}