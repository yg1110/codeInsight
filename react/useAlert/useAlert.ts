import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { basicAlertDetailAtom, isBasicAlertOpenAtom } from "./atoms";

interface AlertProps {
  alertTitle?: string;
  alertText: string;
  acceptText?: string;
  cancelText?: string;
  deps?: any;
  acceptHandler: (...args: any[]) => void;
  cancelHandler?: (...args: any[]) => void;
}

const useAlert = ({
  alertTitle,
  alertText,
  acceptText,
  cancelText,
  deps,
  acceptHandler,
  cancelHandler = () => {},
}: AlertProps) => {
  const setIsBasicAlertOpen = useSetRecoilState(isBasicAlertOpenAtom);
  const setBasicAlertDetail = useSetRecoilState(basicAlertDetailAtom);
  const alert = () => {
    setIsBasicAlertOpen(true);
  };
  useEffect(() => {
    setBasicAlertDetail({
      alertTitle: alertTitle || "알림",
      alertText: alertText,
      acceptText: acceptText || "확인",
      cancelText: cancelText || "취소",
      acceptHandler,
      cancelHandler,
    });
  }, deps);
  return { alert };
};

export default useAlert;
