// Menu
var jumlahAyoMakancake = document.getElementById("Ayomakancakejumlah");
var jumlahAyoMakansurabi = document.getElementById("Ayomakansurabijumlah");
var jumlahSakdur = document.getElementById("sakdurjumlah");
var jumlahBoba= document.getElementById("Bobajumlah");

// Total Belanja
var totalHargaMakanan = document.getElementById("makanantotal");
var totalHargaMinuman = document.getElementById("minumantotal");
var totalCake= document.getElementById("caketotal");
var totalSurabi = document.getElementById("surabitotal");
var totalShake = document.getElementById("shaketotal");
var totalBoba = document.getElementById("bobatotal");

var totalCakeHarga;
var totalSurabiHarga;
var totalShakeHarga;
var totalBobaHarga;

function TambahMakan(anekamakanan) {
    switch (anekamakanan) {
        case "Ayomakancake":
            var currentTotal = jumlahAyoMakancake.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahAyoMakancake.innerHTML = currentTotal;
            totalCake.innerHTML = currentTotal;
            break;
        case "Ayomakansurabi":
            var currentTotal = jumlahAyoMakansurabi.innerHTML;
            currentTotal = parseInt(currentTotal);
            currentTotal++;
            jumlahAyoMakansurabi.innerHTML = currentTotal;
            totalSurabi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function KurangMakan(anekamakanan) {
    switch (anekamakanan) {
        case "Ayomakancake":
            var currentTotal = jumlahAyoMakancake.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahAyoMakancake.innerHTML= currentTotal;
            totalcake.innerHTML = currentTotal;
            break;
        case "Ayomakansurabi":
            var currentTotal = jumlahAyoMakansurabi.innerHTML;
            currentTotal = parseInt(currentTotal);

            if (currentTotal == 0) {
                currentTotal = 0;
            } else {
                currentTotal--;
            }

            jumlahAyoMakansurabi.innerHTML = currentTotal;
            totalSurabi.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function TambahMinum(anekaMinuman) {
    switch (anekaMinuman) {
        case "inishakeduren":
            var currentTotal = jumlahSakdur.innerHTML;
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
            totalBoba.innerHTML = currentTotal;
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

            jumlahSakdur.innerHTML = currentTotal;
            totalShake.innerHTML = currentTotal;
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
            totalBoba.innerHTML = currentTotal;
            break;
        default:
            break;
    }
    hitungTotalBeli();
}

function hitungTotalBeli() {
    totalCakeHarga = parseInt(totalCake.innerHTML) * 15000;
    totalSurabiHarga = parseInt(totalSurabi.innerHTML) * 12000;
    totalShakeHarga = parseInt(totalShake.innerHTML) * 15000;
    totalBobaHarga = parseInt(totalBoba.innerHTML) * 20000;

    totalHargaMakanan.innerHTML = totalCakeHarga + totalSurabiHarga;
    totalHargaMinuman.innerHTML = totalShakeHarga + totalBobaHarga;

    statusButtonCM();
}

function checkoutCO() {
    var namaUser = document.getElementById("card_nama_user");
    var strukBelanja = "Hai, " + namaUser.innerHTML + "\n\n" +
        "Terimakasih telah PESAN DI AYO MAKAN:))\n" +
        "INI LAHHH rincian harus anda bayar : \n\n" +
        totalCake.innerHTML + " pcs : Rp. " + totalCakeHarga + "\n" +
        totalSurabi.innerHTML + " pcs: Rp. " + totalSurabiHarga + "\n" +
        totalShake.innerHTML + " pcs: Rp. " + totalShakeHarga + "\n" +
        totalBoba.innerHTML + " pcs: Rp. " + totalBobaHarga + "\n\n" +
        "Maka,\n" +
        "Total harga makanan: Rp. " + totalHargaMakanan.innerHTML + "\n" +
        "Total harga minuman: Rp. " + totalHargaMinuman.innerHTML + "\n\n" +
        "Silahkan lakukan payment yang disediakan ";

    return strukBelanja;
}

function statusButtonCM() {
    if (
        totalCakeHarga == 0 &&
        totalSurabiHarga == 0 &&
        totalShakekHarga == 0 &&
        totalBobaHarga == 0 
    ){
        document.getElementById("button_CO").disabled= true;
    } else {
        document.getElementById("button_CO").disabled = false;
    }
}
