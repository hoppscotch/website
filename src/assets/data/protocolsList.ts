import zap from '~icons/lucide/zap'
import box from '~icons/lucide/box'
import network from '~icons/lucide/network'
import check from '~icons/lucide/check-circle'

export const protocols = {
  rest: {
    slug: 'rest',
    title: 'protocols.items.rest.title',
    title2: 'protocols.items.rest.title2',
    description: 'protocols.items.rest.description',
    icon: zap,
    imageDark: 'https://docs.hoppscotch.io/guides/Illustration-dark.png',
    imageLight: 'https://docs.hoppscotch.io/guides/Illustration-light.png',
    link: 'https://docs.hoppscotch.io/rest',
    httpMethods: [
      {
        title: 'protocols.items.rest.http_methods.get.title',
        description: 'protocols.items.rest.http_methods.get.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.post.title',
        description: 'protocols.items.rest.http_methods.post.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.put.title',
        description: 'protocols.items.rest.http_methods.put.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.delete.title',
        description: 'protocols.items.rest.http_methods.delete.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.head.title',
        description: 'protocols.items.rest.http_methods.head.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.connect.title',
        description: 'protocols.items.rest.http_methods.connect.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.options.title',
        description: 'protocols.items.rest.http_methods.options.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.trace.title',
        description: 'protocols.items.rest.http_methods.trace.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.patch.title',
        description: 'protocols.items.rest.http_methods.patch.description',
        icon: check,
      },
      {
        title: 'protocols.items.rest.http_methods.custom.title',
        description: 'protocols.items.rest.http_methods.custom.description',
        icon: check,
      },
    ],
    methods: [

      {
        title: 'protocols.items.rest.methods.collections.title',
        description: 'protocols.items.rest.methods.collections.description',
        imageDark: 'https://docs.hoppscotch.io/api/nameRequest-dark.png',
        imageLight: 'https://docs.hoppscotch.io/api/nameRequest-light.png',
        link: 'https://docs.hoppscotch.io/rest#collections',
      },
      {
        title: 'protocols.items.rest.methods.dynamicBehavior.title',
        description: 'protocols.items.rest.methods.dynamicBehavior.description',
        imageDark: 'https://docs.hoppscotch.io/api/dynamic-dark.png',
        imageLight: 'https://docs.hoppscotch.io/api/dynamic-light.png',
        link: 'https://docs.hoppscotch.io/rest#adding-dynamic-behavior-to-requests',
      },
      {
        title: 'protocols.items.rest.methods.responseBody.title',
        description: 'protocols.items.rest.methods.responseBody.description',
        imageDark: 'https://docs.hoppscotch.io/api/response-dark.png',
        imageLight: 'https://docs.hoppscotch.io/api/response-light.png',
        link: 'https://docs.hoppscotch.io/rest#response-body-',
      },
      {
        title: 'protocols.items.rest.methods.environments.title',
        description: 'protocols.items.rest.methods.environments.description',
        imageDark: 'https://docs.hoppscotch.io/api/editEnv-dark.png',
        imageLight: 'https://docs.hoppscotch.io/api/editEnv-light.png',
        link: 'https://docs.hoppscotch.io/rest#environments',
      },
    ],
  },
  graphql: {
    slug: 'graphql',
    title: 'protocols.items.graphql.title',
    description: 'protocols.items.graphql.description',
    icon: box,
    videoLink: 'https://docs.hoppscotch.io/graphql/GraphQlDemoSpaceX.webm',
    link: 'https://docs.hoppscotch.io/graphql',
    methods: [
      {
        title: 'protocols.items.graphql.methods.url.title',
        description: 'protocols.items.graphql.methods.url.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/GraphqlURL-dark.png',
        imageLight: 'https://docs.hoppscotch.io/graphql/GraphqlURL-light.png',
        link: 'https://docs.hoppscotch.io/graphql#url',
      },
      {
        title: 'protocols.items.graphql.methods.headers.title',
        description: 'protocols.items.graphql.methods.headers.description',
        imageDark:
          'https://docs.hoppscotch.io/graphql/GraphQlHeaderHighlight.png',
        imageLight:
          'https://docs.hoppscotch.io/graphql/GraphQlHeaderHighlight.png',
        link: 'https://docs.hoppscotch.io/graphql#headers',
      },
      {
        title: 'protocols.items.graphql.methods.schema.title',
        description: 'protocols.items.graphql.methods.schema.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/GraphqlSchema-dark.png',
        imageLight:
          'https://docs.hoppscotch.io/graphql/GraphqlSchema-light.png',
        link: 'https://docs.hoppscotch.io/graphql#schema',
      },
      {
        title: 'protocols.items.graphql.methods.queries.title',
        description: 'protocols.items.graphql.methods.queries.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/graphqlQuery-dark.png',
        imageLight: 'https://docs.hoppscotch.io/graphql/graphqlQuery-light.png',
        link: 'https://docs.hoppscotch.io/graphql#queries',
      },
      {
        title: 'protocols.items.graphql.methods.response.title',
        description: 'protocols.items.graphql.methods.response.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/GrapQlResponse-dark.png',
        imageLight:
          'https://docs.hoppscotch.io/graphql/GrapQlResponse-light.png',
        link: 'https://docs.hoppscotch.io/graphql#response',
      },
      {
        title: 'protocols.items.graphql.methods.schemaDoc.title',
        description: 'protocols.items.graphql.methods.schemaDoc.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/schemadocs-dark.png',
        imageLight: 'https://docs.hoppscotch.io/graphql/schemadocs-light.png',
        link: 'https://docs.hoppscotch.io/graphql#schema-documentation',
      },
      {
        title: 'protocols.items.graphql.methods.history.title',
        description: 'protocols.items.graphql.methods.history.description',
        imageDark: 'https://docs.hoppscotch.io/graphql/GraphQlHistory-dark.png',
        imageLight:
          'https://docs.hoppscotch.io/graphql/GraphQlHistory-light.png',
        link: 'https://docs.hoppscotch.io/graphql#history',
      },
      {
        title: 'protocols.items.graphql.methods.collections.title',
        description: 'protocols.items.graphql.methods.collections.description',
        imageDark:
          'https://docs.hoppscotch.io/graphql/GraphQlcollectionHighlight.png',
        imageLight:
          'https://docs.hoppscotch.io/graphql/GraphQlcollectionHighlight.png',
        link: 'https://docs.hoppscotch.io/graphql#collections',
      },
    ],
  },
  realtime: {
    slug: 'realtime',
    title: 'protocols.items.realtime.title',
    title2: 'protocols.items.realtime.title2',
    description: 'protocols.items.realtime.description',
    icon: network,
    imageDark: 'https://docs.hoppscotch.io/realtime/Realtime-dark.png',
    imageLight: 'https://docs.hoppscotch.io/realtime/Realtime-light.png',
    link: 'https://docs.hoppscotch.io/realtimesocket',
    communicationProtocols: [
      {
        title: 'protocols.items.realtime.methods.websocket.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.sse.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.socket.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.mqtt.title',
        icon: check,
      },

    ],
    methods: [
      {
        title: 'protocols.items.realtime.methods.websocket.title',
        description: 'protocols.items.realtime.methods.websocket.description',
        imageDark: 'https://docs.hoppscotch.io/realtime/Websocket-dark.png',
        imageLight: 'https://docs.hoppscotch.io/realtime/Websocket-light.png',
        link: 'https://docs.hoppscotch.io/realtimesocket#websockets',
      },
      {
        title: 'protocols.items.realtime.methods.mqtt.title',
        description: 'protocols.items.realtime.methods.mqtt.description',
        videoLink: 'https://docs.hoppscotch.io/realtime/mqtt.webm',
        link: 'https://docs.hoppscotch.io/realtimesocket#mqtt',
      },
    ],
  },
  grpc: {
    slug: 'grpc',
    title: 'protocols.items.grpc.title',
    description: 'protocols.items.grpc.description',
    icon: network,
    imageDark: 'https://docs.hoppscotch.io/realtime/Realtime-dark.png',
    imageLight: 'https://docs.hoppscotch.io/realtime/Realtime-light.png',
    link: 'https://docs.hoppscotch.io/realtimesocket',
    communicationProtocols: [
      {
        title: 'protocols.items.realtime.methods.websocket.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.sse.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.socket.title',
        icon: check,
      },
      {
        title: 'protocols.items.realtime.methods.mqtt.title',
        icon: check,
      },

    ],
    methods: [
      {
        title: 'protocols.items.realtime.methods.websocket.title',
        description: 'protocols.items.realtime.methods.websocket.description',
        imageDark: 'https://docs.hoppscotch.io/realtime/Websocket-dark.png',
        imageLight: 'https://docs.hoppscotch.io/realtime/Websocket-light.png',
        link: 'https://docs.hoppscotch.io/realtimesocket#websockets',
      },
      {
        title: 'protocols.items.realtime.methods.mqtt.title',
        description: 'protocols.items.realtime.methods.mqtt.description',
        videoLink: 'https://docs.hoppscotch.io/realtime/mqtt.webm',
        link: 'https://docs.hoppscotch.io/realtimesocket#mqtt',
      },
    ],
  },
}
