import pp from "../../assets/pp.jpg"

export default function Hero() {
  return (
    <div className="mt-25 flex justify-center">
      <div className="w-full max-w-xl text-left pl-20">
        <img
          src={pp} // Replace with your image
          alt="avatar"
          className="w-30 h-30 rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold text-black">
          Hey, I'm Tanish.
          <br />
          Engineer & Web Developer.
        </h1>
        <p className="text-gray-500 text-md mt-4 leading-relaxed">
          Most designers can't code. Most developers can't design. I do both.
          <br />
          3 years turning ideas into profitable products.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition text-sm font-medium">
            Hire me
          </button>
          <span className="bg-green-100 text-green-800 px-5 py-2.5 rounded-xl text-sm font-medium">
            ● Open to Opportunities
          </span>
        </div>
      </div>
    </div>
  );
}
