import type { ManifestIdentity } from "@wirecat/cli-base/wcat/manifest"
import type { AppIdentity } from "@wirecat/cli-core/cli"
import { VERSION } from "./version.js"

export const PACKAGE = "@wirecat/meet-cli"

export const IDENTITY: AppIdentity = {
  command: "meet",
  appName: "meet-cli",
  envPrefix: "MEET",
  description: "a new WireCat CLI, started from cli-template",
  version: VERSION,
  issues: "https://github.com/WireCatLabs/meet-cli/issues/new",
  messenger: false,
  contentLanguages: ["en", "ru"],
}

// What `wcat` and WireCat Desktop show before the tool is installed: rewrite the tagline and the sign-in texts for
// yours. The bin passes it to wcatStart before anything else loads; src/wcat.ts adds the permission keys.
export const DESKTOP: ManifestIdentity = {
  ...IDENTITY,
  docs: "https://github.com/WireCatLabs/meet-cli#readme",
  // SAMPLE: every host the CLI contacts (WC-CMD-32); src/sample/transport.ts reaches only these.
  hosts: ["comments.example.invalid"],
  tagline: "Google Meet meetings and transcripts on your computer",
  signIn: {
    gives: "Lets your agent read and change your account through meet.",
    asks: "Signing in to the service in the browser, to allow access.",
  },
}

export const SKILL = new URL("../skills/meet-cli/SKILL.md", import.meta.url)
