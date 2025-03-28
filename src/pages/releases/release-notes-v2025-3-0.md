---
name: "Release Notes - v2025.3.0"
title: "Release Notes - v2025.3.0"
description: "Deactivate an organization user, App improvements & more..."
image: /images/release-2025-3-0.png
meta:
  - created_at: "2025-03-28"
  - published_at: "2025-03-28"
author: "Kiran Johns"
---

<PostHeader/>

<VersionBadge version="v2025.3.0" date="March 28th 2025"/>

## Release Notes - v2025.3.0

Deactivate an organization user, app improvements, and bug fixes! 🚀

<TypeBadge type="new features"/>  
<TypeBadge type="improvements"/>  
<TypeBadge type="fixes"/>  

<BannerImage imageSource="/images/release-2025-3-0.png"/>

<br />

#### 🆕 Deactivate Organization Users  

Admins in self-hosted instances can now **deactivate organization users**. This allows you to temporarily disable access without deleting the user, making it easier to manage team membership.  

#### 🔐 Hawk Authentication Support  

We've added **Hawk Authentication** support, enabling better security for your API requests. Use Hawk to sign and authenticate your API requests efficiently.  

#### ⚡ Create New Requests Without Siphoning Data  

You can now create new requests **without carrying over data** from the previous request, making it easier to start fresh API tests without residual data.  

#### ✅ Improved JSON Validation  

Enhanced **JSON validation** ensures stricter schema checks, helping you catch errors earlier when testing API responses.  


#### 👉 [Read the entire release blog](https://hoppscotch.com/blog/hoppscotch-v2025-3-0)
 
 <br/><br/>

<Row>  
   <Added>  
      <li>Deactivate organization users</li>  
      <li>Hawk authentication support</li>  
      <li>Proxy URL configuration from env variables</li>  
      <li>Inspector AI diagnosis</li>  
      <li>Create new requests without siphoning data</li>  
      <li>Improved JSON validation</li>  
   </Added>  
   <Fixed>  
      <li>OpenAPI import errors</li>  
      <li>Agent interceptor issue</li>  
   </Fixed>  
</Row>
