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
    businessContexts: [],
  },
  {
    task_id: Math.random(),
    title: "Static Book List",
    status: ICONS_DESCRIPTION[0].status,
    businessContexts: [],
  },
  {
    task_id: Math.random(),
    title: "Administration Panel",
    status: ICONS_DESCRIPTION[0].status,
    businessContexts: [],
  },
  {
    task_id: Math.random(),
    title: "Connect Admin with Frontend",
    status: ICONS_DESCRIPTION[1].status,
    businessContexts: [],
  },
  {
    task_id: Math.random(),
    title: "Book Review Feature",
    status: ICONS_DESCRIPTION[2].status,
    businessContexts: [],
  },
  {
    task_id: Math.random(),
    title: "Deploy the app",
    status: ICONS_DESCRIPTION[2].status,
    businessContexts: [],
  },
];

export default DUMMY_TASKS;
