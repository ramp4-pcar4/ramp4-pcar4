import { H as f, aM as s } from "./main-DIdq27YS.js";
import { d as m } from "./enums-CQ3NrvMA.js";
import { e as l } from "./AttributeStore-C623XWda.js";
function d(e) {
  return s(e.frameDurations.reduce((t, n) => t + n, 0));
}
function _(e) {
  const { width: t, height: n } = e, o = e.frameDurations.reverse(), r = (i) => {
    const a = e.frameDurations.length - 1 - i;
    return e.getFrame(a);
  };
  return { frameCount: e.frameCount, duration: e.duration, frameDurations: o, getFrame: r, width: t, height: n };
}
function F(e, t) {
  const { width: n, height: o, getFrame: r } = e, i = t / e.duration, a = e.frameDurations.map((u) => s(u * i));
  return { frameCount: e.frameCount, duration: e.duration, frameDurations: a, getFrame: r, width: n, height: o };
}
function p(e, t) {
  const { width: n, height: o, getFrame: r } = e, i = e.frameDurations.slice(), a = i.shift();
  return i.unshift(s(a + t)), { frameCount: e.frameCount, duration: e.duration + t, frameDurations: i, getFrame: r, width: n, height: o };
}
function c(e, t) {
  const { width: n, height: o, getFrame: r } = e, i = e.frameDurations.slice(), a = i.pop();
  return i.push(s(a + t)), { frameCount: e.frameCount, duration: e.duration + t, frameDurations: i, getFrame: r, width: n, height: o };
}
class g {
  constructor(t, n, o, r) {
    this._animation = t, this._repeatType = o, this._onFrameData = r, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let i = 0;
    for (; n > i; ) i += this.timeToFrame, this.nextFrame();
    const a = this._animation.getFrame(this._currentFrame);
    this._onFrameData(a);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length) switch (this._repeatType) {
        case m.None:
          this._currentFrame -= this._direction;
          break;
        case m.Loop:
          this._currentFrame = 0;
          break;
        case m.Oscillate:
          this._currentFrame -= this._direction, this._direction = -1;
      }
    } else if (this._currentFrame === -1) switch (this._repeatType) {
      case m.None:
        this._currentFrame -= this._direction;
        break;
      case m.Loop:
        this._currentFrame = this._animation.frameDurations.length - 1;
        break;
      case m.Oscillate:
        this._currentFrame -= this._direction, this._direction = 1;
    }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t);
  }
}
function D(e, t, n, o) {
  let r, { repeatType: i } = t;
  if (i == null && (i = m.Loop), t.reverseAnimation === !0 && (e = _(e)), t.duration != null && (e = F(e, s(1e3 * t.duration))), t.repeatDelay != null) {
    const a = 1e3 * t.repeatDelay;
    i === m.Loop ? e = c(e, s(a)) : i === m.Oscillate && (e = p(c(e, s(a / 2)), s(a / 2)));
  }
  if (t.startTimeOffset != null) r = s(1e3 * t.startTimeOffset);
  else if (t.randomizeStartTime != null) {
    const u = t.randomizeStartSeed != null ? t.randomizeStartSeed : 82749913, h = l(n, u);
    r = s(h * d(e));
  } else r = s(0);
  return new g(e, r, i, o);
}
function C(e, t, n, o) {
  const r = t.playAnimation == null || t.playAnimation, i = D(e, t, n, o);
  let a, u = i.timeToFrame;
  function h() {
    a = r ? setTimeout(() => {
      i.nextFrame(), u = i.timeToFrame, h();
    }, u) : void 0;
  }
  return h(), f(() => r && clearTimeout(a));
}
export {
  C as f
};
//# sourceMappingURL=utils-BamnF_Ja.js.map
