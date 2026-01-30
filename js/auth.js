// =====================================
// KONEKSI KE SUPABASE
// =====================================
const sb = supabase.createClient(
  "https://vckarhellnkghsnnfmgn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZja2FyaGVsbG5rZ2hzbm5mbWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODA2NDAsImV4cCI6MjA4NTM1NjY0MH0.4D_Xb22o4n5JzR2twZzZUaV1yj5P0seTXMeZXNQyu1s"
);

// =====================================
// SIGN UP (DAFTAR AKUN)
// =====================================
async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email dan password wajib diisi");
    return;
  }

  const { error } = await sb.auth.signUp({
    email,
    password
  });

  if (error) {
    alert("Daftar gagal: " + error.message);
  } else {
    alert(
      "Pendaftaran berhasil.\nSilakan cek email untuk verifikasi,\nsetelah itu kembali ke website dan login."
    );
  }
}

// =====================================
// LOGIN (SETELAH EMAIL VERIFIED)
// =====================================
async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email dan password wajib diisi");
    return;
  }

  const { data, error } = await sb.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login gagal: " + error.message);
    return;
  }

  // ==============================
  // CEK EMAIL SUDAH DIVERIFIKASI
  // ==============================
  if (!data.user.email_confirmed_at) {
    alert("Email belum diverifikasi. Silakan cek email Anda.");
    await sb.auth.signOut();
    return;
  }

  // ==============================
  // LOGIN SUKSES
  // ==============================
  window.location.href = "dashboard.html";
}

// =====================================
// CEK SESSION OTOMATIS (AUTO LOGIN)
// =====================================
async function checkSession() {
  const { data } = await sb.auth.getSession();

  if (data.session) {
    // sudah login → langsung ke dashboard
    if (window.location.pathname.includes("index.html") ||
        window.location.pathname.endsWith("/scmb-mini/")) {
      window.location.href = "dashboard.html";
    }
  }
}
