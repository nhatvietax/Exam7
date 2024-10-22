let touristMap = new Map();

// Them cac cap key-value (dia diem - so luong khach tham quan)
touristMap.set("Da Nang", 500000);
touristMap.set("Quang Nam", 200000);
touristMap.set("Quang Ngai", 100000);
touristMap.set("Binh Dinh", 34000);

// Lay du lieu so luong khach tham quan tai Da Nang
console.log(touristMap.get("Da Nang"));

// Lap qua Map de hien thi tat ca du lieu
touristMap.forEach((value, key) => {
    console.log(`${key}: ${value} visitors`);
});