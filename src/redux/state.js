let state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" }
    ],
    messages: [
      { id: 1, message: "How are you?" },
      { id: 2, message: "Meet at Starbucks" },
      { id: 3, message: "Happy holidays!" },
      { id: 4, message: "Hey check this out!" },
      { id: 5, message: "YO!" },
      { id: 6, message: "Whassup?" }
    ]
  },
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "it is my first post", likesCount: 11 },
      { id: 3, message: "Yo", likesCount: 12 }
    ]
  }
};

export default state;
