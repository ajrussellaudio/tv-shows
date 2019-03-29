export const phoneAppAction = (...args) =>
  window.invokeCSharpAction
    ? window.invokeCSharpAction(...args)
    : console.error("invokeCSharpAction is not set!\n", args);
