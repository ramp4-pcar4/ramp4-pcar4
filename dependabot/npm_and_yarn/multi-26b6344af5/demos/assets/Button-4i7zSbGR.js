import{b as f,F as _,av as b,a as R,ao as T,aq as g}from"./Theme-BCo96nrN.js";class p extends f{_beforeChanged(){super._beforeChanged(),(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))&&(this._clear=!0)}_draw(){let t=this.width(),e=this.height(),s=t,i=e,c=s/Math.abs(t),l=i/Math.abs(e);if(_(s)&&_(i)){let u=Math.min(s,i)/2,r=b(this.get("cornerRadiusTL",8),u),n=b(this.get("cornerRadiusTR",8),u),o=b(this.get("cornerRadiusBR",8),u),h=b(this.get("cornerRadiusBL",8),u),d=Math.min(Math.abs(s/2),Math.abs(i/2));r=g(r,0,d),n=g(n,0,d),o=g(o,0,d),h=g(h,0,d);const a=this._display;a.moveTo(r*c,0),a.lineTo(s-n*c,0),n>0&&a.arcTo(s,0,s,n*l,n),a.lineTo(s,i-o*l),o>0&&a.arcTo(s,i,s-o*c,i,o),a.lineTo(h*c,i),h>0&&a.arcTo(0,i,0,i-h*l,h),a.lineTo(0,r*l),r>0&&a.arcTo(0,0,r*c,0,r),a.closePath()}}}Object.defineProperty(p,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"}),Object.defineProperty(p,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.classNames.concat([p.className])});class m extends R{_afterNew(){this._settings.themeTags=T(this._settings.themeTags,["button"]),super._afterNew(),this._settings.background||this.set("background",p.new(this._root,{themeTags:T(this._settings.themeTags,["background"])})),this.setPrivate("trustBounds",!0)}_prepareChildren(){if(super._prepareChildren(),this.isDirty("icon")){const t=this._prevSettings.icon,e=this.get("icon");e!==t&&(this._disposeProperty("icon"),t&&t.dispose(),e&&this.children.push(e),this._prevSettings.icon=e)}if(this.isDirty("label")){const t=this._prevSettings.label,e=this.get("label");e!==t&&(this._disposeProperty("label"),t&&t.dispose(),e&&this.children.push(e),this._prevSettings.label=e)}}}Object.defineProperty(m,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"}),Object.defineProperty(m,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:R.classNames.concat([m.className])});export{p as n,m as o};
