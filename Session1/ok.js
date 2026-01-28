// ====== NHẬP DỮ LIỆU ======
let bookName = prompt("Nhập tên sách:");
let authorName = prompt("Nhập tên tác giả:");
let publishYear = prompt("Nhập năm xuất bản:");
let price = prompt("Nhập giá tiền một cuốn:");
let quantity = prompt("Nhập số lượng nhập kho");

// ====== CHUẨN HÓA DỮ LIỆU ======
// Tên sách: trim + in hoa
bookName = bookName.trim().toUpperCase();

// Tên tác giả: in hoa
authorName = authorName.toUpperCase();

// Chuyển kiểu dữ liệu
publishYear = Number(publishYear);
price = Number(price);
quantity = Number(quantity);

// ====== TẠO MÃ SÁCH ======
let authorCode = authorName.substring(0, 3); // 3 ký tự đầu tên tác giả
let randomId = Math.floor(Math.random() * 1000) + 1; // 1–1000
let bookId = `${authorCode}${publishYear}-${randomId}`;

// ====== TÍNH TOÁN ======
const CURRENT_YEAR = 2026;
let bookAge = CURRENT_YEAR - publishYear;
let totalValue = price * quantity;

// Ngăn kệ gợi ý (1–10)
let shelf = Math.floor(Math.random() * 10) + 1;

// ====== IN PHIẾU NHẬP KHO ======
console.log(`--- PHIẾU NHẬP KHO ---

Mã sách: ${bookId}

Tên sách: ${bookName}

Tác giả: ${authorName}

Năm xuất bản: ${publishYear}

Tuổi sách: ${bookAge} năm

Tổng giá trị: ${totalValue} VNĐ

Ngăn kệ gợi ý: Kệ số ${shelf}
`);