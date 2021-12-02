export function stringToNumber(value:string){
    const split = value.split(",");
    const leftContent = parseInt(split[0])
    const rightContent = parseInt(split[1])
    const result = leftContent + (rightContent/100)

    return result
}