import { Code2, Layout, Palette, Sparkles, Target, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Maps the string icon names used in content.ts to Lucide components.
 * Add new icons here when expanding the services list for a client.
 */
const iconMap: Record<string, LucideIcon> = {
  palette: Palette,
  layout: Layout,
  code: Code2,
  sparkles: Sparkles,
  target: Target,
  'trending-up': TrendingUp,
};

export function getServiceIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}