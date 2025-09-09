
  const clockText = document.getElementById("clockText");
  const clockWrapper = document.getElementById("indiaClock");
  let showTime = true;

  function updateClock() {
    clockWrapper.classList.add("opacity-0");

    setTimeout(() => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      if (showTime) {
        const indiaTime = new Intl.DateTimeFormat("en-IN", options).format(now);
        clockText.textContent = `🇮🇳 ${indiaTime}`;
      } else {
        clockText.textContent = `🕒 UTC+5:30`;
      }

      showTime = !showTime;
      clockWrapper.classList.remove("opacity-0");
    }, 400);

    setTimeout(updateClock, 3000);
  }

  updateClock();

