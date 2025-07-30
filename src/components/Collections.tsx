import { Button } from "@/components/ui/button";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Essential Elements",
      description: "Timeless pieces that transcend trends",
      image: collection1,
      price: "From $280"
    },
    {
      id: 2,
      title: "Curated Accessories", 
      description: "Thoughtfully designed details",
      image: collection2,
      price: "From $120"
    },
    {
      id: 3,
      title: "Evening Elegance",
      description: "Sophisticated occasionwear",
      image: collection3,
      price: "From $480"
    }
  ];

  return (
    <section className="py-20 bg-brand-blush">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground mb-6">
            Our Collections
          </h2>
          <p className="font-libre text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each month, we unveil a new Element of the Month—a concept, feeling, fabric, 
            or detail that inspires our creative process and guides our curated offerings.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button variant="luxury" size="lg" className="w-full">
                    Shop Collection
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-2">
                  {collection.title}
                </h3>
                <p className="font-libre text-muted-foreground mb-2">
                  {collection.description}
                </p>
                <p className="font-libre text-sm font-medium text-brand-clay">
                  {collection.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;