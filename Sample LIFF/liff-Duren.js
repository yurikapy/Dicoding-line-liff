window.onload = function () {
    const useNodeJS = false;   // if you are not using a node server, set this value to false
    const defaultLiffId = "1655338129-w0E2Kl27";   // change the default LIFF value if you are not using a node server

    // DO NOT CHANGE THIS
    let myLiffId = "1655338129-w0E2Kl27";

    // if node is used, fetch the environment variable and pass it to the LIFF method
    // otherwise, pass defaultLiffId
    if (useNodeJS) {
        fetch('/send-id')
            .then(function (reqResponse) {
                return reqResponse.json();
            })
            .then(function (jsonResponse) {
                myLiffId = jsonResponse.id;
                initializeLiffOrDie(myLiffId);
            })
            .catch(function (error) {
                document.getElementById("liffAppContent").classList.add('hidden');
                document.getElementById("nodeLiffIdErrorMessage").classList.remove('hidden');
            });
    } else {
        myLiffId = defaultLiffId;
        initializeLiffOrDie(myLiffId);
    }
};

/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        // document.getElementById("liffAppContent").classList.add('hidden');
        // document.getElementById("liffIdErrorMessage").classList.remove('hidden');

        document.getElementById('liffLogin').style.display = 'none';
        document.getElementById('liffAppContent').style.display = 'none';
        document.getElementById('liffIdErrorMessage').style.display = 'none';
        document.getElementById('liffInitErrorMessage').style.display = 'block';
    } else {
        initializeLiff(myLiffId);
    }
}

/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            initializeApp();
        })
        .catch((err) => {
            // document.getElementById("liffAppContent").classList.add('hidden');
            // document.getElementById("liffInitErrorMessage").classList.remove('hidden');

            document.getElementById('liffLogin').style.display = 'none';
            document.getElementById('liffAppContent').style.display = 'none';
            document.getElementById('liffIdErrorMessage').style.display = 'block';
            document.getElementById('liffInitErrorMessage').style.display = 'none';

            console.log('error initializeLiff: ', err);
        });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
    displayIsInClientInfo();
    registerButtonHandlers();

    // check if the user is logged in/out, and disable inappropriate button
    if (liff.isLoggedIn()) {

        // Get the username
        liff.getProfile()
            .then(profile => {
                const name = profile.displayName
                document.getElementById('card_nama_user').innerHTML = name;
            })
            .catch((err) => {
                console.log('error getprofile: ', err);
            })

        // Show liffAppContent
        document.getElementById('liffLogin').style.display = 'none';
        document.getElementById('liffAppContent').style.display = 'block';
        document.getElementById('liffIdErrorMessage').style.display = 'none';
        document.getElementById('liffInitErrorMessage').style.display = 'none';
    } else {

        // Show liffLogin
        document.getElementById('liffLogin').style.display = 'block';
        document.getElementById('liffAppContent').style.display = 'none';
        document.getElementById('liffIdErrorMessage').style.display = 'none';
        document.getElementById('liffInitErrorMessage').style.display = 'none';
    }
}

/**
* Toggle the login/logout buttons based on the isInClient status, and display a message accordingly
*/
function displayIsInClientInfo() {
    if (liff.isInClient()) {
        // document.getElementById('liffLoginButton').classList.toggle('hidden');
        // document.getElementById('liffLogoutButton').classList.toggle('hidden');
        // document.getElementById('isInClientMessage').textContent = 'You are opening the app in the in-app browser of LINE.';

        document.getElementById('button_navigasi').textContent = 'Buka di Eksternal Browser';
    } else {
        // document.getElementById('isInClientMessage').textContent = 'You are opening the app in an external browser.';

        document.getElementById('button_navigasi').textContent = 'Logout';
    }
}

/**
* Button Handlers
*/
function registerButtonHandlers() {

    // Button Login
    document.getElementById('button_login').addEventListener('click', function () {
        if (!liff.isLoggedIn()) {
            liff.login();
        }
    });

    // Button Jajan
    document.getElementById('button_CO').addEventListener('click', function () {
        var struk = checkoutCO();

        liff.sendMessages([{
            'type': 'text',
            'text': struk
        }]).then(function () {
            window.alert('Struk belanja berhasil dikirim');
        }).catch(function (error) {
            window.alert('Error sending message: ' + error);
        });
    });

    // Button Navigasi
    document.getElementById('button_navigasi').addEventListener('click', function () {
        var aksi = document.getElementById('button_navigasi').textContent;

        if(aksi == 'Logout') {
            if (liff.isLoggedIn()) {
                liff.logout();
                window.location.reload();
            }
        }else {
            liff.openWindow({
                url: 'https://ayomakan.herokuapp.com/', // Isi dengan Endpoint URL aplikasi web Anda
                external: true
            });
        }
    });
}

function sendAlertIfNotInClient() {
    alert('This button is unavailable as LIFF is currently being opened in an external browser.');
}
