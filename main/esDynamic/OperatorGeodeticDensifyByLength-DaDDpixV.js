import{s as h,t as p}from"./SimpleGeometryCursor-DSF_YyIm.js";import{b as _,z as o,P as a,j as x}from"./Transformation2D-Dqu-RtOz.js";import{j as y}from"./ProjectionTransformation-9FKZWyWP.js";class g{getOperatorType(){return 10310}supportsCurves(){return!0}accelerateGeometry(e,t,r){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,r,n,s){return new u(e,r,n,t,-1,-1,s)}execute(e,t,r,n,s){const i=new h([e]),m=this.executeMany(i,t,r,n,s).next();return m||_("null output"),m}}class u extends p{constructor(e,t,r,n,s,i,m){super(),this.m_progressTracker=m,i>0&&o(""),r!==4&&s>0&&o(""),t||a(""),t.getCoordinateSystemType()===0&&a(""),n>0||s>0||a(""),this.m_index=-1,this.m_inputGeoms=e,this.m_spatialReference=t,this.m_curveType=r,this.m_maxLengthMeters=n,this.m_maxDeviationMeters=s,this.m_maxAngle=i}next(){{let e;for(;e=this.m_inputGeoms.next();)return x(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.geodeticDensify(e);return null}}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodeticDensify(e){return y(e,this.m_spatialReference,this.m_curveType,this.m_maxLengthMeters,this.m_maxDeviationMeters,this.m_progressTracker)}}export{g as OperatorGeodeticDensifyByLength,u as OperatorGeodeticDensifyCursor};
