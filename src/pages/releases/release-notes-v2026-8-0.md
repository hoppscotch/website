---
name: "Release Notes - v2026.8.0"
title: "Release Notes - v2026.8.0"
description: "Hoppscotch MCP Server launch, AI-agent tooling across collections and teams, secure request execution guards and profile-based tool access..."
image: /images/release-2026-8-0.png
meta:
  - created_at: "2026-08-25"
  - published_at: "2026-08-25"
author: "James George"
---

<ReleaseHeader/>
<VersionBadge version="v2026.8.0" date="August 25th 2026"/>

## Release Notes - v2026.8.0: Introducing the Hoppscotch MCP Server

Hoppscotch now ships a Model Context Protocol (MCP) server that lets AI agents work directly with your API workspace across Hoppscotch Cloud and self-hosted instances. 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="hotfix"/>

<BannerImage imageSource="/images/release-2026-8-0.png"/>

<br />

### Highlights

- **Hoppscotch MCP Server Launch:** AI hosts like Claude Code, Claude Desktop, and Cursor can now access Hoppscotch through MCP, so agents can manage API workflows from the same coding environment.

<br /><br />

- **End-to-End Workspace Operations:** The MCP surface supports reading and writing collections, requests, and environments, team management operations, collection import/export, request execution, response validation, and code/documentation generation.

<br /><br />

- **Secure Request Execution Defaults:** `execute_request` and `validate_response` include network guards that block localhost, private/internal ranges, and cloud metadata endpoints across IPv4 and IPv6, with DNS resolution checks and redirect blocking.

<br /><br />

- **Profile-Based Tool Scoping:** Choose `minimal`, `core`, `standard`, or `full` tool profiles to control capability exposure, with safe fallback behavior to `core` for unknown profile names.

<br /><br />

- **Practical Secret and Environment Controls:** Secret allowlisting by origin, response redaction for secret environment values, and `HOPPSCOTCH_STRICT_ENV` support provide tighter controls when running in untrusted repositories.

<br /><br />

- **Fast Local Onboarding:** The server runs locally via `npx` with browser-based device login, supports self-hosted deployments through `HOPPSCOTCH_SERVER_URL`, and requires Node.js 22+.

<br /><br />

This release introduces a major integration layer for AI-assisted API development while keeping control and security in your hands.

<br/>

#### 👉 [Read the full launch blog](https://hoppscotch.com/blog/introducing-hoppscotch-mcp-server)

<br/>

<Row>
  <Added>
    <li>Hoppscotch MCP server for AI host integrations</li>
    <li>Tooling for collections, requests, environments, teams, and import/export workflows</li>
    <li><code>execute_request</code> and <code>validate_response</code> MCP tools</li>
    <li><code>generate_code</code> support for cURL, JavaScript, Python, Go, and Rust</li>
    <li><code>generate_documentation</code> for Markdown API docs</li>
    <li>Tool profile modes: <code>minimal</code>, <code>core</code>, <code>standard</code>, and <code>full</code></li>
    <li>Browser-based device login flow for interactive use</li>
    <li>Self-hosted targeting via <code>HOPPSCOTCH_SERVER_URL</code></li>
  </Added>
  <Fixed>
    <li>Added outbound request guards against localhost, private/internal ranges, and metadata endpoints</li>
    <li>Blocked redirect-based target hopping for request execution tools</li>
    <li>Added DNS resolution checks before outbound execution</li>
    <li>Added secret origin allowlisting controls for request substitution</li>
    <li>Added <code>HOPPSCOTCH_STRICT_ENV</code> to ignore trust-sensitive env overrides in untrusted repositories</li>
  </Fixed>
</Row>
