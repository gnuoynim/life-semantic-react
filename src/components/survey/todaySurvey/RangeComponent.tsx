import React, {useState} from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "swiper/css";
import ToastPopup from "@/components/modal/ToastPopup";

const RangeComponent = () => {
    const [toast, setToast] = useState(false);
    const handleToast = () => {
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
    };
    return (
        <React.Fragment>
            <Slider
                min={0}
                defaultValue={0}
                marks={{
                    0: 0,
                    10: 1,
                    20: 2,
                    30: 3,
                    40: 4,
                    50: 5,
                    60: 6,
                    70: 7,
                    80: 8,
                    90: 9,
                    100: 10,
                }}
                step={null}
                onChange={(value) =>
                    (document.querySelector(".rc-slider-handle")!.textContent = (
                        value as number / 10
                    ).toString())

                }
                onAfterChange={handleToast}
            />
            <ToastPopup
                text="완료하시면 수정이 불가합니다. 내용을 확인해주세요."
                show={toast}
            />
        </React.Fragment>
    );
};

export default RangeComponent;
