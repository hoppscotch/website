---
name: "Release Notes - v2025.6.0"
title: "Release Notes - v2025.6.0"
description: "Improved Variable Scope, Keyboard Shortcuts for Desktop App, Bug Fixes and More..."
image: /images/release-2025-6-0.png
meta:
  - created_at: "2025-06-26"
  - published_at: "2025-06-26"
author: "Liyas Thomas"
---

<ReleaseHeader/>

<VersionBadge version="v2025.6.0" date="June 26th 2025"/>

## Release Notes - v2025.6.0

Improved Variable Scope, Keyboard Shortcuts for Desktop App, Bug Fixes and More! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2025-6-0.png"/>

<br />

#### Improved Variable Scope

Environment variables in Hoppscotch now support initial and current values, allowing you to set default values for your variables that can be overridden at runtime. When current values are not set, the initial values will be used.

#### Keyboard Shortcuts for Desktop App

The Hoppscotch desktop app now supports keyboard shortcuts for various actions, making it easier to navigate and use the app efficiently.

#### Minor Bug Fixes and Improvements

In addition to the major features, we've also made several minor bug fixes and improvements to enhance the overall performance and stability of Hoppscotch.

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2025-6-0)

<br/><br/>

<Row>
   <Added>
      <li>Improved variable scope with initial and current values</li>
      <li>Keyboard shortcuts for the desktop app</li>
      <li>Support for JWT tokens in Authorization</li>
      <li>Enhanced OpenAPI import functionality</li>
      <li>In-app console UI enhancements</li>
      <li>Improved handling of UTF-8 characters in request bodies</li>
   </Added>
   <Fixed>
      <li>Fixed issues with OpenAPI import in production</li>
      <li>Resolved navigation issues caused by file drops in the desktop app</li>
      <li>Corrected the display of team member count in the admin dashboard</li>
      <li>Fixed arrow key behavior in request body input</li>
      <li>Resolved issues with raw numbers in JSON filter output</li>
      <li>Ensured global environment variables are resolved in team environments</li>
      <li>Fixed the auto-unescaping of UTF-8 characters in request bodies</li>
      <li>Used initial values in runtime if current values are empty</li>
   </Fixed>
</Row>
