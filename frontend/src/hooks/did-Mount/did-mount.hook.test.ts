import { renderHook } from "@testing-library/react-hooks";

import { didMount } from "./did-mount.hook";

describe("didMount", () => {
  it("should be true on first render and false after", () => {
    const { result, rerender } = renderHook(() => didMount());
    expect(result.current).toEqual(true);
    rerender();
    expect(result.current).toEqual(false);
    rerender();
    expect(result.current).toEqual(false);
  });
});
