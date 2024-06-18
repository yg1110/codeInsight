import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = Array.from(searchParams.entries()).reduce(
    (acc: Record<string, string>, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {}
  );

  function toQueryString(params: Record<string, string>): string {
    const queryString = Object.entries(params)
      .filter(([_, value]) => value !== "")
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    return queryString;
  }

  const addQueryParams = (params: Record<string, string>) => {
    const queryParams = { ...currentParams, ...params };
    router.replace(pathname + `?${toQueryString(queryParams)}`, {
      scroll: false,
    });
  };

  const removeQueryParams = (removeKey: string) => {
    const queryParams = { ...currentParams };
    delete queryParams[removeKey];
    router.replace(pathname + `?${toQueryString(queryParams)}`, {
      scroll: false,
    });
  };

  const getQueryParamPath = () => {
    return toQueryString(currentParams);
  };

  const getQueryParamPathWithRemoveKey = (removeKeys: string[]) => {
    const queryParams = { ...currentParams };
    removeKeys.forEach((key) => {
      delete queryParams[key];
    });
    return toQueryString(queryParams);
  };

  return {
    currentParams,
    toQueryString,
    addQueryParams,
    removeQueryParams,
    getQueryParamPath,
    getQueryParamPathWithRemoveKey,
  };
}
