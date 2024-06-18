import useQueryParams from "./useQueryParams";

const Example = () => {
  const {
    currentParams,
    getQueryParamPath,
    getQueryParamPathWithRemoveKey,
    removeQueryParams,
    addQueryParams,
  } = useQueryParams();

  // path: /?key1=value1&key2=value2
  const handleAddQueryParams = () => {
    addQueryParams({ key1: "value1", key2: "value2" });
  };
  // path: /?key2=value2
  const handleRemoveQueryParams = () => {
    removeQueryParams("key1");
  };
  // path: /?key2=value2
  const handleGetQueryParamPath = () => {
    getQueryParamPath();
  };
  // path: /
  const handleGetQueryParamPathWithRemoveKeys = () => {
    getQueryParamPathWithRemoveKey(["key1", "key2"]);
  };
  // console: { key: "value" }
  const handleLogCurrentParams = () => {
    console.log(currentParams);
  };
  return <div className="content"></div>;
};

export default Example;
