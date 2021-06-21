export const routeFlat = (arr: RouteObj[]): RouteObj[] => {
  const result: RouteObj[] = []
  ;(function flat(arr: RouteObj[]) {
    arr.forEach((item) => {
      if (item.children && item.children.length > 0) {
        flat(item.children)
      } else {
        result.push(item)
      }
    })
  })(arr)
  return result
}
export const routeFlatWithFather = (arr: RouteObj[]): RouteObj[] => {
  const result: RouteObj[] = []
  ;(function flat(arr: RouteObj[]) {
    arr.forEach((item) => {
      if (item.children && item.children.length > 0) {
        result.push(item)
        flat(item.children)
      } else {
        result.push(item)
      }
    })
  })(arr)
  return result
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const filterObject = <T extends object, U extends keyof T>(obj: T, arr: Array<U>): Pick<T, U> => {
  const result = {} as Pick<T, U>
  Object.keys(obj)
    .filter((item) => arr.includes(item as U))
    .forEach((item) => {
      result[item as U] = obj[item as U]
    })
  return result
}
