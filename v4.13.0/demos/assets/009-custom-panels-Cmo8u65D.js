const i=(e,n,a)=>{const t={id:"Happy",name:"Happy Tester",layerType:"file-geojson",url:"../file-layers/geojson.json",colour:"#4ef542",nameField:"name"};return a.addLayerLegend(t),{config:e,options:n}},p=e=>{e.fixture.isLoaded("basemap").then(()=>{const t=e.fixture.get("basemap");t.persist=!1}),e.$element.component("WFSLayer-Custom",{props:["identifyData"],template:`
            <div>
                <span>This is an example template that contains an image.</span>
                <img src="https://i.imgur.com/WtY0tdC.gif" />
            </div>
        `}),e.fixture.add("export").then(t=>{t.persist=!1}),e.fixture.add("areas-of-interest");const n={content:{en:"<div> This is a new panel in html </div>",fr:"<div> Ceci est un nouveau panneau en HTML </div>"},id:"panel3",alertName:"new.title",i18nMap:{en:{"new.title":"English"},fr:{"new.title":"French"}}},a=e.panel.registerHTML(n);e.panel.updateHTML(a,{en:"<div> This is an updated html panel </div>",fr:"<div> Ceci est un panneau HTML mis à jour </div>"},"panel3"),e.panel.open(a)};export{p as runPostTest,i as runPreTest};
