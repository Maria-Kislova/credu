import { TrpcProvider } from './lib/trpc';
import { LessonsPage } from './pages/LessonsPage';

export const App = () => {
  return (
    <TrpcProvider>
      <LessonsPage />
    </TrpcProvider>
  );
};
