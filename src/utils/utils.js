export const calculateSuccess = (array, key, divider) => {
  if (array.length === 0) return 0;

  const result = Math.round(
    array.map((single) => single[key].length).reduce((acc, cur) => acc + cur) /
      divider
  );

  return result;
};
