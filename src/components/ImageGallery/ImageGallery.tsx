import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../types";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (imageUrl: string, imageAlt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={css.items}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={css.item}>
            <ImageCard
              openModal={openModal}
              alt={photo.alt_description}
              url={photo.urls?.small}
              urlBig={photo.urls?.regular}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
