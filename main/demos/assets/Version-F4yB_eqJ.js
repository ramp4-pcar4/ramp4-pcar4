import{s as e}from"./main-Bd_03BNf.js";let c=class i{constructor(t,r,s=""){this.major=t,this.minor=r,this._context=s}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}greaterEqual(t,r){return!this.lessThan(t,r)}validate(t){if(this.major!==t.major){const r=this._context&&this._context+":",s=this._context&&this._context+" ";throw new e(r+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new i(this.major,this.minor,this._context)}static parse(t,r=""){const[s,o]=t.split("."),n=/^\s*\d+\s*$/;if(!s?.match||!n.test(s))throw new e((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!o?.match||!n.test(o))throw new e((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const a=parseInt(s,10),h=parseInt(o,10);return new i(a,h,r)}};export{c as r};
