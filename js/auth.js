const supabase = supabaseJs.createClient(
  "https://vckarhellnkghsnnfmgn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZja2FyaGVsbG5rZ2hzbm5mbWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3ODA2NDAsImV4cCI6MjA4NTM1NjY0MH0.4D_Xb22o4n5JzR2twZzZUaV1yj5P0seTXMeZXNQyu1s"
);


async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    alert("Daftar gagal: " + error.message);
  } else {
    alert("Akun berhasil dibuat. Silakan login.");
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

  if (error) {
    alert("Login gagal: " + error.message);
  } else {
    window.location.href = "dashboard.html";
  }
}
