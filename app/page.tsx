"use client"
import HomePage from "./_component/Home";
import Navbar from "./_component/Navbar";
import Sidebar from "./_component/sidebar";
import Skills from "./_component/Skills";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar/>
      <div className="flex flex-row gap-2.5"><Sidebar/><HomePage/></div>
      <Skills/>
    </div>
  );
}
