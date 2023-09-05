export const camelize = (string: string): string => string.trim().replace(/-./g, (match) => match.toUpperCase()[1]);
