'use client';

import type { FaqItem } from '@/data/faq';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaqAccordion } from '@/components/blocks/faq-accordion';

const categories = [
  { value: 'general', label: 'Général' },
  { value: 'formation', label: 'Formation' },
  { value: 'financement', label: 'Financement' },
  { value: 'pratique', label: 'Pratique' }
];

type FaqTabsProps = {
  items: FaqItem[];
};

export const FaqTabs = ({ items }: FaqTabsProps) => (
  <Tabs defaultValue="general" className="w-full">
    <TabsList className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <TabsTrigger key={category.value} value={category.value}>
          {category.label}
        </TabsTrigger>
      ))}
    </TabsList>
    {categories.map((category) => (
      <TabsContent key={category.value} value={category.value} className="mt-8">
        <FaqAccordion items={items.filter((item) => item.category === category.value)} />
      </TabsContent>
    ))}
  </Tabs>
);

