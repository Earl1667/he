document.getElementById("kartForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    // Kart bilgilerini al
    const kartNumarasi = document.getElementById("kartNumarasi").value;
    const sonKullanmaTarihi = document.getElementById("sonKullanmaTarihi").value;
    const cvv = document.getElementById("cvv").value;

    // Konsola yazdır (gerçek uygulamada bu bilgiler sunucuya gönderilir)
    console.log("Kart Numarası:", kartNumarasi);
    console.log("Son Kullanma Tarihi:", sonKullanmaTarihi);
    console.log("CVV:", cvv);

    // Kullanıcıya bilgi ver
    alert("Kart bilgileriniz alındı! (Konsola bakın)");
});