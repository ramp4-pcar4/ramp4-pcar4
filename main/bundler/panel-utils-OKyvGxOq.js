import { a as e } from "./store-De1UwLdA.js";
//#region src/fixtures/draw/panel-utils.ts
var t = (e = "details") => ({
	screen: "draw-shape-details-screen",
	props: {
		initialTab: e,
		tabRequestId: Date.now()
	}
}), n = (n, r = "details", i = {}) => {
	let a = t(r);
	if (n.panel.get("draw-shape-details")?.isOpen) {
		n.panel.show(e, a), i.focusExisting && n.panel.focus(e);
		return;
	}
	n.panel.open({
		id: e,
		...a
	});
}, r = (e, t) => [...e.orderedItems, ...e.teleported].some((e) => e.id === t);
//#endregion
export { n, r as t };
