export const getDeepValue = <
    TObj,
    TFirstKey extends keyof TObj,
    TSecondKey extends keyof TObj[TFirstKey]
>(
    obj: TObj,
    firstKey: TFirstKey,
    secondKey: TSecondKey) => {
        return obj[firstKey][secondKey]
}

const obj = {
    foo: {
        a:true,
        b:12
    },
    bar: {
        c:"hello",
        d: () => console.log("function")
    }

}

let value = getDeepValue(obj, "foo", "b")
let func = getDeepValue(obj, "bar", "d")