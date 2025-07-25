import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    dataChallenge: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", dataChallenge: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let's Solve Your Data Challenges
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Get in touch with our Azure-certified data engineers and start your transformation today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Tell Us About Your Data Chaos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your startup name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dataChallenge">Describe Your Data Chaos *</Label>
                      <Textarea
                        id="dataChallenge"
                        name="dataChallenge"
                        value={formData.dataChallenge}
                        onChange={handleChange}
                        placeholder="Tell us about your current data challenges, tools you're using, and what you'd like to achieve..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Email Us Directly</h3>
                      <a 
                        href="mailto:hi@datafuse.com" 
                        className="text-primary hover:underline text-lg"
                      >
                        hi@datafuse.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-muted-foreground">
                        Technical questions: <strong>Same day</strong><br />
                        Project inquiries: <strong>Within 24 hours</strong><br />
                        Urgent issues: <strong>Within 2 hours</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendly Booking */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    Book a Discovery Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Skip the back-and-forth emails. Book a 15-minute discovery call 
                    to discuss your data challenges and get instant recommendations.
                  </p>
                  
                  <div className="bg-light-bg p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3">What we'll cover:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Current data setup audit</li>
                      <li>• Biggest pain points assessment</li>
                      <li>• Recommended solution approach</li>
                      <li>• Timeline and investment estimate</li>
                      <li>• Next steps if it's a good fit</li>
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full" size="lg">
                    <a 
                      href="https://calendly.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Book 15-Min Discovery Call
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Common Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <details className="group">
                      <summary className="cursor-pointer font-medium group-open:text-primary">
                        How much does a typical project cost?
                      </summary>
                      <p className="text-sm text-muted-foreground mt-2 pl-4">
                        Most projects range from $5K-$20K depending on complexity. 
                        We'll give you a fixed quote after the discovery call.
                      </p>
                    </details>
                    
                    <details className="group">
                      <summary className="cursor-pointer font-medium group-open:text-primary">
                        Do you work with non-Azure environments?
                      </summary>
                      <p className="text-sm text-muted-foreground mt-2 pl-4">
                        We specialize in Azure but can integrate with AWS, GCP, 
                        and other platforms as needed.
                      </p>
                    </details>
                    
                    <details className="group">
                      <summary className="cursor-pointer font-medium group-open:text-primary">
                        What if we need ongoing support?
                      </summary>
                      <p className="text-sm text-muted-foreground mt-2 pl-4">
                        We offer optional DataOps support starting at $1.5K/month 
                        for monitoring and maintenance.
                      </p>
                    </details>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;