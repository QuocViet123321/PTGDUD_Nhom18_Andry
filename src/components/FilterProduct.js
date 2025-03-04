function FilterProduct({ title, children }) {
  return (
    <div className="bg-white p-5 mt-5 pb-10 rounded-md  ">
      <div>
        <h1 className="text-red-500 text-2xl py-2 font-semibold">{title}</h1>
        <div>
          <div className="grid grid-cols-6 gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
