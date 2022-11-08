import { ModalInterface } from "@/interfaces/modalInterface";
import { atom, DefaultValue, selector } from "recoil";

const modalState = atom<ModalInterface>({
  key: "modalState",
  default: {
    show: false,
    title: "모달창",
    content: "기본",
    saveShow: false,
    closeShow: false,
    confirmShow: false,
    cancelShow: false,
  },
});

export { modalState };
