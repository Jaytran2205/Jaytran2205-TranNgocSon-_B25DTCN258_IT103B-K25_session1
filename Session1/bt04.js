  let tenSach = prompt("Nhập tên một cuốn sách:");

        // Bước 2: Xử lý dữ liệu
        let tenGoc = tenSach;
        let tenVietThuong = tenSach.toLowerCase();
        let tenVietHoa = tenSach.toUpperCase();

        // Bước 3: Xuất ra console
        console.log("Tên gốc: " + tenGoc);
        console.log("Tên viết thường: " + tenVietThuong);
        console.log("Tên viết hoa: " + tenVietHoa);