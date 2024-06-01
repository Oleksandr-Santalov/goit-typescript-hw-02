import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.error}>
      <p className={css.message}>
        Ooops! Something went wrong, try make reloading page...
      </p>
    </div>
  );
};

export default ErrorMessage;
