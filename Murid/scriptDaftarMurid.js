const username = document.querySelector("#un");
const namaLengkap = document.querySelector("#nl");
const NIK = document.querySelector("#nik");
const password = document.querySelector("#pw");
const email = document.querySelector("#em");
const password2 = document.querySelector("#cpw");
const daftarBtn = document.querySelector("#Daftar");
const kelas = document.querySelector("#kls");

//untuk memberikan enter ganti baris
function changeLine(fromInput, toInput) {
  fromInput.addEventListener("keypress", function onEvent(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      toInput.focus();
    }
  });
}
changeLine(NIK, username);
changeLine(username, namaLengkap);
changeLine(namaLengkap, password);
changeLine(password, email);
changeLine(email, password2);
changeLine(password2, kelas);
changeLine(kelas, daftarBtn);

function validatePassword() {
  if (password.value != password2.value) {
    password2.setCustomValidity("Passwords tidak sama");
  } else {
    password2.setCustomValidity("");
  }
}
password.onchange = validatePassword;
password2.onfocus = validatePassword;

daftarBtn.addEventListener("click", function (event) {
  if (NIK.value == "" || username.value == "" || namaLengkap.value == "" || password.value == "" || email.value == "" || password2.value == "" || kelas.value == "") {
    event.preventDefault();
    alert("Semua harus diisi!");
    return false;
  } else {
    return true;
  }
});
