//#region src/utils/keyboard.ts
function e(e, t) {
	let n = e;
	return ["Tab", "Escape"].includes(n.key) && !!t?.matches(":focus") && !t?.hasAttribute("aria-activedescendant");
}
//#endregion
export { e as t };
