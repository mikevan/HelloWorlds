import { t as require_jsx_runtime } from "./jsx-runtime-SLepceP5.js";
//#region src/names.ts
/**
* Name helpers. These have tests, but only one happy path each.
* DeepTest should flag the branches the tests never reach.
*/
function cleanName(raw) {
	let name = raw.trim();
	if (!name) return "";
	if (name === name.toUpperCase() || name === name.toLowerCase()) name = name.split(/\s+/).map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
	return name;
}
/** The initials of a full name, e.g. "Jeff Q Public" -> "J.Q.P." */
function initials(fullName) {
	const parts = fullName.split(/\s+/).filter((p) => p);
	if (parts.length === 0) return "";
	if (parts.length === 1) return parts[0].charAt(0).toUpperCase() + ".";
	return parts.map((p) => p.charAt(0).toUpperCase() + ".").join("");
}
//#endregion
//#region src/components/NameTag.tsx
var import_jsx_runtime = require_jsx_runtime();
/** A name tag: the cleaned name and its initials. Thinly tested, like names.ts. */
function NameTag({ raw }) {
	const name = cleanName(raw);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-testid": "name",
			children: name
		}),
		" ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-testid": "initials",
			children: initials(name)
		})
	] });
}
//#endregion
export { NameTag };

//# sourceMappingURL=NameTag-Oigz87UL.js.map