const giacaList = [
  {
    id: 1,
    title: "Giá cao đến thấp",
  },
  {
    id: 2,
    title: "Giá thấp đến cao",
  },
];

function GiaCaFilter({ giaCa, setGiaCa }) {
  return (
    <div className="flex mt-5 gap-4">
      {giacaList.map((item) =>
        giaCa === item.title ? (
          <div
            key={item.id}
            className="bg-white  p-4 cursor-pointer rounded-md w-1/3  font-bold text-center text-[18px] border border-primary text-primary"
            onClick={() => setGiaCa(0)}
          >
            {item.title}
          </div>
        ) : (
          <div
            key={item.id}
            className="bg-white  p-4 cursor-pointer rounded-md w-1/3 text-secondary font-bold text-center text-[18px] border border-gray-300 hover:bg-gray-200"
            onClick={() => setGiaCa(item.title)}
          >
            {item.title}
          </div>
        )
      )}
    </div>
  );
}

export default GiaCaFilter;
