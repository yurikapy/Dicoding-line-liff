// Menu
var jumlahAyomakancake = document.getElementById("Ayomakancakejumlah");
var jumlahAyomakansurabi = document.getElementById("Ayomakansurabijumlah");
var jumlahsakdur = document.getElementById("sakdurjumlah");
var jumlahBoba= document.getElementById("Bobajumlah");

// Total Belanja
var totalHargaMakanan = document.getElementById("makanantotal");
var totalHargaMinuman = document.getElementById("minumantotal");
var totalcake= document.getElementById("caketotal");
var totalsurabi = document.getElementById("surabitotal");
var totalshake = document.getElementById("shaketotal");
var totalboba = document.getElementById("bobatotal");

var totalcakeHarga;
var totalsurabiHarga;
var totalshakeHarga;
var totalbobaHarga;

function TambahMakan(anekamakanan) {
    switch (anekamakanan) {
        case "Ayomakancake":
            var currentTotal = jumlahAyomakancake.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahAyomakancake.innerHTML = currentTotal;
            totalAyomakancake.innerHTML = currentTotal;
            break;
        case "Ayomakansurabi":
            var currentTotal = jumlahAyomakansurabi.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahAyomakansurabi.innerHTML = currentTotal;
            totalAyomakansurabi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function KurangMakan(anekamakanan) {
    switch (anekamakanan) {
        case "Ayomakancake":
            var currentTotal = jumlahAyomakancake.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahAyomakancake.innerHTML= currentTotal;
            totalcake.innerHTML = currentTotal;
            break;
        case "Ayomakansurabi":
            var currentTotal = jumlahAyomakansurabi.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahAyomakansurabi.innerHTML = currentTotal;
            totalsurabi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function NambahMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "iniEsJeruk":
            var currentTotal = jumlahEsJeruk.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahEsJeruk.innerHTML = currentTotal;
            totalEsJeruk.innerHTML = currentTotal;
            break;
        case "iniEsTeh":
            var currentTotal = jumlahEsTeh.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahEsTeh.innerHTML = currentTotal;
            totalEsTeh.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function PenguranganMinuman(jenisMinuman) {
    switch (jenisMinuman) {
        case "iniEsJeruk":
            var currentTotal = jumlahEsJeruk.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahEsJeruk.innerHTML = currentTotal;
            totalEsJeruk.innerHTML = currentTotal;
            break;
        case "iniEsTeh":
            var currentTotal = jumlahEsTeh.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahEsTeh.innerHTML = currentTotal;
            totalEsTeh.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBelanja();
}

function hitungTotalBelanja() {
    totalPecelLeleHarga = parseInt(totalPecelLele.innerHTML) * 15000;
    totalAyamPenyetHarga = parseInt(totalAyamPenyet.innerHTML) * 20000;
    totalEsJerukHarga = parseInt(totalEsJeruk.innerHTML) * 5000;
    totalEsTehHarga = parseInt(totalEsTeh.innerHTML) * 4000;

    totalHargaMakanan.innerHTML = totalPecelLeleHarga + totalAyamPenyetHarga;
    totalHargaMinuman.innerHTML = totalEsJerukHarga + totalEsTehHarga;

    statusButtonCM();
}

function checkoutCO() {
    var namaUser = document.getElementById("card_nama_user");
    var strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
        "Terimakasih telah memesan makanan dan minuman di PECEL LELE CAK MAN \n" +
        "Berikut adalah rincian pesanan anda: \n\n" +
        totalPecelLele.innerHTML + " item Pecel Lele: Rp. " + totalPecelLeleHarga + "\n" +
        totalAyamPenyet.innerHTML + " item Ayam Penyet: Rp. " + totalAyamPenyetHarga + "\n" +
        totalEsJeruk.innerHTML + " item Es Jeruk: Rp. " + totalEsJerukHarga + "\n" +
        totalEsTeh.innerHTML + " item Es Teh: Rp. " + totalEsTehHarga + "\n\n" +
        "Maka,\n" +
        "Total harga makanan: Rp. " + totalHargaMakanan.innerHTML + "\n" +
        "Total harga minuman: Rp. " + totalHargaMinuman.innerHTML + "\n\n" +
        "Silahkan lakukan proses pembayaran di kasir ya :D";

    return strukBelanja;
}

function statusButtonCM() {
    if (
        totalPecelLeleHarga == 0 &&
        totalAyamPenyetHarga == 0 &&
        totalEsJerukHarga == 0 &&
        totalEsTehHarga == 0
    ) {
        document.getElementById("button_CO").disabled = true;
    } else {
        document.getElementById("button_CO").disabled = false;
    }
}
