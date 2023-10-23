// TỔNG QUAN: LẤY DỮ CÁC SỐ NGUYÊN TRONG MẢNG DÃY SỐ RỒI XỬ LÍ CÁC YÊU CẦU:
//B2: Tạo mảng và push dữ liệu vào trong mảng
var arrsoNhap = [];
// B1: Lấy dữ liệu các số người dùng nhập
document.getElementById("nhanSoYc1").onclick = function () {
  var soNguyen = document.getElementById("nhapSo").value * 1;
  if (isNaN(soNguyen)) {
    alert("Chỉ có thể nhập số");
    soNguyen = document.getElementById("nhapSo").value = "";
  } else {
    arrsoNhap.push(soNguyen);
    soNguyen = document.getElementById("nhapSo").value = "";
  }
  // //
  //   console.log(arrsoNhap);
  document.getElementById("htMang1").innerHTML = arrsoNhap;
};

//B4: DOM tới nút button, xử lí yêu cầu và render dữ liệu lên cho người dùng biết kết quả
// Yêu cầu 1: Tính tổng các số dương trong mảng
document.getElementById("tongSoDuong").addEventListener("click", function () {
  var tongSoDuong = 0;
  for (i = 0; i < arrsoNhap.length; i++) {
    if (arrsoNhap[i] > 0) {
      var soDuong = arrsoNhap[i];
      tongSoDuong += soDuong;
    }
  }
  console.log(tongSoDuong);
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Tổng giá trị các số dương là: ${tongSoDuong}`;
});

//Yêu cầu 2:Đếm có bao nhiêu số dương trong mảng.
document.getElementById("demSoDuong").addEventListener("click", function () {
  var countSoDuong = 0;
  for (i = 0; i < arrsoNhap.length; i++) {
    if (arrsoNhap[i] > 0) {
      countSoDuong++;
    }
  }
  // console.log(countSoDuong)
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Có tổng cộng ${countSoDuong} số dương trong mảng dãy số`;
});

// Yêu cầu 3: Tìm số nhỏ nhất trong mảng dãy số nguyên đã nhập
document.getElementById("timSoNhoNhat").addEventListener("click", function () {
  var soNhoNhat = arrsoNhap[0];
  for (i = 1; i < arrsoNhap.length; i++) {
    if (arrsoNhap[i] < soNhoNhat) {
      soNhoNhat = arrsoNhap[i];
    }
  }
  // console.log(soNhoNhat);
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Số nhỏ nhất trong dãy số là số ${soNhoNhat}`;
});
// Yêu cầu 4
document
  .getElementById("soDuongNhoNhat")
  .addEventListener("click", function () {
    var soDuongNhoNhat = Infinity;
    for (i = 0; i < arrsoNhap.length; i++) {
      if (arrsoNhap[i]> 0 && arrsoNhap[i] < soDuongNhoNhat) {
        soDuongNhoNhat = arrsoNhap[i];
      }else{
        soDuongNhoNhat = 'Không có số dương trong mảng'
      }
    }
   
    console.log(soDuongNhoNhat);
  });
