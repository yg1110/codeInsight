import { useEffect, useState } from "react";

export type Os = "ios" | "android" | "desktop" | "unknown";

export default function useUserAgent() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isAndroid, setAndroid] = useState(false);

  const detectOS = (): Os => {
    if (isDesktop) return "desktop";
    if (isIos) return "ios";
    if (isAndroid) return "android";

    return "unknown";
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isDesktop = !/Mobi/i.test(window.navigator.userAgent);
    setIsDesktop(isDesktop || window.ReactNativeWebView === undefined);
    setIsIos(userAgent.includes("mac"));
    setAndroid(userAgent.includes("android"));
  }, []);

  return { os: detectOS(), isDesktop, isIos, isAndroid };
}
