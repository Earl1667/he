// Sayfa yüklendiğinde otomatik olarak bir mesaj göster
window.onload = function () {
    alert("Hoş geldiniz! Lütfen kart bilgilerinizi girin.");
};

// Form gönderildiğinde çalışacak fonksiyon
document.getElementById("kartForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    // Kart bilgilerini al
    const kartNumarasi = document.getElementById("kartNumarasi").value;
    const sonKullanmaTarihi = document.getElementById("sonKullanmaTarihi").value;
    const cvv = document.getElementById("cvv").value;

    // Kart numarası 16 karakter mi kontrol et
    if (kartNumarasi.length !== 16) {
        alert("Kart numarası 16 karakter olmalıdır!");
        return;
    }

    // Son kullanma tarihi AA/YY formatında mı kontrol et
    if (!/^\d{2}\/\d{2}$/.test(sonKullanmaTarihi)) {
        alert("Son kullanma tarihi AA/YY formatında olmalıdır!");
        return;
    }

    // CVV 3 karakter mi kontrol et
    if (cvv.length !== 3) {
        alert("CVV 3 karakter olmalıdır!");
        return;
    }

    // Bilgileri konsola yazdır (gerçek uygulamada sunucuya gönderilir)
    console.log("Kart Numarası:", kartNumarasi);
    console.log("Son Kullanma Tarihi:", sonKullanmaTarihi);
    console.log("CVV:", cvv);

    // Kullanıcıya bilgi ver
    alert("Kart bilgileriniz alındı! (Konsola bakın)");
});