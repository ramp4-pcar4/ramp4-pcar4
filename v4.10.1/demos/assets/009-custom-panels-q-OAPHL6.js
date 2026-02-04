const s=(e,i,n)=>{const t={id:"Happy",name:"Happy Tester",layerType:"file-geojson",url:"../file-layers/geojson.json",colour:"#4ef542",nameField:"name"};return n.addLayerLegend(t),{config:e,options:i}},p=(e,i)=>{e.fixture.isLoaded("basemap").then(()=>{const a=e.fixture.get("basemap");a.persist=!1}),e.$element.component("WFSLayer-Custom",{props:["identifyData"],template:`
            <div>
                <span>This is an example template that contains an image.</span>
                <img src="https://i.imgur.com/WtY0tdC.gif" />
            </div>
        `}),e.fixture.add("export").then(a=>{a.persist=!1}),e.fixture.add("areas-of-interest");const n={content:{en:"<div> This is a new panel in html </div>",fr:"<div> Ceci est un nouveau panneau en HTML </div>"},id:"panel3",alertName:"new.title",style:void 0,options:{i18n:{messages:{en:{"new.title":"English"},fr:{"new.title":"French"}}}}},t=e.panel.registerHTML(n);e.panel.updateHTML(t,{en:"<div> This is an updated html panel </div>",fr:"<div> Ceci est un panneau HTML mis à jour </div>"},"panel3"),e.panel.open(t)};export{p as runPostTest,s as runPreTest};
