import { defineStore as e } from "pinia";
import { ref as t } from "vue";
//#region src/fixtures/help/store/help-store.ts
var n = e("help", () => {
	let e = t("./help/"), n = t([]);
	function r(e) {
		let t = n.value.findIndex((t) => t.id === e.id);
		if (t === -1) {
			n.value.push(e);
			return;
		}
		n.value.splice(t, 1, e);
	}
	function i(e) {
		let t = n.value.findIndex((t) => t.id === e);
		t !== -1 && n.value.splice(t, 1);
	}
	return {
		location: e,
		dynamicSections: n,
		addDynamicSection: r,
		removeDynamicSection: i
	};
});
//#endregion
export { n as t };
