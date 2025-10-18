import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';

export type ProjectCategory = 'All' | 'Frontend' | 'Backend' | 'Full-Stack' | 'Enterprise Platform' | 'API Development' | 'Data Visualization' | 'Financial Platform' | 'Educational Platform' | 'Tax Calculator';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  projectCount: number;
}

export const ProjectFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  projectCount 
}: ProjectFilterProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleCategories = showAll ? categories : categories.slice(0, 6);
  const hiddenCount = categories.length - 6;

  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span className="text-sm">Filter by category</span>
        <Badge variant="secondary" className="text-xs">
          {projectCount} projects
        </Badge>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
        {visibleCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={`transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-primary hover:shadow-glow'
                : 'border-glass-border hover:bg-glass-bg'
            }`}
          >
            {category}
          </Button>
        ))}
        
        {hiddenCount > 0 && !showAll && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(true)}
            className="border-glass-border hover:bg-glass-bg"
          >
            +{hiddenCount} more
          </Button>
        )}
        
        {showAll && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(false)}
            className="border-glass-border hover:bg-glass-bg"
          >
            <X className="w-3 h-3 mr-1" />
            Less
          </Button>
        )}
      </div>
      
      {activeCategory !== 'All' && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCategoryChange('All')}
          className="text-muted-foreground hover:text-foreground"
        >
          Clear filter
        </Button>
      )}
    </div>
  );
};
