import{a as _,n as T,F as f,av as g,ao as R,aq as p}from"./Theme-rblUnB2V.js";class l extends _{_beforeChanged(){super._beforeChanged(),(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))&&(this._clear=!0)}_draw(){let s=this.width(),e=this.height(),t=s,i=e,c=t/Math.abs(s),d=i/Math.abs(e);if(f(t)&&f(i)){let u=Math.min(t,i)/2,r=g(this.get("cornerRadiusTL",8),u),n=g(this.get("cornerRadiusTR",8),u),o=g(this.get("cornerRadiusBR",8),u),h=g(this.get("cornerRadiusBL",8),u),b=Math.min(Math.abs(t/2),Math.abs(i/2));r=p(r,0,b),n=p(n,0,b),o=p(o,0,b),h=p(h,0,b);const a=this._display;a.moveTo(r*c,0),a.lineTo(t-n*c,0),n>0&&a.arcTo(t,0,t,n*d,n),a.lineTo(t,i-o*d),o>0&&a.arcTo(t,i,t-o*c,i,o),a.lineTo(h*c,i),h>0&&a.arcTo(0,i,0,i-h*d,h),a.lineTo(0,r*d),r>0&&a.arcTo(0,0,r*c,0,r),a.closePath()}}}Object.defineProperty(l,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"}),Object.defineProperty(l,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:_.classNames.concat([l.className])});class m extends T{_afterNew(){this._settings.themeTags=R(this._settings.themeTags,["button"]),super._afterNew(),this._settings.background||this.set("background",l.new(this._root,{themeTags:R(this._settings.themeTags,["background"])})),this.setPrivate("trustBounds",!0)}_prepareChildren(){if(super._prepareChildren(),this.isDirty("icon")){const s=this._prevSettings.icon,e=this.get("icon");e!==s&&(this._disposeProperty("icon"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.icon=e)}if(this.isDirty("label")){const s=this._prevSettings.label,e=this.get("label");e!==s&&(this._disposeProperty("label"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.label=e)}}}Object.defineProperty(m,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"}),Object.defineProperty(m,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:T.classNames.concat([m.className])});export{l as n,m as o};
