import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  if (!onLoadMore) return;

  return (
    <div className={css["load-more"]}>
      <button className={css.button} onClick={onLoadMore} type="button">
        Load more...
      </button>
    </div>
  );
};

export default LoadMoreBtn;
