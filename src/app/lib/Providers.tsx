import { NextUIProvider } from "@nextui-org/system";
import * as React from "react";

// 1. import `NextUIProvider` component

export function Providers({ children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
}
