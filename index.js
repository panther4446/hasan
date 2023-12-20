const arr = [
    { brand: "Samsung", model: "SamsungA30", price: "40000", camera: "40px", ram: "8gb", rom: "128gb" },
    { brand: "Samsung", model: "SamsungA10", price: "40000", camera: "40px", ram: "4gb", rom: "128gb" },
    { brand: "Samsung", model: "SamsungA20", price: "40000", camera: "40px", ram: "4gb", rom: "128gb" },
    { brand: "Vivo", model: "VivoY20", price: "20000", camera: "40px", ram: "2gb", rom: "32gb" },
    { brand: "Vivo", model: "VivoY11", price: "20000", camera: "40px", ram: "3gb", rom: "32gb" },
    { brand: "Vivo", model: "VivoY15", price: "30000", camera: "40px", ram: "4gb", rom: "64gb" },
    { brand: "Motorola", model: "Motorola123", price: "5000", camera: "2px", ram: "2gb", rom: "32gb" },
    { brand: "Iphone", model: "Iphone12", price: "300000", camera: "40px", ram: "8gb", rom: "128gb" },
    { brand: "Iphone", model: "Iphone13", price: "300000", camera: "40px", ram: "8gb", rom: "128gb" },
    { brand: "Iphone", model: "IphoneX", price: "300000", camera: "40px", ram: "8gb", rom: "128gb" },
];

function search() {
    const searchCategory = document.getElementById("searchCategory").value;
    const searchPrice = document.getElementById("searchPrice").value;

    const filteredArr = arr.filter((phone) => {
        if (searchCategory === "Price") {
            return parseInt(phone.price) >= parseInt(searchPrice);
        } else {
            // Handle other search categories as needed
            // For now, let's return true to include all items for other categories
            return true;
        }
    });

    const mobileList = document.getElementById("mobileList");

    mobileList.innerHTML = filteredArr.map((phone) =>
        `<li>${phone.brand} ${phone.model}, Price: ${phone.price}, Camera: ${phone.camera}, RAM: ${phone.ram}, ROM: ${phone.rom}</li>`
    ).join('');
}