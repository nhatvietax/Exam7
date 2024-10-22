let touristSpots = ["Da Nang", "Quang Nam", "Quang Ngai", "Da Nang", "Binh Dinh", "Quang Nam"];

// Su dung Set de loai bo cac dia diem trung lap
let uniqueSpots = [...new Set(touristSpots)];

console.log(uniqueSpots);
// Output: ["Da Nang", "Quang Nam", "Quang Ngai", "Binh Dinh"]