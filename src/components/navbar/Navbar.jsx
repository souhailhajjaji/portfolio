import React from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Github, Mail, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { title: 'Home', href: '#' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/souhail.hajjaji.pdf';
    link.download = 'souhail.hajjaji.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur border-b">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <a className="mr-6 flex items-center space-x-2" href="#">
            <span className="font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Souhail Hajjaji</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink href={item.href} className={`${navigationMenuTriggerStyle()} hover:text-blue-500`}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-3">
          <a 
            href="#"
            onClick={handleDownload}
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm border border-input hover:bg-accent hover:text-accent-foreground rounded-md font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/souhail-hajjaji-46846137a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:souhail.hajjaji.2004@gmail.com" className="p-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    className="text-lg font-medium hover:text-blue-500 py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <a 
                  href="#"
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-input hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors mt-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" x2="12" y1="15" y2="3"/>
                  </svg>
                  Download CV
                </a>
                <div className="pt-6 flex justify-center space-x-5">
                  <a href="https://www.linkedin.com/in/souhail-hajjaji-46846137a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="mailto:souhail.hajjaji.2004@gmail.com" className="p-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;