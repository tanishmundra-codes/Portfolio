import pp from "../../assets/pp.jpg";

export default function Hero() {
  return (
    <div className="flex justify-center mt-21 md:mt-25 px-8">
      <div className="w-full max-w-2xl text-left md:pl-32">
        <img
          src={pp}
          alt="avatar"
          className="w-26 h-26 md:w-27 md:h-27 rounded-full mb-6 md:mb-6"
        />
        <h1 className="text-2xl md:text-5xl font-bold text-black leading-tight">
          Hey, I'm Tanish.
          <br />
          Engineer & Developer.
        </h1>
        <p className="text-gray-500 text-base md:text-md mt-4 md:mt-4 leading-relaxed">
          Most designers can't code. Most developers can't design. I do both

        </p>
        <div className="mt-6 md:mt-6 flex gap-3 flex-wrap">

          <button className="bg-black text-white px-6 py-3 md:px-5 md:py-2.5 rounded-xl hover:bg-gray-800 transition text-base md:text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/tanishmundra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </button>

          <div className="bg-green-100 text-green-800 px-5 py-3 md:px-5 md:py-2.5 rounded-full text-la md:text-sm font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span>Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}