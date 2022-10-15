import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

// Lazily importing Pages for code splitting
const Example = lazy(() => import("../pages/Example"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={routes.example} element={<Example />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
