import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { PublicProject } from '@/services/uaipy-api/types';

interface ProjectFiltersProps {
    projects: PublicProject[];
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

export function ProjectFilters({ searchTerm, onSearchChange }: ProjectFiltersProps) {
    return (
        <div className="mb-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                    type="text"
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="pl-10 w-full max-w-md"
                />
            </div>
        </div>
    );
}

