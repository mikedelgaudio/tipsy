export const APP_VERSION = "v0.2.0-beta";

export const ERROR_INPUT_ITEM = (displayName: string): string => {
  return `Invalid input for "${displayName}". Format item names such as: Food Item 1`;
};

export const ERROR_INPUT_NAME = (displayName: string | undefined): string => {
  return `Invalid input for person "${displayName}". Format names such as: Person 1`;
};

export const ERROR_INPUT_EVENT = (): string => {
  return "Invalid input for event name. Format event names such as: Night out with friends";
};

export const ERROR_INPUT_PRICE = (displayName: string | undefined): string => {
  return `Invalid price formatting for "${displayName}". Format prices such as: $10.99`;
};
