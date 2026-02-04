import{_ as f,N as w}from"./enums-DQOO6RKE.js";import{m as y}from"./FramebufferObject-PAs-KxsF.js";import{h as m,A as v}from"./Texture-QG2FbAaW.js";import{h as X}from"./VertexArrayObject-BIicG6PV.js";import{a as Q,r as A}from"./WGLContainer-R94Qjndk.js";import{r as I}from"./VertexBuffer-D3Ex4_V0.js";import{eE as U}from"./main-CtmwM019.js";class g{constructor(i,e,r,n,_,E,o,u,T){this.createQuery=i,this.deleteQuery=e,this.resultAvailable=r,this.getResult=n,this.disjoint=_,this.beginTimeElapsed=E,this.endTimeElapsed=o,this.createTimestamp=u,this.timestampBits=T}}let s=!1;function B(t,i){if(i.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e?new g(()=>t.createQuery(),r=>{t.deleteQuery(r),s=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{s||(s=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),s=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new g(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),s=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{s||(s=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),s=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}class b{constructor(){this._result=!1}dispose(){this._program=U(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class D extends b{constructor(i){super(),this._rctx=i;const e=`
    precision highp float;

    attribute vec2 position;
    varying vec2 v_uv;

    void main() {
      v_uv = position;
      gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
    }
    `,r=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=i.programCache.acquire(e,r,Q)}dispose(){super.dispose()}_test(i){const e=this._rctx;if(!e.gl)return i.dispose(),!0;const r=new m(1);r.wrapMode=33071,r.samplingMode=9728;const n=new y(e,r),_=new I(e,A,new Uint16Array([0,0,1,0,0,1,1,1])),E=new X(e,_),o=new m;o.samplingMode=9729,o.wrapMode=33071;const u=new v(e,o,a);e.useProgram(i),e.bindTexture(u,0),i.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:d,y:p,width:h,height:c}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(16384),e.bindVAO(E),e.drawArrays(f.TRIANGLE_STRIP,0,4);const l=new Uint8Array(4);return n.readPixels(0,0,1,1,6408,w.UNSIGNED_BYTE,l),E.dispose(),n.dispose(),u.dispose(),e.setViewport(d,p,h,c),e.bindFramebuffer(T),l[0]!==255}}const a=new Image;a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,a.decode();export{B as a,b as t,D as u};
