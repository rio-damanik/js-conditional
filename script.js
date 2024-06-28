console.log("TEST CONDITONAL");

console.log("Conditional Variable 6 Siswa");

const listSiswa = [
  { nama: "Alice", nilai: 85 },
  { nama: "Andrew", nilai: 75 },
  { nama: "Ricki", nilai: 90 },
  { nama: "Marcel", nilai: 60 },
  { nama: "Adi", nilai: 65 },
  { nama: "Ken", nilai: 70 },
];
console.log(listSiswa);

// Menggunakan map untuk membuat array baru dengan hanya nama dan nilai
const updatelistSiswa = listSiswa.map((siswa) => {
  return {
    nama: siswa.nama,
    nilai: siswa.nilai,
  };
});

// Menampilkan hasil di konsol
updatelistSiswa.forEach((siswa) => {
  console.log(`${siswa.nama} - Nilai: ${siswa.nilai}`);
});

console.log("KKM = 70 ");

// Menambahkan properti "status" berdasarkan nilai
const updatedListSiswa = listSiswa.map((siswa) => {
  let status;
  if (siswa.nilai > 70) {
    status = "Lulus";
  } else if (siswa.nilai === 70) {
    status = "Nilai Cukup";
  } else {
    status = "Tidak Lulus";
  }

  return {
    ...siswa,
    status: status,
  };
});

// Menampilkan hasil di konsol
updatedListSiswa.forEach((siswa) => {
  console.log(
    `${siswa.nama} - Nilai: ${siswa.nilai} - Status: ${siswa.status}`
  );
});

// Menampilkan hasil di halaman
const studentListElement = document.getElementById("studentList");
updatedListSiswa.forEach((siswa) => {
  const studentItem = document.createElement("li");
  studentItem.className = "student-item";

  const studentInfo = document.createElement("span");
  studentInfo.textContent = `${siswa.nama} - Nilai: ${siswa.nilai}`;

  const studentStatus = document.createElement("span");
  studentStatus.textContent = siswa.status;
  studentStatus.className =
    siswa.status === "Lulus"
      ? "status-lulus"
      : siswa.status === "Nilai Cukup"
      ? "status-cukup"
      : "status-tidak-lulus";

  studentItem.appendChild(studentInfo);
  studentItem.appendChild(studentStatus);
  studentListElement.appendChild(studentItem);
});
