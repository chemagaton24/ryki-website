import { useDispatch } from "react-redux";
import { open } from "../../redux/features/modalSlice";

const UsefulLinksItem = ({
  icon,
  title,
  modal,
}: {
  icon: string;
  title: string;
  modal: string;
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className="find-us-block__useful-links-item"
      onClick={() => dispatch(open(modal))}
    >
      <img src={icon} alt={title} />
      <span className="find-us-block__useful-links-item-title">{title}</span>
    </div>
  );
};

export default UsefulLinksItem;
