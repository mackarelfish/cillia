import { RefObject, useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export default function useObserveElement(
  el: RefObject<Element>,
  props: (keyof Omit<DOMRect, "toJSON">)[]
) {
  const [value, setValue] = useState(0);

  const observer = useRef(
    new ResizeObserver((entries) => {
      let accu = 0;
      for (const prop of props) {
        accu += entries[0].target.getBoundingClientRect()[prop];
      }
      setValue(accu);
    })
  );

  useEffect(() => {
    if (!el.current) return;

    observer.current.observe(el.current);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return () => observer.current.unobserve(el.current!);
  }, [el, observer]);

  return value;
}
