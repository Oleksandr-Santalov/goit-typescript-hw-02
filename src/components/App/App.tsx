import { fetchApi } from "../API";
import { useEffect, useState } from "react";
import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import { ModalPhoto, Photo } from "../types";

const notify = () => toast("Please write something in the field!");

const App = () => {
  const [gallery, setGallery] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(totalPage);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [opening, setOpening] = useState<ModalPhoto>({
    link: "",
    description: "",
  });

  const handleSubmit = (query: string) => {
    setQuery(`${query}`);
    setPage(1);
    setTotalPage(0);
    setGallery([]);
    setOpening({ link: "", description: "" });
    setModalIsOpen(false);
    setError(false);
  };

  const handleOpenModal = (urls: string, alt: string): void => {
    setOpening({ link: urls, description: alt });

    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!query) return;

    const savePhotos = async (query: string, page: number) => {
      setLoader(true);

      try {
        const { results, total_pages } = await fetchApi(query, page);
        setGallery((prevGallery) => [...prevGallery, ...results]);

        setTotalPage(total_pages);
        setLoader(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    savePhotos(query, page);
  }, [query, page]);

  return (
    <div className={css.app}>
      <SearchBar
        onEmpty={() => {
          notify();
        }}
        onSubmit={handleSubmit}
      />

      {gallery.length > 0 && (
        <ImageGallery openModal={handleOpenModal} photos={gallery} />
      )}

      {error !== false && <ErrorMessage />}

      {loader && <Loader />}

      {gallery.length > 0 && !loader && page < totalPage && (
        <LoadMoreBtn
          onLoadMore={() => {
            setPage(page + 1);
          }}
        />
      )}

      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          onClose={handleCloseModal}
          urlBig={opening.link}
          alt={opening.description}
        />
      )}

      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </div>
  );
};

export default App;
