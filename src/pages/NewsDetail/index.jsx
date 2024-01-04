import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NewsDetail = () => {
    return (
        <div className="max-w-screen-3xl m-auto">
            <Navbar />
            <section className="w-80 md:w-[40rem] lg:w-[60rem] h-auto m-auto mt-20">
                <div className="mt-16 md:mt-32">
                    <h1 className="font-roboto text-2xl md:text-4xl text-black font-medium">
                        Dukung Gaza, Palestina. SS Group berikan donasi sebesar
                        1 Milyar Rupiah!
                    </h1>
                    <h4 className="font-roboto mt-4">Admin | LevelUp</h4>
                    <h5 className="text-gray-400 font-roboto">
                        Senin, 25 Oktober 2029
                    </h5>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dixxtnquz/image/upload/v1702362234/SSG/dukung-palestina-ss-group-donasikan-rp1-miliar-rtt_bqvvuu.jpg"
                        alt="newsdetail"
                        width={50}
                        height={50}
                        className="w-full mt-16"
                    />
                    <h1 className="font-roboto text-gray-400 text-xs md:text-sm mt-2">
                        Foto Owner SS Group Shella Saukia dan Pitra Firmansyah
                        menyerahkan donasi secara simbolis ke Dubes Palestina
                        untuk Indonesia
                    </h1>
                </div>
                <div className="mt-8">
                    <p>
                        <b>Jakarta, SS Group</b> -- Polisi menyebut pelaku
                        berinisial JPP yang menyerang penjaga rumah dinas
                        Kapolri Jenderal Listyo Sigit Prabowo di Kebayoran Baru,
                        Jakarta Selatan, sempat berjalan ke arah rumah Menteri
                        Pertahanan Prabowo Subianto. "Iya sempat ke arah rumah
                        Pak Prabowo kemudian di usir," ujar Direktur Reserse
                        Kriminal Umum Kombes Hengki Haryadi kepada wartawan,
                        Jumat (15/12). Rumah Prabowo yang dimaksud berada di
                        Jalan Kertanegara Nomor 4 yang terletak di belakang
                        Rumah Dinas Kapolri. Hengki menyebut pelaku kemudian
                        diusir oleh penjaga karena dinilai mencurigakan dan
                        bergerak ke arah rumah dinas Kapolri. Baca artikel CNN
                        Indonesia "Penyerang Penjaga Rumah Dinas Kapolri Sempat
                        Berjalan ke Rumah Prabowo" selengkapnya di sini:
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default NewsDetail;
