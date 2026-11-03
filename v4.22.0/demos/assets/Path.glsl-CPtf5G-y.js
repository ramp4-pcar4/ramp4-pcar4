import{Yi as e,Zi as t,qi as n,ys as r}from"./store-5v4E3u6t.js";import{q as i}from"./BufferView-yIGy-hoJ.js";import{Bt as a,D as o,E as s,F as c,H as l,I as u,L as d,T as f,W as p,g as m,lt as h,ut as g,v as ee,w as _}from"./TriangleTechniqueConfiguration-COBrPyyo.js";import{g as te,i as v,o as y}from"./SceneLighting-BG1CT_Zr.js";import{d as b,f as x,i as S,l as C,u as w}from"./oitResolution.glsl-BFyFSgo3.js";import{t as T}from"./ShaderBuilder-B5bKgQt6.js";import{m as ne}from"./Emissions.glsl-DSgdcDhg.js";import{n as re}from"./InterleavedLayout-DvNvUjog.js";import{n as E,r as ie}from"./VertexColor.glsl-DRxd_ZMj.js";import{t as ae}from"./TextureBackedBufferLayout-fK32mQ9M.js";import{F as oe,O as D,P as O,a as k,c as A,d as j,l as M,o as N,s as P,u as F}from"./RealisticTree.glsl-CUdjj7PY.js";import{r as I}from"./ScreenSpaceRayMarching.glsl-C4k2YPnS.js";import{n as L,t as R}from"./Texture2DUintDrawUniform-BoG3UYUW.js";import{t as z}from"./NormalUtils.glsl-CUyxFrGj.js";function B({sourceIndex:e,subdivision:t,type:n,capSide:r}){return i(e>=0&&e<=15,`invalid sourceIndex`),i(t>=0&&t<=7,`invalid subdivision`),(e&15)<<0|(t&7)<<4|(n&7)<<7|(r&1)<<10}function V(e){return{sourceIndex:e>>0&15,subdivision:e>>4&7,type:e>>7&7,capSide:e>>10&1}}var H={0:{indexCount:20,poleCount:1,vertexCount:10},1:{indexCount:8,poleCount:4,vertexCount:8}},U=class{constructor(e){this.type=e,this.vertices=[],this.normals=[],this.indices=[],this.poles=[],this.poleIndices=[]}addVertex(e,n){return this.vertices.push(t(e)),this.normals.push(t(n)),this.vertices.length-1}addPole(e,n=null){return this.poles.push({position:t(e),normal:n?t(n):null}),this.poles.length-1}addSegment(e,t=null){this.indices.push(e.v0),this.indices.push(e.v1),t&&(this.poleIndices.push(t.v0),this.poleIndices.push(t.v1))}get numSegments(){return this.indices.length/2}translate(e,t){for(let n of this.vertices)n[0]+=e,n[1]+=t;for(let n of this.poles)n.position[0]+=e,n.position[1]+=t}get usedMemory(){return this.vertices.length*r(this.vertices[0])*2+r(this.indices)}},W={top:[0,-.5],bottom:[0,.5]};function G(e){let t=.5,r=new U(0),i={v0:0,v1:0};r.addPole(n(0,0));for(let e=0;e<10;++e){let i=2*e*Math.PI/10,a=Math.cos(i),o=Math.sin(i),s=n(a*t,o*t),c=n(a,o);r.addVertex(s,c)}for(let e=0;e<9;++e){let t={v0:e,v1:e+1};r.addSegment(t,i)}if(r.addSegment({v0:9,v1:0},i),e!==`center`){let t=W[e];r.translate(t[0],t[1])}return r}var K={center:G(`center`),top:G(`top`),bottom:G(`bottom`)},q={center:J(`center`),top:J(`top`),bottom:J(`bottom`)};function J(e){let t=new U(1),r=n(.5*-1,.5*-1),i=n(.5*1,.5*-1),a=n(.5*1,.5*1),o=n(.5*-1,.5*1),s=n(0,-1),c=n(1,0),l=n(0,1),u=n(-1,0);if(t.addPole(n(0,.5*1),l),t.addPole(n(0,.5*1)),t.addPole(n(0,.5*-1)),t.addPole(n(0,.5*-1),s),t.addVertex(r,s),t.addVertex(i,s),t.addSegment({v0:0,v1:1},{v0:3,v1:3}),t.addVertex(i,c),t.addVertex(a,c),t.addSegment({v0:2,v1:3},{v0:2,v1:1}),t.addVertex(a,l),t.addVertex(o,l),t.addSegment({v0:4,v1:5},{v0:0,v1:0}),t.addVertex(o,u),t.addVertex(r,u),t.addSegment({v0:6,v1:7},{v0:1,v1:2}),e!==`center`){let n=W[e];t.translate(n[0],n[1])}return t}function se(){let e=re().u32(`pathVertexInfo`,{integer:!0}).u32(`textureElementIndex`,{integer:!0});return a()&&e.vec4u8(`olidColor`),e.freeze()}function Y(e){let t=[{type:`vec3f32`,name:`position`},{type:`vec2snorm16`,name:`profileRight`},{type:`vec2snorm16`,name:`profileUp`}];return e.upVectorAlignment===1&&t.push({type:`vec2snorm16`,name:`pathRotationUp`}),e.hasVVSize&&t.push({type:`f32`,name:`sizeFeatureAttribute`}),e.hasVVColor&&t.push({type:`f32`,name:`colorFeatureAttribute`}),e.hasVVOpacity&&t.push({type:`f32`,name:`opacityFeatureAttribute`}),t.push({type:`f16`,name:`pathMaxStretchDistance`},{type:`snorm16`,name:`profileRotation`}),new ae(t)}function ce(e){let{attributes:t,vertex:n}=e;t.add(`pathVertexInfo`,`uint`),n.constants.add(`pathVertexInfoSourceIndexShift`,`uint`,0),n.constants.add(`pathVertexInfoSourceIndexMask`,`uint`,15),n.constants.add(`pathVertexInfoSubdivisionShift`,`uint`,4),n.constants.add(`pathVertexInfoSubdivisionMask`,`uint`,7),n.constants.add(`pathVertexInfoTypeShift`,`uint`,7),n.constants.add(`pathVertexInfoTypeMask`,`uint`,7),n.constants.add(`pathVertexInfoCapSideShift`,`uint`,10),n.constants.add(`pathVertexInfoCapSideMask`,`uint`,1),n.constants.add(`pathVertexCapSideEnd`,`uint`,1),n.code.add(x`struct PathVertexInfo {
uint sourceIndex;
float subdivision;
uint type;
bool isEnd;
};
PathVertexInfo decodePathVertexInfo() {
uint sourceIndex = (pathVertexInfo >> pathVertexInfoSourceIndexShift) & pathVertexInfoSourceIndexMask;
uint subdivision = (pathVertexInfo >> pathVertexInfoSubdivisionShift) & pathVertexInfoSubdivisionMask;
uint type = (pathVertexInfo >> pathVertexInfoTypeShift) & pathVertexInfoTypeMask;
uint capSide = (pathVertexInfo >> pathVertexInfoCapSideShift) & pathVertexInfoCapSideMask;
return PathVertexInfo(
sourceIndex,
float(subdivision),
type,
capSide == pathVertexCapSideEnd
);
}`)}var X=class extends w{constructor(e,t,n,r){super(e,`vec2`,1,(t,i,a)=>t.setUniform2fv(e,n(i,a),r),t)}},Z=class extends w{constructor(e,t,n){super(e,`int`,1,(t,r,i)=>t.setUniform1iv(e,n(r,i)),t)}};function le(e,t){let{vertex:n}=e;e.include(ce);let r=t.upVectorAlignment===1;n.uniforms.add(new C(`angleCutoff`,e=>e.cutoffAngle)),n.code.add(x`float reciprocalClamped(float value) {
float signValue = value < 0.0 ? -1.0 : 1.0;
return signValue / max(abs(value), 1e-6);
}`),r?n.code.add(x`vec2 applyMiterStretch(vec2 vertex, float rotationAngle, vec2 rotationRight) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
mat2 miterStretch = mat2(
1. + (k - 1.) * rotationRight.x * rotationRight.x,
(k - 1.) * rotationRight.x * rotationRight.y,
(k - 1.) * rotationRight.x * rotationRight.y,
1. + (k - 1.) * rotationRight.y * rotationRight.y
);
return miterStretch * vertex;
}`):n.code.add(x`vec2 applyMiterStretch(vec2 vertex, float rotationAngle) {
if (rotationAngle == 0.0) {
return vertex;
}
float k = reciprocalClamped(cos(0.5 * rotationAngle));
return vec2(k, 1.) * vertex;
}`);let{vertexCount:i,indexCount:a,poleCount:o}=H[t.pathProfileType];switch(n.uniforms.add(new X(`pathProfileVertices`,i,e=>e.profile.vertices.flat()),new X(`pathProfileNormals`,i,e=>e.profile.normals.flat())),n.code.add(x`mat3 mat3FromRotation(float angle, vec3 axis) {
float x = axis.x;
float y = axis.y;
float z = axis.z;
float s = sin(angle);
float c = cos(angle);
float t = 1.0 - c;
return mat3(
x * x * t + c,      y * x * t + z * s,  z * x * t - y * s,
x * y * t - z * s,  y * y * t + c,      z * y * t + x * s,
x * z * t + y * s,  y * z * t - x * s,  z * z * t + c
);
}`),n.code.add(x`struct ExtrusionFrame {
vec3 up;
vec3 right;
};
struct ExtrudedVertex {
ExtrusionFrame frame;
vec2 profileVertex;
vec2 profileNormal;
vec2 rotationRight;
float maxDistance;
float capPositionOffset;
float capNormalOffset;
bool isCap;
};`),r?n.code.add(x`vec2 getPathRotationRight(ExtrusionFrame frame) {
vec3 rotationUp = getFrameRotationUp();
float a = dot(rotationUp, frame.up);
float b = dot(rotationUp, frame.right);
vec3 vertex = normalize(frame.up * -b + frame.right * a);
return vec2(dot(vertex, frame.right), dot(vertex, frame.up));
}`):n.code.add(x`vec2 getPathRotationRight() {
return vec2(1., 0.);
}`),n.constants.add(`pathVertexTypeJoin`,`uint`,0),n.uniforms.add(new te(`numJoinSubdivisions`,e=>e.numJoinSubdivisions)),n.code.add(x`
      ExtrudedVertex evaluateJoinVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
        vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
        vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];
        float profileRotation = getProfileRotation();
        vec2 rotationRight = getPathRotationRight(${b(r,x`frame`)});
        bool isBevel = abs(profileRotation) >= angleCutoff;

        // determine if the current profile vertex is on the inside or outside of the rotationAxis
        // this determines if the geometry folds inwards or is bend outwards
        float b = dot(profileVertex, rotationRight);
        bool isBend = b * profileRotation >= 0.;

        bool isBevelBend = isBevel && isBend;

        if (isBevelBend) {
          float k = vertexInfo.subdivision;
          // rotate half rotation angle backwards to where the rotation starts
          // and then rotate a couple of times depending on the current subdivision segment
          float bendRotation = -profileRotation * 0.5 + (k * profileRotation) / float(numJoinSubdivisions);
          if (bendRotation != 0.) {
            vec3 rotationUp = getFrameRotationUp();
            mat3 transform  = mat3FromRotation(bendRotation, rotationUp);
            ${b(r,x`frame.up = normalize(transform * frame.up);`)}
            frame.right = normalize(transform * frame.right);
          }
        } else {
          profileVertex = applyMiterStretch(
            profileVertex,
            profileRotation${b(r,x`,
              rotationRight`)}
          );
        }

        rotationRight = isBend ? vec2(0.) : rotationRight;
        float maxDistance = isBend
        ? 0.
        : getMaxStretchDistance();

        return ExtrudedVertex(
          frame,
          profileVertex,
          profileNormal,
          rotationRight,
          maxDistance,
          0.,
          0.,
          false
        );
      }
    `),n.constants.add(`pathVertexTypeCapConnectingProfile`,`uint`,1),n.code.add(x`
        ExtrudedVertex evaluateConnectingVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
          vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
          vec2 profileNormal = pathProfileNormals[vertexInfo.sourceIndex];

          float profilePlaneVertexOffset = ${b(t.pathCapType===2,x`vertexInfo.isEnd ? 0.5 : -0.5`,x`0.`)};

          return ExtrudedVertex(
            frame,
            profileVertex,
            profileNormal,
            vec2(0.),
            0.,
            profilePlaneVertexOffset,
            0.,
            true
          );
        }
    `),t.pathCapType){case 1:case 2:n.constants.add(`pathVertexTypeFlatCapProfile`,`uint`,2),n.code.add(x`
          ExtrudedVertex evaluateFlatCapVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
            vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
            bool isEnd = vertexInfo.isEnd;
            float normalOffset = isEnd ? 1. : -1.;
            float profilePlaneOffset = ${b(t.pathCapType===2,x`isEnd ? 0.5 : -0.5`,x`0.0`)};
            vec2 normal = vec2(0.);

            return ExtrudedVertex(
              frame,
              profileVertex,
              normal,
              vec2(0.),
              0.,
              profilePlaneOffset,
              normalOffset,
              true
            );
          }
        `);break;case 3:n.uniforms.add(new u(`pathProfilePoles`,o,e=>e.profile.poles.flatMap(({position:e,normal:t})=>[...e,...t??ue]),{supportsNaN:!0}),new Z(`pathProfilePoleIndices`,a,e=>e.profile.poleIndices)),n.include(y),n.constants.add(`pathVertexTypeRoundCapPole`,`uint`,3),n.constants.add(`pathVertexTypeRoundCapInnerProfile`,`uint`,4),n.constants.add(`pathNumRoundCapExtrusionSubdivisions`,`float`,3),n.code.add(x`ExtrudedVertex evaluateRoundCapPoleVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
vec4 pole = pathProfilePoles[vertexInfo.sourceIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 poleNormal = hasPoleNormal ? pole.zw : vec2(0.);
float normalOffset = hasPoleNormal ? 0. : capSign;
return ExtrudedVertex(
frame,
polePosition,
poleNormal,
vec2(0.),
0.,
offsetScale,
normalOffset,
true
);
}
ExtrudedVertex evaluateRoundCapInnerVertex(PathVertexInfo vertexInfo, ExtrusionFrame frame) {
bool isEnd = vertexInfo.isEnd;
float capSign = isEnd ? 1. : -1.;
float offsetScale = capSign * 0.5;
float subdivision = vertexInfo.subdivision;
float t = 1. - (subdivision + 1.) / pathNumRoundCapExtrusionSubdivisions;
float theta = t * HALF_PI;
float t1 = sin(theta);
float t2 = cos(theta);
int poleIndex = pathProfilePoleIndices[vertexInfo.sourceIndex];
vec4 pole = pathProfilePoles[poleIndex];
vec2 polePosition = pole.xy;
bool hasPoleNormal = !isnan(pole.z);
vec2 profileVertex = pathProfileVertices[vertexInfo.sourceIndex];
vec2 poleOffsetScaled = (profileVertex - polePosition) * t1;
vec2 poleVertex = poleOffsetScaled + polePosition;
vec2 profileNormal = hasPoleNormal
? pole.zw
: normalize(poleOffsetScaled) * t1;
float normalOffset = hasPoleNormal ? 0. : capSign * t2;
return ExtrudedVertex(
frame,
poleVertex,
profileNormal,
vec2(0.),
0.,
offsetScale * t2,
normalOffset,
true
);
}`)}n.code.add(x`
      ExtrudedVertex evaluateVertex() {
        PathVertexInfo vertexInfo = decodePathVertexInfo();
        ExtrusionFrame frame = ExtrusionFrame(
          getFrameUp(),
          getFrameRight()
        );

        switch (vertexInfo.type) {
          case pathVertexTypeJoin:
            return evaluateJoinVertex(vertexInfo, frame);

          case pathVertexTypeCapConnectingProfile:
            return evaluateConnectingVertex(vertexInfo, frame);

          ${b(t.pathCapType===1||t.pathCapType===2,x`
          case pathVertexTypeFlatCapProfile:
            return evaluateFlatCapVertex(vertexInfo, frame);
          `)}

          ${b(t.pathCapType===3,x`
          case pathVertexTypeRoundCapPole:
            return evaluateRoundCapPoleVertex(vertexInfo, frame);
          case pathVertexTypeRoundCapInnerProfile:
            return evaluateRoundCapInnerVertex(vertexInfo, frame);
          `)}

          default:
            return ExtrudedVertex(
              frame,
              vec2(0.),
              vec2(0.),
              vec2(0.),
              0.,
              0.,
              0.,
              false
            );
        }
      }
    `)}var ue=e(NaN,NaN),Q=8;function de(e,t){let{attributes:n,vertex:r}=e,i=new R(`componentTextureBuffer`,e=>e.textureBuffer),a=new L({layout:Y(t),itemIndexAttribute:`textureElementIndex`,bufferUniform:i});e.include(a.TextureBackedBufferModule,t),n.add(`textureElementIndex`,`uint`),r.uniforms.add(new v(`size`,e=>e.size));let{hasVVSize:o,hasVVColor:s,hasVVOpacity:l}=t;o?(r.uniforms.add(new S(`vvSizeMinSize`,e=>e.vvSize.minSize),new S(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new S(`vvSizeOffset`,e=>e.vvSize.offset),new S(`vvSizeFactor`,e=>e.vvSize.factor),new S(`vvSizeFallback`,e=>e.vvSize.fallback)),r.code.add(x`
    vec2 getSize() {
      float value = ${a.getTextureAttribute(`sizeFeatureAttribute`)};
      if (isnan(value)) {
        return vvSizeFallback.xz;
      }
      return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):r.code.add(x`vec2 getSize(){
return size;
}`),l?(r.constants.add(`vvOpacityNumber`,`int`,Q),r.uniforms.add(new c(`vvOpacityValues`,Q,e=>e.vvOpacity.values),new c(`vvOpacityOpacities`,Q,e=>e.vvOpacity.opacityValues),new C(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),r.code.add(x`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = ${a.getTextureAttribute(`opacityFeatureAttribute`)};

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${b(s,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):r.code.add(x`vec4 applyOpacity(vec4 color){
return color;
}`),s?(r.constants.add(`vvColorNumber`,`int`,g),r.uniforms.add(new c(`vvColorValues`,g,e=>e.vvColor.values),new u(`vvColorColors`,g,e=>e.vvColor.colors),new d(`vvColorFallback`,e=>e.vvColor.fallback)),r.code.add(x`
    vec4 getColor() {
      float value = ${a.getTextureAttribute(`colorFeatureAttribute`)};
      if (isnan(value)) {
        return applyOpacity(vvColorFallback);
      }

      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):r.code.add(x`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),r.include(y),r.code.add(x`
    vec3 decompressAxis(vec2 axis) {
      float z = 1.0 - abs(axis.x) - abs(axis.y);
      return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
    }

    float getProfileRotation() {
      return PI * ${a.getTextureAttribute(`profileRotation`)};
    }

    float getMaxStretchDistance() {
      return ${a.getTextureAttribute(`pathMaxStretchDistance`)};
    }

    vec3 getFrameUp() {
      return decompressAxis(${a.getTextureAttribute(`profileUp`)});
    }

    vec3 getFrameRight() {
      return decompressAxis(${a.getTextureAttribute(`profileRight`)});
    }
  `),r.code.add(x`
    vec3 getFrameRotationUp() {
      return ${t.upVectorAlignment===1?x`decompressAxis(${a.getTextureAttribute(`pathRotationUp`)})`:x`getFrameUp()`};
    }
  `),e.include(le,t),r.code.add(x`
  vec3 calculateVPos(ExtrudedVertex extrudedVertex) {
    vec2 size = getSize();
    vec3 origin = ${a.getTextureAttribute(`position`)};
    vec3 right = extrudedVertex.frame.right;
    vec3 up = extrudedVertex.frame.up;
    vec2 profileVertex = extrudedVertex.profileVertex * size;
    `),r.code.add(x`if(extrudedVertex.isCap) {
float positionOffsetAlongProfilePlaneNormal = extrudedVertex.capPositionOffset * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = extrudedVertex.rotationRight;
float maxDistance = extrudedVertex.maxDistance;`),r.code.add(x`rotationRight *= size;
rotationRight = length(rotationRight) > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),r.code.add(x`vec3 localNormal(ExtrudedVertex extrudedVertex) {
vec3 right = extrudedVertex.frame.right;
vec3 up = extrudedVertex.frame.up;
vec2 profileNormal = extrudedVertex.profileNormal;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(extrudedVertex.isCap) {
vec3 forward = cross(up, right);
normal += forward * extrudedVertex.capNormalOffset;
}
return normal;
}`)}var fe=class extends h{constructor(){super(...arguments),this.numJoinSubdivisions=1,this.size=n(1,1),this.cutoffAngle=0,this.profile=K.center}};function $(e){let t=new T,{vertex:n,fragment:r,varyings:i}=t;s(n,e),i.add(`vpos`,`vec3`,{invariant:!0}),t.include(de,e);let{output:a,spherical:c,pbrMode:u,snowCover:d,offsetBackfaces:h}=e;switch((ne(a)||a===11)&&(t.include(E),t.include(N,e),t.include(l,e),h&&(f(n,e),t.include(oe)),i.add(`vnormal`,`vec3`),i.add(`vcolor`,`vec4`),n.main.add(x`
      ExtrudedVertex extrudedVertex = evaluateVertex();
      vpos = calculateVPos(extrudedVertex);
      vnormal = normalize(localNormal(extrudedVertex));
      gl_Position = transformPosition(proj, view, vpos);
      ${b(h,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vnormal, cameraPosition);`)}

      forwardObjectAndLayerIdColor();
      vcolor = getColor();
      forwardLinearDepthToReadShadowMap();`)),a){case 0:case 1:case 2:t.include(P,e),r.include(j,e),r.include(D,e),t.include(A,e),r.include(p,e),t.include(m,e),f(r,e),F(r),M(r),r.uniforms.add(n.uniforms.get(`localOrigin`),new S(`ambient`,e=>e.ambient),new S(`diffuse`,e=>e.diffuse),new C(`opacity`,e=>e.opacity)),r.include(_),r.include(k,e),I(r),r.main.add(x`
        discardBySlice(vpos);

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${c?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${b(d,x`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${b(u===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${b(d,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${u===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${b(d,`, snow`)});`);break;case 3:t.include(E),n.main.add(x`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(p,e),r.main.add(x`discardBySlice(vpos);`);break;case 5:case 6:case 7:case 8:t.include(E),ie(t),i.add(`depth`,`float`),n.main.add(x`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),t.fragment.include(p,e),t.include(O,e),r.main.add(x`discardBySlice(vpos);
outputDepth(depth);`);break;case 11:t.fragment.include(p,e),r.main.add(x`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 4:t.include(E),t.include(z,e),o(n),i.add(`vnormal`,`vec3`),n.main.add(x`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
vnormal = normalize((viewNormal * vec4(localNormal(extrudedVertex), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(p,e),r.main.add(x`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 10:t.include(E),t.include(z,e),i.add(`vnormal`,`vec3`),n.main.add(x`ExtrudedVertex extrudedVertex = evaluateVertex();
vpos = calculateVPos(extrudedVertex);
gl_Position = transformPosition(proj, view, vpos);`),t.fragment.include(p,e),t.include(ee,e),r.main.add(x`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return t}var pe=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:`Module`}));export{se as a,B as c,Y as i,V as l,pe as n,K as o,fe as r,q as s,$ as t};