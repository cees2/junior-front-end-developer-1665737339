export const ICONS_DESCRIPTION = [
  {
    status: "done",
    alt: "Checkmark task",
  },
  {
    status: "active",
    alt: "Active task",
  },
  {
    status: "blocked",
    alt: "Blocked task",
  },
];

const DUMMY_TASKS = [
  {
    task_id: Math.random(),
    title: "Application Setup",
    status: ICONS_DESCRIPTION[0].status,
    businessContexts: [
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 24 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
    ],
  },
  {
    task_id: Math.random(),
    title: "Static Book List",
    status: ICONS_DESCRIPTION[0].status,
    businessContexts: [
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
    ],
  },
  {
    task_id: Math.random(),
    title: "Administration Panel",
    status: ICONS_DESCRIPTION[0].status,
    businessContexts: [
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
    ],
  },
  {
    task_id: Math.random(),
    title: "Connect Admin with Frontend",
    status: ICONS_DESCRIPTION[1].status,
    businessContexts: [
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
    ],
  },
  {
    task_id: Math.random(),
    title: "Book Review Feature",
    status: ICONS_DESCRIPTION[2].status,
    businessContexts: [
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
    ],
  },
  {
    task_id: Math.random(),
    title: "Deploy the app",
    status: ICONS_DESCRIPTION[2].status,
    businessContexts: [
      {
        title: "Holidays plans",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Damian Mirek",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "Your task",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Kristen Aniston",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: true,
      },
      {
        title: "New sprint, tasks and intro information",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget luctus nisi. Morbi ut sem suscipit, aliquet turpis a, vehicula massa. Aliquam a viverra metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt ultrices feugiat. Nunc vel bibendum lacus, ac gravida massa. Sed pharetra luctus erat in malesuada. Nulla rhoncus sem sed nulla euismod tincidunt. Curabitur sollicitudin a nisl non malesuada. Morbi tempus risus nisi, nec eleifend sapien fringilla vel. Nam sed ipsum porttitor, sollicitudin justo at, convallis odio. Integer viverra maximus arcu quis bibendum. Nunc magna odio, posuere quis semper vitae, mollis ac sapien.",
        author: "Project Manager",
        createdAt: new Date(
          Date.now() - Math.round(Math.random() * 20 * 60 * 60 * 1000)
        ),
        isNew: false,
      },
    ],
  },
];

export default DUMMY_TASKS;
