// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RandomGenerator from "./components/RandomGenerator";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-slate-100 py-8">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-600">
              Ghibli Generator
            </h1>
          </header>
          <RandomGenerator />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
