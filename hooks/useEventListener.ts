import { useEffect, useRef } from "react";

export default function useEventListener(eventType: any, callback: any) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (document == null) return;
    const handler = (e: any) => callbackRef.current(e);
    document.addEventListener(eventType, handler);

    return () => document.removeEventListener(eventType, handler);
  }, [eventType]);
}
