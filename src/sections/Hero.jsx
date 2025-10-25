import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
      <div className="relative z-10 max-w-6xl w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block rounded-lg bg-muted px-4 py-1 text-sm mb-4">
              Welcome to my portfolio
            </div>
            <h1 className="scroll-m-20 text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Hi, I'm <span>Souhail Hajjaji</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light mt-4">
              Engineering the Future of Software
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mt-6">
              Passionate about developing performant and reliable software solutions that meet user needs. 
              Currently in 5th year at EMSI Rabat, specializing in computer engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
              <Button 
                size="lg" 
                className="px-8 bg-blue-600 hover:bg-blue-700"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-blue-500 text-blue-500 hover:bg-blue-500/10 mt-4 md:mt-0"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Souhail Hajjaji" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500/30 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-4 py-2 rounded-full font-medium">
                Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;