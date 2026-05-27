const menu = [
    {
        name: "Phở bò",
        price: 65000,
        quantity: 2
    },
    {
        name: "Trà đá",
        price: 5000,
        quantity: 3
    },
    {
        name: "Bún chả",
        price: 55000,
        quantity: 1
    }
];

const isWednesday = true;
const hasTip = true;  

function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

let subTotal = 0;

for (const item of menu) {
    subTotal += item.price * item.quantity;
}

let discountPercent = 0;

if (subTotal > 1000000) {
    discountPercent = 15;
}
else if (subTotal > 500000) {
    discountPercent = 10;
}

if (isWednesday) {
    discountPercent += 5;
}

const discountAmount = subTotal * discountPercent / 100;

const afterDiscount = subTotal - discountAmount;

const vatPercent = 8;
const vatAmount = afterDiscount * vatPercent / 100;

const tipPercent = hasTip ? 5 : 0;
const tipAmount = afterDiscount * tipPercent / 100;

const finalTotal =
    afterDiscount +
    vatAmount +
    tipAmount;

console.log("╔══════════════════════════════════════╗");
console.log("║          HÓA ĐƠN NHÀ HÀNG           ║");
console.log("╠══════════════════════════════════════╣");

menu.forEach((item, index) => {

    const total = item.price * item.quantity;

    console.log(
        `║ ${index + 1}. ${item.name.padEnd(12)} x${item.quantity}  @${item.price / 1000}k = ${(total / 1000)}k ║`
    );
});

console.log("╠══════════════════════════════════════╣");

console.log(
    `║ Tổng cộng:        ${formatMoney(subTotal).padStart(15)} ║`
);

console.log(
    `║ Giảm giá (${discountPercent}%): ${formatMoney(discountAmount).padStart(15)} ║`
);

console.log(
    `║ VAT (8%):         ${formatMoney(vatAmount).padStart(15)} ║`
);

console.log(
    `║ Tip (${tipPercent}%):         ${formatMoney(tipAmount).padStart(15)} ║`
);

console.log("╠══════════════════════════════════════╣");

console.log(
    `║ THANH TOÁN:       ${formatMoney(finalTotal).padStart(15)} ║`
);

console.log("╚══════════════════════════════════════╝");