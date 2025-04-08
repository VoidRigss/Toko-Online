import React from 'react'
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();

  // Fungsi Syarat Isi Pesan
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const namePattern = /^[A-Za-z\s]*$/;
  const messagePattern = /^[A-Za-z0-9\s\!?\.,;:()\[\]{}'"\/\\]*$/;

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!namePattern.test(value)) {
      setNameError("Nama hanya boleh huruf dan spasi.");
    } else {
      setNameError("");
    }
    setName(value);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    const character = value.trim().length; // hitung jumlah karakter

    if (character > 1000) {
      setMessageError("Pesan tidak boleh lebih dari 1000 Karakter.");
    } else if (!messagePattern.test(value)) {
      setMessageError("Pesan hanya boleh huruf, angka, spasi dan simbol: ! ? , . ; : ( ) [ ] { } ' \" / \\");
    } else {
      setMessageError("");
    }
    
    setMessage(value);
  };

  // Fungsi Mengirim Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m9vqml8",     // Ganti dengan Service ID
      "template_gasvit8",    // Ganti dengan Template ID  
      e.target,
      "TlYZSiQy3j5IvRghM"         // Ganti dengan Public Key
    ).then(
      (result) => {
        alert("Pesan berhasil dikirim!");
        console.log(result.text);
        e.target.reset(); // reset form
      },
      (error) => {
        alert("Gagal mengirim pesan.");
        console.log(error.text);
      }
    );
    
    if (nameError || messageError) {
      alert("Tolong perbaiki input sebelum mengirim.");
      return;

    e.target.reset(); // kosongkan form
  };
 };

  return (
    <div id="contact" className="bg-gray-300 min-h-screen py-15 px-20">
      <div className='inline-block py-10'>
        <h1 className="text-3xl font-bold mb-3">Hubungi Kami</h1>
        <div className="flex gap-20">
          {/* Text */}
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam fugiat non, assumenda ipsa est perferendis deleniti totam similique vero harum error! Ullam magni laborum repudiandae eum. Labore soluta necessitatibus veniam eum debitis quo maiores eveniet, voluptates accusamus tempora, dolorem vitae corrupti laudantium corporis excepturi. Qui inventore quia culpa dignissimos sequi velit totam atque reiciendis! Deleniti laboriosam vitae consequatur ipsam eligendi distinctio quaerat, asperiores deserunt exercitationem ducimus ea molestiae consectetur eum animi fugit, quis odit, cum velit repellat ab expedita dignissimos laborum quas unde? Laborum minima, pariatur fugiat eligendi, et iusto ratione vel modi autem nisi distinctio eius molestiae iure animi quidem sapiente provident. Molestiae placeat, laudantium quae repellendus blanditiis odit aliquid architecto quisquam omnis iusto reprehenderit vitae veniam corrupti minima nostrum nesciunt officiis accusantium reiciendis debitis autem deleniti tenetur. Voluptatum culpa a quod iure, voluptate nesciunt ab eveniet? Nostrum ullam labore, hic non, amet consectetur at adipisci vitae, voluptas vel molestias. Consequuntur a quasi blanditiis perspiciatis iste nesciunt natus! Accusantium vero illo vitae esse odio officiis est libero id, totam pariatur ad sed minima iusto a ipsam mollitia nihil? Doloremque molestias earum, beatae voluptate saepe unde obcaecati nostrum sequi. Est adipisci nostrum ipsum totam fugiat culpa, quam unde non possimus. Numquam recusandae eaque impedit excepturi alias fugit enim, labore blanditiis corporis nesciunt officiis, aliquid provident non soluta? Quas pariatur consequatur eum aperiam aspernatur beatae quae sequi impedit cum, vero, molestiae sapiente illo. Optio enim dolores eaque laudantium asperiores suscipit illum voluptatibus corporis eligendi! Iusto magnam dicta quos soluta nostrum nihil ullam aspernatur autem accusamus nemo tempore, quis, error officia corrupti enim inventore dolorum, blanditiis assumenda iure asperiores explicabo? Voluptatibus perspiciatis aut asperiores? Labore illo autem, quidem atque molestias facilis debitis velit cupiditate maiores ipsa eos culpa at numquam, deleniti dolorum praesentium consequuntur ipsum dolor nam voluptas ipsam! Perferendis, ipsa voluptatibus, quis earum fuga voluptatem veritatis consequatur odio tenetur natus quasi consequuntur. Fugiat quis ipsam eum aliquam inventore voluptatum, odio modi quam velit architecto consequatur tempora id aperiam alias nam nihil iusto laborum praesentium quia quae distinctio aspernatur. Nam blanditiis consequuntur impedit corporis maiores non temporibus quidem repellat soluta, perferendis enim repudiandae ipsum aut mollitia voluptates nesciunt suscipit voluptatum asperiores dicta! Quibusdam vel eveniet veritatis rerum ad eum iusto. Id nostrum adipisci maiores a. Ipsum dolor, aspernatur aut at praesentium dolore voluptatem eum natus doloremque eius, doloribus possimus? Consequatur numquam sit minus totam tempore, saepe non consectetur porro voluptate nobis in nemo fugiat provident? Omnis soluta voluptas, molestias delectus aliquid rem! Earum debitis mollitia, aspernatur facilis, impedit sed veritatis, reprehenderit similique cum sit delectus exercitationem illo tenetur vitae magni consequuntur optio dignissimos sequi quo velit id accusantium vero dolorum! Provident magni sed quisquam placeat similique voluptates dolor, numquam velit eligendi praesentium ab, eveniet aperiam minima nisi quibusdam voluptatem, accusantium eius cum corrupti enim earum. Soluta officiis vel doloremque sit perferendis ratione! Magnam minima, aliquid doloribus voluptatum officiis placeat! Placeat deserunt odio commodi dolor repellendus, veritatis saepe quasi! Adipisci assumenda impedit saepe, repudiandae sunt enim provident repellendus sint voluptate ut nemo!</p>
          {/* Kirim Pesan ke Admin */}
          <div className="inline-block">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
              <input type="text" name="name" placeholder="Nama Anda" required value={name} onChange={handleNameChange} className="p-2 border w-100 normal-case" />
              {nameError && <span className="text-red-600 text-sm -mt-2">{nameError}</span>}

              <input type="email" name="email" placeholder="Email Anda" required className="p-2 border w-100 lowercase placeholder:normal-case" />
              
              <textarea name="message" placeholder="Pesan Anda" rows="5" required value={message} onChange={handleMessageChange} className="p-2 border w-100"/>
              <p className="text-sm text-gray-600">{message.trim().length} / 1000 Karakter</p>
              {messageError && <span className="text-red-600 text-sm -mt-2">{messageError}</span>}

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">Kirim</button>
            </form>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


