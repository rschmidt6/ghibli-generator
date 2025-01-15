import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RandomGenerator from "./components/RandomGenerator";

// Create a new QueryClient instance with custom configuration
// This client manages all the data fetching, caching, and state management for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable automatic refetching when window regains focus
      // This prevents unwanted rerenders when user tabs back to the app
      refetchOnWindowFocus: false,

      // Disable automatic retrying of failed requests
      // We'll handle errors manually instead
      retry: false,
    },
  },
});

function App() {
  return (
    // Wrap the entire app in QueryClientProvider to enable React Query features
    // This makes the queryClient available to all child components
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen py-8 bg-[#00ADF0] font-body">
        <div className="container mx-auto px-4">
          <header className="mb-8 flex justify-center flex-col items-center">
            <h1 className="text-[2.75rem] text-white leading-tight scale-y-90">
              ランダムジブリ探検
            </h1>
            <div className="border-t-2 border-white w-96"></div>
            <h1 className="text-[1.70rem] text-white scale-y-105">
              RANDOMLY EXPLORE GHIBLI
            </h1>
          </header>
          {/* Main component that handles random Ghibli content generation */}
          <RandomGenerator />
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-0 lg:opacity-100"
        style={{
          backgroundImage: "url('/ghibli_logo.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      />
    </QueryClientProvider>
  );
}
//#5BC0F3
// Export App as the default export so it can be imported and rendered by main.tsx
export default App;
