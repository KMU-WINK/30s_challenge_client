import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AppDemoFrame from './components/AppDemo.tsx';

export default function App() {
  return (
    <AppDemoFrame>
      <RouterProvider router={router} />
    </AppDemoFrame>
  );
}
