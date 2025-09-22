const karakter = [
  { nama: "Izzat Nazifa", quirk: "One For All", umur: 20, kelas: "1-B", status: "Hero Trainee" },
  { nama: "Yusri Abdi", quirk: "Explosion", umur: 19, kelas: "1-B", status: "Hero Trainee" },
  { nama: "Fadila Rahmania", quirk: "Half-Cold Half-Hot", umur: 22, kelas: "1-A", status: "Hero Trainee" },
  { nama: "Bayu Aji", quirk: "Zero Gravity", umur: 40, kelas: "1-B", status: "Hero Trainee" },
  { nama: "Sucitasari", quirk: "Engine", umur: 16, kelas: "1-B", status: "Class Representative" },
  { nama: "Azizah Nurul", quirk: "One For All", umur: 49, kelas: "Pro Hero", status: "Symbol of Peace" },
  { nama: "Wahyu Hilal", quirk: "Decay", umur: 20, kelas: "League of Villains", status: "Leader" },
  { nama: "Reni Sopiani", quirk: "Blue Flame", umur: 24, kelas: "League of Villains", status: "Villain" },
  { nama: "Tegar Nagabonar", quirk: "Hardening", umur: 50, kelas: "1-B", status: "Hero Trainee" },
  { nama: "Rakasya Yoga", quirk: "Creation", umur: 16, kelas: "1-B", status: "Vice Representative" }
];

// map()
const semuaNamaBesar = karakter.map(k => k.nama.toUpperCase());
console.log("map():", semuaNamaBesar);

// filter()
const umurLebih20 = karakter.filter(k => k.umur > 20);
console.log("filter():");
console.table(umurLebih20);

// reduce()
const totalUmur = karakter.reduce((total, k) => total + k.umur, 0);
console.log("reduce():", totalUmur);

// find()
const cari1B = karakter.find(k => k.kelas === "1-B");
console.log("find():");
console.table([cari1B]); 

const adaDecay = karakter.some(k => k.quirk === "Decay");
const semuaLebih15 = karakter.every(k => k.umur > 15);

// some() 
if (adaDecay) {
  console.log("some(): Ada karakter dengan quirk 'Decay'");
} else {
  console.log("some(): Tidak ada karakter dengan quirk 'Decay'");
}

// every() 
if (semuaLebih15) {
  console.log("every(): Semua karakter berumur lebih dari 15 tahun");
} else {
  console.log("every(): Ada karakter yang berumur 15 atau kurang");
}
