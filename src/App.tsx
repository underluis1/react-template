import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import { Toaster } from "sonner";
import PrivateRoute from "./routes/PrivateRoute.tsx";
import PublicOnlyRoute from "./routes/PublicOnlyRoute.tsx";
import AuthListener from "@/components/reusable/AuthListener.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import TestSidebar from "./pages/TestSidebar.tsx";
import TableReusable from "./pages/TableReusable.tsx";
import TableExemple from "./pages/TableExemple.tsx";
import TanQuery from "@/pages/tanTest/TanQuery.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TestHook from "./pages/tanTest/TestHook.tsx";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthListener />
        <Router>
          <Toaster position="top-right" />
          <Routes>
            {/* Rotta pubblica ma accessibile solo se NON loggato */}
            <Route
              path="/auth"
              element={
                <PublicOnlyRoute>
                  <Auth />
                </PublicOnlyRoute>
              }
            />

            {/* Rotte protette */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            />

            <Route
              path="/test"
              element={
                <PrivateRoute>
                  <TestSidebar></TestSidebar>
                </PrivateRoute>
              }
            />

            <Route
              path="/table"
              element={
                <PrivateRoute>
                  <TableReusable></TableReusable>
                </PrivateRoute>
              }
            />

            <Route
              path="/table2"
              element={
                <PrivateRoute>
                  <TableExemple></TableExemple>
                </PrivateRoute>
              }
            />
            <Route
              path="/tan"
              element={
                <PrivateRoute>
                  <TanQuery />
                </PrivateRoute>
              }
            />

            <Route
              path="/testhook"
              element={
                <PrivateRoute>
                  <TestHook></TestHook>
                </PrivateRoute>
              }
            />
            {/* Puoi aggiungerne altre protette così */}
            {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
