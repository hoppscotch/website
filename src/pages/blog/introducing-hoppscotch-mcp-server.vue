<script setup lang="ts">
useHead({
  title: "Introducing the Hoppscotch MCP Server",
  meta: [
    {
      property: "og:title",
      content: "Introducing the Hoppscotch MCP Server",
    },
    {
      name: "twitter:title",
      content: "Introducing the Hoppscotch MCP Server",
    },
    {
      name: "description",
      content:
        "The Hoppscotch Model Context Protocol (MCP) server lets an AI agent in a host such as Claude Code or Codex drive your collections, requests, environments, and teams, run real API requests, and generate code, on Cloud or self-hosted.",
    },
    {
      property: "og:description",
      content:
        "The Hoppscotch Model Context Protocol (MCP) server lets an AI agent in a host such as Claude Code or Codex drive your collections, requests, environments, and teams, run real API requests, and generate code, on Cloud or self-hosted.",
    },
    {
      name: "twitter:description",
      content:
        "The Hoppscotch Model Context Protocol (MCP) server lets an AI agent in a host such as Claude Code or Codex drive your collections, requests, environments, and teams, run real API requests, and generate code, on Cloud or self-hosted.",
    },
    {
      property: "og:image",
      content:
        "https://hoppscotch.com/images/blog-introducing-hoppscotch-mcp-server.png",
    },
    {
      name: "twitter:image",
      content:
        "https://hoppscotch.com/images/blog-introducing-hoppscotch-mcp-server.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/introducing-hoppscotch-mcp-server",
    },
  ],
})
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <PostHeader />
        <!-- Blog content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex w-full max-w-xl flex-col">
            <div class="mb-4 text-white">
              <ul class="-m-1 flex flex-wrap items-center text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center text-zinc-100/50 transition"
                    >Product,</span
                  >
                </li>
                <li class="m-1">
                  <span
                    class="inline-flex text-center text-zinc-100/50 transition"
                    >Engineering</span
                  >
                </li>
                <span class="mx-2 text-zinc-400/20">|</span>
                <span class="text-zinc-200/20">August 28, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Introducing the Hoppscotch MCP Server
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 shrink-0 rounded-full"
                src="/images/blog-author-03.jpeg"
                width="32"
                height="32"
                alt="James George"
              />
              <div class="text-sm">
                <span class="text-zinc-200/80 transition"> James George </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="h-full w-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-mcp-server.png"
              width="352"
              height="198"
              alt="Hoppscotch MCP Server"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch now ships a Model Context Protocol server. Model
              Context Protocol, or MCP, is an open standard that lets an AI
              agent call external tools through a defined interface. With the
              server running, a host, meaning the app you run the agent in, such
              as Claude Code, Codex, or Claude Desktop, can work with Hoppscotch
              directly, from the same window where you write code.
            </p>
            <p class="mb-8 mt-4">
              The server turns your Hoppscotch workspace into tools an agent can
              call. It reads and writes collections, requests, and environments,
              manages teams, runs real HTTP requests, and generates code and
              documentation. It works against Hoppscotch Cloud and any
              self-hosted instance, and when a tool needs your account it signs
              you in through the browser by default, so there is no token to
              copy to get started.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Requests and responses</h4>
            <p class="mb-8 mt-4">
              Ask the agent to run a request and it calls the
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >execute_request</code
              >
              tool. A prompt like "Execute a GET request to
              https://api.github.com/users/octocat and show me the response"
              sends the call and returns the response into the conversation. The
              tool takes a raw method and URL, applies any authentication you
              pass, and substitutes environment variables into the URL, the
              header values, and the body. Substitution reads your personal
              environments, on Hoppscotch Cloud and self-hosted alike. A team
              environment id is rejected as not found.
            </p>
            <p class="mb-8 mt-4">
              Because it is a real HTTP client, it ships with a guard. By
              default it refuses targets that resolve to the machine's own
              address, private and internal network ranges, and the cloud
              metadata endpoint that holds instance credentials, across both
              IPv4 and IPv6. It resolves the name first and stops if resolution
              fails, connects only to the address it already checked, and does
              not follow redirects, so a permitted host cannot bounce the
              request to an internal one. The guard still reaches any public
              host, using the request's own credentials, so treat what the agent
              sends like a shell command.
            </p>
            <p class="mb-8 mt-4">
              A companion tool,
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >validate_response</code
              >, checks a response against conditions you set, such as a status
              code or a time budget. It runs its own request rather than reading
              a result from an earlier call, so the same guard applies to it.
              Validating a request you already ran sends it again, so one that
              creates a record creates two. Responses are capped at 5 MB and a
              request times out after 30 seconds, and both limits are
              configurable.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Collections, environments, and teams
            </h4>
            <p class="mb-8 mt-4">
              Most of the tools manage the things you already keep in
              Hoppscotch. The agent can create, read, update, delete, and move
              collections and requests, in your personal space or in a team, and
              it can import and export whole collections. It can manage
              environment variables across your stages, and it can create teams,
              invite members, and set roles.
            </p>
            <p class="mb-8 mt-4">
              Hoppscotch Cloud and self-hosted are nearly at parity. Two tools
              are the exception. Fetching a single personal collection with
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >get_user_collection</code
              >
              errors on Cloud for now, because the backend fails to serialize
              the collection's data there. In the meantime,
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >list_user_collections</code
              >
              still lists your root collections, and
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >export_user_collection</code
              >
              works for a known id. And
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >search_team_requests</code
              >
              is self-hosted only, because the Cloud backend rejects that query.
              Everything else works on both.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Code and documentation</h4>
            <p class="mb-8 mt-4">
              The server also writes code for a request.
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >generate_code</code
              >
              returns a runnable snippet in curl, JavaScript, Python, Go, or
              Rust. It keeps live credentials in the snippet by default, so what
              you get runs as is. Set
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >redactCredentials</code
              >
              when you plan to paste the snippet somewhere shared, and the
              values are masked.
            </p>
            <p class="mb-8 mt-4">
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >generate_documentation</code
              >
              works the other way around. It produces Markdown for a request and
              masks credentials by default, because documentation tends to be
              shared. One tool is meant to run and the other to circulate, so
              they start from opposite defaults. Masking is pattern-based either
              way. It catches auth values and recognized secret fields, not
              every place a secret can hide, so look over anything you share.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Tools and profiles</h4>
            <p class="mb-8 mt-4">
              There are 53 tools in all. They fall into a few groups:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>Collections and requests, personal or team</li>
              <li>Environments and their variables</li>
              <li>Teams, members, and roles</li>
              <li>Request execution and response validation</li>
              <li>Code and documentation generation</li>
            </ul>
            <p class="mb-8 mt-4">
              You do not have to expose all of them. A profile sets the surface.
              The default is
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">core</code>,
              with 39 tools, covering the create, read, update, and delete
              operations, request execution, and code and documentation
              generation you need for day-to-day API work, plus read-only team
              discovery.
            </p>
            <p class="mb-8 mt-4">
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">core</code>
              leaves out team administration, meaning creating, renaming, or
              deleting whole teams and changing who belongs to them, along with
              the advanced collection operations. The smaller
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >minimal</code
              >
              profile drops to 22 tools.
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >standard</code
              >
              gives up request execution, code and documentation generation, and
              the tools that read and edit individual requests, and gains team
              administration, the advanced collection operations, and
              team-request search in return.
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">full</code>
              is all 53.
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">core</code>
              and
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >standard</code
              >
              are two branches of
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">full</code>
              rather than steps on a ladder, and an unrecognized profile name
              falls back to
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">core</code>
              rather than opening everything up.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">What runs by default</h4>
            <p class="mb-8 mt-4">
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">core</code>
              is the default because it is the lean surface, not because it is
              read-only. It still includes write tools. A default agent can
              create, update, or delete a team collection, and those tools run
              on the first call. The server does not add a confirmation step of
              its own. Every tool does carry hints, marking whether it only
              reads, whether it is destructive, whether repeating it is safe,
              and whether it reaches outside Hoppscotch, and a host can use
              those hints to ask you first. Whether it asks is the host's
              choice.
            </p>
            <p class="mb-8 mt-4">
              Secret environment values are the other thing to scope. By default
              they substitute into requests freely, the same as any other
              variable. You can set an allowlist of origins that are allowed to
              receive them, and the server then refuses to send a secret to any
              origin outside that list. A request that carries no secret reaches
              its target either way. The server also removes secret values from
              a response before the agent sees them, but that pass is
              best-effort and covers only environment values you marked secret.
              A credential you write straight into a header or into the
              authentication block is never in that set, so do not rely on the
              response pass for anything sensitive.
            </p>
            <p class="mb-8 mt-4">
              One more control helps when you open untrusted code. If the
              working directory holds its own environment file, the server reads
              it by default. Set
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >HOPPSCOTCH_STRICT_ENV</code
              >
              to "true" to make it ignore trust-sensitive values from that file,
              such as the sign-in target, the request guard, and the secret
              allowlist, so a hostile repository cannot repoint them.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Getting started</h4>
            <p class="mb-8 mt-4">
              The server runs as a local process your host starts. Point your
              MCP host at it. For hosts that read a config file (Claude Desktop,
              or a project .mcp.json):
            </p>
            <pre
              class="overflow-x-auto whitespace-pre-wrap rounded-md border border-neutral-800 bg-neutral-900 p-4"
            >
{
  "mcpServers": {
    "hoppscotch": {
      "command": "npx",
      "args": ["-y", "@hoppscotch/mcp-server"]
    }
  }
}
</pre
            >
            <p class="mb-8 mt-4">
              When a tool needs your Hoppscotch account, the server uses
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >HOPPSCOTCH_ACCESS_TOKEN</code
              >
              if you set one, or a session it has already cached. With neither,
              it opens the Hoppscotch device-login page in your browser. Sign in
              once and the session is cached on your machine, so later calls
              skip the browser. In a session with no browser to open, like CI or
              SSH, it fails with instructions instead. For a self-hosted
              instance, add
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >HOPPSCOTCH_SERVER_URL</code
              >
              with your instance address. You need Node 22 or newer. Per-client
              setup for the different hosts lives in the
              <a
                href="https://docs.hoppscotch.io/documentation/clients/mcp-server/overview#connecting-your-mcp-host"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Hoppscotch documentation</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">What's next?</h4>
            <p class="mb-8 mt-4">
              This first release speaks over a local process, which fits an
              agent running on your own machine. Running it remotely, so an
              agent on another machine can reach it, is on our list to explore.
              If there is a workflow you want it to cover, tell us.
            </p>
            <p class="mb-8 mt-4">
              The server is open source under the MIT license. Try it, and send
              feedback to
              <a
                href="mailto:hello@hoppscotch.io"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >
              or open an issue on our
              <a
                href="https://github.com/hoppscotch/hoppscotch-mcp-server"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >GitHub repository</a
              >.
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
