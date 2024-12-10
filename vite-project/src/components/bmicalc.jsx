import { useState } from "react";

function Bmicalc() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [content, setContent] = useState(null);
  console.log(content, height, weight, bmi);
  const handleInputWeight = (e) => setWeight(parseInt(e.target.value));
  const handleInputHeight = (e) => setHeight(parseInt(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      let heightMetres = height / 100;
      setBmi((weight / heightMetres ** 2).toFixed(2));
      setContent(bmi);
    } else {
      return;
    }
  };
  return (
    <>
      <div className="calculator flex flex-col max-w-lg m-auto gap-10 mt-20">
        <h1 className="text-center text-xl ">Bmical Calculator</h1>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label className="text-sm flex flex-col gap-2">
            Height (cantimetres):
            <input
              className=" bg-slate-100 border  w-full  border-black rounded-2xl px-3 py-2"
              type="text"
              onChange={handleInputHeight}
            />
          </label>
          <label className="text-sm flex flex-col gap-2">
            Weight (kg):
            <input
              className=" bg-slate-100 border  w-full  border-black rounded-2xl px-3 py-2"
              type="text"
              onChange={handleInputWeight}
            />
          </label>
          <button
            className="bg-slate-800 text-white px-8 py-2 rounded-2xl"
            type="submit"
          >
            Check BMi
          </button>
        </form>
      </div>
      {content && (
        <div className="flex justify-center items-center h-20">
          <h1 className="text-center text-3xl text-green-500">
            Your BMI is {content}
          </h1>
        </div>
      )}
    </>
  );
}

export default Bmicalc;
