'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

export type ProfileCardItem = {
  name: string;
  title: string;
  qualifications: string;
  summary: string;
  expertise?: string;
  image: string;
};

type ExampleProps = {
  cards: ProfileCardItem[];
  className?: string;
};

export default function Example({ cards, className }: ExampleProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={cn('flex flex-wrap items-start justify-center gap-8 md:gap-10', className)}>
      {cards.map((card, index) => (
        <article
          key={card.name}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          className={cn(
            'h-[700px] w-[320px] rounded-2xl bg-black text-white transition-all duration-300',
            active === index ? 'ring-2 ring-[#b3a27f] translate-y-[-4px]' : 'ring-1 ring-white/10'
          )}
        >
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src={card.image}
              alt={card.name}
              className="h-[270px] w-full rounded-2xl object-cover object-top transition-all duration-300 hover:scale-105"
            />
            <div className="pointer-events-none absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="flex h-[430px] flex-col px-4 pb-4 pt-3">
            <p className="max-h-[165px] overflow-y-auto border-b border-gray-600 pb-4 text-sm leading-relaxed text-gray-200">
              {card.summary}
            </p>
            {card.expertise ? (
              <p className="mt-3 max-h-[122px] overflow-y-auto text-xs leading-relaxed text-gray-300">
                <span className="font-semibold uppercase tracking-wide text-[#b3a27f]">Expertise: </span>
                {card.expertise}
              </p>
            ) : null}
            <p className="mt-auto pt-4 font-medium">{card.name}</p>
            <p className="text-xs uppercase tracking-wide text-[#b3a27f]">{card.title}</p>
            <p className="text-xs text-gray-300">{card.qualifications}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
