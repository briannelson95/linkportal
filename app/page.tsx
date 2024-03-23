import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-2 mt-10">
        <h1 className="text-4xl font-bold">Link Portal</h1>
        <p className="my-gradient px-4 py-1 text-sm rounded-full w-fit text-black">All your links in one place</p>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
    </main>
  );
}
