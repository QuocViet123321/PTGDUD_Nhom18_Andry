function FormatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0 nên cộng thêm 1
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default FormatDate;
