import { t as require_jsx_runtime } from "./jsx-runtime-SLepceP5.js";
//#region src/greet.ts
/** Simple greetings. Every path here is covered by greet.test.ts. */
function hello(name = "World") {
	if (!name) name = "World";
	return `Hello, ${name}!`;
}
function helloMany(names) {
	if (names.length === 0) return hello();
	if (names.length === 1) return hello(names[0]);
	return `Hello, ${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}!`;
}
function shout(text) {
	return text.toUpperCase().replace(/!/g, "!!!");
}
//#endregion
//#region src/components/Greeting.tsx
var import_jsx_runtime = require_jsx_runtime();
/**
* The greeting component. Every path through greet.ts is reached from here,
* because in a component-testing project the page is what gets measured:
* a function a test calls in Node is not counted, so the tests go through
* the component.
*/
function Greeting({ name, names, loud = false }) {
	const text = names ? helloMany(names) : hello(name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: loud ? shout(text) : text });
}
//#endregion
export { Greeting };

//# sourceMappingURL=Greeting-CWfUjzc-.js.map