import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Coins, Gamepad2, Shield, Brain, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

export function Features() {
  const features = [
    {
      icon: Coins,
      title: 'Sistema de Economia',
      description:
        'Moedas virtuais, loja customizável e transações seguras. Crie uma economia vibrante em seu servidor.',
      badge: 'Popular',
    },
    {
      icon: Gamepad2,
      title: 'Jogos & Diversão',
      description:
        'Minigames envolventes, comandos de entretenimento e atividades para manter sua comunidade ativa.',
      badge: null,
    },
    {
      icon: Shield,
      title: 'Moderação Avançada',
      description:
        'Ferramentas poderosas para manter a ordem, incluindo filtros automáticos, logs detalhados e comandos de moderação.',
      badge: null,
    },
    {
      icon: Brain,
      title: '',
      description:
        '',
      badge: null,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Funcionalidades da Myra
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra as ferramentas poderosas que a Myra oferece para transformar
            seu servidor Discord em uma comunidade vibrante e engajada.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  {feature.badge && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      <Sparkles className="w-3 h-3 mr-1" />
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
