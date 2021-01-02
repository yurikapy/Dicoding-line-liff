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
        totalcakeHarga == 0 &&
        totalsurabiHarga == 0 &&
        totalshakekHarga == 0 &&
        totalbobaHarga == 0 &&
    ) {
        document.getElementById("button_CO").disbled= true;
    } else {
        document.getElementById("button_CO").disabled = false;
    }

    function simpanData() {
 
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "Menu baru berhasil disimpan"
            }]).then(function() {
                alert('Catatan Tersimpan');
            }).catch(function(error) {
                alert('wadidaw kok error sih...');
            });
        }
     
        nama = $('#nama').val();
        tanggal = $('#tanggal').val();
        agenda = $('#agenda').val();
     
        if (localStorage.list_data && localStorage.id_data) {
            list_data = JSON.parse(localStorage.getItem('list_data'));
            id_data = parseInt(localStorage.getItem('id_data'));
        }
        else {
            list_data = [];
            id_data = 0;
        }
     
        id_data++;
        list_data.push({ 'id_data': id_data, 'nama': nama, 'tanggal': tanggal, 'agenda': agenda });
        localStorage.setItem('list_data', JSON.stringify(list_data));
        localStorage.setItem('id_data', id_data);
        document.getElementById('form-data').reset();
        gantiMenu('list-catatan');
     
        return false;
    }
     
    function simpanEditData() {
     
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "menu yang diedit sudah tersimpan"
            }]).then(function() {
                alert('Catatan tersimpan');
            }).catch(function(error) {
                alert('wadidaw kok error ya...');
            });
        }
     
        id_data = $('#eid_data').val();
        nama = $('#enama').val();
        tanggal = $('#etanggal').val();
        agenda = $('#eagenda').val();
     
        list_data.push({ 'id_data': id_data, 'nama': nama, 'tanggal': tanggal, 'agenda': agenda });
        localStorage.setItem('list_data', JSON.stringify(list_data));
        document.getElementById('eform-data').reset();
        gantiMenu('list-catatan');
     
        return false;
    }
     
    function hapusData(id) {
     
        if (!liff.isInClient()) {
            sendAlertIfNotInClient();
        } else {
            liff.sendMessages([{
                'type': 'text',
                'text': "Catatan sudah terhapus"
            }]).then(function() {
                alert('Catatan sudah dihapus');
            }).catch(function(error) {
                alert('Aduh kok nggak bisa');
            });
        }
     
        if (localStorage.list_data && localStorage.id_data) {
            list_data = JSON.parse(localStorage.getItem('list_data'));
     
            idx_data = 0;
            for (i in list_data) {
                if (list_data[i].id_data == id) {
                    list_data.splice(idx_data, 1);
                }
                idx_data++;
            }
     
            localStorage.setItem('list_data', JSON.stringify(list_data));
            loadCatatan();
        }
    }
}
