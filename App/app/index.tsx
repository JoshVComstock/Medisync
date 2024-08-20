import Register from "./pages/register";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Register />
    </SafeAreaProvider>
  );
}
