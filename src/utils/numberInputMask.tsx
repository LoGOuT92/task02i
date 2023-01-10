export const numberInputMask = (val: string): boolean => {
  let re = /^\d+$/;
  return re.test(val);
};
