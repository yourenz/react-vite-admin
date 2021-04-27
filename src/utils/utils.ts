export const routeFlat = (arr: RouteObj[]) => {
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
