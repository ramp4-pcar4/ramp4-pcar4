import { GeometryAPI, ProjectionAPI, SharedUtilsAPI } from '@/geo/api';

import type { RampLodConfig } from '@/geo/api';

export class GeoCommonAPI {
    // useful functions

    protected DEFAULT_MERCATOR = 'DEFAULT_ESRI_World_AuxMerc_3857';
    protected DEFAULT_LAMBERT = 'DEFAULT_NRCAN_Lambert_3978';

    proj: ProjectionAPI;
    geom: GeometryAPI;
    sharedUtils: SharedUtilsAPI;

    constructor() {
        this.proj = new ProjectionAPI();
        this.geom = new GeometryAPI();
        this.sharedUtils = new SharedUtilsAPI();
    }

    defaultTileSchemas(): Array<string> {
        return [this.DEFAULT_LAMBERT, this.DEFAULT_MERCATOR];
    }

    defaultLODs(keycode: string): Array<RampLodConfig> {
        const lodGrinder = (a: Array<Array<number>>) => {
            return a.map(lod => {
                return {
                    level: lod[0],
                    resolution: lod[1],
                    scale: lod[2]
                };
            });
        };

        if (keycode === this.DEFAULT_LAMBERT) {
            const lambertLods = [
                [0, 38364.660062653464, 145000000],
                [1, 22489.62831258996, 85000000],
                [2, 13229.193125052918, 50000000],
                [3, 7937.5158750317505, 30000000],
                [4, 4630.2175937685215, 17500000],
                [5, 2645.8386250105837, 10000000],
                [6, 1587.5031750063501, 6000000],
                [7, 926.0435187537042, 3500000],
                [8, 529.1677250021168, 2000000],
                [9, 317.50063500127004, 1200000],
                [10, 185.20870375074085, 700000],
                [11, 111.12522225044451, 420000],
                [12, 66.1459656252646, 250000],
                [13, 38.36466006265346, 145000],
                [14, 22.48962831258996, 85000],
                [15, 13.229193125052918, 50000],
                [16, 7.9375158750317505, 30000],
                [17, 4.6302175937685215, 17500]
            ];

            return lodGrinder(lambertLods);
        } else if (keycode === this.DEFAULT_MERCATOR) {
            const mercatorLods = [
                [0, 19567.87924099992, 73957190.948944],
                [1, 9783.93962049996, 36978595.474472],
                [2, 4891.96981024998, 18489297.737236],
                [3, 2445.98490512499, 9244648.868618],
                [4, 1222.992452562495, 4622324.434309],
                [5, 611.4962262813797, 2311162.217155],
                [6, 305.74811314055756, 1155581.108577],
                [7, 152.87405657041106, 577790.554289],
                [8, 76.43702828507324, 288895.277144],
                [9, 38.21851414253662, 144447.638572],
                [10, 19.10925707126831, 72223.819286],
                [11, 9.554628535634155, 36111.909643],
                [12, 4.77731426794937, 18055.954822],
                [13, 2.388657133974685, 9027.977411],
                [14, 1.1943285668550503, 4513.988705],
                [15, 0.5971642835598172, 2256.994353],
                [16, 0.29858214164761665, 1128.497176],
                [17, 0.14929107082380833, 564.248588],
                [18, 0.07464553541190416, 282.124294],
                [19, 0.03732276770595208, 141.062147],
                [20, 0.01866138385297604, 70.5310735]
            ];

            return lodGrinder(mercatorLods);
        } else {
            throw new Error(
                `Unknown tile schema key passed to LOD defaulter ${keycode}`
            );
        }
    }
}
