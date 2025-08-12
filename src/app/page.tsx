"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="section-1 flex justify-center w-full h-[50vh] sm:h-[70vh] ">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ">
              Manage your content with Ease
            </h1>
            <p className="text-gray-400 max-w-[700px] my-4 mx-auto ">
              Streamline your content workflow,publish with confidence.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/blogs" variant={"default"} className="first bg-gray-200 hover:bg-gray-300 transition-all duration-200 delay-100 text-black px-4 py-1 rounded">
              Try it out!
            </Link>
            <Button variant={"outline"} className="second">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <section className="min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center px-4">
        <div className="grid gap-4 grid-cols-2  sm:grid-cols-3 lg:grid-cols-3">
          <span className="custom  flex flex-col items-center gap-2">
            <Icons.BlogCustomIcon className="w-16 h-16 text-white" />
            <h3 className="text-xl text-gray-300 font-bold">
              Intuitive Editor
            </h3>
            <p className="text-gray-400 w-[70%] text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="layers flex flex-col items-center gap-2">
            <Layers size={50} />
            <h3 className="text-xl text-gray-300 font-bold">Flexible Tools</h3>
            <p className="text-gray-400 w-[70%] text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="zap flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className="text-xl text-gray-300 font-bold">Blazing fast</h3>
            <p className="text-gray-400 w-[70%] text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
        </div>
      </section>

      <section className="h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center items-start">
        <div className="max-w-[50%]  mx-auto space-y-3">
          <h4 className="text-2xl font-bold">
            Ready to Transform your Content Journey?
          </h4>
          <p className="text-gray-400 text-sm">
            Join thousands of content creators like you who chosen SmartCMS
          </p>
          <div className="flex gap-2">
            <input
              className="bg-zinc-800 focus:outline-none rounded px-2 py-[7px ] text-sm text-gray-400"
              type="text"
              placeholder="Enter your email"
            />
            <Button variant="outline">Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
