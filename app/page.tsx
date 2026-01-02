"use client"
import Experience from "./_component/Experience";
import HomePage from "./_component/Home";
import Navbar from "./_component/Navbar";
import Sidebar from "./_component/sidebar";
import Skills from "./_component/Skills";
import Project from "./_component/Project";
import Contact from "./_component/Contact";
import RightSidebar from "./_component/rightsidebar";
import Footer from "./_component/footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar/>
      <div className="flex flex-row gap-2.5"><Sidebar/><HomePage/><RightSidebar/></div>
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
