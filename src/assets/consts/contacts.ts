import { IContact } from "../types";

export const contactListData: IContact[] = [
  {
    name: "Todd",
    id: 1,
    messages: [
      {
        date: "2022-04-15",
        message:
          "Thanks for our time. How are you doing? Does this time works for you? Please let me know.",
        contactId: 1,
      },
      {
        date: "2022-05-16",
        message:
          "Hi Are you arround. Do you have any ideas? What do you think?",
        contactId: 10,
      },
      {
        date: "2022-05-20",
        message:
          "Thanks for your time it is really great for me. But I don't think there is any problems",
        contactId: 1,
      },
    ],
    avatar: "avatar/1.png",
  },
  {
    name: "Anicia",
    id: 2,
    messages: [
      {
        date: "2022-04-15",
        message:
          "Thanks for our time. How are you doing? Does this time works for you? Please let me know.",
        contactId: 2,
      },
    ],
    avatar: "avatar/3.png",
  },
  {
    name: "Hyden",
    id: 3,
    messages: [
      {
        date: "2022-04-15",
        message:
          "Hi Are you arround. Do you have any ideas? What do you think?",
        contactId: 3,
      },
    ],
    avatar: "avatar/2.png",
  },
  {
    name: "Joy",
    id: 4,
    messages: [
      {
        date: "2022-04-15",
        message:
          "Hi, As you can see my profile, I am very experienced in web development using React.JS",
        contactId: 4,
      },
    ],
    avatar: "avatar/1.png",
  },
];
