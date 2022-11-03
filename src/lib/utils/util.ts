export const findQueryString = (findQuery: string, search?: string) => {
  if (!search) {
    return;
  }
  const [_, ...array] = search.split(/\?|=/);
  const findQueryIndex = array.findIndex((value) => value === findQuery);
  if (findQueryIndex !== -1) {
    const findString = array[findQueryIndex + 1];
    return findString;
  }
  return;
};
