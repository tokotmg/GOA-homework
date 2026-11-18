const photos = [
  { id: 1, title: 'Mountain Dawn', url: 'https://picsum.photos' },
  { id: 2, title: 'Forest Mist', url: 'https://picsum.photos' },
  { id: 3, title: 'Coastal Cliffs', url: 'https://picsum.photos' },
  { id: 4, title: 'Alpine Lake', url: 'https://picsum.photos' },
  { id: 5, title: 'Desert Dunes', url: 'https://picsum.photos' },
  { id: 6, title: 'City Twilight', url: 'https://picsum.photos' },
];
export default function Gallery() {
  return (
    <section className="gallery-container">
      <h2>Photo Gallery</h2>
      <div className="photo-grid">
        {photos.map((photo) => (
          <figure key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} loading="lazy" />
            <figcaption>{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
