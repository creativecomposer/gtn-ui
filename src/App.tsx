import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import GameContainer from "./components/GameContainer";
import AuthContainer from "./components/AuthContainer";
import AuthGuard from "./components/AuthGuard";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route
          path="/game"
          element={
            <AuthGuard>
              <GameContainer />
            </AuthGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
