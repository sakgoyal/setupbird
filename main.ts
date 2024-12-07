import { cancel, intro, isCancel, outro, select, spinner } from "@clack/prompts";
import { checkCmake } from "./scripts.ts";
import { checkOS } from "./os/check.ts";

console.log();
intro(" Ladybird Project Setup ");

const dist = await select({
	message: "Pick your distribution.",
	options: [
		{ value: "mac", label: "macOS" },
		{ value: "debian", label: "Ubuntu/Debian" },
		{ value: "arch", label: "Arch Linux/Manjaro" },
		{ value: "fedora", label: "Fedora or derivatives" },
		{ value: "suse", label: "openSUSE" },
		{ value: "void", label: "Void Linux" },
		{ value: "nix", label: "NixOS or with Nix" },
		{ value: "win", label: "Others" },
		{ value: "indiana", label: "Others" },
		{ value: "haiku", label: "Others" },
		{ value: "android", label: "Others" },
	],
});

if (isCancel(dist)) {
	cancel("Operation cancelled");
	Deno.exit(0);
}

const s = spinner();
s.start("Checking OS");
await checkOS(dist);
s.stop("Checking OS Finished");

const clone = confirm("is cwd inside a ladybird project / did you already clone?");
if (!clone) {
	// clone function
}

const ide = await select({
	message: "Pick your IDE.",
	options: [
		{ value: "vscode", label: "VS Code" },
		{ value: "clion", label: "Clion" },
		{ value: "emacs", label: "emacs" },
		{ value: "helix", label: "Helix" },
		{ value: "nvim", label: "nvim" },
		{ value: "qt", label: "Qt Creator" },
		{ value: "vim", label: "vim" },
		{ value: "astudio", label: "Android Studio" },
		{ value: "others", label: "Others/Manual"},
	],
});

// const compiler = await select({
// 	message: "Pick your Compiler.",
// 	options: [
// 		{ value: "clang", label: "Clang" },
// 		{ value: "gcc", label: "GCC", hint: "Will be deprecated when swift" },
// 		{ value: "clang-cl", label: "Clang (Windows)", hint : "has lots of issues" },
// 		{ value: "swift", label: "" },
// 	],
// });

if (isCancel(ide)) {
	cancel("Operation cancelled");
	Deno.exit(0);
}

outro("You're all set!");
console.log();
