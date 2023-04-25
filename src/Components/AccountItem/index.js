import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://thumbs.dreamstime.com/b/pink-cosmos-flowe-flowerbackground-112007426.jpg"
        alt="Hoaaa"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen van A</span>
          <CheckCircleIcon className={cx("check")} />
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
