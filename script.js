function generatePlan() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const planSection = document.getElementById('planSection');
  const planResult = document.getElementById('planResult');

  if (!q1 || !q2) {
    alert('Harap isi semua pertanyaan terlebih dahulu!');
    return;
  }

  let style = q1.value;
  let time = q2.value;

  let plan = "";

  if (style === "visual") plan += "📘 Kamu tipe pembelajar Visual: gunakan video, mind map, dan infografik.<br>";
  if (style === "auditory") plan += "🎧 Kamu tipe Auditori: rekam suaramu atau dengarkan podcast edukatif.<br>";
  if (style === "kinesthetic") plan += "✋ Kamu tipe Kinestetik: belajar sambil praktik dan eksperimen kecil.<br>";

  if (time === "morning") plan += "🌅 Waktu terbaikmu adalah pagi hari — belajar 1 jam setelah bangun tidur.";
  if (time === "evening") plan += "🌙 Malam hari cocok untukmu — belajar sebelum tidur sambil refleksi.";
  if (time === "noisy") plan += "🎵 Suasana ramai malah membuatmu fokus — coba belajar di kafe atau ruang terbuka.";

  planResult.innerHTML = plan;
  planSection.classList.remove("hidden");
}
