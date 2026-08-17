const clockHours = document.getElementById("clockHours");
const clockSeconds = document.getElementById("clockSeconds");
const clockPeriod = document.getElementById("clockPeriod");

const indiaClockFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function updateClock() {
  const parts = Object.fromEntries(
    indiaClockFormatter
      .formatToParts(new Date())
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  clockHours.textContent = `${parts.hour}:${parts.minute}`;
  clockSeconds.textContent = `:${parts.second}`;
  clockPeriod.textContent = parts.dayPeriod.toLowerCase();
}

if (clockHours && clockSeconds && clockPeriod) {
  updateClock();
  setInterval(updateClock, 1000);
}
