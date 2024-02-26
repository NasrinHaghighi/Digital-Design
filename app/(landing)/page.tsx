import Category from "@/components/Landing/Category";
import Features from "@/components/Landing/Features";
import PostList from "@/components/Landing/PostList";
import Sidebar from "@/components/Landing/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Features />

 
  <Category />
  <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4">
   <div className="md:col-span-4 col-span-12 order-1 md:order-1 ">
    <Sidebar />
   </div>
   <div className="md:col-span-8 col-span-12 order-2 md:order-2">
    <PostList />
   </div>
  </div>
  </>
  );
}
