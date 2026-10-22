window.addEventListener('DOMContentLoaded', () => {
    const shouldPlay = localStorage.getItem('autoPlayMusic');
    const music = document.getElementById('bg-music');

    if (music) {
        // 🔊 Tetapkan volume ke tahap paling maksima (1.0 = 100%)
        music.volume = 1.0; 
    }

    if (shouldPlay === 'true') {
        music.play().then(() => {
            console.log("Muzik berjaya dimainkan secara automatik!");
        }).catch(error => {
            console.log("Autoplay disekat oleh pelayar. Menunggu klik pengguna...");
            
            const unlockAudio = () => {
                music.play().then(() => {
                    console.log("Muzik dimainkan selepas interaksi pengguna.");
                    document.removeEventListener('click', unlockAudio);
                    document.removeEventListener('touchstart', unlockAudio);
                }).catch(err => console.log("Gagal memainkan audio:", err));
            };

            document.addEventListener('click', unlockAudio);
            document.addEventListener('touchstart', unlockAudio);
        });

        localStorage.removeItem('autoPlayMusic');
    }

    startMusicRain();
});