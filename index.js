// TỔNG QUAN: LẤY DỮ CÁC SỐ NGUYÊN + SỐ THỰC TRONG MẢNG DÃY SỐ NGUYÊN VÀ THỰC RỒI XỬ LÍ CÁC YÊU CẦU:
//B2: Tạo mảng và push dữ liệu vào trong mảng
var arrSoNhap = [];
var arrSoNhapThuc = [];
// B1: Lấy dữ liệu các số người dùng nhập
// Phần Số Nguyên:
document.getElementById("nhanSoYc1").onclick = function () {
  var soNguyen = document.getElementById("nhapSo").value * 1;
  if (isNaN(soNguyen) || soNguyen%1 !== 0) { 
   document.getElementById('errorText').innerHTML = 'Số bạn nhập không phải số nguyên hoặc không phải là số'
    soNguyen = document.getElementById("nhapSo").value = "";
  } else {
    arrSoNhap.push(soNguyen);
    soNguyen = document.getElementById("nhapSo").value = "";
  }
  // //
    // console.log(arrSoNhap);
  document.getElementById("htMang1").innerHTML = arrSoNhap;
};
// Phần Số Thực:
document.getElementById('nhanSoYc2').onclick = function(){
  var soThuc = document.getElementById('nhapSothuc').value *1;
  if (isNaN(soThuc)) { 
    document.getElementById('errorTextST').innerHTML = 'Vui lòng nhập giá trị là số'
    soThuc = document.getElementById("nhapSothuc").value = "";
   } else {
    arrSoNhapThuc.push(soThuc);
    soThuc = document.getElementById("nhapSothuc").value = "";
   }
  //  console.log(arrSoNhapThuc);
   //
   document.getElementById("htMang2").innerHTML = arrSoNhapThuc;

}

