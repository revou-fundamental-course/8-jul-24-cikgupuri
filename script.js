function hitungBeratBadanIdeal() {
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);
    const usia = parseFloat(document.getElementById('usia').value);

    // Rumus BMI
    const bmi = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));

    // Klasifikasi BMI
    let keterangan;
    if (jenisKelamin === "laki-laki") {
        if (bmi < 13.7) {
            keterangan = "Sangat Kurus";
        } else if (bmi < 17.5) {
            keterangan = "Kurang Berat Badan";
        } else if (bmi < 25) {
            keterangan = "Normal";
        } else if (bmi < 30) {
            keterangan = "Kelebihan Berat Badan";
        } else {
            keterangan = "Obesitas";
        }
    } else {
        if (bmi < 12) {
            keterangan = "Sangat Kurus";
        } else if (bmi < 15.5) {
            keterangan = "Kurang Berat Badan";
        } else if (bmi < 23) {
            keterangan = "Normal";
        } else if (bmi < 30) {
            keterangan = "Kelebihan Berat Badan";
        } else {
            keterangan = "Obesitas";
        }
    }

    // Tampilkan hasil
document.getElementById('berat-badan-ideal').textContent = bmi.toFixed(2);
document.getElementById('keterangan').textContent = keterangan;

    
}