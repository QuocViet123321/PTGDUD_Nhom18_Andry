function AddressShip({
  isMacDinh,
  id,
  name,
  phone,
  address,
  handleDeleteAdressShip,
  handleSelectAddressShip,
}) {
  return (
    <div
      className={`w-[700px] bg-white p-4 rounded-md border ${isMacDinh ? "border-[#009300]" : "border-gray-300"}`}
    >
      <div className="flex my-3 justify-between">
        <h1 className="text-[20px] font-bold">{name}</h1>
        {isMacDinh && <span className="text-[#009300]">Mặc định</span>}
      </div>
      <div className="text-[18px] my-1">Điện thoại : {phone}</div>
      <div className="text-[18px]">Địa chỉ: {address}</div>
      <div className="flex gap-2 my-2">
        <div
          className={`p-3 cursor-pointer flex items-center text-white rounded-md ${isMacDinh ? "bg-[#009300]" : "bg-gray-500"}`}
          onClick={() => handleSelectAddressShip(id)}
        >
          Giao đến địa chỉ này
        </div>
        <div
          className="p-3 cursor-pointer px-4 rounded-md border"
          onClick={() => handleDeleteAdressShip(id)}
        >
          Xóa
        </div>
      </div>
    </div>
  );
}

export default AddressShip;
