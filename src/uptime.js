/**
 * Uptime badge — fetches live stats from UptimeRobot API.
 * Monitor ID : 803755219
 * API Key    : m803755219-2b43a3ea7815038ca3a6bb31 (read-only)
 *
 * UptimeRobot status codes:
 *   2 = up | 8 = seems down | 9 = down | 0 = paused | 1 = not checked yet
 */

(function () {
  const dot      = document.getElementById("uptimeDot");
  const textEl   = document.getElementById("uptimeText");

  if (!dot || !textEl) return;

  dot.classList.add("checking");
  textEl.textContent = "Checking…";

  fetch("https://api.uptimerobot.com/v2/getMonitors", {
    method : "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body   : new URLSearchParams({
      api_key               : "m803755219-2b43a3ea7815038ca3a6bb31",
      format                : "json",
      monitors              : "803755219",
      response_times        : "1",
      response_times_limit  : "1",
      all_time_uptime_ratio : "1",
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.stat !== "ok" || !data.monitors?.length) {
        setUnknown(); return;
      }

      const m      = data.monitors[0];
      const status = m.status;                              // 2 = up
      const uptime = parseFloat(m.all_time_uptime_ratio ?? 0).toFixed(2) + "%";
      const resArr = m.response_times ?? [];
      const ms     = resArr.length ? resArr[0].value + "ms" : null;

      if (status === 2) {
        dot.classList.remove("checking", "down");
        textEl.innerHTML =
          `All Systems Up&thinsp;·&thinsp;${uptime}` +
          (ms ? `&thinsp;·&thinsp;${ms}` : "");
      } else if (status === 8 || status === 9) {
        dot.classList.remove("checking");
        dot.classList.add("down");
        textEl.textContent = `Degraded · ${uptime}`;
      } else {
        setUnknown();
      }
    })
    .catch(() => setUnknown());

  function setUnknown() {
    dot.classList.remove("checking", "down");
    textEl.textContent = "Status unknown";
  }
})();
