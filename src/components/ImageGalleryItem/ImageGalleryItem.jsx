const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.images.fixed_height.url}
        alt={image.title}
        onClick={() => onClick(image.images.original.url)}
      />
    </li>
  );
};
export default ImageGalleryItem;
