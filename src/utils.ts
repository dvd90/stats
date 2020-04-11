export const dateStringToDate = (dateString: string): Date => {
  const dateArray = dateString.split('/');
  return new Date(
    parseInt(dateArray[2]),
    parseInt(dateArray[1]) - 1,
    parseInt(dateArray[0])
  );
};
