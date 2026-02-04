import{a as X}from"./WGLContainer-CF3AeUnM.js";import{E as f,o as v}from"./VertexArrayObject-DTkLCIKs.js";import{D as g,L as m,F as Q,_ as I,E as M,G as P,U as R}from"./enums-DBi1-Mm2.js";import{x as S}from"./FramebufferObject-DQw0QX3p.js";import{p as l,w as U}from"./Texture-DXSFJsEu.js";import{f2 as x}from"./main-DnzmeE4U.js";class d{constructor(s,e,r,a,u,E,o,_,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=r,this.getResult=a,this.disjoint=u,this.beginTimeElapsed=E,this.endTimeElapsed=o,this.createTimestamp=_,this.timestampBits=T}}let i=!1;function L(t,s){if(s.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e?new d(()=>t.createQuery(),r=>{t.deleteQuery(r),i=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new d(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),i=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}class c{constructor(){this._result=!1}dispose(){this._program=x(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class b extends c{constructor(s){super(),this._rctx=s;const e=`
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
    `;this._program=s.programCache.acquire(e,r,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const r=new l(1);r.wrapMode=g.CLAMP_TO_EDGE,r.samplingMode=m.NEAREST;const a=new S(e,r),u=f.createVertex(e,Q.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),E=new v(e,new Map([["a_pos",0]]),X,new Map([["geometry",u]])),o=new l;o.samplingMode=m.LINEAR,o.wrapMode=g.CLAMP_TO_EDGE;const _=new U(e,o,n);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:h,y:w,width:y,height:A}=e.getViewport();e.bindFramebuffer(a),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(I.COLOR),e.bindVAO(E),e.drawArrays(M.TRIANGLE_STRIP,0,4);const p=new Uint8Array(4);return a.readPixels(0,0,1,1,P.RGBA,R.UNSIGNED_BYTE,p),E.dispose(),a.dispose(),_.dispose(),e.setViewport(h,w,y,A),e.bindFramebuffer(T),p[0]!==255}}const n=new Image;n.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",n.width=5,n.height=5,n.decode();export{L as a,b as f,c as t};
