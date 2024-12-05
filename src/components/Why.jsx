
function Why() {
  return (
    <div className=" bg-gray-900 flex flex-col items-center text-center py-10 px-4 md:pt-16">
      <h1 className="text-xl font-black text-gray-300 mb-10 md:text-4xl md:mb-16 lg:text-5xl">
        ඇයි{" "}
        <span className="font-extrabold text-3xl text-amber-500 md:text-5xl lg:text-6xl">
          ශුද්ධ බයිබලය
        </span>{" "}
        කියන්නෙ?
      </h1>
      <img
        src="./tree.png"
        alt="break down of word theopneustos"
        className="rounded-md mb-4 md:mb-6 lg:mb-10"
      />
      <p className="text-gray-300 md:text-xl lg:text-2xl lg:leading-10">
        මුළු බයිබලයම ශුද්ධ ලියවිල්ලක් ලෙසින් හදුන්වන්නට හැකිවන්නේ එහි තිබෙන හැම
        වචනයක්ම මනුෂ්‍යයන් කරණු කොටගෙන දෙවියන්වහන්සේගේ{" "}
        <span className="text-amber-500">ආත්මය සහ හුස්ම</span> මගින් ලියා ඇති
        බැවිනි. එම නිසා{" "}
        <span className="text-amber-500">ශුද්ධ බයිබලය දේව හඬ </span> ලෙසත්{" "}
        <span className="text-amber-500">දේව වාක්‍ය</span> ලෙසත් ස්ථිරව ප්‍රකාශ
        කිරීමට හැකිය.
      </p>
    </div>
  );
}

export default Why;
