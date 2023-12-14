import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * The function `cn` is a TypeScript function that merges multiple class values into a single string.
 * @param {ClassValue[]} classes - The `classes` parameter is a rest parameter that allows you to pass
 * in multiple class values. Each class value can be a string or an array of strings.
 * @returns {string} - The `cn` function returns a single string that contains all of the class values
 * example input: cn("class1", ["class2", "class3"])
 * example output: "class1 class2 class3"
 */

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
