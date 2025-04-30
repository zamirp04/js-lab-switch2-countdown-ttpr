```md
---
languages: javascript, html, css
tags: dom, timers, events, beginner, kids
---

# js-lab-switch2-countdown-ttpr - Switch 2 Countdown Challenge

Nintendo’s **Switch 2** officially launches at **12:01 AM on June 5 2025**.  
Your mission: turn the starter code below into a tiny, celebratory launch-party web page.
```

```js
// script.js (starter)
CountDownToMario("06/05/2025 12:01 AM", "countdown");

function CountDownToMario(endTime, div) {
  /* current logic here */
}
```

---

## What you’ll build

A single-page site that:

- shows a live, self-updating countdown (days : hrs : mins : secs)
- swaps to a launch message when the clock hits zero
- feels a little “Nintendo” ✨

---

## Tasks

| #   | Requirement                                                                                                                                               | Hints                                                  |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 1   | **Refactor** `CountDownToMario` so each unit is two digits (`04 hrs`, not `4 hrs`).                                                                       | `String.prototype.padStart`                            |                                       |
| 2   | **Launch state**: when the countdown reaches 0, replace the timer with **“Switch 2 is out! 🎉”** and swap the page background to a fun image or gradient. | Detect `distance <= 0`                                 |
| 3   | **Dynamic date**: let the release date be set from HTML via a `data-release` attribute on the `<div id="countdown">`.                                     | `document.getElementById('countdown').dataset.release` |
| 4 (Optional)   | **(Stretch)** Play a short coin-collect sound once when the timer hits zero.                                                                              | `<audio>` element + `.play()`                          |

---

## Getting started

1. **Fork** this repository.
2. **Clone** your fork locally.
3. Open `index.html` in the browser (keep DevTools console open).
4. Work in `script.js` and `styles.css`; commit early & often.
5. **Push** and open a Pull Request when finished.

---

## Submission checklist

- [ ] Countdown displays and updates every second.
- [ ] Digits are always two characters.
- [ ] Post-launch message & background change trigger properly.
- [ ] No uncaught console errors.
- [ ] README includes a screenshot of the final page.

Have fun—and set your alarms for midnight!

