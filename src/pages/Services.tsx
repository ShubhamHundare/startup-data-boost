import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Database, Zap, BarChart3, HeadphonesIcon, Clock, DollarSign } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Data Engineering Services for Startups
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Choose the perfect package for your startup's data needs. All solutions are built on Azure with enterprise-grade security.
          </p>
        </div>
      </section>

      {/* Services Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Basic Pipeline Setup */}
            <Card className="relative p-8 border-2 hover:shadow-elegant transition-shadow">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Basic Pipeline Setup</CardTitle>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$5K-$10K</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  Perfect for startups ready to move beyond spreadsheets and manual processes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Azure Data Factory with 50+ SaaS connectors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Delta Lake storage with ACID transactions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>PySpark ETL with Great Expectations validation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Azure Monitor alerts & data lineage tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Production deployment & technical documentation</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Analytics */}
            <Card className="relative p-8 border-2 border-primary hover:shadow-elegant transition-shadow">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Most Popular
              </Badge>
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Advanced Analytics</CardTitle>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$10K-$20K</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  For startups ready to leverage real-time analytics and custom dashboards.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Everything in Basic Pipeline</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Databricks Delta Live Tables for streaming ETL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Power BI Premium with DirectQuery optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Azure Event Hubs real-time ingestion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>MLflow model registry & experiment tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Medallion architecture (Bronze/Silver/Gold)</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Ongoing DataOps */}
            <Card className="relative p-8 border-2 hover:shadow-elegant transition-shadow">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Ongoing DataOps</CardTitle>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">$1.5K+</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  Continuous monitoring, optimization, and support for your data infrastructure.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>24/7 pipeline monitoring & support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>New data source integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Monthly strategy reviews</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Priority technical support</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  How long does setup take?
                </h3>
                <p className="text-muted-foreground">
                  <strong>2-3 weeks for most projects.</strong> We follow a proven methodology: Week 1 - Discovery & Architecture, Week 2 - Development & Testing, Week 3 - Deployment & Training. Complex integrations may take an additional week.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Do you work with Shopify, Stripe, and other popular tools?
                </h3>
                <p className="text-muted-foreground">
                  <strong>Yes!</strong> We have pre-built connectors for 50+ popular SaaS tools including Shopify, Stripe, HubSpot, Salesforce, and more. If you use a tool with an API, we can connect it.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  What about ongoing costs after setup?
                </h3>
                <p className="text-muted-foreground">
                  Azure infrastructure costs typically run $200-800/month depending on data volume. We help you optimize these costs and provide transparent monitoring. Our DataOps support is optional but recommended for mission-critical systems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  Can you handle real-time data processing?
                </h3>
                <p className="text-muted-foreground">
                  <strong>Absolutely.</strong> We specialize in real-time streaming with Azure Event Hubs and Databricks. Whether it's user events, IoT data, or financial transactions, we can process it in real-time and update your dashboards instantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Not Sure Which Package Is Right?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book a free discovery call and we'll recommend the perfect solution for your data needs and budget.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book Free Discovery Call
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;