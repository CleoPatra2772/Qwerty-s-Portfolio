export default {
    name: 'timeline',
    title: 'Timeline',
    type: 'document',
    fields: [
      {
      name: "date",
      title: "Date",
      type: "date",
      },
      {
        name: "years Old",
        title: "Years Old",
        type: "string",
        },
      {
        name: "timelineImage",
        title: "Timeline Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "weight",
        title: "Weight",
        type: "string",
      },
    ]
    
  }
  