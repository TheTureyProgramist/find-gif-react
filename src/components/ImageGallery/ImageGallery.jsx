import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, onImageClick }) => {
	return (
		<ul className="ImageGallery">
				{images.map(img => (
					<ImageGalleryItem key={img.id} image={img} onClick={onImageClick} />
				))}
			</ul>
	);
};
export default ImageGallery;