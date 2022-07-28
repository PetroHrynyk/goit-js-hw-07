import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(arr) {
	return arr
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
				<a class="gallery__link" href="${original}">
					<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
				</a>
			</div>`;
		})
		.join("");
}
