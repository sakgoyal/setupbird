import { cancel } from "@clack/prompts";
import { checkCmake } from "../scripts.ts";
import { distributions } from "../scripts.ts";
import { attemptUpdateCmake } from "./debian/scripts.ts";

export async function checkOS(dist: distributions | symbol) {
	const bool = await checkCmake();

	switch (dist) {
		case "mac":
		case "debian": {
			if (!bool) {
				const add = confirm("Add Kitware Repo for newer Cmake version?");
				if (!add) {
					cancel("Cmake not compatible. Exiting");
					Deno.exit(0);
				}
				await attemptUpdateCmake();
			}

			break;
		}
		// sudo apt install autoconf autoconf-archive automake build-essential ccache cmake curl fonts-liberation2 git libgl1-mesa-dev nasm ninja-build pkg-config qt6-base-dev qt6-tools-dev-tools qt6-wayland tar unzip zip
		case "arch":
		case "fedora":
		case "suse":
		case "void":
		case "nix":
		case "win":
		case "indiana":
		case "haiku":
		case "android":
	}

	// run for all
	// pre-commit install
	// pre-commit install --hook-type commit-msg
	// git config --add remote.upstream.fetch '+refs/notes/*:refs/notes/*'
}
