import React from "react";

const newsData = [
  {
    id: "1",
    photo: "img/news1.jpg",
    title: "Perubahan Jam Trading",
    date: "2023-01-01 12:12:00",
    information:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G.",
    detail:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G. Perdagangan Efek di Bursa hanya dapat dilakukan oleh Anggota Bursa (AB) yang juga menjadi Anggota Kliring KPEI. Anggota Bursa Efek bertanggung jawab terhadap seluruh transaksi yang dilakukan di Bursa baik untuk kepentingan sendiri maupun untuk kepentingan nasabah.",
  },
  {
    id: "2",
    photo: "img/news2.jpg",
    title: "Perubahan Pedoman Perdagangan",
    date: "2023-01-01 12:12:00",
    information:
      "PT Bursa Efek Indonesia mengeluarkan perubahan pedoman perdagangan. ",
    detail:
      "BEI menjelaskan ada beberapa poin yang disesuaikan. Pertama, ketentuan umum. Penulisan DIRE dan DINFRA berdasarkan dengan ketentuan II.1 pada peraturan II-J tentang Perdagangan Unit Penyertaan Dana Investasi Real Estat Berbentuk Kontrak Investasi Kolektif di Bursa Kedua, tata cara pelaksanaan perdagangan. Untuk tata cara pelaksanaan transaksi di pasar reguler dan pasar tunai. Penambahan penjelasan penentuan harga acuan untuk menghitung auto rejection untuk efek yang harganya disesuaikan berdasarkan nilai pasar wajar, yang ditetapkan oleh penilai usaha sebagaimana dimaksud dalam peraturan Otoritas Jasa Keuangan (OJK) No 35/POJK.04/2020 tentang Penilaian dan Penyajian Laporan Penilaian Bisnis di Pasar Modal.",
  },
  {
    id: "3",
    photo: "img/news3.jpg",
    title: "Perubahan ARA/ARB",
    date: "2023-01-01 12:12:00",
    information:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G.",
    detail:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G. Perdagangan Efek di Bursa hanya dapat dilakukan oleh Anggota Bursa (AB) yang juga menjadi Anggota Kliring KPEI. Anggota Bursa Efek bertanggung jawab terhadap seluruh transaksi yang dilakukan di Bursa baik untuk kepentingan sendiri maupun untuk kepentingan nasabah.",
  },
  {
    id: "4",
    photo: "img/news4.jpg",
    title: "Perubahan Message Market Info",
    date: "2023-01-01 12:12:00",
    information:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G.",
    detail:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G. Perdagangan Efek di Bursa hanya dapat dilakukan oleh Anggota Bursa (AB) yang juga menjadi Anggota Kliring KPEI. Anggota Bursa Efek bertanggung jawab terhadap seluruh transaksi yang dilakukan di Bursa baik untuk kepentingan sendiri maupun untuk kepentingan nasabah.",
  },
  {
    id: "5",
    photo: "img/news4.jpg",
    title: "Perubahan Message Market Info",
    date: "2023-01-01 12:12:00",
    information:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G.",
    detail:
      "Pelaksanaan perdagangan Efek di Bursa dilakukan dengan menggunakan fasilitas JATS NEXT-G. Perdagangan Efek di Bursa hanya dapat dilakukan oleh Anggota Bursa (AB) yang juga menjadi Anggota Kliring KPEI. Anggota Bursa Efek bertanggung jawab terhadap seluruh transaksi yang dilakukan di Bursa baik untuk kepentingan sendiri maupun untuk kepentingan nasabah.",
  },
];

function News({ theme }) {
  return (
    <div className="news-helpdesk">
      <div
        className="news-helpdesk-header"
        id={`${theme === "light" ? "special-light" : "dark"}`}
      >
        <h2>News Update</h2>
      </div>
      <div className="news-helpdesk-main">
        {newsData.map((news) => (
          <div key={news.id} className="news-item">
            <div className="card">
              <img src={news.photo} alt="img-news" />
              <h1>{news.title}</h1>
              <br />
              <p>{news.date}</p>
              <p>{news.information}</p>
              <p>
                <button>Read More</button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { News, newsData };
