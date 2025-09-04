import Button from './components/ui/Button.tsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
      <Button size="default" color="white">
        white
      </Button>
      <Button size="default" color="primary">
        primary
      </Button>
    </div>
  );
}
