import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

interface ExploreItem {
  id: string;
  title: string;
  category: 'arquitectura' | 'ui' | 'signals';
  description: string;
  tag: string;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CardComponent, IconComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreComponent {
  readonly searchQuery = signal<string>('');
  readonly selectedCategory = signal<string>('todos');

  readonly categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'arquitectura', label: 'Arquitectura' },
    { id: 'signals', label: 'Signals' },
    { id: 'ui', label: 'Mobile UX' }
  ];

  readonly items = signal<ExploreItem[]>([
    {
      id: '1',
      title: 'Standalone Components',
      category: 'arquitectura',
      description: 'Estructura moderna sin NgModules redundantes, facilitando tree-shaking.',
      tag: 'Core'
    },
    {
      id: '2',
      title: 'Angular Signals',
      category: 'signals',
      description: 'Reactividad fina y predecible con computeds, effects y modelos vinculados.',
      tag: 'Reactivity'
    },
    {
      id: '3',
      title: 'Drawer Navegable',
      category: 'ui',
      description: 'Menú hamburguesa accesible con soporte táctil, backdrop blur y a11y.',
      tag: 'UX'
    },
    {
      id: '4',
      title: 'Función inject()',
      category: 'arquitectura',
      description: 'Inyección de dependencias declarativa y limpia sin constructores sobrecargados.',
      tag: 'DI'
    },
    {
      id: '5',
      title: 'Safe Areas & Touch Targets',
      category: 'ui',
      description: 'Optimización nativa para pantallas móviles con notch y objetivos táctiles de 44px+.',
      tag: 'Mobile'
    },
    {
      id: '6',
      title: 'Nuevo Control Flow',
      category: 'signals',
      description: 'Sintaxis nativa @if, @for y @switch integrada directamente en el compilador.',
      tag: 'Templates'
    }
  ]);

  // Lista filtrada reactivamente mediante computed()
  readonly filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.selectedCategory();

    return this.items().filter((item) => {
      const matchesCategory = category === 'todos' || item.category === category;
      const matchesQuery = !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  });

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setCategory(categoryId: string): void {
    this.selectedCategory.set(categoryId);
  }
}
