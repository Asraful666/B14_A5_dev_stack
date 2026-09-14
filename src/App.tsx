import { useState } from "react";
import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";
import Footer from "./components/Footer";

import type { Technology } from "./types";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((previous) => [...previous, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one technology from stack
  const handleRemoveFromStack = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Technologies + Your Stack */}
        <TechList
          stack={stack}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;