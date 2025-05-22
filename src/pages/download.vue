<script setup lang="ts">
useHead({
  title: "Download • Hoppscotch",
  meta: [
    {
      property: "og:title",
      content: "Download Hoppscotch for your platform.",
    },
    {
      name: "twitter:title",
      content: "Download • Hoppscotch",
    },
    {
      name: "description",
      content: "Download Hoppscotch for your platform.",
    },
    {
      property: "og:description",
      content: "Download Hoppscotch for your platform.",
    },
    {
      name: "twitter:description",
      content: "Download Hoppscotch for your platform.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/banner-download.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/banner-download.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/download",
    },
  ],
})

const validPlatforms = ["macOS", "windows", "linux", "web", "cli"]

export type DownloadablePlatformType =
  | "macOS"
  | "windows"
  | "linux"
  | "web"
  | "cli"

const platform = ref<DownloadablePlatformType>("macOS")

const router = useRouter()

const isValidPlatform = (
  platform: string,
): platform is DownloadablePlatformType => {
  return validPlatforms.includes(platform)
}

// Set the platform based on the URL query parameter
// If the parameter is not valid, default to "macOS"
onMounted(() => {
  const platformFromUrl = router.currentRoute.value.query.platform as string

  if (platformFromUrl && isValidPlatform(platformFromUrl))
    platform.value = platformFromUrl as DownloadablePlatformType
  else platform.value = "macOS"
})
</script>

<template>
  <DownloadProducts v-model:platform="platform" />
  <Cta />
</template>
