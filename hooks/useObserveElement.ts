import { RefObject, useRef, useState, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useObserveElement(
  el: RefObject<Element>,
  prop: keyof Omit<DOMRect, "toJSON">
) {
  const [value, setValue] = useState(0);

  const observer = useRef(
    new ResizeObserver((entries) => {
      const val = entries[0].contentRect[prop];
      setValue(val);
    })
  );

  useLayoutEffect(() => {
    if (!el.current) return;

    observer.current.observe(el.current);

    return () => observer.current.unobserve(el.current!);
  }, [el, observer]);

  return value;
}
