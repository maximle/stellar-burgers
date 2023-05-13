export function sortArr(arr) {
  return arr.reduce((acc, current) => {
    acc[current.type].push(current);
  return acc;
  }, {
    bun: [],
    sauce: [],
    main: []
  })
}

