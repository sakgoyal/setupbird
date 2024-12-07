export async function checkCmake() {
	return await (new Deno.Command("cmake", { args: ["--version"] })).output().then(({ stdout }) => {
		const [_1, major, minor] = new TextDecoder().decode(stdout).match(/cmake version (\d+)\.(\d+)\./)!;
		return (!(major === "3" && Number(minor) > 25));
	});
}

export function getLB() {
	return new Deno.Command("git", {
		args: [
			"clone",
      "https://github.com/LadybirdBrowser/ladybird.git",
      "--depth",
      "10" // dont clone the entire history for speed
		],
	});
}

export type distributions =
	| "mac"
	| "debian"
	| "arch"
	| "fedora"
	| "suse"
	| "void"
	| "nix"
	| "win"
	| "indiana"
	| "haiku"
	| "android";
