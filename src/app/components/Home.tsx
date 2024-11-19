import Image from "next/image"; // Next.js optimized Image component

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-400 text-center p-6 md:p-12"
    >
      {/* Background  floating elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-teal-400 opacity-40 animate-gradient-move"></div>
      <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-blue-400 opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 rounded-full bg-teal-400 opacity-60 animate-float delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-500 opacity-40 animate-float delay-4000"></div>

      <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mb-6 shadow-lg transition-transform transform hover:scale-105 animate-fade-in">
        <Image
          src="/images/meer.jpeg"
          alt="Sahiba Baloch"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-500 mb-4 animate-pulse">
        Hello, I'm Sahiba Baloch
      </h1>

      <p className="text-lg md:text-xl text-gray-900 max-w-lg leading-relaxed mb-8">
        A passionate and innovative{" "}
        <span className="font-bold text-blue-700">
          Graphic Designer, Video Editor, and Digital Marketer
        </span>{" "}
        dedicated to combining creativity and strategy to deliver impactful
        results. With a strong foundation in{" "}
        <span className="font-semibold text-teal-700">
          Adobe Creative Suite
        </span>{" "}
        and experience in strategic marketing and campaign management, I thrive
        on creating compelling visuals, dynamic animations, and unique brand
        identities. Currently, I am  exploring advanced tools and techniques to
        push the boundaries of creativity and innovation in the digital world.
        🚀
      </p>

      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Explore My Work
      </button>
    </section>
  );
};

export default Home;
