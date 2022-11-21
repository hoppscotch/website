import { gradients } from "./gradients"
import check from "~icons/lucide/shield-check"

export const features = [
  {
    icon: check,
    title: "solutions.items.documentation.features.1.title",
    description: "solutions.items.documentation.features.1.description",
    longDescription: "solutions.items.documentation.features.1.longDescription",
    image: "testing.png",
    placement: "left",
    background: gradients.purple,
  },
  {
    icon: check,
    title: "solutions.items.documentation.features.2.title",
    description: "solutions.items.documentation.features.2.description",
    longDescription: "solutions.items.documentation.features.2.longDescription",
    image: "testing.png",
    placement: "right",
    background: gradients.green,
  },
  {
    icon: check,
    title: "solutions.items.documentation.features.3.title",
    description: "solutions.items.documentation.features.3.description",
    longDescription: "solutions.items.documentation.features.3.longDescription",
    image: "testing.png",
    placement: "left",
    background: gradients.indigo,
  },
  {
    icon: check,
    title: "solutions.items.documentation.features.4.title",
    description: "solutions.items.documentation.features.4.description",
    longDescription: "solutions.items.documentation.features.4.longDescription",
    image: "testing.png",
    lists: [
      {
        title: "solutions.items.documentation.features.4.lists.1.title",
        description:
          "solutions.items.documentation.features.2.lists.1.description",
      },
      {
        title: "solutions.items.documentation.features.4.lists.2.title",
        description:
          "solutions.items.documentation.features.2.lists.2.description",
      },
      {
        title: "solutions.items.documentation.features.4.lists.3.title",
        description:
          "solutions.items.documentation.features.2.lists.3.description",
      },
    ],
    placement: "right",
    background: gradients.pink,
  },
]
