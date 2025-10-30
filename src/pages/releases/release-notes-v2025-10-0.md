---
name: "Release Notes - v2025.10.0"
title: "Release Notes - v2025.10.0"
description: "API Mock Servers, Chai.js-based Assertions with Postman Compatibility, Agent Redirect Control, Auth Improvements and more..."
image: /images/release-2025-10-0.png
meta:
  - created_at: "2025-10-30"
  - published_at: "2025-10-30"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2025.10.0" date="October 30th 2025"/>

## Release Notes - v2025.10.0

API Mock Servers, Chai.js-based Assertions with Postman Compatibility, Agent Redirect Control, Auth Improvements and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2025-10-0.png"/>

<br />

### Highlights

- API Mock Servers to simulate endpoints with custom responses, headers and status codes.
- Chai.js-powered assertions in scripts with a Postman compatibility layer for easier migration.
- Agent now supports redirect follow control for accurate testing of redirect flows.
- Improved authentication with automatic refresh token flow and stronger token checks.
- Developer experience boosts: `$randomCompanyName` predefined variable and better env fallbacks.

<br/>

<Row>
  <Added>
    <li>API Mock Servers with dynamic responses</li>
    <li>Chai.js-based assertions with Postman compatibility layer</li>
    <li>Hoppscotch Agent: control redirect follow behavior</li>
    <li>Automatic auth refresh token flow when tokens expire</li>
    <li>Configurable session cookie name</li>
    <li><code>$randomCompanyName</code> predefined variable</li>
  </Added>
  <Fixed>
    <li>Preserve PKCE and client secret during Postman collection imports</li>
    <li>Experimental scripting sandbox: preserve file uploads</li>
    <li>Improve scripting value handling and serialization in JS sandbox</li>
    <li>Avoid rapid polling while fetching teams in selector</li>
    <li>Add missing token checks to request save workflow</li>
    <li>Mock server UI improvements and legacy collections fallback ref ID</li>
    <li>Graceful shutdown and container stop when <code>stopApp</code> is called</li>
    <li>Reset onboarding state on infra config reset</li>
    <li>Prevent log injection</li>
  </Fixed>
  <Changed>
    <li>Security patch for the dependency chain</li>
    <li>CI: pin Node.js to v22 to avoid isolated-vm incompatibility</li>
    <li>CI: Agent workflow with platform jobs</li>
  </Changed>
</Row>
