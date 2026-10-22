// TULIS LIRIK / LUAHAN HATI KAU KAT SINI.
// Guna simbol \n kalau nak buat barisan baru (enter)
const myText = "Selamat Hari Lahir, Daddy! 🎉❤️\n\n Masa berlalu cepat sangat.\n Walaupun umur perkenalan kita belum sampai setahun, kehadiran daddy dalam kehidupan roleplay ni banyak sangat bawa kegembiraan.\n Terima kasih untuk setiap kenangan manis, gelak tawa, dan sokongan yang daddy beri selama ni.\n Fufu hargai sangat-sangat takdir yang temukan kita kat game ni.\n Semoga daddy diberikan umur yang berkat, dimudahkan segala urusan di dunia nyata, dan sentiasa dikelilingi kebaikan.\n\n Happy birthday once again, Daddy! 🥺💖";

let overflowBox = document.getElementById("typing-box");
let index = 0;

function typeWriter() {
    if (index < myText.length) {
        // Tambah satu huruf demi satu huruf
        overflowBox.innerHTML += myText.charAt(index);
        index++;
        
        // Skrin automatik scroll ke bawah sendiri ikut tulisan baru
        overflowBox.scrollTop = overflowBox.scrollHeight;
        
        setTimeout(typeWriter, 50); 
    }
}

// Jalankan fungsi taip sebaik sahaja page selesai dipaparkan
window.onload = typeWriter;

function createHeart() {
    const heart = document.createElement('div');
    // Guna simbol text '♥' supaya warna putih boleh masuk (emoji ❤️ tak boleh ubah warna)
    heart.innerHTML = '♥'; 
    heart.classList.add('heart');
    
    // Kedudukan rawak kiri ke kanan
    heart.style.left = Math.random() * 100 + 'vw';
    // Kelajuan jatuh rawak
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    // Saiz hati rawak
    heart.style.fontSize = Math.random() * 15 + 20 + 'px';
    
    // Tetapkan warna putih untuk hujan hati
    heart.style.color = '#ffffff'; 
    
    // Pastikan nama ID HTML anda betul ('heart-container' atau 'heartContainer')
    document.getElementById('heartContainer').appendChild(heart);
    
    // Padam elemen selepas jatuh untuk elak website jadi berat
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Munculkan hati baru setiap 0.3 saat
setInterval(createHeart, 300);