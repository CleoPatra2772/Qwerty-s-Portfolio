export default {
  name: 'family',
  title: 'Family',
  type: 'document',
  fields: [
    {
    name: "name",
    title: "Name",
    type: "string",
    },
    {
      name: "familyImage",
      title: "Family Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: 'message',
      title: "Message",
      type: "string",
    },
  ]
  
}
