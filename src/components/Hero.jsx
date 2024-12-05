function Hero() {
  return (
    <div className="min-h-screen bg-[url('/poetrybooks.jpg')] bg-no-repeat bg-cover bg-center items-center flex flex-col justify-center p-4">
      <div className=" bg-neutral-900 border border-neutral-700 backdrop-filter backdrop-blur-md px-8 bg-opacity-50 w-full h-full flex items-center flex-col justify-center p-3 rounded-md shadow-lg shadow-black/45">
        <img
          src="./logo.png"
          alt="logo"
          className="w-48 h-48 lg:w-56 lg:h-56"
          data-aos="zoom-out-down"
        />
        <h1
          className="text-4xl font-bold text-center mb-6 text-gray-100 md:text-6xl md:mb-10 lg:mb-16 lg:text-7xl"
          data-aos="zoom-in-right"
        >
          ක්‍රමාණූකූල බයිබල් අධ්‍යාපනය.
        </h1>
        <p
          className="text-center text-lg font-bold text-slate-200 md:text-xl md:leading-8 lg:text-3xl lg:leading-relaxed lg:mb-8"
          data-aos="zoom-in-left"
        >
          &quot;දෙවියන්වහන්සේගේ මනුෂ්‍යයා සම්පූරණව, සියලු යහපත් ක්‍රියාවලට
          සූදානම්ව සිටින පිණිස. <b>දේවාණූභාවයෙන්</b> දුන් මුළු ලියවිල්ල{" "}
          <em>
            ඉගැන්වීමටත්, තරවටුවටත්, හික්මවීමටත්, ධරමිෂ්ඨකම ගැන ගුරුකම් දීමටත්
          </em>
          ප්‍රයොජනවත්ව තිබේ.&quot;
          <br />
          <span className="font-bold">2 තිමෝති 3:16</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
