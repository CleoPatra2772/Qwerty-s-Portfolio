import { Rule } from "postcss";

export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
      name: "title",
      title: "Tile",
      description: "title of skill",
      type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "progress",
        title: "Progress",
        type: "number",
        description: "Progress of skill from 0-100%",
        validation: (Rule) => Rule.min(0).max(100),
      },
      
    ]
    
  }
  