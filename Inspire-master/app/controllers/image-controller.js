import imageService from "../services/image-service.js"
import store from "../store.js";



function drawImage() {
  let image = store.State.image;
  document.querySelector("body").style.backgroundImage = `url(${image.url})`;
}
export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage)
    imageService.getImage()
  }

}

