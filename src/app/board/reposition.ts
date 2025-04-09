const repositionElement = <T>(
  movedElement: T,
  array: T[],
  toIndex: number
): T[] => {
  const updatedArray = [...array];
  updatedArray.splice(toIndex, 0, movedElement);

  return updatedArray;
};
