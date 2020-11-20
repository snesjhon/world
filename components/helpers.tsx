/**
 * copied from TS-Debounce
 */
type Procedure = (...args: unknown[]) => void;

interface Options {
  isImmediate: boolean;
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false,
  }
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const doLater = () => {
      timeoutId = undefined;
      if (!options.isImmediate) {
        func.apply(this, args);
      }
    };

    const shouldCallNow = options.isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  };
}
