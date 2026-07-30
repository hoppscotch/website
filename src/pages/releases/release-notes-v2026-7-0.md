---
name: "Release Notes - v2026.7.0"
title: "Release Notes - v2026.7.0"
description: "Stronger reliability for large team collections, safer personal workspaces, desktop stability improvements and security hardening..."
image: /images/release-2026-7-0.png
meta:
  - created_at: "2026-07-30"
  - published_at: "2026-07-30"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.7.0" date="July 30th 2026"/>

## Release Notes - v2026.7.0: Reliability, Desktop Stability, and Security Hardening

Stronger reliability for large team collections, safer personal workspaces, desktop stability improvements and security hardening. 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-7-0.png"/>

<br />

### Highlights

- **More Reliable Team Collections:** We fixed a backend issue that could lead to request loss in large team collections, helping keep shared request data intact during collaborative workflows.

<br /><br />

- **Safer Personal Workspaces:** A personal workspace data-loss issue was addressed to better protect user content in edge cases where workspace state could be overwritten unexpectedly.

<br /><br />

- **Desktop Stability Improvements:** The Linux desktop experience is cleaner with the native Edit menu bar hidden, connection timeout values are now bounded, and shortcut handling is more predictable with conflicting keyboard actions removed.

<br /><br />

- **Environment Handling Improvements:** Current environment values now fall back more predictably to the initial value, reducing unexpected jumps when switching contexts.

<br /><br />

- **Security and Dependency Hardening:** We patched vulnerable dependency versions for `xmldom`, `apiconnect-wsdl`, and `minimatch`, and pinned plugin Git dependencies by revision for more reproducible builds.

<br /><br />

This update focuses on reliability and product stability while continuing to strengthen the platform. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-7-0)

<br/>

<Row>
  <Added>
    <li>Improved reliability for large team collections</li>
    <li>Stronger safeguards for personal workspace data</li>
    <li>Desktop stability improvements for Linux and connection handling</li>
  </Added>
  <Fixed>
    <li>Prevented request loss in large team collections</li>
    <li>Fixed personal workspace possible data loss issue</li>
    <li>Hidden native Edit menu bar on Linux desktop</li>
    <li>Added bounds for desktop connection timeout values</li>
    <li>Removed conflicting Ctrl+Backspace and Ctrl+Delete shortcuts</li>
    <li>Improved environment value fallback behavior</li>
    <li>Pinned plugin Git dependencies by revision</li>
    <li>Patched vulnerable dependency chain packages</li>
  </Fixed>
</Row>
