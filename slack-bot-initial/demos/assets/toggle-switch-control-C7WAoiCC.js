import { iq as toRefs, bL as computed, bQ as openBlock, bW as createElementBlock, bV as withDirectives, i7 as vShow, fG as createBaseVNode, fH as normalizeClass, ir as renderSlot, fM as createCommentVNode, is as mergeProps, io as withKeys, im as withModifiers, bF as defineComponent, bI as ref, it as reactive, fL as watch, iu as toRef, bK as onBeforeUnmount, bR as createTextVNode, bS as toDisplayString, bO as createBlock, bT as unref, i8 as _export_sfc } from './main-h0RsJOaN.js';

var b={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(a,d){const n=function(a,d,n){const{value:t,modelValue:u,falseValue:i,trueValue:c,disabled:r}=toRefs(a),o=u&&void 0!==u.value?u:t,s=computed((()=>o.value===c.value)),g=e=>{d.emit("input",e),d.emit("update:modelValue",e),d.emit("change",e);},b=()=>{g(c.value);},f=()=>{g(i.value);};return -1!==[null,void 0,!1,0,"0","off"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&f(),-1!==[!0,1,"1","on"].indexOf(o.value)&&-1===[i.value,c.value].indexOf(o.value)&&b(),{externalValue:o,checked:s,update:g,check:b,uncheck:f,handleInput:e=>{g(e.target.checked?c.value:i.value);},handleClick:()=>{r.value||(s.value?f():b());}}}(a,d),t=function(a,d,n){const{trueValue:t,falseValue:u,onLabel:i,offLabel:c}=toRefs(a),r=n.checked,o=n.update;return {label:computed((()=>{let e=r.value?i.value:c.value;return e||(e="&nbsp;"),e})),toggle:()=>{o(r.value?u.value:t.value);},on:()=>{o(t.value);},off:()=>{o(u.value);}}}(a,0,{checked:n.checked,update:n.update}),u=function(a,d,n){const t=toRefs(a),u=t.disabled,i=n.checked,c=computed((()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...t.classes.value})));return {classList:computed((()=>({container:c.value.container,toggle:[c.value.toggle,u.value?i.value?c.value.toggleOnDisabled:c.value.toggleOffDisabled:i.value?c.value.toggleOn:c.value.toggleOff],handle:[c.value.handle,u.value?i.value?c.value.handleOnDisabled:c.value.handleOffDisabled:i.value?c.value.handleOn:c.value.handleOff],label:c.value.label})))}}(a,0,{checked:n.checked}),i=function(l,a,d){const{disabled:n}=toRefs(l),t=d.check,u=d.uncheck,i=d.checked;return {handleSpace:()=>{n.value||(i.value?u():t());}}}(a,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return {...n,...u,...t,...i}}};const f=["tabindex","aria-checked","aria-describedby","aria-labelledby"],h=["id","name","value","checked","disabled"],v=["innerHTML"],p=["checked"];b.render=function(e,l,b,k,y,O){return openBlock(),createElementBlock("div",mergeProps({class:e.classList.container,tabindex:b.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":b.describedby,"aria-labelledby":b.labelledby,role:"switch"},b.aria,{onKeypress:l[1]||(l[1]=withKeys(withModifiers(((...l)=>e.handleSpace&&e.handleSpace(...l)),["prevent"]),["space"]))}),[withDirectives(createBaseVNode("input",{type:"checkbox",id:b.id,name:b.name,value:b.trueValue,checked:e.checked,disabled:b.disabled},null,8,h),[[vShow,!1]]),createBaseVNode("div",{class:normalizeClass(e.classList.toggle),onClick:l[0]||(l[0]=(...l)=>e.handleClick&&e.handleClick(...l))},[createBaseVNode("span",{class:normalizeClass(e.classList.handle)},null,2),renderSlot(e.$slots,"label",{checked:e.checked,classList:e.classList},(()=>[createBaseVNode("span",{class:normalizeClass(e.classList.label),innerHTML:e.label},null,10,v)])),b.required?(openBlock(),createElementBlock("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,p)):createCommentVNode("v-if",!0)],2)],16,f)},b.__file="src/Toggle.vue";

const _hoisted_1 = { class: "flex flex-row rv-label" };
const _hoisted_2 = { class: "flex items-center" };
const _hoisted_3 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toggle-switch-control",
  props: {
    config: {
      type: Object,
      required: true
    },
    name: String,
    icon: String,
    ariaLabel: String
  },
  emits: ["toggled"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const isOn = ref(props.config.value);
    const isDisabled = ref(!!props.config.disabled);
    const toggleKey = ref(0);
    const watchers = reactive([]);
    const toggleWrapper = ref(null);
    watchers.push(
      watch(
        toRef(props, "config"),
        (nConf, oConf) => {
          isOn.value = nConf.value;
          isDisabled.value = !!nConf.disabled;
          toggleKey.value += isDisabled.value !== oConf.disabled ? 1 : 0;
        },
        { deep: true }
      ),
      watch(toggleWrapper, (newValue) => {
        if (newValue) {
          addAriaLabel();
        }
      })
    );
    const handleKeyup = () => {
      if (!isDisabled.value) {
        isOn.value = !isOn.value;
        emit("toggled", isOn.value);
      }
    };
    const addAriaLabel = () => {
      if (toggleWrapper.value) {
        const checkbox = toggleWrapper.value.querySelector('input[type="checkbox"]');
        if (checkbox && props.ariaLabel) {
          checkbox.setAttribute("aria-label", props.ariaLabel);
        }
      }
    };
    onBeforeUnmount(() => {
      watchers.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            innerHTML: __props.icon,
            class: "p-8 pl-0"
          }, null, 8, _hoisted_3),
          createTextVNode(" " + toDisplayString(__props.name), 1)
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "flex-1" }, null, -1)),
        createBaseVNode("div", {
          ref_key: "toggleWrapper",
          ref: toggleWrapper
        }, [
          (openBlock(), createBlock(unref(b), {
            onChange: _cache[0] || (_cache[0] = (value) => emit("toggled", value)),
            onKeyupCapture: [
              withKeys(withModifiers(handleKeyup, ["stop"]), ["enter"]),
              withKeys(withModifiers(handleKeyup, ["stop"]), ["space"])
            ],
            disabled: isDisabled.value,
            key: toggleKey.value,
            modelValue: isOn.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isOn.value = $event),
            classes: {
              container: "inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30",
              toggle: "flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",
              toggleOn: "bg-blue-500 border-blue-500 justify-start text-white",
              toggleOff: "bg-gray-200 border-gray-200 justify-end text-gray-700",
              toggleOnDisabled: "bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed",
              toggleOffDisabled: "bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed",
              handle: "inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all",
              handleOn: "left-full transform -translate-x-full",
              handleOff: "left-0",
              handleOnDisabled: "bg-gray-100 left-full transform -translate-x-full",
              handleOffDisabled: "bg-gray-100 left-0",
              label: "text-center w-8 border-box whitespace-nowrap select-none"
            }
          }, null, 8, ["onKeyupCapture", "disabled", "modelValue"]))
        ], 512)
      ]);
    };
  }
});

const ToggleSwitchControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e7fcd6f"]]);

export { ToggleSwitchControl as T };
