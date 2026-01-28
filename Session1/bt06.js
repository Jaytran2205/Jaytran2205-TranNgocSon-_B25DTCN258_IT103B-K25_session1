  // Bước 1: Nhập dữ liệu
        let tenSach = prompt("Nhập tên sách:");
        let soThuTu = prompt("Nhập số thứ tự của sách trong thư viện:");

        // Bước 2: Xử lý dữ liệu
        // Lưu tên gốc
        let tenSachGoc = tenSach;

        // Chuẩn hóa tên sách
        let tenSachChuanHoa = tenSach.trim().toUpperCase();

        // Tạo mã sách
        let maSach = "LIST - " + tenSachChuanHoa + " - " + soThuTu;

        // Bước 3: Xuất kết quả ra console
        console.log("Tên sách gốc: " + tenSachGoc);
        console.log("Mã sách sau chuẩn hóa: " + maSach);