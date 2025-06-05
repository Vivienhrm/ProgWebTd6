export function displayGallery(galerie) {
    const container = document.getElementById("gallery");
    container.innerHTML = "";

    const photos = galerie.photos || galerie.collection || [];
  
    let erreurCount = 0;

    photos.forEach((wrapper, index) => {
      const photo = wrapper.photo;
      console.log(photo);

      if (!photo || !photo.thumbnail || !photo.thumbnail.href) {
        console.warn(`Photo mal formée à l’index ${index} :`, wrapper);
        erreurCount++;
        return;
      }

      const imageUrl = new URL(photo.thumbnail.href, "https://webetu.iutnc.univ-lorraine.fr").href;

      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = photo.titre || `photo ${photo.id}`;
      img.title = photo.titre || `photo ${photo.id}`;
      img.classList.add("vignette");

      container.appendChild(img);
    });

    if (erreurCount > 0) {
      console.warn(`${erreurCount} photo(s) ignorée(s) car incomplètes.`);
    }
  }