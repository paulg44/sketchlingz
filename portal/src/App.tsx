import { CategoryProvider } from './core/providers/category-context';
import { ItemProvider } from './core/providers/item-context';
import AppRouting from './core/routing/app-routing';

function SketchlingzApp() {
  return (
    <CategoryProvider>
      <ItemProvider>
        <AppRouting />
      </ItemProvider>
    </CategoryProvider>
  );
}

export default SketchlingzApp;
