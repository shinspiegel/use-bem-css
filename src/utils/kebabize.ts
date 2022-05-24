export const kebabize = (str: string): string => {
  const result: string[] = [];

  str
    .trim()
    .split("")
    .forEach((letter: string, index: number) => {
      if (index === 0) {
        result.push(letter);
        return undefined;
      }

      if (letter.toUpperCase() === letter) {
        result.push("-");
        result.push(letter.toLowerCase());
        return undefined;
      }

      result.push(letter);
      return undefined;
    });

  return result.join("").toLocaleLowerCase().replace(/--/g,'-');
};
