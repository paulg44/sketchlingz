import { CanvasProvider } from './core/providers/canvas-context';
import { CategoryProvider } from './core/providers/category-context';
import { ItemProvider } from './core/providers/item-context';
import AppRouting from './core/routing/app-routing';

function SketchlingzApp() {
  return (
    <CategoryProvider>
      <ItemProvider>
        <CanvasProvider>
          <AppRouting />
        </CanvasProvider>
      </ItemProvider>
    </CategoryProvider>
  );
}

export default SketchlingzApp;
