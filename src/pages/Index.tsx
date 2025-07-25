import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Database, Zap, BarChart3, CheckCircle, Clock, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-data-pipeline.jpg";
import servicesImage from "@/assets/services-icons.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Scalable Data Pipelines for Startups – 
                <span className="text-white/90"> Delivered in 14 Days</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                We automate your Azure Data Lake, ETL, and dashboards so you can focus on growth, not engineering headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Get a Free Data Audit
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Data Pipeline Architecture" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Why Startups Choose DataFuse
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-elegant">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">From messy spreadsheets to real-time Power BI dashboards</h3>
                <p className="text-muted-foreground">Transform chaotic data into actionable insights with automated reporting.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-elegant">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Built by Azure-certified data engineers (not freelancers)</h3>
                <p className="text-muted-foreground">Enterprise-grade solutions delivered by certified professionals.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-elegant">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">50% cheaper than hiring an in-house team</h3>
                <p className="text-muted-foreground">Get senior-level expertise without the full-time overhead costs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end data engineering solutions built specifically for startups
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Azure Data Lake Setup</h3>
              <p className="text-muted-foreground mb-4">Secure, scalable data storage with automated ingestion from your existing systems.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• API integrations</li>
                <li>• Database connections</li>
                <li>• Real-time streaming</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">PySpark Automation</h3>
              <p className="text-muted-foreground mb-4">Custom ETL pipelines that transform and clean your data automatically.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Data validation</li>
                <li>• Quality monitoring</li>
                <li>• Error handling</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Power BI Dashboards</h3>
              <p className="text-muted-foreground mb-4">Beautiful, interactive dashboards that update in real-time.</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Custom KPI tracking</li>
                <li>• Mobile optimization</li>
                <li>• Automated reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="text-lg px-6 py-2 mb-8">
            Trusted by Startups in Y Combinator & Techstars
          </Badge>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">YC</div>
            <div className="text-2xl font-bold text-muted-foreground">Techstars</div>
            <div className="text-2xl font-bold text-muted-foreground">Azure</div>
            <div className="text-2xl font-bold text-muted-foreground">Databricks</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Stop Wrestling with Data?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free audit of your current data setup. We'll show you exactly what's broken and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Audit
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
              View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
