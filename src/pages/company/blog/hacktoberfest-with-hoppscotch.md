---
title: Hoppscotch - Blog | Hacktoberfest with Hoppscotch
---

<HomeBackNavigation to="/company/blog" />

# Hacktoberfest with Hoppscotch

### Are you looking to contribute to an open-source project in this Hacktoberfest? or want to get started with the latest technologies like VueJS & NuxtJS?

We're developing Hoppscotch, an open-source API request builder for the web, and would love to count you as a contributor to improve our components & applications.

- Web app: [hoppscotch.io](http://hoppscotch.io/)
- GitHub: [@hoppscotch](https://github.com/hoppscotch/hoppscotch)

_24k+ stars on GitHub • # 2 product of the day on Product Hunt • featured in Indie Hackers, Hacker News, Hacker noon, YouTube & open source podcast, etc._

## **Get started 🚀**

As the project’s size grew quite a bit in the past couple of months, you might ask yourself, where to get started 🤔?

**Meet the technology stack:**

1. HTML + SCSS + JavaScript
2. [NuxtJS: The Intuitive Vue Framework](https://nuxtjs.org/)
3. [TailwindCSS](https://tailwindcss.com/)

Check [How to set-up Hoppscotch development environment in 5 mins →](https://github.com/hoppscotch/hoppscotch#browser-based-development-environment)

## **1. Codegen**

At Hoppscotch, we want to help developers to go from discovering an API to experimenting with it and then to make actually using the API in their code as frictionless as possible. To support that, Hoppscotch had the ability to generate code for JavaScript (XHR and Fetch API) and cURL. We recognize that a lot of devs of different backgrounds use Hoppscotch. So recently, we modularized and separated the code generation system (only for REST currently, WS and GraphQL coming soon!) into different code generator modules which can be easily added to and extended upon.

As a result now one can easily add code generation for multiple programming languages (and/or libraries, or even programs), even if you don't have much knowledge about the rest of the Hoppscotch codebase.

### How to add your own code generator?

### Step 1: Create a code generator object

Code generator objects are placed on `[helpers/codegen/generators](https://github.com/hoppscotch/hoppscotch/tree/master/helpers/codegen/generators)` folder, they have a specified `id`, `name` (display name), and a generator function which has a parameter, `context` containing all the data about the request (refer, the existing generators to see which all data is available). The generator function should at the end return a string which is the final generated request code. The generator functions do not currently offer async support, but if you want async support, ping [@andrewbastin](https://dev.to/andrewbastin).

### Step 2: Register your new codegen object

Registration of the valid code generators is done through the `[helpers/codegen/codegen.js](https://github.com/hoppscotch/hoppscotch/blob/master/helpers/codegen/codegen.js)` file. Just import your codegen object in the file and add it to the `codegens` array.

Once that is done, your code generator will be made available in the `Generate Code` dialog as usual.

### Any specific platforms?

Although our goal is to eventually provide support for possibly all programming languages/libraries/programs. We would really love to see these platforms implemented.

[Generators](Hacktoberf%206e293/Generators%20647c8.csv)

**Example contributions:**

- [JavaScript Axios codegen](https://github.com/hoppscotch/hoppscotch/pull/1199)
- [Javascript jQuery codegen](https://github.com/hoppscotch/hoppscotch/pull/1232)
- [Go Native codegen](https://github.com/hoppscotch/hoppscotch/pull/1215)
- [NodeJS Request codegen](https://github.com/hoppscotch/hoppscotch/pull/1227)
- [NodeJS Native codegen](https://github.com/hoppscotch/hoppscotch/pull/1249)
- [PowerShell RestMethod codegen](https://github.com/hoppscotch/hoppscotch/pull/1233)
- [PHP cURL codegen](https://github.com/hoppscotch/hoppscotch/pull/1238)
- [Python Requests codegen](https://github.com/hoppscotch/hoppscotch/pull/1244)
- [Python http.client codegen](https://github.com/hoppscotch/hoppscotch/pull/1252)
- [Shell wget codegen](https://github.com/hoppscotch/hoppscotch/pull/1256)
- [C# RestSharp codegen](https://github.com/hoppscotch/hoppscotch/pull/1259)

But even if it is not on this list, we would really love it to be included. So do not be discouraged. Please do make a PR for adding support to the platform of your choice.

## **2. i18n - Internationalization**

`[View detailed instructions →](https://github.com/hoppscotch/hoppscotch/blob/master/TRANSLATIONS.md)`

## **3. Issues - Bugs and fixes**

For the purpose of this first experience, we have selected the issues tagged `[#hacktoberfest](https://github.com/hoppscotch/hoppscotch/issues?q=is%3Aissue+is%3Aopen+label%3Ahacktoberfest+sort%3Aupdated-desc)` which we're hoping to implement during this span of a month.

**Here are some issues/feature requests to start with:**

- [#1196 — Add session persistence to real-time tabs](https://github.com/hoppscotch/hoppscotch/issues/1196) — *Easy*
- [#1110 — Collapsed Editor can be resized and dragging down doesn't increase code view](https://github.com/hoppscotch/hoppscotch/issues/1110) — *Easy*
- [#392 — Configuration client certificates for SSL](https://github.com/hoppscotch/hoppscotch/issues/392) — *Medium*
- [#870 — Sync Collections with Git repo](https://github.com/hoppscotch/hoppscotch/issues/870) — *Medium*
- [#933 — Support header manipulation and pre-request scripting while establishing WebSocket connection](https://github.com/hoppscotch/hoppscotch/issues/933) — *Medium*

Check out the [issues](https://github.com/hoppscotch/hoppscotch/issues?q=is%3Aopen) tab for more 😋 or alternatively you can create new features (and probably PRs 😉) or optimize any existing functions/routines.

## **4. Tests**

If you're interested in writing tests, contribute to our test cases. We're using [Jest](https://jestjs.io/) for testing. Ping [@andrewbastin](https://dev.to/andrewbastin) for any help.

## **5. Beta testers**

If you have general feedback, [please reply here](https://github.com/hoppscotch/hoppscotch/issues/1002).

`[View detailed instructions →](https://github.com/hoppscotch/hoppscotch/issues/1002)`

**Feel free to ping us on [Discord](https://discord.gg/GAMWxmR) or [Telegram](https://t.me/hoppscotch) for any help.**

## The c**herry on the cake 🍒🎂**

Besides unlocking some karma points, you know what would be cool with your contributions 🤔? All the improvements you'll submit will not only have an effect on the components, but also they'll have an impact on the open-source dev community & be included in our live platform used by 80k+ users. Kind of cool to know that something you would develop will for sure be available in an online [live application](https://hoppscotch.io/)! isn’t it?

## **Hacktoberfest 🐙**

**Support open-source and pick a limited edition T-shirt 👕 or plant a tree! 🌱**

**Rules:** To qualify for the official limited edition Hacktoberfest shirt, you must [register](https://hacktoberfest.digitalocean.com/) and make four pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. This year, the first 70,000 participants who successfully complete the challenge will earn a Hacktoberfest tee or plant a tree.

---

Author: Liyas Thomas<br/>
Date: October 14, 2020<br/>
Tags: app, community<br/>
