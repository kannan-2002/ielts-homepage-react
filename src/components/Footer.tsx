import { Book, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'Courses', href: '#courses' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Practice Tests', href: '#' },
      { name: 'Study Materials', href: '#' },
      { name: 'Speaking Practice', href: '#' },
      { name: 'Band Calculator', href: '#' }
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Student Portal', href: '#' },
      { name: 'Instructor Portal', href: '#' },
      { name: 'Technical Support', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Book className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">IELTS Academy</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your IELTS preparation with AI-powered learning, expert guidance, 
              and personalized study plans designed for success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">contact@ieltsacademy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2024 IELTS Academy. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 pt-4 border-t border-gray-700">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;