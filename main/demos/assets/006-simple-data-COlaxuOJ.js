const r=(s,e,t)=>{const a={id:"dataJson",name:"Tasty Eats",layerType:"data-json",rawData:'{"fields":["Resto Name","Resto Type","Stars"],"data":[["Grouse Burgers","Burger",5],["Greasy Patties","Burger",2],["Big Dirty Slice","Pizza",3]]}',nameField:"Resto-Name",fixtures:{details:{template:"Tasty-Template"}}},i={id:"table",name:"JOSM Theme Count",layerType:"data-esri-table",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/Oilsands/MapServer/5"};return t.addLayerLegend(a),t.addLayerLegend(i),{config:s,options:e}},n=s=>{s.$element.component("Tasty-Template",{props:["identifyData"],template:`
            <div style="align-items: center; justify-content: center; font-size: 14px; font-family: Arial, sans-serif;">
                <div v-html="createSection('Restaurant', 'Resto-Name')" />
                <div v-html="createSection('Type', 'Resto-Type')" />
                <div v-html="createStars('Stars')" />
            </div>
        `,methods:{createSection(e,t){var a=this.identifyData.loaded?this.identifyData.data[t]:"Loading...";return`
                <div style="display: flex; flex-direction: column; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        ${e}
                    </span>
                    <span>
                        ${a}
                    </span>
                </div>
                `},createStars(e){var t=`<img width="24" height="24" src="https://img.icons8.com/material-sharp/24/star--v1.png" alt="star--v1"/>
`.repeat(parseInt(this.identifyData.data[e])),a='<img width="24" height="24" src="https://img.icons8.com/material-sharp/24/b0b0b0/star--v1.png" alt="star--v1"/>'.repeat(5-this.identifyData.data[e]);return`
                <div style="display: flex; flex-direction: column; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        Stars
                    </span>
                    <div style="display: flex; flex-direction: row;">
                        ${t}
                        ${a}
                    </div>
                </div>
                `}}})};export{n as runPostTest,r as runPreTest};
