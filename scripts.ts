export function selDist(dist: distributions) {
  switch (dist) {
    case "mac":
    case "debian":
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

export async function checkCmake(){
  await (new Deno.Command("cmake", {args: ["--version"]})).output().then(({ stdout }) => {
    const [_1, major, minor] = new TextDecoder().decode(stdout).match(/cmake version (\d+)\.(\d+)\./)!;
    return (!(major ==='3' && Number(minor) > 25));
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
