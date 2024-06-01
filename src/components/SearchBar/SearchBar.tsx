import css from "./SearchBar.module.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
  onEmpty: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, onEmpty }) => {
  const [text, setText] = useState<string>("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") {
      onEmpty();
      return;
    } else {
      onSubmit(text);
      setText("");
    }
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          type="text"
          placeholder="Search images and photos"
          onChange={changeText}
          value={text}
        />
        <button className={css.button} type="submit">
          <IoMdSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
