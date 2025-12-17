import Image from "next/image";

const galleryImages = [
  "/assets/Images/gallery-1.jpg",
  "/assets/Images/gallery-2.jpg",
  "/assets/Images/gallery-3.jpg",
  "/assets/Images/gallery-4.jpg",
  "/assets/Images/gallery-5.jpg",
  "/assets/Images/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="group relative aspect-4/3 w-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
            />
            {/* Overlay for "High visual fidelity" if images have slight darkening or effects, 
                but based on standard food galleries, clean images are best. 
                Adding a subtle hover effect for "Dynamic Design" requirement. */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
