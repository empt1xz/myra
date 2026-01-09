import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, CalendarDays, Rocket, Sparkles } from 'lucide-react';

type Status = 'done' | 'in-progress' | 'planned';

const statusUI: Record<Status, { label: string; dot: string; badge: string; text: string }> = {
  done: {
    label: 'Concluído',
    dot: 'bg-emerald-500 ring-emerald-500/30',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    text: 'text-emerald-600 dark:text-emerald-300',
  },
  'in-progress': {
    label: 'Em andamento',
    dot: 'bg-amber-500 ring-amber-500/30',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300',
    text: 'text-amber-600 dark:text-amber-300',
  },
  planned: {
    label: 'Planejado',
    dot: 'bg-gray-300 dark:bg-emerald-500/20 ring-gray-300/50 dark:ring-emerald-500/20',
    badge: 'bg-gray-200 text-gray-700 dark:bg-black/40 dark:text-emerald-200',
    text: 'text-gray-500 dark:text-emerald-200/70',
  },
};

const roadmap = [
  {
    title: 'Site oficial',
    description: 'Página para apresentar funcionalidades, documentação e suporte.',
    date: 'Jan–Fev 2026',
    status: 'in-progress' as Status,
    icon: Rocket,
  },
  {
    title: 'Myra Bot v1.0',
    description: 'Lançamento inicial do bot com funcionalidades básicas.',
    date: 'Fev-Mar 2026',
    status: 'planned' as Status,
    icon: CalendarDays,
  },
  // {
  //   title: 'Teste',
  //   description: 'Teste.',
  //   date: 'Dez 2025',
  //   status: 'done' as Status,
  //   icon: CheckCircle2,
  // },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-emerald-50">Roadmap</h2>
          <p className="text-xl text-gray-600 dark:text-emerald-200/80 max-w-2xl mx-auto">
            O que já entregamos e o que vem por aí.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-500/30" />
          <ul className="space-y-6">
            {roadmap.map((item, idx) => {
              const s = statusUI[item.status];
              const Icon = item.icon;
              return (
                <li key={idx} className="relative pl-14">
                  <span className={`absolute left-0 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full ring-8 ${s.dot}`}>
                    <Icon className="h-4 w-4 text-white dark:text-emerald-100" />
                  </span>

                  <Card className="bg-gray-50/60 dark:bg-black/40 backdrop-blur-sm border-emerald-500/20">
                    <CardContent className="py-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-emerald-50">{item.title}</h3>
                        <Badge className={s.badge}>{s.label}</Badge>
                        <span className={`ml-auto text-sm ${s.text}`}>{item.date}</span>
                      </div>
                      <p className="mt-2 text-gray-700 dark:text-emerald-200/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
