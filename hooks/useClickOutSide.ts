import { useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useClickOutside(ref: any, cb: any) {
  useEventListener("click", (e) => {
    if (ref.current == null || ref.current.contains(e.target)) return;
    cb(e);
  });
}
