import { atom } from "recoil";

const isBasicAlertOpenAtom = atom({
  key: "isBasicAlertOpen",
  default: false,
});

const basicAlertDetailAtom = atom({
  key: "basicAlertDetail",
  default: {
    alertTitle: "",
    alertText: "",
    cancelText: "",
    acceptText: "",
    acceptHandler: () => {},
    cancelHandler: () => {},
  },
});
