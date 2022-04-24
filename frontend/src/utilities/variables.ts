export const APP_VERSION = "v1.0.1";
export const GITHUB_URL = "https://github.com/mikedelgaudio/tipsy";
export const LOCAL_STORAGE_VAR = "TIPSY_APP_STATE";

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
