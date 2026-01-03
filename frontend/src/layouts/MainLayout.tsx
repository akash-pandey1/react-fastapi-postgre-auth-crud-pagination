import { Outlet } from "react-router-dom";
import Header from "../core/components/layout/Header";
import Footer from "../core/components/layout/Footer";

export default function MainLayout() {
    return (
        <>
          <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
        </>
      );
    }