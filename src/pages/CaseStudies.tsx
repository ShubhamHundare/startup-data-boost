import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import caseStudyImage from "@/assets/case-study-transform.jpg";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Real Results from Real Startups
          </h1>
          <p className="text-xl text-white/90 mb-8">
            See how we've helped startups transform their data chaos into competitive advantages.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge variant="secondary" className="mb-4">Featured Case Study</Badge>
                <CardTitle className="text-3xl mb-6">E-Commerce Startup Saves $15K/Year</CardTitle>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Client Profile
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Seed-stage e-commerce startup</strong> with 50K+ monthly orders, 
                      growing 20% month-over-month. Team of 12 people with no dedicated data engineer.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-destructive">The Problem</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Manual CSV exports from Shopify took <strong>20+ hours per week</strong></li>
                      <li>• Financial reports were always 2-3 days behind</li>
                      <li>• No visibility into real-time inventory or customer behavior</li>
                      <li>• Founder spending 25% of time on "data work" instead of strategy</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Our Solution</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Built automated <strong>Shopify → Azure → Power BI pipeline</strong></li>
                      <li>• Real-time inventory tracking and alerts</li>
                      <li>• Automated daily/weekly executive reports</li>
                      <li>• Customer cohort analysis and LTV modeling</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">$15K</div>
                      <div className="text-sm text-muted-foreground">Annual Savings</div>
                    </div>
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Time Reduced</div>
                    </div>
                    <div className="text-center p-4 bg-light-bg rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">2 weeks</div>
                      <div className="text-sm text-muted-foreground">Delivery Time</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 bg-light-bg">
                <img 
                  src={caseStudyImage} 
                  alt="Before and after transformation" 
                  className="rounded-lg w-full mb-6"
                />
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                  "DataFuse gave us back 20 hours per week and made our financial 
                  reporting instantaneous. The real-time dashboards helped us spot 
                  inventory issues before they became stockouts. ROI paid for itself 
                  in the first month."
                </blockquote>
                <cite className="block mt-4 text-sm font-semibold">
                  — Sarah Chen, CEO of FlowCommerce
                </cite>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              More Success Stories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Badge variant="outline" className="w-fit mb-2">SaaS Startup</Badge>
                <CardTitle className="text-xl">Real-Time Customer Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  B2B SaaS company needed to track user behavior across their platform 
                  to identify churn signals and upsell opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-background rounded">
                    <div className="text-lg font-bold text-primary">30%</div>
                    <div className="text-xs text-muted-foreground">Churn Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded">
                    <div className="text-lg font-bold text-primary">$50K</div>
                    <div className="text-xs text-muted-foreground">ARR Increase</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <Badge variant="outline" className="w-fit mb-2">FinTech Startup</Badge>
                <CardTitle className="text-xl">Regulatory Reporting Automation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-6">
                  Financial services startup needed automated compliance reporting 
                  to scale without hiring a full compliance team.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-background rounded">
                    <div className="text-lg font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Compliance Rate</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded">
                    <div className="text-lg font-bold text-primary">75%</div>
                    <div className="text-xs text-muted-foreground">Time Savings</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Consistent Results Across Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data engineering solutions deliver measurable impact across different startup verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Average Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$25K</div>
              <div className="text-muted-foreground">Avg Annual Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">14 Days</div>
              <div className="text-muted-foreground">Avg Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can transform your data challenges into competitive advantages.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Start Your Transformation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;