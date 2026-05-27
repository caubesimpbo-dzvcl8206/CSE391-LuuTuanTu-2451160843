const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let gioi = 0;
let kha = 0;
let trungBinh = 0;
let yeu = 0;

let maxStudent = students[0];
let minStudent = students[0];

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let maleTotal = 0;
let femaleTotal = 0;
let maleCount = 0;
let femaleCount = 0;

console.log("| STT | Tên | TB | Xếp loại |");
console.log("|-----|------|------|-----------|");

for (let i = 0; i < students.length; i++) {

    let s = students[i];

    let avg =
        s.math * 0.4 +
        s.physics * 0.3 +
        s.cs * 0.3;

    avg = avg.toFixed(1);

    let rank = "";

    if (avg >= 8.0) {
        rank = "Giỏi";
        gioi++;
    }
    else if (avg >= 6.5) {
        rank = "Khá";
        kha++;
    }
    else if (avg >= 5.0) {
        rank = "Trung bình";
        trungBinh++;
    }
    else {
        rank = "Yếu";
        yeu++;
    }

    console.log(
        `| ${i + 1} | ${s.name} | ${avg} | ${rank} |`
    );

    let maxAvg =
        maxStudent.math * 0.4 +
        maxStudent.physics * 0.3 +
        maxStudent.cs * 0.3;

    if (avg > maxAvg) {
        maxStudent = s;
    }

    let minAvg =
        minStudent.math * 0.4 +
        minStudent.physics * 0.3 +
        minStudent.cs * 0.3;

    if (avg < minAvg) {
        minStudent = s;
    }

    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;

    if (s.gender === "M") {
        maleTotal += Number(avg);
        maleCount++;
    }
    else {
        femaleTotal += Number(avg);
        femaleCount++;
    }
}

console.log("\nSố SV Giỏi:", gioi);
console.log("Số SV Khá:", kha);
console.log("Số SV Trung bình:", trungBinh);
console.log("Số SV Yếu:", yeu);

let maxAvg =
    (
        maxStudent.math * 0.4 +
        maxStudent.physics * 0.3 +
        maxStudent.cs * 0.3
    ).toFixed(1);

let minAvg =
    (
        minStudent.math * 0.4 +
        minStudent.physics * 0.3 +
        minStudent.cs * 0.3
    ).toFixed(1);

console.log("\nSV điểm cao nhất:");
console.log(maxStudent.name, "-", maxAvg);

console.log("\nSV điểm thấp nhất:");
console.log(minStudent.name, "-", minAvg);

console.log("\nĐiểm TB toàn lớp:");

console.log(
    "Math:",
    (totalMath / students.length).toFixed(1)
);

console.log(
    "Physics:",
    (totalPhysics / students.length).toFixed(1)
);

console.log(
    "CS:",
    (totalCS / students.length).toFixed(1)
);

console.log("\nĐiểm TB theo giới tính:");

console.log(
    "Nam:",
    (maleTotal / maleCount).toFixed(1)
);

console.log(
    "Nữ:",
    (femaleTotal / femaleCount).toFixed(1)
);