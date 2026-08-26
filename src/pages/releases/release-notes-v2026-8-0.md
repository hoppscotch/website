---
name: "Release Notes - v2026.8.0"
title: "Release Notes - v2026.8.0"
description: "A unified REST and GraphQL workspace, data-driven collection runs, more predictable cookie handling, desktop fixes, and a companion Hoppscotch MCP Server..."
image: /images/release-2026-8-0.png
meta:
  - created_at: "2026-08-25"
  - published_at: "2026-08-25"
author: "James George"
---

<ReleaseHeader/>
<VersionBadge version="v2026.8.0" date="August 25th 2026"/>

## Release Notes - v2026.8.0: A Unified API Workspace, Data-Driven Runs, and the MCP Server

Hoppscotch v2026.8.0 unifies REST and GraphQL into a single workspace, makes the collection runner data-driven, improves cookie handling, ships a couple more fixes, and launches a companion Hoppscotch MCP Server. 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-8-0.png"/>

<br />

### Highlights

- **Unified REST and GraphQL Workspace:** REST and GraphQL now live in a single tabbed workspace, so you can create, switch between, and manage both from the same place. GraphQL gets first-class tooling alongside REST — a schema explorer and search, inline docs, headers and authorization, variables, and revamped subscriptions with a live subscription log — and a single collection can mix REST and GraphQL queries and mutations in one run.

<br /><br />

- **Data-Driven Collection Runs:** Attach a CSV or JSON data file to a collection run and the runner executes the collection once per row, exposing each row's columns as iteration variables that take priority for that iteration and are never saved. You can also run a subset of requests and export the run results as JSON.

<br /><br />

- **More Predictable Cookie Handling:** A new response cookie sent without a `Domain` attribute now stays with the exact host that set it instead of leaking to its subdomains, and when an older Hoppscotch Agent does not return structured cookie data, the app falls back to reading the `Set-Cookie` response header so cookies are still captured.

<br /><br />

- **More Fixes:** On desktop, an instance with a failed sign-in no longer strands you without a way back — the app checks for a recorded sign-in failure before resuming and opens the instance switcher instead. The connection-timeout dropdown also has a fixed width now.

<br /><br />

- **Hoppscotch MCP Server Launch:** A companion Model Context Protocol (MCP) server lets AI hosts like Claude Code, Claude Desktop, and Cursor work with your Hoppscotch workspace — reading and writing collections, requests, and environments, executing and validating requests, and generating code and documentation — with network guards and profile-based tool scoping to keep control in your hands.

<br /><br />

This release brings some of our most requested capabilities together while continuing to strengthen the platform. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-8-0)

<br/>

#### 👉 [Read the Hoppscotch MCP Server announcement](https://hoppscotch.com/blog/introducing-hoppscotch-mcp-server)

<br/>

<Row>
  <Added>
    <li>Unified REST and GraphQL workspace with protocol switching and shared tabs</li>
    <li>Full GraphQL tooling: schema explorer and search, docs, headers/auth, variables, and revamped subscriptions with a live subscription log</li>
    <li>Mixed REST and GraphQL collection runs with inherited scripts and auth</li>
    <li>Data-driven collection runs via CSV/JSON datasets with per-iteration variables</li>
    <li>Request-subset selection and JSON export for collection runs</li>
    <li>Hoppscotch MCP server for AI host integrations across collections, requests, environments, teams, and import/export</li>
    <li><code>execute_request</code> and <code>validate_response</code> MCP tools with outbound network guards</li>
    <li><code>generate_code</code> and <code>generate_documentation</code> MCP tools</li>
    <li>Tool profile modes: <code>minimal</code>, <code>core</code>, <code>standard</code>, and <code>full</code></li>
    <li>Browser-based device login and self-hosted targeting via <code>HOPPSCOTCH_SERVER_URL</code></li>
  </Added>
  <Fixed>
    <li>Response cookies without a <code>Domain</code> attribute are now treated as host-only instead of leaking to subdomains</li>
    <li>Fell back to the <code>Set-Cookie</code> response header when an older Hoppscotch Agent does not return structured cookie data</li>
    <li>Desktop now checks for a recorded sign-in failure before resuming an instance and opens the instance switcher instead of stranding you</li>
    <li>Capped the connection-timeout dropdown to a fixed width</li>
  </Fixed>
</Row>
