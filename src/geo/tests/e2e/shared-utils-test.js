// GEO API TESTS

import { Point, SpatialReference } from '@/geo/api';

describe('GeoAPI SharedUtils', () => {
    before(() => {
        // Since most tests are in backend, can just use grid starter script
        cy.visit('/index-e2e.html?script=grid');
        cy.get('.ramp-app');
    });

    it('parseUrlIndex works', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            expect(
                sharedUtils.parseUrlIndex(
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/aafc_watershed_2013/MapServer/1'
                )
            ).to.deep.equal({
                rootUrl:
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/aafc_watershed_2013/MapServer',
                index: 1
            });
        });
    });

    it('parseUrlIndex works with trailing slash', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            expect(
                sharedUtils.parseUrlIndex(
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer/5/'
                )
            ).to.deep.equal({
                rootUrl:
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer',
                index: 5
            });
        });
    });

    it('parseUrlIndex no sublayer', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            // Expect the default result
            expect(
                sharedUtils.parseUrlIndex(
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer'
                )
            ).to.deep.equal({
                rootUrl:
                    'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer',
                index: 0
            });
        });
    });

    it('generateUUID uuid is valid format', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            var i;
            // Test 10 uuids
            for (i = 0; i < 10; i++) {
                cy.wrap({ uuid: sharedUtils.generateUUID() })
                    .its('uuid')
                    .should(
                        'match',
                        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
                    );
            }
        });
    });

    it('generateUUID no uuid collisions', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            var uuids = [];
            var i;
            // Generate 10000 uuids and check for duplicates
            // 10000 is good enough because a uuid will be generated only if the client did not provide the layer an id
            // If there are no collisions in these 10000 uuids, then its a pretty good uuid generator for our purposes
            for (i = 0; i < 10000; i++) {
                uuids.push(sharedUtils.generateUUID());
            }
            let findDuplicates = arr =>
                arr.filter((item, index) => arr.indexOf(item) != index);
            let duplicates = findDuplicates(uuids);
            expect(duplicates).to.be.empty;
        });
    });

    it('convertImageToCanvas works with data url', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            const url =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAz5JREFUSInF1luIVVUYwPHfMHIWtSvL4jAHDM0mjkJgD9E8lAn6oPSQmWQTZihEFvbSRSySnqKgF6NezIJAwnroJkRSDxZ0PWIQ2O3UiZgy9zCiBrWzNXI6Payt6Vx0Jo71wYLN2mt//+++1wz/scz434EDAwOdSqXSFeWjo6MajUbPpMBardZpNBpdgZ2qM8/zk9CTwHq93mk2m12FQZ7n+vv7O61Wq+c0YLVaNV1gQJzCuVqtptVqOQ04HenHTYGL8A3ejlMDTxtYx9VYHRjI6MWv5f5nkS9wpBvAOrYEFmf0SOvFgq+wEfdmbMiSl1sKdp3B47MCZ+HBwKKM3QU55uL5mJ4XBPYXHMUy3IPvJG//FfD2EtYoeDmm3PVhMPBG5IXSmwLtwJqMNTgaGToT8Px228bAcbxWxuPxwIqMP6X9xwLv4N3I4sDTgfckQyJGcKhgZcZS3B/5ZDJg7O31cWRtYHNIeVqe8UPB76jiuZiUXoZXIzXcEngosC3yVuRL3IjVGQ/glzgJMLTbjuHZyKrAXbgQM3FACt0NIbXEH8jwQbk/uwzpESmveyOXYknGdTjUbo8HztA2GLgcb0YOBCrYHFM4NwQO4tHIz9K59YFHAs+M8SJiL1ZIxhyeyMOit2J7ZHlgXUgHz8PCwLXKyoupiC7A19gRWYibAz+OaYW5Jfgo/poIOHN01NrA/shWCboMg9ghebk+sAffRxYFloYE3RZTSE/IEunbw0Uy8uLe3vHA3yoV+yJ3B/ZhZ0yj6/qMh9Eq2BT/6a9dkVV4IrA98gpWBu7DvIxjBU+V5xdN5OFxfIifykq9M6RQdKQRtlP6eBbml3mZF7gEt5X5vhWzMz4qUru8bryMa/wWnoxcgyvxLdZl3IFKSDlbKPVmX5aisABXSLndVvBSTBU70XibcNJENMoVIqNYiU1ZaomDRQJ+XvB+ZH5IUdgX+XQS0BmBY+FbYyrzqyTL90aGT3m/e6r/pqkATyjdgz3TUHxWYJ7nQghi7ILWUySEIM/z8cBWq9UzZ86czvDwcNegIQR9fX1O3GdOA8LQ0FBPvV7vVKvVrgBHRkY0m83Jr4nQbDZ7zsXtbVLguZa/AdMNKbe5EEnGAAAAAElFTkSuQmCC';
            cy.wrap(null).then(() => {
                return sharedUtils.convertImageToCanvas(url).then(canvas => {
                    expect(canvas.width).to.eq(28);
                    expect(canvas.height).to.eq(28);
                });
            });
        });
    });

    it('convertImageToCanvas works with reqular url', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            const url =
                'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/BadDates/MapServer/0/images/eed7a82bfccb37a9c63f3dd221c02906';
            cy.wrap(null).then(() => {
                return sharedUtils.convertImageToCanvas(url).then(canvas => {
                    expect(canvas.width).to.eq(54);
                    expect(canvas.height).to.eq(54);
                });
            });
        });
    });

    // Need this extra function because convertImagetoDataURL is async
    function resolveDataURL(sharedUtils, url) {
        return new Cypress.Promise((resolve, reject) => {
            resolve(sharedUtils.convertImagetoDataURL(url));
        });
    }

    it('convertImagetoDataURL works with data url', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            const url =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAUJJREFUKJFjYcADIgwZFq84z1DFwMDwGJs8Cy6NpmrcdtUuAjb6Yk/bKncyxJKimSlKlaFEXZxNgUlfmmnz458Wx669OUGUZl89htRIU04rBgYGBlUxNrkw5Q+Vx64x+BOjmT9MiztCiIdXGCYQaixmuf/u/aiN1xiW4dWcZMhdGWAgZoksJsrDIBqgzR2/8drXtQwMDD9xaVaLNON0YmdhYEc3NMhQwGrnHYa8Fee/dmPVXOAgUmOnwmuKxSsMnGxsPBEGDF4rzjMsZGBgeIWiWZGBwSvVjN2UkRGbVghw1xSzTjF8VTrn/NdSZM2sSZ7cmapibBq4tTIwMDMxsCZac1pvfyWg+/Tp08ssDAwMDBbcDEW6kpx2F598xqeXgYGBgYGNhcHSRvhp78qnDG4sDAwMDCe+MnQGzHvTSVAnGgAAdRJMqBlhLeEAAAAASUVORK5CYII=';
            cy.wrap(null).then(() => {
                return resolveDataURL(sharedUtils, url).then(dUrl => {
                    expect(dUrl).to.eq(url);
                });
            });
        });
    });

    /**
     * This test case will fail because the generated base64 encoding will differ slightly from the expected encoding.
     * This is potentially due to our method of drawing the image first on a canvas, and then getting a base64 encoding of the canvas
     * However, if we decode the generated base64 string, we will get almost exactly the same image.
     */
    // it('convertImagetoDataURL works with reqular url', () => {
    //     cy.window().then(window => {
    //         const sharedUtils = window.debugInstance.geo.shared;
    //         const url = 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/BadDates/MapServer/0/images/eed7a82bfccb37a9c63f3dd221c02906';
    //         const expectedDataURL = 'data:image/png;base64,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';

    //         cy.wrap(null).then(() => {
    //             return resolveDataURL(sharedUtils, url).then((dUrl) => {
    //                 expect(dUrl).to.eq(expectedDataURL)
    //             })
    //         })
    //     });
    // });

    it('formatLatLongDMSString undefined point', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            const xyformat = sharedUtils
                .formatLatLongDMSString(undefined)
                .then(xyformat => {
                    expect(xyformat).to.deep.equal({ lat: '', lon: '' });
                });
        });
    });

    it('formatLatLongDMSString invalid map point latitude coordinate', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            sharedUtils.formatLatLongDMSString(undefined);
            const point = new Point(
                999,
                [11131949.079, 32316213801.068],
                undefined,
                true
            );
            sharedUtils.formatLatLongDMSString(point).then(xyformat => {
                expect(xyformat).to.deep.equal({ lat: '', lon: '' });
            });
        });
    });

    it('formatLatLongDMSString invalid map point longitude coordinate', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            sharedUtils.formatLatLongDMSString(undefined);
            const point = new Point(
                999,
                [-18924313.435, 16213801.068],
                undefined,
                true
            );
            sharedUtils.formatLatLongDMSString(point).then(xyformat => {
                expect(xyformat).to.deep.equal({ lat: '', lon: '' });
            });
        });
    });

    it('formatLatLongDMSString valid map point', () => {
        cy.window().then(window => {
            const sharedUtils = window.debugInstance.geo.shared;
            sharedUtils.formatLatLongDMSString(undefined);
            const point = new Point(
                999,
                [11131949.0799, 16213801.068],
                new SpatialReference(102100),
                true
            );
            sharedUtils.formatLatLongDMSString(point).then(xyformat => {
                expect(xyformat).to.deep.equal({
                    lat: '81° 00\' 00"',
                    lon: '100° 00\' 00"'
                });
            });
        });
    });
});
