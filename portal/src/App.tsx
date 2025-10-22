import { CanvasProvider } from './core/providers/canvas-context';
import { CategoryProvider } from './core/providers/category-context';
import { ItemProvider } from './core/providers/item-context';
import { ScoreProvider } from './core/providers/score-context';
import AppRouting from './core/routing/app-routing';

function SketchlingzApp() {
  return (
    <CategoryProvider>
      <ItemProvider>
        <ScoreProvider randomItem=''>
          <CanvasProvider>
            <AppRouting />
          </CanvasProvider>
        </ScoreProvider>
      </ItemProvider>
    </CategoryProvider>
  );
}

export default SketchlingzApp;
