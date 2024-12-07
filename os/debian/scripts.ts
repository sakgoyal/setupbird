import { exec } from "node:child_process"; // try to use Deno.Command instead for security

export async function attemptUpdateCmake() {
	// Add Kitware GPG signing key
	exec("wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | sudo tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null");
	// Optional: Verify the GPG key manually
	// Use the key to authorize an entry for apt.kitware.com in apt sources list
	exec('echo "deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/kitware.list');

	// # Update apt package list and install cmake
  exec('sudo apt update -y && sudo apt install cmake -y');
}

export async function cpp23compilerUbuntu() {
	/**
	 * # Add LLVM GPG signing key
  sudo wget -O /usr/share/keyrings/llvm-snapshot.gpg.key https://apt.llvm.org/llvm-snapshot.gpg.key

  # Optional: Verify the GPG key manually

  # Use the key to authorize an entry for apt.llvm.org in apt sources list
  echo "deb [signed-by=/usr/share/keyrings/llvm-snapshot.gpg.key] https://apt.llvm.org/$(lsb_release -sc)/ llvm-toolchain-$(lsb_release -sc)-18 main" | sudo tee -a /etc/apt/sources.list.d/llvm.list

  # Update apt package list and install clang and associated packages
  sudo apt update -y && sudo apt install clang-18 clangd-18 clang-format-18 clang-tidy-18 lld-18 -y
	 */
}

export async function pulseaudio() {
	// sudo apt install libpulse-dev
}
