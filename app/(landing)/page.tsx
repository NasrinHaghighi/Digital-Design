import Category from "@/components/Landing/Category";
import Features from "@/components/Landing/Features";
import PostList from "@/components/Landing/PostList";
import Sidebar from "@/components/Landing/Sidebar";


export default function Home({searchParams}: any) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
  <Features />

 
  <Category />
  <div className="grid md:grid-flow-col grid-flow-row gap-8 p-4">
   <div className="lg:col-span-4 hidden lg:block order-1 md:order-1 ">
    <Sidebar />
   </div>
   <div className="md:col-span-8 col-span-12 order-2 md:order-2">
   <h1 className='text-2xl'>آخرین پستها</h1>
    <PostList page={page} cat={''} />
   </div>
  </div>
  </>
  );
}
