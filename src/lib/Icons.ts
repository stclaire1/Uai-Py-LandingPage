import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

export const getIconByName = (name?: IconName): LucideIcon | null => {
    if (!name) return null;
    const Icon = LucideIcons[name] as LucideIcon;
    return Icon || LucideIcons.HelpCircle;
};