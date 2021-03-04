export const required = (value: any) => {
    if (value)
        return undefined

    return "Field is required"
}


export const maxLengthCreator = (maxLength: string | number) => (value: string) => {
    if (value.length > maxLength)
        return `Max length ${maxLength} symbols`

    return undefined
}