const correctPassword = "AD5881AVF";  // Ganti password di sini

function checkPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    if (inputPassword === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";  // Sembunyikan layar password
        setTimeout(() => {
            document.getElementById("opening").style.display = "flex";  // Tampilkan opening screen setelah jeda
            setTimeout(() => {
                document.getElementById("opening").style.opacity = '0';  // Fade out animasi
                setTimeout(() => {
                    document.getElementById("opening").style.display = "none";  // Sembunyikan elemen opening
                    document.querySelector('.container').style.display = 'block';  // Tampilkan konten utama
                }, 1500);  // Durasi fade out animasi
            }, 3000);  // Durasi tampilan opening screen
        }, 1000);  // Jeda setelah password benar sebelum opening muncul
    } else {
        alert("Password salah!");
    }
}

const messages = [
    "Hai Albani, Aku mau bilang sesuatu, to the point aja ya...",
    "Aku ada rasa tertarik sama Kamu.",
    "Tertarik yang kayak gimana yaa?",
    "Yapp, bener Aku NAKSIR Kamu :)",
    "Jika ditanya gimana sih Aku bisa tertarik sama Kamu, itu Aku juga gak tau, hehe ^_^.",
    "Gitu aja sih, Aku gatau mau ngomong apa lagi...",
    "Aku gak berharap lebih sih..., tapi setelah confess Ku ini Kuharap Kita gak asing dan ya udah kayak biasanya aja...",
    "Maaf ya, karena Aku ngasih kayak gini.",
    "Kalo ngomong secara langsung jujur Aku ga ada nyali, dan pasti Kamu juga sibuk.",
    "Aku lebih ke takut sih nanti kalo lihat feedbackmu ga sesuai ekspektasiku.",
    "Aku gamau bikin Kamu ga nyaman, maaf yaa jika tiba-tiba banget Aku confess.",
    "Maaf juga bila sikapku sebelumnya terkesan mengganggu, yaa mau gimana lagi biar dinotice sama Kamu ^_^.",
    "Kamu nyadar gak sih, kalo sikapku beda? Soalnya yaa gitu dehh :) .",
    "Tapi katanya ada rumor yang bilang kita deket itu sebelum di Pare ya?",
    "Asal Kamu tau, Aku suka Kamu saat balek dari Pare sih, ituu malem latian farewell pas Dewangga duduk sebelahan sama Kamu.",
    "Kalo gak salah itu Kamis malemkan? Nah kemarinnya Rabu siang tuh ada yang nanya ke Aku, ''Fah Kamu ada hubungan sama Albani to?'' ",
    "Yaa, kujawab enggak lah orang kita gak akrab, batinku pas itu Aku juga bingung kok bisa? Siapa yang bilang??.",
    "Nah pas pulang dari latian farewell Kamis itu di camp Aku jadi kepikiran, hahaa padahal Aku sering di ceng-cengin sama yang lain, tapi gatau kenapa pas di ceng-cengin sama Aku langsung ovt T_T.",
    "Jangan asing ya bang, pliss sekali lagi maaf yaa, kalo mau tanya lebih lanjut di WA sajaa SAYA TIDAK KUATTT   T_T.",
    "btw",
    "Aku bikin kayak gini lewat GPT sama GOOGLE sihh bukan karyaku sendiri jadi jangan diroasting ya wkwk, tapi tetep ku edit sendiri kok.",
    "Tolong dihargain bangg masih pemula ini.",
    "Okee, sekian makasih udah ngeluangin waktunya sebentar.",
    "Makasih masih mau jadi temenku walau Aku kayak gini.",
    "Aku sebenernya gatau mau dijawab apaan nanti kalo ada sambungnya, Aku gatau gimana lagi soalnya.",
    "Biar Kamu yang ambil keputusan ya...",
    "Eh jangan bilang siapa-siapa yaa jika aku ngasih surprise kayak gini jujurr Aku maluu bangett soalnya baru PERTAMA ini Saya kayak beginiii. ",
    "Makasih atas Waktunya Maaf yaaa, ohh iyaa soal-soalnya jangan lupa dipelajarin, soalnya yaa kelebihanku itu membantu ^o^. Eh btw gimana gambarnya gak mirip yaa? Sorry yaa wkwk. Sekali lagi tolong jangan asing yaa walaupun kita bukan siapa-siapa hehee. ",
];

let currentMessageIndex = 0;

function showMessage() {
    if (currentMessageIndex < messages.length) {
        const messageElement = document.getElementById("message");
        messageElement.textContent = messages[currentMessageIndex];
        messageElement.style.display = "block";
        messageElement.style.opacity = "1";
        currentMessageIndex++;

        // Scroll to bottom of message
        messageElement.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
        alert("Semua pesan sudah ditampilkan!");
    }
}
