import { af as le, hX as ue } from "./main-BEi6lHs4.js";
import { e as st, n as J } from "./enums-CQ3NrvMA.js";
import { S as he } from "./definitions-7ZaZRHRo.js";
const ce = 128e3;
let Pt = null, ee = null;
async function nr() {
  return Pt || (Pt = xe()), Pt;
}
async function xe() {
  ee = await (le("esri-csp-restrictions") ? await import("./libtess-asm-BLQB4q0q.js").then((i) => i.l) : await import("./libtess-B_ejxw3x.js").then((i) => i.l)).default({ locateFile: (i) => ue(`esri/core/libs/libtess/${i}`) });
}
function sr(s, i) {
  const o = Math.max(s.length, ce);
  return ee.triangulate(s, i, o);
}
const Et = [["(", ")"], [")", "("], ["<", ">"], [">", "<"], ["[", "]"], ["]", "["], ["{", "}"], ["}", "{"], ["«", "»"], ["»", "«"], ["‹", "›"], ["›", "‹"], ["⁽", "⁾"], ["⁾", "⁽"], ["₍", "₎"], ["₎", "₍"], ["≤", "≥"], ["≥", "≤"], ["〈", "〉"], ["〉", "〈"], ["﹙", "﹚"], ["﹚", "﹙"], ["﹛", "﹜"], ["﹜", "﹛"], ["﹝", "﹞"], ["﹞", "﹝"], ["﹤", "﹥"], ["﹥", "﹤"]], At = ["آ", "أ", "إ", "ا"], fe = ["ﻵ", "ﻷ", "ﻹ", "ﻻ"], ye = ["ﻶ", "ﻸ", "ﻺ", "ﻼ"], kt = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ی", "ئ", "ؤ"], _e = ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ﻱ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯼ", "ﺉ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺉ", "ﺅ"], Te = ["ﺎ", "ﺐ", "ﺖ", "ﺚ", "ﺞ", "ﺢ", "ﺦ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺲ", "ﺶ", "ﺺ", "ﺾ", "ﻂ", "ﻆ", "ﻊ", "ﻎ", "ﻒ", "ﻖ", "ﻚ", "ﻞ", "ﻢ", "ﻦ", "ﻪ", "ﻮ", "ﻲ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯽ", "ﺊ", "ﺆ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺊ", "ﺆ"], de = ["ﺎ", "ﺒ", "ﺘ", "ﺜ", "ﺠ", "ﺤ", "ﺨ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺴ", "ﺸ", "ﺼ", "ﻀ", "ﻄ", "ﻈ", "ﻌ", "ﻐ", "ﻔ", "ﻘ", "ﻜ", "ﻠ", "ﻤ", "ﻨ", "ﻬ", "ﻮ", "ﻴ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯿ", "ﺌ", "ﺆ", "ﹱ", "ﹲ", "ﹴ", "ﹷ", "ﹹ", "ﹻ", "ﹽ", "ﹿ", "ﺀ", "ﺌ", "ﺆ"], ge = ["ﺍ", "ﺑ", "ﺗ", "ﺛ", "ﺟ", "ﺣ", "ﺧ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺳ", "ﺷ", "ﺻ", "ﺿ", "ﻃ", "ﻇ", "ﻋ", "ﻏ", "ﻓ", "ﻗ", "ﻛ", "ﻟ", "ﻣ", "ﻧ", "ﻫ", "ﻭ", "ﻳ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯾ", "ﺋ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺋ", "ﺅ"], Qt = ["ء", "آ", "أ", "ؤ", "إ", "ا", "ة", "د", "ذ", "ر", "ز", "و", "ى"], Ae = ["ً", "ً", "ٌ", "؟", "ٍ", "؟", "َ", "َ", "ُ", "ُ", "ِ", "ِ", "ّ", "ّ", "ْ", "ْ", "ء", "آ", "آ", "أ", "أ", "ؤ", "ؤ", "إ", "إ", "ئ", "ئ", "ئ", "ئ", "ا", "ا", "ب", "ب", "ب", "ب", "ة", "ة", "ت", "ت", "ت", "ت", "ث", "ث", "ث", "ث", "ج", "ج", "ج", "ج", "ح", "ح", "ح", "ح", "خ", "خ", "خ", "خ", "د", "د", "ذ", "ذ", "ر", "ر", "ز", "ز", "س", "س", "س", "س", "ش", "ش", "ش", "ش", "ص", "ص", "ص", "ص", "ض", "ض", "ض", "ض", "ط", "ط", "ط", "ط", "ظ", "ظ", "ظ", "ظ", "ع", "ع", "ع", "ع", "غ", "غ", "غ", "غ", "ف", "ف", "ف", "ف", "ق", "ق", "ق", "ق", "ك", "ك", "ك", "ك", "ل", "ل", "ل", "ل", "م", "م", "م", "م", "ن", "ن", "ن", "ن", "ه", "ه", "ه", "ه", "و", "و", "ى", "ى", "ي", "ي", "ي", "ي", "ﻵ", "ﻶ", "ﻷ", "ﻸ", "ﻹ", "ﻺ", "ﻻ", "ﻼ", "؟", "؟", "؟"], Yt = ["ء", "ف"], Le = ["غ", "ي"], me = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], we = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], r = 0, l = 1, _ = 2, R = 3, t = 4, tt = 5, $t = 6, e = 7, O = 8, P = 9, Z = 10, d = 11, n = 12, ve = 13, Ue = 14, be = 15, Re = 16, Be = 17, f = 18, pe = ["UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS", "UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO", "UBAT_RLO", "UBAT_BN"], K = 100, Ne = [K + 0, r, r, r, r, K + 1, K + 2, K + 3, l, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, K + 4, t, t, t, r, t, r, t, r, t, t, t, r, r, t, t, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, t, t, r, r, t, t, r, r, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, r, r, r, K + 5, e, e, K + 6, K + 7], Fe = [[f, f, f, f, f, f, f, f, f, $t, tt, $t, O, tt, f, f, f, f, f, f, f, f, f, f, f, f, f, f, tt, tt, tt, $t, O, t, t, d, d, d, t, t, t, t, t, Z, P, Z, P, P, _, _, _, _, _, _, _, _, _, _, P, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, f, f, f, f, f, f, tt, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, f, P, t, d, d, d, d, t, t, t, t, r, t, t, f, t, t, d, d, _, _, t, r, t, t, t, _, r, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, r, r, r, r, r, r, r, r], [r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, r, r, r, r, r, r, r, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, r, t, t, t, t, t, t, t, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, l, n, l, n, n, l, n, n, l, n, t, t, t, t, t, t, t, t, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, t, t, t, t, t, l, l, l, l, l, t, t, t, t, t, t, t, t, t, t, t], [R, R, R, R, t, t, t, t, e, d, d, e, P, e, t, t, n, n, n, n, n, n, n, n, n, n, n, e, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, R, R, R, R, R, R, R, R, R, R, d, R, R, e, e, e, n, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, n, n, n, n, n, n, n, R, t, n, n, n, n, n, n, e, e, n, n, t, n, n, n, n, e, e, _, _, _, _, _, _, _, _, _, _, e, e, e, e, e, e], [e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, e, e, n, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, n, n, n, n, n, n, n, n, n, n, n, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, l, n, n, n, n, n, n, n, n, n, l, l, t, t, t, t, l, t, t, t, t, t], [O, O, O, O, O, O, O, O, O, O, O, f, f, f, r, l, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, O, tt, ve, Ue, be, Re, Be, P, d, d, d, d, d, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, P, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, O, f, f, f, f, f, t, t, t, t, t, f, f, f, f, f, f, _, r, t, t, _, _, _, _, _, _, Z, Z, t, t, t, r, _, _, _, _, _, _, _, _, _, _, Z, Z, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t], [r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, t, r, r, r, r, r, t, t, t, t, t, l, n, l, l, l, l, l, l, l, l, l, l, Z, l, l, l, l, l, l, l, l, l, l, l, l, l, t, l, l, l, l, l, t, l, t, l, l, t, l, l, t, l, l, l, l, l, l, l, l, l, l, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e], [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, n, n, n, n, n, n, n, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, P, t, P, t, t, P, t, t, t, t, t, t, t, t, t, d, t, t, Z, Z, t, t, t, t, t, d, d, t, t, t, t, t, e, e, e, e, e, t, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, t, t, f], [t, t, t, d, d, d, t, t, t, t, t, Z, P, Z, P, P, _, _, _, _, _, _, _, _, _, _, P, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, t, t, t, t, t, t, t, t, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, r, t, t, t, r, r, r, r, r, r, t, t, r, r, r, r, r, r, t, t, r, r, r, r, r, r, t, t, r, r, r, t, t, t, d, d, t, t, t, d, d, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t, t]];
class or {
  constructor() {
    this.inputFormat = "ILYNN", this.outputFormat = "VLNNN", this.sourceToTarget = [], this.targetToSource = [], this.levels = [];
  }
  bidiTransform(i, o, a) {
    if (this.sourceToTarget = [], this.targetToSource = [], !i) return "";
    if (Qe(this.sourceToTarget, this.targetToSource, i.length), !this.checkParameters(o, a)) return i;
    o = this.inputFormat, a = this.outputFormat;
    let u = i;
    const x = Ze, T = Ht(o.charAt(1)), y = Ht(a.charAt(1)), g = (o.charAt(0) === "I" ? "L" : o.charAt(0)) + T, A = (a.charAt(0) === "I" ? "L" : a.charAt(0)) + y, m = o.charAt(2) + a.charAt(2);
    x.defInFormat = g, x.defOutFormat = A, x.defSwap = m;
    const D = wt(i, g, A, m, x);
    let B = !1;
    return a.charAt(1) === "R" ? B = !0 : a.charAt(1) !== "C" && a.charAt(1) !== "D" || (B = this.checkContextual(D) === "rtl"), this.sourceToTarget = X, this.targetToSource = Ye(this.sourceToTarget), Mt = this.targetToSource, u = o.charAt(3) === a.charAt(3) ? D : a.charAt(3) === "S" ? Se(B, D) : ke(D, B, !0), this.sourceToTarget = X, this.targetToSource = Mt, this.levels = Dt, u;
  }
  _inputFormatSetter(i) {
    if (!Jt.test(i)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.inputFormat = i;
  }
  _outputFormatSetter(i) {
    if (!Jt.test(i)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.outputFormat = i;
  }
  checkParameters(i, o) {
    return i ? this._inputFormatSetter(i) : i = this.inputFormat, o ? this._outputFormatSetter(o) : o = this.outputFormat, i !== o;
  }
  checkContextual(i) {
    let o = Ct(i);
    if (o !== "ltr" && o !== "rtl") {
      try {
        o = document.dir.toLowerCase();
      } catch {
      }
      o !== "ltr" && o !== "rtl" && (o = "ltr");
    }
    return o;
  }
  hasBidiChar(i) {
    return Je.test(i);
  }
}
function wt(s, i, o, a, u) {
  const x = Ve(s, { inFormat: i, outFormat: o, swap: a }, u);
  if (x.inFormat === x.outFormat) return s;
  i = x.inFormat, o = x.outFormat, a = x.swap;
  const T = i.substring(0, 1), y = i.substring(1, 4), g = o.substring(0, 1), A = o.substring(1, 4);
  if (u.inFormat = i, u.outFormat = o, u.swap = a, T === "L" && o === "VLTR") {
    if (y === "LTR") return u.dir = dt, ut(s, u);
    if (y === "RTL") return u.dir = vt, ut(s, u);
  }
  if (T === "V" && g === "V") return u.dir = y === "RTL" ? vt : dt, Wt(s, u);
  if (T === "L" && o === "VRTL") return y === "LTR" ? (u.dir = dt, s = ut(s, u)) : (u.dir = vt, s = ut(s, u)), Wt(s);
  if (i === "VLTR" && o === "LLTR") return u.dir = dt, ut(s, u);
  if (T === "V" && g === "L" && y !== A) return s = Wt(s), y === "RTL" ? wt(s, "LLTR", "VLTR", a, u) : wt(s, "LRTL", "VRTL", a, u);
  if (i === "VRTL" && o === "LRTL") return wt(s, "LRTL", "VRTL", a, u);
  if (T === "L" && g === "L") {
    const m = u.swap;
    return u.swap = m.substr(0, 1) + "N", y === "RTL" ? (u.dir = vt, s = ut(s, u), u.swap = "N" + m.substr(1, 2), u.dir = dt, s = ut(s, u)) : (u.dir = dt, s = ut(s, u), u.swap = "N" + m.substr(1, 2), s = wt(s, "VLTR", "LRTL", u.swap, u)), s;
  }
  return s;
}
function Ve(s, i, o) {
  if (i.inFormat === void 0 && (i.inFormat = o.defInFormat), i.outFormat === void 0 && (i.outFormat = o.defOutFormat), i.swap === void 0 && (i.swap = o.defSwap), i.inFormat === i.outFormat) return i;
  const a = i.inFormat.substring(0, 1), u = i.outFormat.substring(0, 1);
  let x, T = i.inFormat.substring(1, 4), y = i.outFormat.substring(1, 4);
  return T.charAt(0) === "C" && (x = Ct(s), T = x === "ltr" || x === "rtl" ? x.toUpperCase() : i.inFormat.charAt(2) === "L" ? "LTR" : "RTL", i.inFormat = a + T), y.charAt(0) === "C" && (x = Ct(s), x === "rtl" ? y = "RTL" : x === "ltr" ? (x = $e(s), y = x.toUpperCase()) : y = i.outFormat.charAt(2) === "L" ? "LTR" : "RTL", i.outFormat = u + y), i;
}
function Se(s, i, o) {
  if (i.length === 0) return "";
  s === void 0 && (s = !0);
  const a = (i = String(i)).split("");
  let u = 0, x = 1, T = a.length;
  s || (u = a.length - 1, x = -1, T = 1);
  const y = Ee(a, u, x, T);
  let g = "";
  for (let A = 0; A < a.length; A++) Oe(y, y.length, A) > -1 ? (ne(Mt, A, !s, -1), X.splice(A, 1)) : g += a[A];
  return g;
}
function Ee(s, i, o, a, u) {
  let x = 0;
  const T = [];
  let y = 0;
  for (let g = i; g * o < a; g += o) if (ie(s[g]) || Ut(s[g])) {
    if (s[g] === "ل" && Ie(s, g + o, o, a)) {
      s[g] = ze(s[g + o], x === 0 ? fe : ye), g += o, qe(s, g, o, a), T[y] = g, y++, x = 0;
      continue;
    }
    const A = s[g];
    x === 1 ? s[g] = Zt(s, g + o, o, a) ? Xe(s[g]) : Xt(s[g], Te) : Zt(s, g + o, o, a) === !0 ? s[g] = Xt(s[g], ge) : s[g] = Xt(s[g], _e), Ut(A) || (x = 1), We(A) === !0 && (x = 0);
  } else x = 0;
  return T;
}
function Ct(s) {
  const i = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(s);
  return i ? i[0] <= "z" ? "ltr" : "rtl" : "";
}
function $e(s) {
  const i = s.split("");
  return i.reverse(), Ct(i.join(""));
}
function ke(s, i, o) {
  if (s.length === 0) return "";
  i === void 0 && (i = !0);
  let a = "";
  const u = (s = String(s)).split("");
  for (let x = 0; x < s.length; x++) {
    let T = !1;
    if (u[x] >= "ﹰ" && u[x] < "\uFEFF") {
      const y = s.charCodeAt(x);
      u[x] >= "ﻵ" && u[x] <= "ﻼ" ? (i ? (x > 0 && o && u[x - 1] === " " ? a = a.substring(0, a.length - 1) + "ل" : (a += "ل", T = !0), a += At[(y - 65269) / 2]) : (a += At[(y - 65269) / 2], a += "ل", x + 1 < s.length && o && u[x + 1] === " " ? x++ : T = !0), T && (ne(Mt, x, !0, 1), X.splice(x, 0, X[x]))) : a += Ae[y - 65136];
    } else a += u[x];
  }
  return a;
}
function ut(s, i) {
  const o = s.split(""), a = [];
  return re(o, a, i), Me(o, a, i), Gt(2, o, a, i), Gt(1, o, a, i), Dt = a, o.join("");
}
function re(s, i, o) {
  const a = s.length, u = o.dir ? we : me;
  let x = 0, T = -1;
  const y = [], g = [];
  o.hiLevel = o.dir, o.lastArabic = !1, o.hasUbatAl = !1, o.hasUbatB = !1, o.hasUbatS = !1;
  for (let A = 0; A < a; A++) y[A] = De(s[A]);
  for (let A = 0; A < a; A++) {
    const m = x, D = je(s, y, g, A, o);
    g[A] = D, x = u[m][D];
    const B = 240 & x;
    x &= 15;
    const U = u[x][Ge];
    if (i[A] = U, B > 0) if (B === 16) {
      for (let v = T; v < A; v++) i[v] = 1;
      T = -1;
    } else T = -1;
    if (u[x][He]) T === -1 && (T = A);
    else if (T > -1) {
      for (let v = T; v < A; v++) i[v] = U;
      T = -1;
    }
    y[A] === tt && (i[A] = 0), o.hiLevel |= U;
  }
  o.hasUbatS && Ce(y, i, a, o);
}
function Ce(s, i, o, a) {
  for (let u = 0; u < o; u++) if (s[u] === $t) {
    i[u] = a.dir;
    for (let x = u - 1; x >= 0 && s[x] === O; x--) i[x] = a.dir;
  }
}
function Me(s, i, o) {
  if (o.hiLevel !== 0 && o.swap.substr(0, 1) !== o.swap.substr(1, 2)) for (let a = 0; a < s.length; a++) i[a] === 1 && (s[a] = Pe(s[a]));
}
function De(s) {
  const i = s.charCodeAt(0), o = Ne[i >> 8];
  return o < K ? o : Fe[o - K][255 & i];
}
function Wt(s, i) {
  const o = s.split("");
  if (i) {
    const a = [];
    re(o, a, i), Dt = a;
  }
  return o.reverse(), X.reverse(), o.join("");
}
function Oe(s, i, o) {
  for (let a = 0; a < i; a++) if (s[a] === o) return a;
  return -1;
}
function ie(s) {
  for (let i = 0; i < Yt.length; i++) if (s >= Yt[i] && s <= Le[i]) return !0;
  return !1;
}
function Zt(s, i, o, a) {
  for (; i * o < a && Ut(s[i]); ) i += o;
  return !!(i * o < a && ie(s[i]));
}
function Ie(s, i, o, a) {
  for (; i * o < a && Ut(s[i]); ) i += o;
  let u = " ";
  if (!(i * o < a)) return !1;
  u = s[i];
  for (let x = 0; x < At.length; x++) if (At[x] === u) return !0;
  return !1;
}
function Gt(s, i, o, a) {
  if (a.hiLevel < s) return;
  if (s === 1 && a.dir === vt && !a.hasUbatB) return i.reverse(), void X.reverse();
  const u = i.length;
  let x, T, y, g, A, m = 0;
  for (; m < u; ) {
    if (o[m] >= s) {
      for (x = m + 1; x < u && o[x] >= s; ) x++;
      for (T = m, y = x - 1; T < y; T++, y--) g = i[T], i[T] = i[y], i[y] = g, A = X[T], X[T] = X[y], X[y] = A;
      m = x;
    }
    m++;
  }
}
function je(s, i, o, a, u) {
  const x = i[a];
  return { UBAT_L: () => (u.lastArabic = !1, r), UBAT_R: () => (u.lastArabic = !1, l), UBAT_ON: () => t, UBAT_AN: () => R, UBAT_EN: () => u.lastArabic ? R : _, UBAT_AL: () => (u.lastArabic = !0, u.hasUbatAl = !0, l), UBAT_WS: () => t, UBAT_CS: () => {
    let T, y;
    return a < 1 || a + 1 >= i.length || (T = o[a - 1]) !== _ && T !== R || (y = i[a + 1]) !== _ && y !== R ? t : (u.lastArabic && (y = R), y === T ? y : t);
  }, UBAT_ES: () => (a > 0 ? o[a - 1] : tt) === _ && a + 1 < i.length && i[a + 1] === _ ? _ : t, UBAT_ET: () => {
    if (a > 0 && o[a - 1] === _) return _;
    if (u.lastArabic) return t;
    let T = a + 1;
    const y = i.length;
    for (; T < y && i[T] === d; ) T++;
    return T < y && i[T] === _ ? _ : t;
  }, UBAT_NSM: () => {
    if (u.inFormat === "VLTR") {
      const T = i.length;
      let y = a + 1;
      for (; y < T && i[y] === n; ) y++;
      if (y < T) {
        const g = s[a].charCodeAt(0), A = g >= 1425 && g <= 2303 || g === 64286, m = i[y];
        if (A && (m === l || m === e)) return l;
      }
    }
    return a < 1 || i[a - 1] === tt ? t : o[a - 1];
  }, UBAT_B: () => (u.lastArabic = !0, u.hasUbatB = !0, u.dir), UBAT_S: () => (u.hasUbatS = !0, t), UBAT_LRE: () => (u.lastArabic = !1, t), UBAT_RLE: () => (u.lastArabic = !1, t), UBAT_LRO: () => (u.lastArabic = !1, t), UBAT_RLO: () => (u.lastArabic = !1, t), UBAT_PDF: () => (u.lastArabic = !1, t), UBAT_BN: () => t }[pe[x]]();
}
function Pe(s) {
  let i, o = 0, a = Et.length - 1;
  for (; o <= a; ) if (i = Math.floor((o + a) / 2), s < Et[i][0]) a = i - 1;
  else {
    if (!(s > Et[i][0])) return Et[i][1];
    o = i + 1;
  }
  return s;
}
function We(s) {
  for (let i = 0; i < Qt.length; i++) if (Qt[i] === s) return !0;
  return !1;
}
function Xe(s) {
  for (let i = 0; i < kt.length; i++) if (s === kt[i]) return de[i];
  return s;
}
function Xt(s, i) {
  for (let o = 0; o < kt.length; o++) if (s === kt[o]) return i[o];
  return s;
}
function Ut(s) {
  return s >= "ً" && s <= "ٕ";
}
function Ht(s) {
  return s === "L" ? "LTR" : s === "R" ? "RTL" : s === "C" ? "CLR" : s === "D" ? "CRL" : "";
}
function qe(s, i, o, a) {
  for (; i * o < a && Ut(s[i]); ) i += o;
  return i * o < a && (s[i] = " ", !0);
}
function ze(s, i) {
  for (let o = 0; o < At.length; o++) if (s === At[o]) return i[o];
  return s;
}
function Qe(s, i, o) {
  X = [], Dt = [];
  for (let a = 0; a < o; a++) s[a] = a, i[a] = a, X[a] = a;
}
function Ye(s) {
  const i = new Array(s.length);
  for (let o = 0; o < s.length; o++) i[s[o]] = o;
  return i;
}
function ne(s, i, o, a) {
  for (let u = 0; u < s.length; u++) (s[u] > i || !o && s[u] === i) && (s[u] += a);
}
let X = [], Mt = [], Dt = [];
const Ze = { dir: 0, defInFormat: "LLTR", defoutFormat: "VLTR", defSwap: "YN", inFormat: "LLTR", outFormat: "VLTR", swap: "YN", hiLevel: 0, lastArabic: !1, hasUbatAl: !1, hasBlockSep: !1, hasSegSep: !1, defOutFormat: "" }, Ge = 5, He = 6, dt = 0, vt = 1, Jt = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/, Je = /[\u0591-\u06ff\ufb1d-\ufefc]/;
function se(s, i) {
  return s.x === i.x && s.y === i.y;
}
function Ke(s) {
  if (!s) return;
  const i = s.length;
  if (i <= 1) return;
  let o = 0;
  for (let a = 1; a < i; a++) se(s[a], s[o]) || ++o === a || (s[o] = s[a]);
  s.length = o + 1;
}
function G(s, i) {
  return s.x = i.y, s.y = -i.x, s;
}
function q(s, i) {
  return s.x = -i.y, s.y = i.x, s;
}
function Kt(s, i) {
  return s.x = i.x, s.y = i.y, s;
}
function qt(s, i) {
  return s.x = -i.x, s.y = -i.y, s;
}
function zt(s) {
  return Math.sqrt(s.x * s.x + s.y * s.y);
}
function tr(s, i) {
  return s.x * i.y - s.y * i.x;
}
function te(s, i) {
  return s.x * i.x + s.y * i.y;
}
function gt(s, i, o, a) {
  return s.x = i.x * o + i.y * a, s.y = i.x * a - i.y * o, s;
}
class ar {
  constructor(i, o, a) {
    this._writeVertex = i, this._writeTriangle = o, this._canUseThinTessellation = a, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(i, o, a = this._canUseThinTessellation) {
    Ke(i), a && o.halfWidth < he && !o.offset ? this._tessellateThin(i, o) : this._tessellate(i, o);
  }
  _tessellateThin(i, o) {
    if (i.length < 2) return;
    const a = o.wrapDistance || 65535;
    let u = o.initialDistance || 0, x = !1, T = i[0].x, y = i[0].y;
    const g = i.length;
    for (let A = 1; A < g; ++A) {
      x && (x = !1, u = 0);
      let m = i[A].x, D = i[A].y, B = m - T, U = D - y, v = Math.sqrt(B * B + U * U);
      if (B /= v, U /= v, u + v > a) {
        x = !0;
        const h = (a - u) / v;
        v = a - u, m = (1 - h) * T + h * m, D = (1 - h) * y + h * D, --A;
      }
      const p = this._writeVertex(T, y, 0, 0, B, U, U, -B, 0, -1, u), b = this._writeVertex(T, y, 0, 0, B, U, -U, B, 0, 1, u);
      u += v;
      const ht = this._writeVertex(m, D, 0, 0, B, U, U, -B, 0, -1, u), c = this._writeVertex(m, D, 0, 0, B, U, -U, B, 0, 1, u);
      this._writeTriangle(p, b, ht), this._writeTriangle(b, ht, c), T = m, y = D;
    }
  }
  _tessellate(i, o) {
    const a = i[0], u = i[i.length - 1], x = se(a, u), T = x ? 3 : 2;
    if (i.length < T) return;
    const y = o.pixelCoordRatio, g = o.capType != null ? o.capType : st.BUTT, A = o.joinType != null ? o.joinType : J.MITER, m = o.miterLimit != null ? Math.min(o.miterLimit, 4) : 2, D = o.roundLimit != null ? Math.min(o.roundLimit, 1.05) : 1.05, B = o.halfWidth != null ? o.halfWidth : 2, U = !!o.textured;
    let v, p, b, ht = null;
    const c = this._prevNormal, h = this._nextNormal;
    let ft = -1, ot = -1;
    const w = this._joinNormal;
    let S, E;
    const bt = this._textureNormalLeft, Rt = this._textureNormalRight, C = this._textureNormal;
    let $ = -1, N = -1;
    const Ot = o.wrapDistance || 65535;
    let F = o.initialDistance || 0;
    const oe = this._writeVertex, ae = this._writeTriangle, k = (z, Bt, ct, I, H, et) => {
      const rt = oe(p, b, S, E, ct, I, z, Bt, H, et, F);
      return $ >= 0 && N >= 0 && rt >= 0 && ae($, N, rt), $ = N, N = rt, rt;
    };
    x && (v = i[i.length - 2], h.x = u.x - v.x, h.y = u.y - v.y, ot = zt(h), h.x /= ot, h.y /= ot);
    let yt = !1;
    for (let z = 0; z < i.length; ++z) {
      if (yt && (yt = !1, F = 0), v && (c.x = -h.x, c.y = -h.y, ft = ot, F + ft > Ot && (yt = !0)), yt) {
        const L = (Ot - F) / ft;
        ft = Ot - F, v = { x: (1 - L) * v.x + L * i[z].x, y: (1 - L) * v.y + L * i[z].y }, --z;
      } else v = i[z];
      p = v.x, b = v.y;
      const Bt = z <= 0 && !yt, ct = z === i.length - 1;
      if (Bt || (F += ft), ht = ct ? x ? i[1] : null : i[z + 1], ht ? (h.x = ht.x - p, h.y = ht.y - b, ot = zt(h), h.x /= ot, h.y /= ot) : (h.x = void 0, h.y = void 0), !x) {
        if (Bt) {
          q(w, h), S = w.x, E = w.y, g === st.SQUARE && (k(-h.y - h.x, h.x - h.y, h.x, h.y, 0, -1), k(h.y - h.x, -h.x - h.y, h.x, h.y, 0, 1)), g === st.ROUND && (k(-h.y - h.x, h.x - h.y, h.x, h.y, -1, -1), k(h.y - h.x, -h.x - h.y, h.x, h.y, -1, 1)), g !== st.ROUND && g !== st.BUTT || (k(-h.y, h.x, h.x, h.y, 0, -1), k(h.y, -h.x, h.x, h.y, 0, 1));
          continue;
        }
        if (ct) {
          G(w, c), S = w.x, E = w.y, g !== st.ROUND && g !== st.BUTT || (k(c.y, -c.x, -c.x, -c.y, 0, -1), k(-c.y, c.x, -c.x, -c.y, 0, 1)), g === st.SQUARE && (k(c.y - c.x, -c.x - c.y, -c.x, -c.y, 0, -1), k(-c.y - c.x, c.x - c.y, -c.x, -c.y, 0, 1)), g === st.ROUND && (k(c.y - c.x, -c.x - c.y, -c.x, -c.y, 1, -1), k(-c.y - c.x, c.x - c.y, -c.x, -c.y, 1, 1));
          continue;
        }
      }
      let I, H, et = -tr(c, h);
      if (Math.abs(et) < 0.01) te(c, h) > 0 ? (w.x = c.x, w.y = c.y, et = 1, I = Number.MAX_VALUE, H = !0) : (q(w, h), et = 1, I = 1, H = !1);
      else {
        w.x = (c.x + h.x) / et, w.y = (c.y + h.y) / et, I = zt(w);
        const L = (I - 1) * B * y;
        H = I > 4 || L > ft && L > ot;
      }
      S = w.x, E = w.y;
      let rt = A;
      switch (A) {
        case J.BEVEL:
          I < 1.05 && (rt = J.MITER);
          break;
        case J.ROUND:
          I < D && (rt = J.MITER);
          break;
        case J.MITER:
          I > m && (rt = J.BEVEL);
      }
      switch (rt) {
        case J.MITER:
          if (k(w.x, w.y, -c.x, -c.y, 0, -1), k(-w.x, -w.y, -c.x, -c.y, 0, 1), ct) break;
          if (U) {
            const L = yt ? 0 : F;
            $ = this._writeVertex(p, b, S, E, h.x, h.y, w.x, w.y, 0, -1, L), N = this._writeVertex(p, b, S, E, h.x, h.y, -w.x, -w.y, 0, 1, L);
          }
          break;
        case J.BEVEL: {
          const L = et < 0;
          let M, j, at, Q;
          if (L) {
            const V = $;
            $ = N, N = V, M = bt, j = Rt;
          } else M = Rt, j = bt;
          if (H) at = L ? q(this._innerPrev, c) : G(this._innerPrev, c), Q = L ? G(this._innerNext, h) : q(this._innerNext, h);
          else {
            const V = L ? qt(this._inner, w) : Kt(this._inner, w);
            at = V, Q = V;
          }
          const Y = L ? G(this._bevelStart, c) : q(this._bevelStart, c);
          k(at.x, at.y, -c.x, -c.y, M.x, M.y);
          const pt = k(Y.x, Y.y, -c.x, -c.y, j.x, j.y);
          if (ct) break;
          const it = L ? q(this._bevelEnd, h) : G(this._bevelEnd, h);
          if (H) {
            const V = this._writeVertex(p, b, S, E, -c.x, -c.y, 0, 0, 0, 0, F);
            $ = this._writeVertex(p, b, S, E, h.x, h.y, Q.x, Q.y, M.x, M.y, F), N = this._writeVertex(p, b, S, E, h.x, h.y, it.x, it.y, j.x, j.y, F), this._writeTriangle(pt, V, N);
          } else {
            if (U) {
              const V = this._bevelMiddle;
              V.x = (Y.x + it.x) / 2, V.y = (Y.y + it.y) / 2, gt(C, V, -c.x, -c.y), k(V.x, V.y, -c.x, -c.y, C.x, C.y), gt(C, V, h.x, h.y), $ = this._writeVertex(p, b, S, E, h.x, h.y, V.x, V.y, C.x, C.y, F), N = this._writeVertex(p, b, S, E, h.x, h.y, Q.x, Q.y, M.x, M.y, F);
            } else {
              const V = $;
              $ = N, N = V;
            }
            k(it.x, it.y, h.x, h.y, j.x, j.y);
          }
          if (L) {
            const V = $;
            $ = N, N = V;
          }
          break;
        }
        case J.ROUND: {
          const L = et < 0;
          let M, j;
          if (L) {
            const W = $;
            $ = N, N = W, M = bt, j = Rt;
          } else M = Rt, j = bt;
          const at = L ? qt(this._inner, w) : Kt(this._inner, w);
          let Q, Y;
          H ? (Q = L ? q(this._innerPrev, c) : G(this._innerPrev, c), Y = L ? G(this._innerNext, h) : q(this._innerNext, h)) : (Q = at, Y = at);
          const pt = L ? G(this._roundStart, c) : q(this._roundStart, c), it = L ? q(this._roundEnd, h) : G(this._roundEnd, h), V = k(Q.x, Q.y, -c.x, -c.y, M.x, M.y), Nt = k(pt.x, pt.y, -c.x, -c.y, j.x, j.y);
          if (ct) break;
          const lt = this._writeVertex(p, b, S, E, -c.x, -c.y, 0, 0, 0, 0, F);
          H || this._writeTriangle($, N, lt);
          const nt = qt(this._outer, at), xt = this._writeVertex(p, b, S, E, h.x, h.y, it.x, it.y, j.x, j.y, F);
          let _t, Tt;
          const Ft = I > 2;
          if (Ft) {
            let W;
            I !== Number.MAX_VALUE ? (nt.x /= I, nt.y /= I, W = te(c, nt), W = (I * (W * W - 1) + 1) / W) : W = -1, _t = L ? G(this._startBreak, c) : q(this._startBreak, c), _t.x += c.x * W, _t.y += c.y * W, Tt = L ? q(this._endBreak, h) : G(this._endBreak, h), Tt.x += h.x * W, Tt.y += h.y * W;
          }
          gt(C, nt, -c.x, -c.y);
          const Vt = this._writeVertex(p, b, S, E, -c.x, -c.y, nt.x, nt.y, C.x, C.y, F);
          gt(C, nt, h.x, h.y);
          const It = U ? this._writeVertex(p, b, S, E, h.x, h.y, nt.x, nt.y, C.x, C.y, F) : Vt, jt = lt, St = U ? this._writeVertex(p, b, S, E, h.x, h.y, 0, 0, 0, 0, F) : lt;
          let Lt = -1, mt = -1;
          if (Ft && (gt(C, _t, -c.x, -c.y), Lt = this._writeVertex(p, b, S, E, -c.x, -c.y, _t.x, _t.y, C.x, C.y, F), gt(C, Tt, h.x, h.y), mt = this._writeVertex(p, b, S, E, h.x, h.y, Tt.x, Tt.y, C.x, C.y, F)), U ? Ft ? (this._writeTriangle(jt, Nt, Lt), this._writeTriangle(jt, Lt, Vt), this._writeTriangle(St, It, mt), this._writeTriangle(St, mt, xt)) : (this._writeTriangle(jt, Nt, Vt), this._writeTriangle(St, It, xt)) : Ft ? (this._writeTriangle(lt, Nt, Lt), this._writeTriangle(lt, Lt, mt), this._writeTriangle(lt, mt, xt)) : (this._writeTriangle(lt, Nt, Vt), this._writeTriangle(lt, It, xt)), H ? ($ = this._writeVertex(p, b, S, E, h.x, h.y, Y.x, Y.y, M.x, M.y, F), N = xt) : ($ = U ? this._writeVertex(p, b, S, E, h.x, h.y, Y.x, Y.y, M.x, M.y, F) : V, this._writeTriangle($, St, xt), N = xt), L) {
            const W = $;
            $ = N, N = W;
          }
          break;
        }
      }
    }
  }
}
export {
  or as C,
  sr as a,
  ar as c,
  nr as i
};
//# sourceMappingURL=TurboLine-DgBmBfL3.js.map
