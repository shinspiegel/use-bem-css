import { camelize, capitalize, kebabize } from "../utils";

type UseBemCssOptions<Name extends string, List extends string> = {
  className: Name;
  blocks: string[];
  elements: List[];
  modifiers?: UseBemCssOptionModifier<Name, List>[];
};

type UseBemCssOptionModifier<Name extends string, List extends string> = {
  modifier: string;
  affects?: (Name | List)[];
  isActive?: boolean;
};

type UseBemCss<Name extends string, List extends string> = Record<
  Lowercase<Name> | `${Lowercase<Name>}${Capitalize<Lowercase<List>>}`,
  string
>;

export const useBemCss = <Name extends string, List extends string>({
  className,
  blocks = [],
  elements = [],
  modifiers = [],
}: UseBemCssOptions<Name, List>): UseBemCss<Name, List> => {
  /**
   * This is an empty object to be used as unrestricted to update and create all the classes
   * This object will also holds the values already in kebab-case version
   * This object keys will be in camelCase
   */
  const prepare: Record<string, string[]> = {};

  blocks.forEach((block) => {
    /**
     * Will create the base blocks and add on the className
     * If there is multiple blocks it will create multiple entries
     * The key will be camelCase (all lowered)
     * The value will be kebab-case
     */
    const blockValue = kebabize(block);
    const blockKey = className.toLowerCase();

    if (!prepare[blockKey]) {
      prepare[blockKey] = [];
    }

    prepare[blockKey].push(blockValue);

    /**
     * If there is elements it will generate all the elements
     * The key will be a combination of the `classname` lowered with the `element` also lowered
     * The value will be a BEM styled value of a `classname__element`
     */
    if (elements && elements?.length > 0) {
      elements.forEach((element) => {
        const elementKey = capitalize(camelize(element.toLowerCase()));
        const elementValue = kebabize(element);

        if (!prepare[`${blockKey}${elementKey}`]) {
          prepare[`${blockKey}${elementKey}`] = [];
        }

        prepare[`${blockKey}${elementKey}`].push(`${blockValue}__${elementValue}`);
      });
    }
  });

  /**
   * If there is modifier it will check and does not have an affect list, it will affect every entry
   * otherwise it will only affects the selected items on the affect string list
   * Also it needs to be active to affects the elements, the default is not affect anything
   * Once it affects it will update the affected block or element adding the BEM styled appended value
   * Like: `block--modifier` or `block__element--modifier`
   */
  if (modifiers && modifiers.length > 0) {
    modifiers.forEach(({ modifier, isActive, affects }) => {
      if (isActive) {
        const modifierValue = kebabize(modifier);

        if (!affects || affects.length <= 0) {
          const keys = Object.keys(prepare);

          keys.forEach((key) => {
            prepare[key].forEach((item) => {
              prepare[key].push(`${item}--${modifierValue}`);
            });
          });
        } else {
          affects.forEach((affected) => {
            const affectedBlock = affected.toLowerCase();

            if (prepare[affectedBlock]) {
              prepare[affectedBlock].forEach((item) => {
                prepare[affectedBlock].push(`${item}--${modifierValue}`);
              });
            }

            const blockKey = className.toLowerCase();
            const elementKey = capitalize(camelize(affected.toLowerCase()));
            const affectedElement = `${blockKey}${elementKey}`;

            if (prepare[affectedElement]) {
              prepare[affectedElement].forEach((item) => {
                prepare[affectedElement].push(`${item}--${modifierValue}`);
              });
            }
          });
        }
      }
    });
  }

  /**
   * This will construct the element with the need typing
   * Will also run over all the prepared values and add as a single string on the typed `result`
   */
  const result = {} as Record<Lowercase<Name> | `${Lowercase<Name>}${Capitalize<Lowercase<List>>}`, string>;

  Object.keys(prepare).forEach((key) => {
    result[key] = prepare[key].join(" ");
  });

  return result;
};
