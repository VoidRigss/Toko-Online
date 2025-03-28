import React from "react";

const DetailCheckout = ({ selectedColor, selectedRam, selectedRom }) => {
  return (
    <div className="border-none bg-gray-100 flex flex-col rounded-3xl min-h-110 w-80 shadow-2xl">
      <div className="p-7">
        <h2 className="text-lg font-bold">Detail Checkout</h2>
        <p className="mt-2">Warna: {selectedColor || "Belum dipilih"}</p>
        <p className="mt-2">Ram: {selectedRam || "Belum dipilih"}</p>
        <p className="mt-2">Rom: {selectedRom || "Belum dipilih"}</p>
      </div>
    </div>
  );
};

export default DetailCheckout;