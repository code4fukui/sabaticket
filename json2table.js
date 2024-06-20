export const json2table = (json, formatter) => {
  const c = (tag, parent) => {
    const c = document.createElement(tag);
    if (parent) parent.appendChild(c);
    return c;
  };
  const tbl = c("table");
  if (!Array.isArray(json)) {
    //throw new Error("is not Array");
    return tbl;
  }

  const names = [];
  for (const item of json) {
    for (const key of Object.keys(item)) {
      if (names.indexOf(key) == -1) {
        names.push(key);
      }
    }
  }

  const tr0 = c("tr", tbl);
  for (let i = 0; i < names.length; i++) {
    const th = c("th", tr0);
    th.textContent = names[i];
  }
  for (const item of json) {
    const tr = c("tr", tbl);
    for (const name of names) {
      const td = c("td", tr);
      const value = item[name];
      if (formatter) {
        if (formatter(td, name, value, item)) {
          continue;
        }
      }
      const s = value;
      if (typeof s == "string" && (s.startsWith("http://") || s.startsWith("https://"))) {
        const a = c("a", td);
        a.href = a.textContent = s;
      } else {
        td.textContent = s;
      }
    }
  }
  return tbl;
};
