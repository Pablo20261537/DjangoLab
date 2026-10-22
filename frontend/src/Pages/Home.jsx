import React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
export default function Home() {
  return (
    <Layout>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>¡Hola desde React e Inertia en Django! 🚀</h1>
        <button className="bg-red-400">PRESIONAME</button>
        <Button>Button de shadcn</Button>
      </div>
    </Layout>
  );
}
