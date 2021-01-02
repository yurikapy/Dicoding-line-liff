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

function TambahMinum(anekaMinuman) {
    switch (anekaMinuman) {
        case "inishakeduren":
            var currentTotal = jumlahsakdur.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahsakdur.innerHTML = currentTotal;
            totalshake.innerHTML = currentTotal;
            break;
        case "iniBoba":
            var currentTotal = jumlahBoba.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahBoba.innerHTML = currentTotal;
            totalboba.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function KurangMinum(anekaMinuman) {
    switch (anekaMinuman) {
        case "inishakeduren":
            var currentTotal = jumlahsakdur.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahsakdur.innerHTML = currentTotal;
            totalshake.innerHTML = currentTotal;
            break;
        case "iniBoba":
            var currentTotal = jumlahBoba.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahBoba.innerHTML = currentTotal;
            totalboba.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function hitungTotalBeli() {
    totalcakeHarga = parseInt(totalcake.innerHTML) * 15000;
    totalsurabiHarga = parseInt(totalsurabi.innerHTML) * 12000;
    totalshakeHarga = parseInt(totalEsJeruk.innerHTML) * 15000;
    totalbobaHarga = parseInt(totalEsTeh.innerHTML) * 20000;

    totalHargaMakanan.innerHTML = totalcakeHarga + totalsurabiHarga;
    totalHargaMinuman.innerHTML = totalshakeHarga + totalbobahHarga;

    statusButtonCM();
}

function checkoutCO() {
    var namaUser = document.getElementById("card_nama_user");
    var strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
        "Terimakasih telah PESAN DI AYO MAKAN:))\n" +
        "INI LAHHH rincian harus anda bayar : \n\n" +
        totalcake.innerHTML + " pcs : Rp. " + totalcakeHarga + "\n" +
        totalsurabi.innerHTML + " pcs: Rp. " + totalsurabiHarga + "\n" +
        totalshake.innerHTML + " pcs: Rp. " + totalshakeHarga + "\n" +
        totalboba.innerHTML + " pcs: Rp. " + totalbobaHarga + "\n\n" +
        "Maka,\n" +
        "Total harga makanan: Rp. " + totalHargaMakanan.innerHTML + "\n" +
        "Total harga minuman: Rp. " + totalHargaMinuman.innerHTML + "\n\n" +
        "Silahkan lakukan payment yang disediakan ";

    return strukBelanja;
}

function statusButtonCM() {
    if (
        totalcakeHarga == 0 &&
        totalsurabiPenyetHarga == 0 &&
        totalshakekHarga == 0 &&
        totalbobaHarga == 0
    ) {
        document.getElementById("button_CO").disabled = true;
    } else {
        document.getElementById("button_CO").disabled = false;
    }
}
