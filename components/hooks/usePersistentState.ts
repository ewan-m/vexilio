import { useCallback, useEffect, useState } from "react";

export const usePersistentState = <T extends string>(
  key: string,
  initialValue: T
): [T, (u: T) => void] => {
  const isBrowser: boolean = ((): boolean => typeof window !== "undefined")();

  const getItem = useCallback(
    (key: string): T | null => {
      return isBrowser ? (window.localStorage.getItem(key) as T) : null;
    },
    [isBrowser]
  );

  const setItem = (key: string, value: T): void => {
    if (isBrowser) {
      window.localStorage.setItem(key, value);
    }
  };

  const [state, setState] = useState<T>((getItem(key) as T) ?? initialValue);

  useEffect(() => {
    if (isBrowser) {
      setState((getItem(key) as T) ?? initialValue);
    }
  }, [getItem, initialValue, isBrowser, key]);

  const setPersistentState = (update: T) => {
    setState(update);
    setItem(key, update);
  };

  return [state, setPersistentState];
};
