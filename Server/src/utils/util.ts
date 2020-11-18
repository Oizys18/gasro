import { IsNumber } from "class-validator";

export const isEmptyObject = (obj: object): boolean => {
  return !Object.keys(obj).length;
};
