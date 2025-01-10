var RasayelWhatsAppWidget = (function (l) {
  "use strict";
  var L = Object.defineProperty;
  var H = (l, d, h) =>
    d in l
      ? L(l, d, { enumerable: !0, configurable: !0, writable: !0, value: h })
      : (l[d] = h);
  var i = (l, d, h) => (H(l, typeof d != "symbol" ? d + "" : d, h), h);
  const d = `@import"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap";*{margin:0;padding:0;line-height:1;font-family:Inter,Arial,Helvetica,sans-serif}a{text-decoration:none}a:visited{color:inherit}button{background:none;border:none}.ras-waba-widget-wrapper{direction:ltr;--text-color-primary: #5c5c5c;--text-color-secondary: #cfcfcf;--text-color-op: #808080;--color-green: #0bb189;--color-blue: #3679ff;--channel-icon-size: 30px;--waba-green: #0a5f54;--waba-blue: #3679ff;--waba-light-green: #24d366;--waba-light-green-darken: #1eb352;position:relative}.ras-waba-widget-wrapper.is-fixed{position:fixed;right:2rem;bottom:2rem;z-index:999999}.ras-waba-button{position:absolute;right:0;bottom:0;display:flex;align-items:center;cursor:pointer;color:#fff;white-space:nowrap;font-size:16px;font-weight:500;border-radius:9999999px;background:var(--waba-light-green);transition:background-color .2s ease-in-out;padding:8px 16px}.ras-waba-button:focus{outline:none}.ras-waba-button:hover{background:var(--waba-light-green-darken)}.ras-waba-button svg{width:28px;height:28px;filter:drop-shadow(0px 7px 29px rgba(100,100,111,.2));color:#fff;margin-right:4px}.ras-waba-widget-popup{width:300px;overflow:hidden;border-radius:10px;position:absolute;max-height:min(calc(90vh - (2rem + 75px)),500px);right:4px;bottom:50px;will-change:transform;display:flex;flex-direction:column;box-shadow:#64646f33 0 7px 29px;transition:opacity .2s ease,transform,.2s ease;transform-origin:bottom right}.ras-waba-widget-popup.is-hidden{opacity:0;transform:scale(.4);visibility:hidden}.ras-waba-header{order:1;position:relative;padding:20px;display:flex;align-items:center;background:var(--waba-green);color:var(--text-color-primary)}.ras-waba-header-text{display:flex;flex-direction:column;margin-left:6px}.ras-waba-header-title{font-size:14px;white-space:nowrap;text-overflow:ellipsis;text-align:left;overflow:hidden;max-width:200px;color:#fff}.ras-waba-header-subtitle{color:#fff;font-size:12px;margin-top:6px;text-align:left;color:var(--text-color-secondary)}.ras-waba-header-minimize-button{position:absolute;right:8px;top:8px;width:30px;height:30px;cursor:pointer;transform:rotate(45deg)}.ras-waba-header-minimize-button svg{color:var(--text-color-secondary);width:10px}.ras-waba-header-minimize-button:hover svg{color:#fff}.ras-waba-header-avatar{box-sizing:border-box;width:50px;height:50px;border-radius:9999999999px;overflow:hidden;display:flex;align-items:center;justify-content:center}.ras-waba-header-avatar.is-padded{background:white;overflow:hidden;padding:8px}.ras-waba-header-avatar img{width:100%;height:100%;object-fit:cover}.ras-waba-chat-content{background-color:#e5ddd5;padding:20px;order:2;position:relative;display:flex;flex-direction:column;height:100%;overflow-y:auto}.ras-waba-chat-content .waba-pattern{background:var(--pattern-url);opacity:.06;position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.ras-waba-chat-content-message{padding:10px;background:white;font-size:12px;position:relative;border-radius:6px;display:inline-flex;flex-direction:column;margin-right:auto}.ras-waba-chat-content-message .message-op{font-weight:500;font-size:14px;color:var(--text-color-op)}.ras-waba-chat-content-message .message-content{margin-top:8px;line-height:1.3}.ras-waba-chat-content-cta{margin-top:12px;position:relative;font-size:14px;border-radius:6px;background:white;color:var(--waba-blue);padding:12px;text-align:center}.ras-waba-chat-content-cta:visited{color:var(--waba-blue)}.ras-waba-chat-content-cta:hover{background:#f5f5f5}
`,
    h =
      '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 598.483 601.167"><defs><clipPath clipPathUnits="userSpaceOnUse" id="a"><path d="M0 1066.861h1280.244V0H0Z"/></clipPath></defs><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -554.388 1008.595)"><path d="M0 0c-5.211 2.608-30.831 15.213-35.608 16.954-4.776 1.739-8.25 2.607-11.724-2.608C-50.806 9.13-60.793-2.609-63.833-6.087c-3.039-3.477-6.079-3.914-11.29-1.304-5.211 2.608-22.002 8.11-41.906 25.865-15.491 13.818-25.95 30.882-28.989 36.099-3.04 5.217-.325 8.037 2.284 10.635 2.345 2.335 5.212 6.087 7.817 9.13 2.606 3.042 3.474 5.217 5.211 8.693 1.737 3.479.869 6.521-.435 9.129-1.302 2.608-11.724 28.259-16.066 38.694-4.23 10.16-8.526 8.784-11.725 8.945-3.036.151-6.514.183-9.987.183-3.474 0-9.12-1.304-13.897-6.52-4.776-5.217-18.238-17.825-18.238-43.473 0-25.651 18.672-50.429 21.278-53.907 2.606-3.479 36.745-56.113 89.021-78.685 12.432-5.37 22.139-8.576 29.707-10.977 12.483-3.967 23.843-3.407 32.822-2.065C-18.214-54.15 2.605-43.04 6.948-30.868 11.29-18.693 11.29-8.26 9.987-6.087 8.685-3.913 5.211-2.609 0 0m-95.082-129.825h-.07c-31.105.012-61.613 8.369-88.227 24.162l-6.33 3.757-65.606-17.21 17.511 63.966-4.121 6.559c-17.352 27.598-26.517 59.496-26.503 92.25.038 95.573 77.8 173.329 173.415 173.329 46.3-.016 89.822-18.07 122.551-50.836 32.727-32.764 50.74-76.316 50.722-122.633C78.221-52.062.46-129.825-95.082-129.825M52.446 191.049c-39.375 39.421-91.739 61.14-147.53 61.163-114.953 0-208.511-93.552-208.557-208.54-.015-36.758 9.588-72.635 27.839-104.264l-29.587-108.071 110.558 29.001c30.462-16.615 64.759-25.373 99.664-25.384H-95.081c114.941 0 208.507 93.561 208.554 208.551.021 55.726-21.652 108.124-61.027 147.544" style="fill:currentColor;fill-opacity:1;fill-rule:evenodd;stroke:none" transform="translate(736.18 489.234)"/></g></svg>',
    S =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.423 7.423"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.362 1.061L1.061 6.362"/></svg>',
    w = "rasayel-waba-widget",
    m = class {
      constructor() {
        i(this, "component");
        i(this, "title");
        i(this, "subtitle");
        i(this, "message");
        i(this, "startText");
        i(this, "phone");
        i(this, "avatar");
        i(this, "cta");
        i(this, "avatarStyle");
      }
      static create(e, t) {
        var s, o;
        if (
          (this.instance && this.destroy(),
          (this.instance = new m()),
          this.update(e),
          (s = t == null ? void 0 : t.attachToDocument) == null || s)
        ) {
          this.isDefined ||
            E((o = t == null ? void 0 : t.fixedPosition) != null ? o : !0);
          const g = document.createElement(w, { is: w });
          ((t == null ? void 0 : t.containerElm) || document.body).appendChild(
            g
          ),
            (this.instance.component = g);
        }
      }
      static get config() {
        return {
          title: this.instance.title,
          message: this.instance.message,
          phone: this.instance.phone,
          subtitle: this.instance.subtitle,
          startText: this.instance.startText,
          avatar: this.instance.avatar,
          cta: this.instance.cta,
          avatarStyle: this.instance.avatarStyle,
        };
      }
      static update(e) {
        var t;
        e != null && e.title && (this.instance.title = e.title),
          e != null && e.message && (this.instance.message = e.message),
          e != null && e.phone && (this.instance.phone = e.phone),
          e != null && e.avatar && (this.instance.avatar = e.avatar),
          e != null && e.subtitle && (this.instance.subtitle = e.subtitle),
          e != null && e.startText && (this.instance.startText = e.startText),
          e != null && e.cta && (this.instance.cta = e.cta),
          e != null &&
            e.avatarStyle &&
            (this.instance.avatarStyle = e.avatarStyle),
          (t = this.instance.component) == null || t.update();
      }
      static destroy() {
        this.instance.component &&
          document.body.removeChild(this.instance.component);
      }
      static open() {
        var e;
        (e = this.instance.component) == null || e.open();
      }
      static close() {
        var e;
        (e = this.instance.component) == null || e.close();
      }
    };
  let r = m;
  i(r, "instance"), i(r, "isDefined", !1);
  function x(a) {
    var o;
    const e = document.createElement("div");
    e.className = "ras-waba-chat-content";
    const t = a.startText ? `?text=${encodeURIComponent(a.startText)}` : "";
    (e.innerHTML = `
    <div class="waba-pattern"></div>
    <div class="ras-waba-chat-content-message">
      <p class="message-op">${a.title}</p>
      <p class="message-content">${
        ((o = a.message) == null
          ? void 0
          : o.replace(
              `
`,
              "<br>"
            )) || "Hi there \u{1F44B}"
      }</p>
    </div>

    <a href="https://wa.me/${a.phone.replace(
      "+",
      ""
    )}${t}" target="_blank" rel="noopener" class="ras-waba-chat-content-cta">${
      a.cta
    }</a>
  `),
      e.querySelector(".waba-pattern");
    const s = "https://widget.rasayel.io/whatsapp/whatsapp-pattern.png";
    return e.style.setProperty("--pattern-url", `url('${s}')`), e;
  }
  function $() {
    const a = document.createElement("button");
    return (
      (a.type = "button"),
      (a.className = "ras-waba-button"),
      (a.innerHTML = `${h}<span>Chat on WhatsApp</span>`),
      a
    );
  }
  function v(a) {
    const e = document.createElement("div");
    e.className = "ras-waba-header";
    const t = document.createElement("div");
    if (((t.className = "ras-waba-header-text"), a.avatar)) {
      const o = document.createElement("div");
      (o.innerHTML = `
      <div class="ras-waba-header-avatar${
        a.avatarStyle === "full" ? "" : " is-padded"
      }">
        <img src="${a.avatar}">
      </div>
    `),
        e.appendChild(o);
    }
    (t.innerHTML = `
    <p class="ras-waba-header-title">${a.title}</p>
  `),
      a.subtitle &&
        (t.innerHTML += `
      <p class="ras-waba-header-subtitle">${a.subtitle}</p>
    `);
    const s = document.createElement("button");
    return (
      (s.type = "button"),
      (s.className = "ras-waba-header-minimize-button"),
      (s.innerHTML = S),
      e.appendChild(t),
      e.appendChild(s),
      e
    );
  }
  function E(a) {
    const e = document.createElement("template"),
      t = $(),
      s = x(r.config),
      o = v(r.config),
      g = a ? "is-fixed" : "";
    e.innerHTML = `
    <style>${d.toString()}</style>
    <div class="ras-waba-widget-wrapper ${g}">
    <div class="ras-waba-widget-popup is-hidden">
      ${o.outerHTML}
      ${s.outerHTML}
    </div>
      ${t.outerHTML}
    </div>
  `;
    class y extends HTMLElement {
      constructor() {
        super(),
          this.attachShadow({ mode: "open" }).appendChild(
            e.content.cloneNode(!0)
          );
      }
      update() {
        var T, k, C, M;
        const n = x(r.config),
          c = v(r.config),
          p =
            (T = this.shadowRoot) == null
              ? void 0
              : T.querySelector(".ras-waba-chat-content"),
          b =
            (k = this.shadowRoot) == null
              ? void 0
              : k.querySelector(".ras-waba-header"),
          u =
            (C = this.shadowRoot) == null
              ? void 0
              : C.querySelector(".ras-waba-widget-popup");
        p == null || p.remove(),
          u == null || u.appendChild(n),
          b == null || b.remove(),
          u == null || u.appendChild(c);
        const f =
          (M = this.shadowRoot) == null
            ? void 0
            : M.querySelector(".ras-waba-header-minimize-button");
        f == null ||
          f.addEventListener("click", () => {
            this.close();
          });
      }
      open() {
        var c;
        const n =
          (c = this.shadowRoot) == null
            ? void 0
            : c.querySelector(".ras-waba-widget-popup");
        n == null || n.classList.toggle("is-hidden", !1);
      }
      close() {
        var c;
        const n =
          (c = this.shadowRoot) == null
            ? void 0
            : c.querySelector(".ras-waba-widget-popup");
        n == null || n.classList.toggle("is-hidden", !0);
      }
      connectedCallback() {
        var c;
        const n =
          (c = this.shadowRoot) == null
            ? void 0
            : c.querySelector(".ras-waba-button");
        n == null ||
          n.addEventListener("click", () => {
            var b;
            const p =
              (b = this.shadowRoot) == null
                ? void 0
                : b.querySelector(".ras-waba-widget-popup");
            p == null || p.classList.toggle("is-hidden");
          }),
          this.update();
      }
    }
    customElements.get(w) || customElements.define(w, y), (r.isDefined = !0);
  }
  return (
    (window.RasayelWabaWidget = r),
    (l.RasayelWabaWidget = r),
    Object.defineProperties(l, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    }),
    l
  );
})({});
