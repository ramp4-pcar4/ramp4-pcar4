import{m as X}from"./WGLContainer-B3ROqcyE.js";import{E as f,c as v}from"./Program-DIJ1qXSs.js";import{D as m,L as p,F as I,_ as Q,E as R,G as M,U as P}from"./enums-DDkmfb-t.js";import{e as l,c as S}from"./Texture-hxbXC8Gr.js";import{o as U}from"./ProgramTemplate-DJQwJvPA.js";import{fh as x}from"./main-CZofLY0I.js";class c{constructor(s,e,r,o,u,n,a,_,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=r,this.getResult=o,this.disjoint=u,this.beginTimeElapsed=n,this.endTimeElapsed=a,this.createTimestamp=_,this.timestampBits=T}}let i=!1;function L(t,s){if(s.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e?new c(()=>t.createQuery(),r=>{t.deleteQuery(r),i=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new c(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),i=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}class d{constructor(){this._result=!1}dispose(){this._program=x(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class b extends d{constructor(s){super(),this._rctx=s;const e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,r=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,r,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const r=new l(1);r.wrapMode=m.CLAMP_TO_EDGE,r.samplingMode=p.NEAREST;const o=new f(e,r),u=v.createVertex(e,I.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),n=new U(e,new Map([["a_pos",0]]),X,{geometry:u}),a=new l;a.samplingMode=p.LINEAR,a.wrapMode=m.CLAMP_TO_EDGE;const _=new S(e,a,E);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:h,y,width:w,height:A}=e.getViewport();e.bindFramebuffer(o),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(Q.COLOR_BUFFER_BIT),e.bindVAO(n),e.drawArrays(R.TRIANGLE_STRIP,0,4);const g=new Uint8Array(4);return o.readPixels(0,0,1,1,M.RGBA,P.UNSIGNED_BYTE,g),n.dispose(),o.dispose(),_.dispose(),e.setViewport(h,y,w,A),e.bindFramebuffer(T),g[0]!==255}}const E=new Image;E.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",E.width=5,E.height=5,E.decode();export{L as a,b as f,d as t};
