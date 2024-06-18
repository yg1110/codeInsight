import useAlert from "useAlert";

const Example = () => {
  const { alert } = useAlert({
    acceptHandler: () => {},
    cancelHandler: () => {},
    alertTitle: "알림",
    alertText: "본문",
    acceptText: "확인",
    cancelText: "취소",
    deps: [],
  });

  return (
    <div className="content">
      <button onClick={alert}>알림 띄우기</button>
    </div>
  );
};

export default Example;
