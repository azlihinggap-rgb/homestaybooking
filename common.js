// Fungsi kongsi: tarikh, harga, kalendar

export const pad = (n) => String(n).padStart(2, "0");
export const toKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const fromKey = (k) => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d);
};
export const addDays = (d, n) => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
};

// Senarai malam (tarikh setiap malam menginap) dari check-in hingga sehari sebelum check-out
export function nightsBetween(inKey, outKey) {
  const out = [];
  let d = fromKey(inKey);
  const end = fromKey(outKey);
  while (d < end) {
    out.push(toKey(d));
    d = addDays(d, 1);
  }
  return out;
}

// Malam Jumaat, Sabtu, Ahad atau cuti umum = kadar hujung minggu
export function isPremium(key, holidays) {
  const dow = fromKey(key).getDay(); // 0 = Ahad ... 6 = Sabtu
  return dow === 5 || dow === 6 || dow === 0 || holidays.has(key);
}

export function rateFor(key, holidays, s) {
  return isPremium(key, holidays) ? s.rateWeekend : s.rateWeekday;
}

export function quote(inKey, outKey, holidays, s) {
  const nights = nightsBetween(inKey, outKey);
  const total = nights.reduce((t, k) => t + rateFor(k, holidays, s), 0);
  const premium = nights.filter((k) => isPremium(k, holidays)).length;
  return { nights, total, premium, normal: nights.length - premium };
}

export const MONTHS = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];
export const DAYS_FULL = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];

export function fmtDate(k, withDay = false) {
  const d = fromKey(k);
  const s = `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`;
  return withDay ? `${DAYS_FULL[d.getDay()]}, ${s}` : s;
}

export const rm = (n) => "RM" + Number(n).toLocaleString("en-MY");

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Tukar nombor telefon Malaysia ke format wa.me (60xxxxxxxxx)
export function waNumber(phone) {
  let p = String(phone).replace(/[^0-9]/g, "");
  if (p.startsWith("0")) p = "6" + p;
  return p;
}

// Lukis satu bulan kalendar. cell(key, date) pulangkan {cls, sub, disabled, title, onClick}
export function renderMonth(el, y, m, cell) {
  el.innerHTML = "";
  const head = document.createElement("div");
  head.className = "cal-grid cal-head";
  for (const d of ["Isn", "Sel", "Rab", "Kha", "Jum", "Sab", "Ahd"]) {
    const s = document.createElement("div");
    s.textContent = d;
    head.appendChild(s);
  }
  const grid = document.createElement("div");
  grid.className = "cal-grid";
  const first = new Date(y, m, 1);
  const offset = (first.getDay() + 6) % 7; // minggu bermula Isnin
  const days = new Date(y, m + 1, 0).getDate();
  for (let i = 0; i < offset; i++) grid.appendChild(document.createElement("div"));
  for (let d = 1; d <= days; d++) {
    const date = new Date(y, m, d);
    const key = toKey(date);
    const c = cell(key, date) || {};
    const b = document.createElement("button");
    b.type = "button";
    b.className = "day " + (c.cls || "");
    b.innerHTML = `<span class="dn">${d}</span>${c.sub ? `<span class="sub">${c.sub}</span>` : ""}`;
    if (c.disabled) b.disabled = true;
    if (c.title) b.title = c.title;
    if (c.onClick) b.addEventListener("click", () => c.onClick(key));
    grid.appendChild(b);
  }
  el.append(head, grid);
}

export function toast(msg, ms = 2600) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}
