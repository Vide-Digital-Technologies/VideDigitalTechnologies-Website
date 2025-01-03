import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Section from '../components/common/Section';
import PageLayout from '../components/common/PageLayout';
import { FaShieldAlt, FaUserLock, FaFileContract, FaBalanceScale, FaClock, FaMoneyBillWave, FaHandshake, FaCheck } from 'react-icons/fa';

const Terms = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Terms & Conditions', path: '#' },
  ];

  const sections = [
    {
      icon: FaFileContract,
      title: "Digital Marketing Services",
      content: "Our services encompass comprehensive digital marketing solutions tailored to your business needs.",
      highlights: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing & Management",
        "Content Marketing & Creation",
        "Pay-Per-Click (PPC) Advertising",
        "Email Marketing Campaigns",
        "Website Analytics & Reporting"
      ]
    },
    {
      icon: FaHandshake,
      title: "Service Delivery & Commitments",
      listItems: [
        "Initial strategy development within 14 days of engagement",
        "Monthly performance reports and analytics",
        "Weekly social media content calendar",
        "24-48 hour response time for client communications",
        "Quarterly strategy review and optimization meetings"
      ]
    },
    {
      icon: FaClock,
      title: "Campaign Management",
      content: "We manage your digital marketing campaigns with precision and transparency. Each campaign is carefully planned, executed, and monitored for optimal performance.",
      highlights: [
        "Detailed campaign planning and strategy",
        "Regular performance optimization",
        "Real-time monitoring and adjustments",
        "Monthly performance analysis",
        "ROI tracking and reporting"
      ]
    },
    {
      icon: FaMoneyBillWave,
      title: "Pricing & Billing",
      listItems: [
        "Transparent monthly retainer structure",
        "Ad spend managed separately from service fees",
        "Additional services quoted upon request",
        "Monthly invoicing with detailed service breakdown",
        "Flexible payment options available"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Data & Analytics",
      content: "We prioritize the security and confidentiality of your business data while providing comprehensive analytics and insights.",
      highlights: [
        "Secure data handling protocols",
        "Regular backup of campaign data",
        "Detailed analytics reporting",
        "Custom KPI tracking",
        "Competitor analysis reports"
      ]
    },
    {
      icon: FaUserLock,
      title: "Account Management",
      listItems: [
        "Dedicated account manager for your campaigns",
        "Access to our project management platform",
        "Regular strategy consultation calls",
        "Priority support channel access",
        "Monthly performance review meetings"
      ]
    },
    {
      icon: FaBalanceScale,
      title: "Service Terms",
      content: "Our service agreements are designed to be flexible while ensuring consistent delivery of results.",
      highlights: [
        "3-month minimum engagement period",
        "30-day notice for service modifications",
        "Full ownership of campaign assets",
        "Transparent reporting structure",
        "Clear deliverables timeline"
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Terms & Conditions"
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-gradient-to-b from-light/50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
                TERMS OF SERVICE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
                Service Terms & Agreement
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Please review our comprehensive terms of service to understand our working relationship and mutual commitments for a successful partnership.
              </p>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="text-3xl text-primary" />
                      </div>
                    </div>
                    <div className="space-y-6 flex-grow">
                      <h3 className="text-2xl lg:text-3xl font-bold text-dark">
                        {section.title}
                      </h3>
                      {section.content && (
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      )}
                      {section.highlights && (
                        <div className="bg-gray-50 rounded-xl p-6">
                          <ul className="space-y-3">
                            {section.highlights.map((item, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <FaCheck className="text-primary flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {section.listItems && (
                        <ul className="space-y-4 bg-gray-50 rounded-xl p-6">
                          {section.listItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                <FaCheck className="text-primary text-sm" />
                              </span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-20 mb-20 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-10 border border-primary/10"
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-dark mb-4">
                  Need Clarification?
                </h3>
                <p className="text-gray-600 text-lg mb-8">
                  Our team is ready to assist you with any questions about our terms or services. We're committed to maintaining transparent and professional relationships with our clients.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href="tel:+918660735813"
                    className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Call Us
                  </a>
                  <a 
                    href="mailto:videdigitaltechnologies@gmail.com"
                    className="px-8 py-4 border border-primary/20 text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Terms; 