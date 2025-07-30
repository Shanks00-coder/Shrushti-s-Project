import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Lookbook = () => {
  const lookbookItems = [
    {
      id: 1,
      title: "Autumn Reverie",
      description: "Embracing earth tones and flowing silhouettes",
      season: "Fall 2024",
      images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop"]
    },
    {
      id: 2, 
      title: "Urban Elegance",
      description: "Contemporary sophistication meets comfort",
      season: "Winter 2024",
      images: ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop"]
    },
    {
      id: 3,
      title: "Spring Awakening", 
      description: "Fresh textures and renewed energy",
      season: "Spring 2024",
      images: ["https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop", "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-6xl md:text-7xl font-light text-foreground mb-6">
              Lookbook
            </h1>
            <p className="font-libre text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our seasonal collections through carefully curated visual stories 
              that capture the essence of each element.
            </p>
          </div>

          {/* Lookbook Items */}
          <div className="space-y-24">
            {lookbookItems.map((item, index) => (
              <div key={item.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-brand-taupe h-2 w-24 mb-6"></div>
                  <p className="font-libre text-sm text-brand-clay mb-2 tracking-widest uppercase">
                    {item.season}
                  </p>
                  <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-6">
                    {item.title}
                  </h2>
                  <p className="font-libre text-foreground leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <Button variant="luxury" size="lg">
                    View Collection
                  </Button>
                </div>

                {/* Images */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="aspect-[3/4] overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${item.title} look ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24 bg-brand-blush py-16 rounded-lg">
            <h3 className="font-cormorant text-4xl font-light text-foreground mb-6">
              Discover Your Element
            </h3>
            <p className="font-libre text-muted-foreground mb-8 max-w-lg mx-auto">
              Take our style quiz to find pieces that truly resonate with your personal aesthetic.
            </p>
            <Button variant="luxury" size="lg">
              Take Style Quiz
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lookbook;