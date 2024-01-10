export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let variable = 0;
  if (weakMap.has(endpoint)) {
    variable = weakMap.get(endpoint);
  }
  weakMap.set(endpoint, variable + 1);
  if (variable + 1 >= 5) {
    throw Error('Endpoint load is high');
  }
}
