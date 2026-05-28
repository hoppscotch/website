---
name: "Release Notes - v2026.5.0"
title: "Release Notes - v2026.5.0"
description: "OpenAPI 3.1 Export, Proxy Configuration, Desktop Zoom, Mongolian Translation, Security Patches and more..."
image: /images/release-2026-5-0.png
meta:
  - created_at: "2026-05-28"
  - published_at: "2026-05-28"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.5.0" date="May 28th 2026"/>

## Release Notes - v2026.5.0

OpenAPI 3.1 Export, Proxy Configuration, Desktop Zoom, Mongolian Translation, Security Patches and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-5-0.png"/>

<br />

### Highlights

- **OpenAPI 3.1 Collection Export:** You can now export your Hoppscotch collections as OpenAPI 3.1 documents, enabling seamless interoperability with the latest OpenAPI tooling and workflows.

<br /><br />

- **Configurable Proxy URL:** The proxy URL can now be set via environment variables and configured directly from the admin dashboard, giving self-hosted Community Edition deployments full control over proxy routing without redeployment.

<br /><br />

- **Desktop Zoom Level Control:** The desktop app now exposes a zoom level control in settings, letting you dial in the perfect view for your screen and preference.

<br /><br />

- **Mongolian Language Support:** Hoppscotch is now available in Mongolian, continuing our commitment to making the platform accessible to developers worldwide.

<br /><br />

- **Secret Variable Leak Fix:** Secret variable values from collections and environments are no longer sent to the backend, closing a potential data exposure path and keeping your sensitive credentials client-side only.

<br /><br />

- **Security Patches:** Updated vulnerable dependencies and Docker build components as part of the v2026.5.0 security patch cycle.

<br /><br />

- **Onboarding Hardening:** Fresh-install onboarding is now hardened against mass-assignment of sensitive configuration fields.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-5-0)

<br/>

<Row>
  <Added>
    <li>OpenAPI 3.1 collection export</li>
    <li>Proxy URL configurable from environment variables and admin dashboard</li>
    <li>Zoom level control in desktop app settings</li>
    <li>Mongolian language translation</li>
  </Added>
  <Fixed>
    <li>Secret variable values from collections and environments are no longer sent to the backend</li>
    <li>Fixed REST request update failures caused by backend validation handling</li>
    <li>Proxy settings are now awaited before issuing requests</li>
    <li>Updated vulnerable dependencies and Docker build components as part of the v2026.5.0 security patch cycle</li>
    <li>Hardened fresh-install onboarding against mass-assignment of sensitive configuration fields</li>
  </Fixed>
</Row>
