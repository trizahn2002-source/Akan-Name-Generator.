document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const day = parseInt (document.getElementById("day").value);
    const month = parseInt (document.getElementById("month").value);
    const year = parseInt (document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    //Validation
    if (!day || !month || !year || !gender) {
        alert("Fill in all fields and select a gender");
        return;
    }

    if(day < 1 || day > 31) {
alert("Day must be between 1 and 31");
return;
    }

    if(month < 1 || month > 12) {
        alert("Month must be between 1 and 12");
        return;
    }
        

    //Akan names
    const maleNames = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    const femaleNames = ["Ama","Akosua","Adwoa","Abenna","Akua","Yaa","Afua"];
    const days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

    //math
  let m = month;
  let y = year;
  if (m < 3) {
    m += 12;
    y -= 1;
  }
  const K = y % 100;
  const J = Math.floor(y / 100);

  const dayOfWeek = (day + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + 5 * J) % 7;

  const index = dayOfWeek;

  const akanName = gender === "male" ? maleNames[index] : femaleNames[index];

  document.getElementById("result").innerHTML =
    `You were born on a <strong>${days[index]}</strong>.<br>
     Your Akan name is <strong>${akanName}</strong>.`;

  // Clear form
  document.getElementById("akanForm").reset();
});
 