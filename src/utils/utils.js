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

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function request(url, options) {
  return fetch(url, options).then(checkResponse)
}