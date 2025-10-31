---
name: "Release Notes - v2025.10.0"
title: "Release Notes - v2025.10.0"
description: "API Mock Servers, Postman Script Import Support, Chai.js Assertions, Agent Redirect Control, Auth Improvements and more..."
image: /images/release-2025-10-0.png
meta:
  - created_at: "2025-10-30"
  - published_at: "2025-10-30"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2025.10.0" date="October 30th 2025"/>

## Release Notes - v2025.10.0

API Mock Servers, Postman Script Import Support, Chai.js Assertions, Agent Redirect Control, Auth Improvements and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2025-10-0.png"/>

<br />

### Highlights

- API Mock Servers to simulate endpoints with custom responses, headers and status codes.
- Experimental Postman script import support during collection import (v2.0 and v2.1 formats) with user consent requirement - helps migrate existing test scripts and automation logic with known limitations for legacy patterns.
- Chai.js-powered assertions in scripts providing a robust foundation for test automation.
- Agent now supports redirect follow control for accurate testing of redirect flows.
- Improved authentication with automatic refresh token flow and stronger token checks.
- Developer experience boosts: `$randomCompanyName` predefined variable and better env fallbacks.

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2025-10-0)

<br/>

<Row>
  <Added>
    <li>API Mock Servers with dynamic responses</li>
    <li>Experimental Postman script import support (v2.0/v2.1 collections) with user consent - supports common patterns with known limitations for legacy features</li>
    <li>Chai.js-based assertions for powerful test scripting</li>
    <li>Hoppscotch Agent: control redirect follow behavior</li>
    <li>Automatic auth refresh token flow when tokens expire</li>
    <li>Configurable session cookie name</li>
    <li><code>$randomCompanyName</code> predefined variable</li>
  </Added>
  <Fixed>
    <li>Preserve PKCE and client secret during Postman collection imports</li>
    <li>Experimental scripting sandbox: preserve file uploads</li>
    <li>Avoid rapid polling while fetching teams in selector</li>
    <li>Add missing token checks to request save workflow</li>
    <li>Graceful shutdown and container stop when <code>stopApp</code> is called</li>
    <li>Reset onboarding state on infra config reset</li>
  </Fixed>
  <Changed>
    <li>Security patch for the dependency chain</li>
    <li>CI: pin Node.js to v22 to avoid isolated-vm incompatibility</li>
    <li>CI: Agent workflow with platform jobs</li>
  </Changed>
</Row>
