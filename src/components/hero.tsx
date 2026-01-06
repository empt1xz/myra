'use client';

import { Button } from '@/components/ui/button';
import { Users, Server, Command } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Descubra a{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent font-extrabold">
                  Myra
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                O melhor bot para seu servidor discord, com recursos poderosos e
                fácil de usar. 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0" asChild>
                <a
                  href="LINK OAUTH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adicionar ao Discord
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                asChild
              >
                <a href="#comandos">Documentação</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Servidores</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Usuários</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Command className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">0</div>
                <div className="text-sm text-muted-foreground">Comandos</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center -mt-12">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/image.png"
                alt="Myra Bot"
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