//B4: DOM tới nút button, xử lí yêu cầu và render dữ liệu lên cho người dùng biết kết quả
// Yêu cầu 1: Tính tổng các số dương trong mảng
document.getElementById("tongSoDuong").addEventListener("click", function () {
  var tongSoDuong = 0;
  for (i = 0; i < arrSoNhap.length; i++) {
    if (arrSoNhap[i] > 0) {
      var soDuong = arrSoNhap[i];
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
  for (i = 0; i < arrSoNhap.length; i++) {
    if (arrSoNhap[i] > 0) {
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
  var soNhoNhat = arrSoNhap[0];
  for (i = 1; i < arrSoNhap.length; i++) {
    if (arrSoNhap[i] < soNhoNhat) {
      soNhoNhat = arrSoNhap[i];
    }
  }
  // console.log(soNhoNhat);
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Số nhỏ nhất trong dãy số là số ${soNhoNhat}`;
});
// Yêu cầu 4: Tìm số dương nhỏ nhất trong mảng dãy số đã nhập
document.getElementById("soDuongNhoNhat")
.addEventListener("click", function () {
    var soDuongNhoNhat = Infinity;
    for (i = 0; i < arrSoNhap.length; i++) {
      if (arrSoNhap[i]> 0 && arrSoNhap[i] < soDuongNhoNhat) {
        soDuongNhoNhat = arrSoNhap[i];
      }
    }
    if(soDuongNhoNhat !== Infinity){
        document.getElementById('ketQua1').innerHTML = `Số dương nhỏ nhất trong mảng là số ${soDuongNhoNhat}`;
    }else{
        document.getElementById('ketQua1').innerHTML = `Không tìm thấy số dương trong dãy số đã nhập`
    }
// console.log(soDuongNhoNhat);
    });

//Yêu cầu 5:Tìm số chẵn cuối cùng trong mảng dãy số đã nhập. Nếu mảng không có giá trị chẵn thì trả về -1
document.getElementById('soChanCuoiCung').addEventListener('click',function(){
    var soChanCuoiCung = -1;
    for(i=arrSoNhap.length -1; i>=0 && soChanCuoiCung == -1; i--){
        if(arrSoNhap[i]>0 && arrSoNhap[i]%2 == 0){
            soChanCuoiCung = arrSoNhap[i];
            document.getElementById('ketQua1').innerHTML = `Số chẵn cuối cùng của 2 dãy số là ${soChanCuoiCung}`;
        }else{
          document.getElementById('ketQua1').innerHTML = -1;
        }
       
    }
    // console.log(soChanCuoiCung);
   

});

//Yêu cầu 6:Đổi chỗ 2 giá trị trong mảng dãy số đã nhập theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
document.getElementById('doiCho').addEventListener('click', function(){
  var viTri1 = document.getElementById('viTri1').value *1;
  var viTri2 = document.getElementById('viTri2').value *1;

  if (viTri1 >= 0 && viTri1 < arrSoNhap.length && viTri2 >= 0 && viTri2 < arrSoNhap.length){
    // console.log(arrSoNhap[viTri1]);
    // console.log(arrSoNhap[viTri2]);
    var tamThoi = arrSoNhap[viTri1];
    arrSoNhap[viTri1] = arrSoNhap[viTri2];
    arrSoNhap[viTri2] = tamThoi;
    // console.log(arrSoNhap);
    document.getElementById('ketQua1').innerHTML = `Mảng dãy số sau khi đã đổi chỗ vị trí 2 giá trị là: ${arrSoNhap}`
  }else{
    alert('Yêu cầu nhập vào vị trí hợp lệ')
  }
});

//Yêu cầu 7: Sắp xếp mảng dãy số theo thứ tự tăng dần.
document.getElementById('sapXepMang').addEventListener('click', function(){
    var newArrSoNhap = arrSoNhap.sort();
    // console.log(newArrSoNhap);
    document.getElementById('ketQua1').innerHTML = `Sắp xếp mảng dãy số đã nhập theo thứ tự tăng dần: ${newArrSoNhap}`;
});

// Yêu cầu 8:Tìm số nguyên tố đầu tiên trong mảng dãy số đã nhập. Nếu mảng không có số nguyên tố thì trả về – 1
document.getElementById('sntDauTien').addEventListener('click',function(){
function checkNumber(number){
  if(number <=1) return false;
  for( var z = 2; z<= Math.sqrt(number); z++){
    if(number%z === 0) return false;
  }
  return true;
}
var soNguyenToDt = '';
for(var i =0; i<arrSoNhap.length; i++){
  if(checkNumber(arrSoNhap[i])){
    soNguyenToDt += arrSoNhap[i];
    document.getElementById('ketQua1').innerHTML =`Số ${soNguyenToDt} là số nguyên tố đầu tiên trong mảng dãy số`;
    // console.log(soNguyenToDt)
    return;
  }else{
    document.getElementById('ketQua1').innerHTML = -1;
  }
}

});
//Yêu cầu 9:Nhập thêm 1 mảng số thực, tìm xem trong mảng số thức đấy có bao nhiêu số nguyên?
document.getElementById('demSoNguyen').addEventListener('click', function(){
  var demSoNguyen = 0;
  for(a=0; a<arrSoNhapThuc.length; a++){
    if(arrSoNhapThuc[a]%1==0){
      demSoNguyen++
    }
  }
  // console.log('tổng là'+ demSoNguyen)
  document.getElementById('ketQua1').innerHTML = `Trong mảng ở input số thực có tổng cộng ${demSoNguyen} số nguyên`
});

//Yêu cầu 10: ÂM DƯƠNG SO SÁNH 
document.getElementById('soSanhAd').addEventListener('click', function(){
  var soDuongSs = 0;
  var soAmSs = 0;

  for(i=0; i<arrSoNhap.length;i++){
    if(arrSoNhap[i]<0){
      soAmSs++
    }else if(arrSoNhap[i]>0){
      soDuongSs++
    }
  }
  if(soDuongSs > soAmSs){
    document.getElementById('ketQua1').innerHTML = 'Trong dãy số đã nhập số lượng số dương nhiều hơn số âm'
  }else if(soDuongSs<soAmSs){
    document.getElementById('ketQua1').innerHTML = 'Trong dãy số đã nhập số lượng số âm nhiều hơn số dương'
  }else{
    document.getElementById('ketQua1').innerHTML = 'Trong dãy số đã nhập số lượng số âm bằng số dương'
  }
});







