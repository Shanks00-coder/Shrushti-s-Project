const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="bg-brand-taupe h-2 w-24 mb-8"></div>
            
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground mb-8">
              About ELEMENT
            </h2>
            
            <div className="space-y-6 font-libre text-foreground leading-relaxed">
              <p className="text-lg">
                At <strong>ELEMENT</strong>, we believe fashion should be deeply personal — not just about what you wear, 
                but how it makes you feel. Born from the belief that style should be as personal as a fingerprint, 
                our brand creates garments that feel like an extension of you—your story, your essence, your element.
              </p>
              
              <p>
                Blending echoes of tradition with the rhythm of the present, each design is thoughtfully crafted 
                to celebrate individuality while honoring the hands and heritage that shape it. Through our signature 
                style quiz, we decode your personal choices, emotions, and aesthetics to craft clothing that doesn't 
                just fit—but deeply belongs to you.
              </p>
              
              <p>
                Each month, we unveil a new Element of the Month—a concept, feeling, fabric, or detail that inspires 
                our creative process and guides the mood of our curated offerings. From textures that speak of nostalgia 
                to colors that evoke confidence, this evolving element becomes the heartbeat of our design focus, 
                styling tips, and featured pieces.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-brand-taupe/30">
              <p className="font-cormorant text-2xl font-medium text-foreground italic">
                "Your essence, our element."
              </p>
              <p className="font-libre text-sm text-muted-foreground mt-2">
                — ELEMENT Brand Tagline
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-12">
            <div className="bg-brand-nude p-8 rounded-lg">
              <h3 className="font-cormorant text-3xl font-medium text-foreground mb-4">
                Mission
              </h3>
              <p className="font-libre text-foreground leading-relaxed">
                At ELEMENT, our mission is to craft deeply personal fashion experiences that celebrate individuality, 
                empower self-expression, and honour the artistry behind every stitch. We are committed to bridging 
                thoughtful design with meaningful connection—where every garment, accessory, and detail is tailored 
                not just to fit the body, but to resonate with the soul.
              </p>
            </div>

            <div className="bg-brand-blush p-8 rounded-lg">
              <h3 className="font-cormorant text-3xl font-medium text-foreground mb-4">
                Vision
              </h3>
              <p className="font-libre text-foreground leading-relaxed">
                To build a world where fashion is not dictated by trends, but defined by personal connection—where 
                every individual can discover, express, and elevate their unique essence through garments that feel 
                like they were made just for them. We envision ELEMENT as the go-to destination for personalized 
                occasionwear—where thoughtful design, soulful craftsmanship, and curated luxury come together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;