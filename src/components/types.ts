export interface ModalPhoto {
  link: string;
  description: string;
}
export interface Photo {
  alt_description: string;
  id: string;
  urls: {
    regular: string;
    small: string;
  };
}

