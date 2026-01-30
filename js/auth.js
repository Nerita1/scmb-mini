// ================================
// KONEKSI KE SUPABASE
// ================================
const sb = supabaseJs.createClient(
  "https://vckarhellnkghsnnfmgn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZja2FyaGVsbG5rZ2hzbm5mbWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODA2NDAsImV4cCI6MjA4NTM1NjY0MH0.4D_Xb22o4n5JzR2twZzZUaV1yj5P0seTXMeZXNQyu1s"
);

// ================================
// SIGNUP
// ================================
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await sb.auth.signUp({
    email,
    password
  });

  if (error) {
    alert("Daftar gagal: " + error.message);
  } else {
    alert("Akun berhasil dibuat, silakan login");
  }
}

// ================================
// LOGIN
// ================================
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await sb.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("Login gagal: " + error.message);
  } else {
    window.location.href = "dashboard.html";
  }
}
