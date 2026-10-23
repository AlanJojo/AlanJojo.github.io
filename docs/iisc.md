---
title: IISc Prayer Meeting
hide:
  - navigation
  - toc
  - footer
search:
  exclude: true
---

# IISc Prayer Meeting

<div class="iisc" markdown>
  <label for="iisc-gospel">Gospel</label>
  <input id="iisc-gospel" type="text" placeholder="e.g. Luke 12:13-21">

  <label for="iisc-venue">Venue</label>
  <select id="iisc-venue">
    <option value="Main Building">Main Building</option>
    <option value="Near A hostel">Near A hostel</option>
    <option value="">None - pray by yourself</option>
  </select>

  <pre id="iisc-message" class="iisc-message"></pre>

  <button id="iisc-copy" class="md-button md-button--primary" type="button">Copy text</button>
  <span id="iisc-copied" class="iisc-copied" hidden>Copied</span>
</div>

<script>
(function () {
  const gospel = document.getElementById("iisc-gospel");
  const venue = document.getElementById("iisc-venue");
  const output = document.getElementById("iisc-message");
  const copied = document.getElementById("iisc-copied");
  if (!gospel || !venue || !output) return;

  const today = new Date();
  const date = today.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const day = today.toLocaleDateString("en-GB", { weekday: "long" });

  function message() {
    const place = venue.value;
    const lines = [place ? "*Rosary (offline)*" : "*Please pray the Rosary by yourself*", "Date: " + date, "Day: " + day];
    if (place) lines.push("Time: 08:00 pm", "Venue: " + place);
    lines.push("Gospel: " + gospel.value.trim());
    return lines.join("\n");
  }

  function render() { output.textContent = message(); }

  gospel.addEventListener("input", render);
  venue.addEventListener("change", render);
  document.getElementById("iisc-copy").addEventListener("click", async () => {
    await navigator.clipboard.writeText(message());
    copied.hidden = false;
    setTimeout(() => (copied.hidden = true), 1500);
  });
  render();
})();
</script>
