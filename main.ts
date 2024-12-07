import {
  cancel,
  intro,
  isCancel,
  outro,
  select,
  spinner,

} from "@clack/prompts";
import { checkCmake } from "./scripts.ts";

console.log();
intro(" Ladybird Project Setup ");

const projectType = await select({
  message: "Pick your distribution.",
  options: [
    { value: "mac", label: "macOS" },
    { value: "debian", label: "Ubuntu/Debian" },
    { value: "arch", label: "Arch Linux/Manjaro" },
    { value: "fedora", label: "Fedora or derivatives"},
    { value: "suse", label: "openSUSE"},
    { value: "void", label: "Void Linux"},
    { value: "nix", label: "NixOS or with Nix"},
    { value: "win", label: "Others"},
    { value: "indiana", label: "Others"},
    { value: "haiku", label: "Others"},
    { value: "android", label: "Others"},
  ],
});

if (isCancel(projectType)) {
  cancel("Operation cancelled");
  Deno.exit(0);
}

const clone = confirm("is cwd inside a ladybird project / did you already clone?");
if (!clone) {
  // clone function
}

if (!checkCmake()) {
  cancel("Invalid Cmake. Please follow instructions at: https://github.com/LadybirdBrowser/ladybird/blob/master/Documentation/BuildInstructionsLadybird.md");
  Deno.exit(0);
}

const s = spinner();
s.start("Installing via npm");

s.stop("Installed via npm");

outro("You're all set!");
