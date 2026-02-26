const monthlyBtn = document.getElementById("monthlyBtn");
    const yearlyBtn = document.getElementById("yearlyBtn");
    const monthlySection = document.getElementById("monthlySection");
    const yearlySection = document.getElementById("yearlySection");

    monthlyBtn.addEventListener("click", () => {
      monthlyBtn.classList.add("active");
      yearlyBtn.classList.remove("active");
      monthlySection.classList.add("active");
      yearlySection.classList.remove("active");
    });

    yearlyBtn.addEventListener("click", () => {
      yearlyBtn.classList.add("active");
      monthlyBtn.classList.remove("active");
      yearlySection.classList.add("active");
      monthlySection.classList.remove("active");
    });