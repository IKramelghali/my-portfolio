export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-2xl mb-6">I build modern web applications with Next.js</p>
      <a
        href="/projects"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        See My Work
      </a>
    </section>
  );
}
