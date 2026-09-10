"use client";

import Navbar from "./_component/Navbar";
import Sidebar from "./_component/sidebar";
import RightSidebar from "./_component/rightsidebar";
import HomePage from "./_component/Home";
import Skills from "./_component/Skills";
import Experience from "./_component/Experience";
import Project from "./_component/Project";
import Achievements from "./_component/Achievements";
import Contact from "./_component/Contact";
import Footer from "./_component/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-x-hidden relative selection:bg-[#00e786]/30 selection:text-[#00e786]">
      <Navbar />
      <Sidebar />
      <RightSidebar />
      <main className="w-full flex flex-col items-center">
        <HomePage />
        <Skills />
        <Experience />
        <Project />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
