interface ImageCardProps {
  alt: string;
  url: string;
  urlBig: string;

  openModal: (regular: string, alt_description: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  alt,
  url,
  urlBig,
  openModal,
}) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        onClick={() => openModal(urlBig, alt)}
        width="400"
        height="300"
      />
    </div>
  );
};

export default ImageCard;
