import Chat from "../models/Chat.js";

/* CREATE NEW CHAT */
export const createChat = async (req, res) => {
  try {
    const chat = await Chat.create({
      userId: req.user.id,
      title: "New Chat",
      messages: [],
    });

    res.json(chat);
  } catch {
    res.status(500).json({ message: "Error creating chat" });
  }
};

/* GET ALL CHATS */
export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    res.json(chats);
  } catch {
    res.status(500).json({ message: "Error fetching chats" });
  }
};

/* ADD MESSAGE */
export const addMessage = async (req, res) => {
  try {
    const { chatId, message } = req.body;

    const chat = await Chat.findById(chatId);

    chat.messages.push(message);

    // Update title (first message)
    if (chat.messages.length === 1) {
      chat.title = message.text.slice(0, 20);
    }

    await chat.save();

    res.json(chat);

  } catch {
    res.status(500).json({ message: "Error adding message" });
  }
};