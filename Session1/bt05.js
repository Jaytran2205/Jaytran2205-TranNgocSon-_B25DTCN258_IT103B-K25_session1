let tenSach=prompt("Hãy nhập tên sách");
let namxuatban=prompt("Hãy nhập năm xuất bản của sách");
namxuatban=Number(namxuatban);
let namhientai=prompt("Vui long nhap nam hien tai cua ban:");
namhientai=Number(namhientai);
let tuoicuasach=namhientai-namxuatban
console.log("Tuoi cua sach hien tai la: " + tuoicuasach);
