export const formatPrice = (value) => {
  if (value) {
    return value.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND',
    });
  }
};
export const randomRange = (a, b) => {
  let random = Math.floor(Math.random() * (b - a + 1)) + a;
  return random;
};

export const removeOneElement = (arr, id) => {
  let index = arr.findIndex((element) => element.id === id);
  if (index > -1) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
};
