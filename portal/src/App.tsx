import { CategoryProvider } from './core/providers/category-context';
import AppRouting from './core/routing/app-routing';

function SketchlingzApp() {
  return (
    <CategoryProvider>
      <AppRouting />
    </CategoryProvider>
  );
}

export default SketchlingzApp;
