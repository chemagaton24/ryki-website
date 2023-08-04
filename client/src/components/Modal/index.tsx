import { ReactNode, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../../redux/features/modalSlice";
import "./style.css";

const Modal = ({
  children,
  classes,
  hasScroll,
}: {
  children: ReactNode;
  classes?: string;
  hasScroll?: boolean;
}) => {
  const dispatch = useDispatch();
  const modalControlRef = useRef<HTMLDivElement>(null);
  const modalInnerRef = useRef<HTMLDivElement>(null);
  const [isMaxScroll, setIsMaxScroll] = useState(false);

  useEffect(() => {
    const modalControlElem = modalControlRef.current;
    const modalInnerElem = modalInnerRef.current;

    const checkScroll = (a: Event) => {
      const targetElem = a.target as Element;
      const currentScrollTop = targetElem.scrollTop;
      const limitScrollHeight = targetElem.scrollHeight;

      if (modalControlElem && modalInnerElem) {
        if (
          currentScrollTop + (targetElem as HTMLDivElement).offsetHeight >=
          limitScrollHeight
        ) {
          setIsMaxScroll(true);
        } else {
          setIsMaxScroll(false);
        }
      }
    };

    if (modalControlElem && modalInnerElem) {
      const currentScrollTop = modalControlElem.scrollTop;
      const limitScrollHeight = modalControlElem.scrollHeight;
      if (
        currentScrollTop + modalControlElem.offsetHeight >=
        limitScrollHeight
      ) {
        setIsMaxScroll(true);
      } else {
        setIsMaxScroll(false);
      }
      modalControlElem.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (modalControlElem && modalInnerElem) {
        modalControlElem.removeEventListener("scroll", checkScroll);
      }
    };
  }, [modalControlRef]);

  const classList = [
    "modal-block",
    classes ? classes : "",
    hasScroll ? "modal-block--has-scroll" : "modal-block--no-scroll",
  ];

  return (
    <div className={classList.join(" ")}>
      <div className="modal-block__inner">
        <div
          className="modal-block__overlay"
          onClick={() => dispatch(close())}
        ></div>
        <div className="modal-block__popup">
          <div className="modal-block__header">
            <button
              className="modal-block__close-btn"
              aria-label="Close Modal"
              onClick={() => dispatch(close())}
            >
              <span className="icon icon-close"></span>
            </button>
          </div>
          <div className="modal-block__content">
            <div
              className={
                "modal-block__content-outer" +
                (isMaxScroll ? " modal-block__content-outer--max-scroll" : "")
              }
            >
              <div
                className={
                  "modal-block__content-control" +
                  (isMaxScroll
                    ? " modal-block__content-control--max-scroll"
                    : "")
                }
                ref={modalControlRef}
              >
                <div className="modal-block__content-inner" ref={modalInnerRef}>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
