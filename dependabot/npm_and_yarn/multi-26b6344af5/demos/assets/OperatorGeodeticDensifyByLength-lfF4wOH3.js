import{s as c,t as p}from"./SimpleGeometryCursor-B92kdZ15.js";import{b as h,z as a,P as m,j as _}from"./Transformation2D---fVTkp5.js";import{j as x}from"./ProjectionTransformation-O8aN6-Ef.js";import"./main-Cv8ITM2j.js";import"./preload-helper-ExcqyqRp.js";class D{getOperatorType(){return 10310}supportsCurves(){return!0}accelerateGeometry(e,t,r){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,r,n,s){return new y(e,r,n,t,-1,-1,s)}execute(e,t,r,n,s){const i=new c([e]),o=this.executeMany(i,t,r,n,s).next();return o||h("null output"),o}}class y extends p{constructor(e,t,r,n,s,i,o){super(),this.m_progressTracker=o,i>0&&a(""),r!==4&&s>0&&a(""),t||m(""),t.getCoordinateSystemType()===0&&m(""),n>0||s>0||m(""),this.m_index=-1,this.m_inputGeoms=e,this.m_spatialReference=t,this.m_curveType=r,this.m_maxLengthMeters=n,this.m_maxDeviationMeters=s,this.m_maxAngle=i}next(){{let e;for(;e=this.m_inputGeoms.next();)return _(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.geodeticDensify(e);return null}}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodeticDensify(e){return x(e,this.m_spatialReference,this.m_curveType,this.m_maxLengthMeters,this.m_maxDeviationMeters,this.m_progressTracker)}}export{D as OperatorGeodeticDensifyByLength,y as OperatorGeodeticDensifyCursor};
