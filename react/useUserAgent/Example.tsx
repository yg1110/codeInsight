import useUserAgent from "./useUserAgent";

const Example = () => {
  const { os, isDesktop, isAndroid, isIos } = useUserAgent();
  return (
    <div className="content">
      <h2>useUserAgent</h2>
      <p>os: {os}</p>
      <p>isDesktop: {isDesktop.toString()}</p>
      <p>isAndroid: {isAndroid.toString()}</p>
      <p>isIos: {isIos.toString()}</p>
    </div>
  );
};

export default Example;
