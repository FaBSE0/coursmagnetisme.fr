'use client';

import { useMemo, useState } from 'react';

import type { Formation } from '@/data/formations';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FormationCard } from '@/components/blocks/formation-card';

type FormationsCatalogueProps = {
  formations: Formation[];
};

export const FormationsCatalogue = ({ formations }: FormationsCatalogueProps) => {
  const [search, setSearch] = useState('');
  const [format, setFormat] = useState<string>('all');
  const [level, setLevel] = useState<string>('all');
  const [price, setPrice] = useState(() => Math.max(...formations.map((formation) => formation.priceEUR)));

  const uniqueFormats = ['all', ...new Set(formations.map((formation) => formation.format))];
  const uniqueLevels = ['all', ...new Set(formations.map((formation) => formation.level))];
  const maxPrice = Math.max(...formations.map((formation) => formation.priceEUR));

  const filteredFormations = useMemo(() => {
    return formations.filter((formation) => {
      const matchesSearch =
        formation.title.toLowerCase().includes(search.toLowerCase()) ||
        formation.provider.toLowerCase().includes(search.toLowerCase());
      const matchesFormat = format === 'all' || formation.format === format;
      const matchesLevel = level === 'all' || formation.level === level;
      const matchesPrice = formation.priceEUR <= price;

      return matchesSearch && matchesFormat && matchesLevel && matchesPrice;
    });
  }, [formations, search, format, level, price]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="space-y-2 text-sm font-medium text-muted-foreground">
            Recherche
            <Input
              placeholder="Nom de formation ou organisme"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-muted-foreground">
            Format
            <select
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-base"
              value={format}
              onChange={(event) => setFormat(event.target.value)}
            >
              {uniqueFormats.map((value) => (
                <option key={value} value={value}>
                  {value === 'all' ? 'Tous' : value}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium text-muted-foreground">
            Niveau
            <select
              className="h-11 w-full rounded-md border border-input bg-background px-3 text-base"
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            >
              {uniqueLevels.map((value) => (
                <option key={value} value={value}>
                  {value === 'all' ? 'Tous' : value}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium text-muted-foreground">
            Budget max : {price} €
            <input
              type="range"
              min="100"
              max={maxPrice}
              value={price}
              onChange={(event) => setPrice(Number(event.target.value))}
              className="w-full"
            />
          </label>
        </div>
      </div>
      <Separator />
      <div className="grid gap-6 md:grid-cols-2">
        {filteredFormations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
        {filteredFormations.length === 0 && (
          <p className="text-center text-lg text-muted-foreground">
            Aucun programme ne correspond à votre recherche. Essayez d’élargir les filtres.
          </p>
        )}
      </div>
    </div>
  );
};

