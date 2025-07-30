import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-cormorant text-6xl md:text-7xl font-light text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-libre text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Reach out for styling advice, custom pieces, 
              or just to share your ELEMENT story.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-brand-nude p-8 rounded-lg">
              <h2 className="font-cormorant text-3xl font-light text-foreground mb-6">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-libre text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="font-libre text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="font-libre text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="font-libre text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="font-libre text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="luxury" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-cormorant text-3xl font-light text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="font-libre text-muted-foreground leading-relaxed">
                  Whether you're looking for styling advice, interested in custom pieces, 
                  or want to collaborate, we're here to listen and help bring your vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-blush p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-brand-clay" />
                  </div>
                  <div>
                    <p className="font-libre font-medium text-foreground">Email</p>
                    <p className="font-libre text-muted-foreground">hello@element-by-shrushti.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-brand-blush p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-brand-clay" />
                  </div>
                  <div>
                    <p className="font-libre font-medium text-foreground">Phone</p>
                    <p className="font-libre text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-brand-blush p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-clay" />
                  </div>
                  <div>
                    <p className="font-libre font-medium text-foreground">Studio</p>
                    <p className="font-libre text-muted-foreground">New York, NY</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-libre font-medium text-foreground mb-4">Follow our journey</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="border border-brand-taupe/20">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="border border-brand-taupe/20">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="border border-brand-taupe/20">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-brand-blush p-6 rounded-lg">
                <h3 className="font-cormorant text-2xl font-medium text-foreground mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="font-libre text-muted-foreground mb-4">
                  Find answers to common questions about sizing, care, and our design process.
                </p>
                <Button variant="outline">
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;