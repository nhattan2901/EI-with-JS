function saveData() {
      // Lấy giá trị từ ô input
      var data = document.getElementById("inputData").value;

      // Lưu giá trị vào Local Storage
      localStorage.setItem("account", data);

      var data1 = document.getElementById("inputDataPass").value;

      localStorage.setItem("password", data1);
  console.log(localStorage.getItem("account"))
}

function accLogin() {
      var data = document.getElementById("acc").value;
  
      var data1 = document.getElementById("pass").value;
  
  console.log(localStorage.getItem("account"))
  
  if ((data == localStorage.getItem("account"))&&(data1 == localStorage.getItem("password"))) {
        // Chuyển hướng đến một trang khác
        window.location.href = "homeLogin.html";
      } else if ((data == localStorage.getItem("account"))&&(data1 != localStorage.getItem("password"))) {
        // Thông báo sai mật khẩu

        alert("Sai mật khẩu, vui lòng kiểm tra lại");
      } else {
        alert("Tài khoản không tồn tại")
      }
}
