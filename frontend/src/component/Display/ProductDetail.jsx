import { useParams, useNavigate,  } from "react-router-dom";
import listcard from "../../util/ProductData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DetailCheckout from "../Features/DetailCheckout";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = listcard.find((item) => String(item.id) === String(id));
  
  const handleBack = () => {
    if (window.innerWidth <= 768) {
      // Jika layar kecil (HP), langsung ke halaman /product
      navigate("/product");
    } else {
      // Jika layar besar (PC), gunakan navigate(-1)
      navigate(-1);
    }
  }

  // State untuk gambar aktif dan warna dan ukuran terpilih 
  const [activeImage, setActiveImage] = useState(product.photo);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedRom, setSelectedRom] = useState("");

  // Data warna dan gambar alternatif
  const colorOptions = [
    {
        name: 'Biru Laut',
        image: product.photo, // Gambar default
    },
    {
        name: 'Pink',
        image:product.photo1, // Gambar alternatif
    },
    // Tambahkan warna lain sesuai kebutuhan

];

  // Data ukuran Ram (Contoh ukuran HP: 8GB, 12GB, 16GB)
  const ramOptions = product.ram || [] ;
  // Data ukuran Rom (Contoh ukuran HP: 128GB, 256GB, 512GB)
  const romOptions = product.rom || [];
  
  // Jika tidak ditemukan, tampilkan pesan
  if (!product) {
    return <p className="text-center text-red-500">Produk tidak ditemukan.</p>;
  }

  // Fungsi untuk mengubah gambar saat warna dipilih
  const handleColorSelect = (color) => {
    setSelectedColor(color.name);
    setActiveImage(color.image);
  };

  // Fungsi pilih ukuran Rome
  const handleRamSelect = (size) => {
    setSelectedRam(size);
  };
  // Fungsi pilih ukuran Rome
  const handleRomSelect = (size) => {
    setSelectedRom(size);
  };

  
  return (
    <div className="py-10 bg-neutral-100">
      <div
        className="bg-black flex text-neutral-200 w-screen h-fit gap-70
        max-sm:py-0 max-sm:gap-3 max-sm:text-xs"
        >
        <div
          className="flex text-xl items-center py-2 pl-15 gap-2 font-sans font-bold
          max-sm:pl-4"
          >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="cursor-pointer"
            onClick={handleBack}
            />
          <h1> Kembali?</h1>
        </div>
        <div className="flex text-xl items-center py-2 gap-2">
          <FontAwesomeIcon icon={faTruckFast} />
          <h1>Free Delivery on Above IDR 10.000.000</h1>
        </div>
      </div>
      <div className="h-auto w-screen flex flex-row gap-0 text-neutral-800 py-5">
        <div className="w-200 h-200 ">
          <div className="flex">
            <img 
            src={activeImage} 
            className="w-75 mx-12 h-100"
            id="productMainImage"
            />
            <div className="h-120 w-100">
              <div className="inline-block">
                <h1 className="font-bold text-3xl">{product.name}</h1>
                <p className="font-bold">Terjual</p>
                <h2 className="font-extrabold text-4xl my-2">{product.price}</h2>
                <hr className="w-100 text-gray-300"></hr>
              </div>
              <div className="inline-block">
                <div className="mt-5">
                  <div className="flex gap-1">
                    <h1 className="font-extrabold">Pilih Warna : </h1>{selectedColor}
                  </div>
                  <div className="flex gap-5">
                    {colorOptions.map((color, index) => (
                    <button 
                    key={index}
                    onClick={ () => handleColorSelect(color)}
                    className={`border-2 border-gray-400 text-gray-400 px-2 rounded-xl flex items-center gap-2 h-auto ${ 
                      selectedColor === color.name ? "bg-gray-300" : ""
                    }`}
                    >
                      <img className="h-10 w-5" src={product.photo}></img>
                      {color.name}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex gap-1">
                    <h1 className="font-bold">Pilih Ukuran Ram :</h1> {selectedRam}
                  </div>
                  <div className="flex gap-5">
                  {ramOptions.map((size, index) => (
                  <button
                  key={index}
                  onClick={() => handleRamSelect(size)}
                  className={`border-2 border-gray-400 text-gray-400 px-4 py-2 rounded-lg w-20 ${
                    selectedRam === size ? " bg-gray-300" : ""
                  }`}
                  >
                    {size}
                  </button>
                ))}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex gap-1">
                    <h1 className="font-bold">Pilih Ukuran Rom</h1> {selectedRom}
                  </div>
                  <div className="flex gap-5">
                  {romOptions.map((size, index) => (
                  <button
                  key={index}
                  onClick={() => handleRomSelect(size)}
                  className={`border-3 border-gray-400 text-gray-400 px-4 py-2 rounded-lg w-20 ${
                    selectedRom === size  ? " bg-gray-300 " : ""
                  }`}
                  >
                    {size}
                  </button>
                ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="bg-blue-700 h-100 ">

          </div>
        </div>
        <div className="bg-green-600 h-250 w-130 justify-items-center">
        <DetailCheckout selectedColor={selectedColor} selectedRam={selectedRam} selectedRom={selectedRom}  />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
