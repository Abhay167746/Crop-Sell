// // // import { useState, useRef, useEffect } from "react";

// // // /* Suggestions */

// // // const suggestions = [
// // //   "Tomato price in Haldwani",
// // //   "Where can I sell onions?",
// // //   "Best time to sell potatoes",
// // //   "Cauliflower market price"
// // // ];

// // // /* Typing Indicator */

// // // const TypingIndicator = () => (
// // //   <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm">
// // //     <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></span>
// // //     <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-100"></span>
// // //     <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-200"></span>
// // //   </div>
// // // );

// // // /* FORMAT BOT RESPONSE */

// // // function formatBotMessage(text) {

// // //   const sections = text.split("\n");

// // //   return sections.map((line, index) => {

// // //     if (line.includes("BEST NEARBY BUYERS")) {
// // //       return <div key={index} className="text-green-700 font-semibold mt-2">{line}</div>;
// // //     }

// // //     if (line.includes("EXPECTED PRICE")) {
// // //       return <div key={index} className="text-green-700 font-semibold mt-2">{line}</div>;
// // //     }

// // //     if (line.includes("BEST TIME TO SELL")) {
// // //       return <div key={index} className="text-green-700 font-semibold mt-2">{line}</div>;
// // //     }

// // //     if (line.includes("IMPORTANT TIP")) {
// // //       return <div key={index} className="text-green-700 font-semibold mt-2">{line}</div>;
// // //     }

// // //     return <div key={index}>{line}</div>;
// // //   });
// // // }

// // // function Chatbot() {

// // //   const initialMessage = {
// // //     sender: "bot",
// // //     text: "👋 Welcome to AgroAI Assistant.\nAsk about crop prices, buyers, or markets.",
// // //     time: new Date().toLocaleTimeString()
// // //   };

// // //   const [messages, setMessages] = useState([initialMessage]);
// // //   const [input, setInput] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   const messagesEndRef = useRef(null);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages, loading]);

// // //   /* NEW CHAT */

// // //   const newChat = () => {
// // //     setMessages([initialMessage]);
// // //     setInput("");
// // //   };

// // //   /* SEND MESSAGE */

// // //   const sendMessage = async (text) => {

// // //     const messageText = text || input;

// // //     if (!messageText.trim() || loading) return;

// // //     setInput("");

// // //     const userMessage = {
// // //       sender: "user",
// // //       text: messageText,
// // //       time: new Date().toLocaleTimeString()
// // //     };

// // //     setMessages(prev => [...prev, userMessage]);

// // //     setLoading(true);

// // //     try {

// // //       const res = await fetch("http://localhost:5000/api/chat", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json"
// // //         },
// // //         body: JSON.stringify({ message: messageText })
// // //       });

// // //       const data = await res.json();

// // //       const botMessage = {
// // //         sender: "bot",
// // //         text: data.reply,
// // //         time: new Date().toLocaleTimeString()
// // //       };

// // //       setMessages(prev => [...prev, botMessage]);

// // //     } catch {

// // //       setMessages(prev => [
// // //         ...prev,
// // //         {
// // //           sender: "bot",
// // //           text: "❌ Something went wrong. Please try again.",
// // //           time: new Date().toLocaleTimeString()
// // //         }
// // //       ]);

// // //     } finally {
// // //       setLoading(false);
// // //     }

// // //   };

// // //   return (

// // //     <div className="h-screen flex bg-gray-100">

// // //       {/* SIDEBAR */}

// // //       <div className="w-64 bg-green-900 text-white flex flex-col p-6">

// // //         <h1 className="text-2xl font-bold mb-8">🌾 AI Assitance</h1>

// // //         <button
// // //           onClick={newChat}
// // //           className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg mb-6"
// // //         >
// // //           + New Chat
// // //         </button>

// // //         {/* <div className="text-sm space-y-2 opacity-80">
// // //           <p>Tomato Selling</p>
// // //           <p>Potato Price</p>
// // //           <p>Onion Buyers</p>
// // //         </div> */}

// // //         <div className="mt-auto text-xs opacity-70">
// // //           AI Assistant for Farmers
// // //         </div>

// // //       </div>


// // //       {/* CHAT AREA */}

// // //       <div className="flex-1 flex flex-col">

// // //         {/* HEADER */}

// // //         <div className="bg-white border-b px-6 py-4 flex items-center gap-3">

// // //           <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">
// // //             🤖
// // //           </div>

// // //           <div>
// // //             <h2 className="font-semibold">Smart Crop Selling AI Assistant</h2>
// // //             <p className="text-xs text-green-600">● Online</p>
// // //           </div>

// // //         </div>


// // //         {/* CHAT MESSAGES */}

// // //         <div className="flex-1 overflow-y-auto px-10 py-6 space-y-6">

// // //           {messages.map((msg, index) => (

// // //             <div
// // //               key={index}
// // //               className={`flex gap-3 ${
// // //                 msg.sender === "user" ? "justify-end" : "justify-start"
// // //               }`}
// // //             >

// // //               {msg.sender === "bot" && (
// // //                 <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center">
// // //                   🤖
// // //                 </div>
// // //               )}

// // //               <div
// // //                 className={`max-w-[650px] px-5 py-4 rounded-xl shadow text-sm space-y-1 ${
// // //                   msg.sender === "user"
// // //                     ? "bg-green-600 text-white"
// // //                     : "bg-white border"
// // //                 }`}
// // //               >

// // //                 {msg.sender === "bot"
// // //                   ? formatBotMessage(msg.text)
// // //                   : msg.text}

// // //                 <div className="text-[10px] opacity-50 text-right mt-2">
// // //                   {msg.time}
// // //                 </div>

// // //               </div>

// // //             </div>

// // //           ))}

// // //           {loading && (
// // //             <div className="flex gap-3">
// // //               <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center">
// // //                 🤖
// // //               </div>
// // //               <TypingIndicator />
// // //             </div>
// // //           )}

// // //           <div ref={messagesEndRef}></div>

// // //         </div>


// // //         {/* SUGGESTIONS */}

// // //         {messages.length === 1 && (
// // //           <div className="px-10 pb-4 flex flex-wrap gap-2">

// // //             {suggestions.map((s, i) => (
// // //               <button
// // //                 key={i}
// // //                 onClick={() => sendMessage(s)}
// // //                 className="bg-white border px-3 py-2 rounded-lg text-sm hover:bg-gray-50"
// // //               >
// // //                 {s}
// // //               </button>
// // //             ))}

// // //           </div>
// // //         )}


// // //         {/* INPUT */}

// // //         <div className="p-4 bg-white border-t flex items-center gap-3">

// // //           <input
// // //             value={input}
// // //             disabled={loading}
// // //             onChange={(e) => setInput(e.target.value)}
// // //             onKeyDown={(e) => {
// // //               if (e.key === "Enter") {
// // //                 e.preventDefault();
// // //                 sendMessage();
// // //               }
// // //             }}
// // //             placeholder="Ask about crop prices, buyers, markets..."
// // //             className="flex-1 px-5 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
// // //           />

// // //           <button
// // //             onClick={() => sendMessage()}
// // //             disabled={loading}
// // //             className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
// // //           >
// // //             Send
// // //           </button>

// // //         </div>

// // //       </div>

// // //     </div>

// // //   );

// // // }

// // // export default Chatbot;

// // import { useState, useRef, useEffect } from "react";

// // const TypingIndicator = () => (
// //   <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow">
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
// //   </div>
// // );

// // function Chatbot() {
// //   const [messages, setMessages] = useState([
// //     {
// //       sender: "bot",
// //       text: "👋 Namaste! Ask me where to sell your crops in Haldwani.",
// //       time: new Date().toLocaleTimeString(),
// //     },
// //   ]);

// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   const sendMessage = async () => {
// //     if (!input.trim() || loading) return;

// //     const userText = input;
// //     setInput("");

// //     setMessages((prev) => [
// //       ...prev,
// //       {
// //         sender: "user",
// //         text: userText,
// //         time: new Date().toLocaleTimeString(),
// //       },
// //     ]);

// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: userText }),
// //       });

// //       const data = await res.json();

// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: data.reply,
// //           time: new Date().toLocaleTimeString(),
// //         },
// //       ]);
// //     } catch (err) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: "⚠️ Server error. Please try again.",
// //           time: new Date().toLocaleTimeString(),
// //         },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-3">

// //       <div className="w-full max-w-3xl h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border">

// //         {/* HEADER */}
// //         <div className="bg-green-700 text-white px-5 py-4 flex items-center gap-3">
// //           <div className="w-10 h-10 rounded-full bg-white text-green-700 flex items-center justify-center font-bold">
// //             🌾
// //           </div>
// //           <div>
// //             <h2 className="font-bold">Crop Selling Assistant</h2>
// //             <p className="text-xs opacity-80">AI Powered • Haldwani</p>
// //           </div>
// //         </div>

// //         {/* CHAT */}
// //         <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-green-50">

// //           {messages.map((msg, i) => (
// //             <div
// //               key={i}
// //               className={`flex ${
// //                 msg.sender === "user" ? "justify-end" : "justify-start"
// //               }`}
// //             >
// //               <div
// //                 className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm shadow ${
// //                   msg.sender === "user"
// //                     ? "bg-green-700 text-white rounded-br-none"
// //                     : "bg-white border rounded-bl-none"
// //                 }`}
// //               >
// //                 <p className="whitespace-pre-line">{msg.text}</p>
// //                 <p className="text-[10px] opacity-60 text-right mt-1">
// //                   {msg.time}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="flex justify-start">
// //               <TypingIndicator />
// //             </div>
// //           )}

// //           <div ref={messagesEndRef}></div>
// //         </div>

// //         {/* INPUT */}
// //         <div className="p-3 bg-white border-t flex items-center gap-2">

// //           <input
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //             placeholder="Ask about crops, price, buyers..."
// //             className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
// //           />

// //           <button
// //             onClick={sendMessage}
// //             className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
// //           >
// //             ➤
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;




// // import { useState, useRef, useEffect } from "react";

// // /* Suggestions */
// // const suggestions = [
// //   "Tomato price in Haldwani",
// //   "Where can I sell onions?",
// //   "Best time to sell potatoes",
// //   "Cauliflower market price"
// // ];

// // /* Typing Indicator */
// // const TypingIndicator = () => (
// //   <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow">
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
// //   </div>
// // );

// // /* Format Bot Response */
// // function formatBotMessage(text) {
// //   return text.split("\n").map((line, i) => {
// //     if (line.includes("📍") || line.includes("💰") || line.includes("⏰") || line.includes("🚜")) {
// //       return <div key={i} className="text-green-700 font-semibold mt-2">{line}</div>;
// //     }
// //     return <div key={i}>{line}</div>;
// //   });
// // }

// // function Chatbot() {
// //   const token = localStorage.getItem("token");

// //   const initialMessage = {
// //     sender: "bot",
// //     text: "👋 Namaste! Ask me where to sell your crops in Haldwani.",
// //     time: new Date().toLocaleTimeString()
// //   };

// //   const [messages, setMessages] = useState([initialMessage]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   useEffect(() => {
// //   const fetchChats = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chats", {
// //         headers: { Authorization: token },
// //       });

// //       const data = await res.json();

// //       if (data.length > 0) {
// //         // load latest chat messages
// //         setMessages(data[0].messages);
// //       }
// //     } catch (err) {
// //       console.log("Error fetching chats");
// //     }
// //   };

// //   if (token) fetchChats();
// // }, [token]);

// //   /* New Chat */
// //   const newChat = () => {
// //     setMessages([initialMessage]);
// //     setInput("");
// //   };

// //   /* Send Message */
// //   const sendMessage = async (text) => {
// //     const messageText = text || input;
// //     if (!messageText.trim() || loading) return;

// //     setInput("");

// //     const userMessage = {
// //       sender: "user",
// //       text: messageText,
// //       time: new Date().toLocaleTimeString()
// //     };

// //     setMessages(prev => [...prev, userMessage]);
// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: messageText }),
// //       });

// //       const data = await res.json();

// //       const botMessage = {
// //         sender: "bot",
// //         text: data.reply,
// //         time: new Date().toLocaleTimeString()
// //       };

// //       setMessages(prev => [...prev, botMessage]);

// //     } catch {
// //       setMessages(prev => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: "⚠️ Server error. Please try again.",
// //           time: new Date().toLocaleTimeString()
// //         }
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex bg-gray-100">

// //       {/* SIDEBAR */}
// //       <div className="w-64 bg-green-900 text-white flex flex-col p-6">
// //         <h1 className="text-2xl font-bold mb-8">🌾 AgroAI</h1>

// //         <button
// //           onClick={newChat}
// //           className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg mb-6"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="mt-auto text-xs opacity-70">
// //           AI Assistant for Farmers
// //         </div>
// //       </div>

// //       {/* CHAT AREA */}
// //       <div className="flex-1 flex flex-col">

// //         {/* HEADER */}
// //         <div className="bg-white border-b px-6 py-4 flex items-center gap-3">
// //           <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">
// //             🤖
// //           </div>
// //           <div>
// //             <h2 className="font-semibold">Crop Selling Assistant</h2>
// //             <p className="text-xs text-green-600">● Online</p>
// //           </div>
// //         </div>

// //         {/* CHAT */}
// //         <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-green-50">

// //           {messages.map((msg, i) => (
// //             <div
// //               key={i}
// //               className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// //             >
// //               <div
// //                 className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow ${
// //                   msg.sender === "user"
// //                     ? "bg-green-700 text-white rounded-br-none"
// //                     : "bg-white border rounded-bl-none"
// //                 }`}
// //               >
// //                 {msg.sender === "bot"
// //                   ? formatBotMessage(msg.text)
// //                   : msg.text}

// //                 <p className="text-[10px] opacity-60 text-right mt-1">
// //                   {msg.time}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="flex justify-start">
// //               <TypingIndicator />
// //             </div>
// //           )}

// //           <div ref={messagesEndRef}></div>
// //         </div>

// //         {/* SUGGESTIONS */}
// //         {messages.length === 1 && (
// //           <div className="px-6 pb-3 flex flex-wrap gap-2">
// //             {suggestions.map((s, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => sendMessage(s)}
// //                 className="bg-white border px-3 py-2 rounded-lg text-sm hover:bg-gray-50"
// //               >
// //                 {s}
// //               </button>
// //             ))}
// //           </div>
// //         )}

// //         {/* INPUT */}
// //         <div className="p-4 bg-white border-t flex items-center gap-3">
// //           <input
// //             value={input}
// //             disabled={loading}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //             placeholder="Ask about crops, price, buyers..."
// //             className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
// //           />

// //           <button
// //             onClick={() => sendMessage()}
// //             disabled={loading}
// //             className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800"
// //           >
// //             ➤
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;


// // import { useState, useRef, useEffect } from "react";

// // /* Suggestions */
// // const suggestions = [
// //   "Tomato price in Haldwani",
// //   "Where can I sell onions?",
// //   "Best time to sell potatoes",
// //   "Cauliflower market price"
// // ];

// // /* Typing Indicator */
// // const TypingIndicator = () => (
// //   <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow">
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
// //   </div>
// // );

// // /* Format Bot Response */
// // function formatBotMessage(text) {
// //   return text.split("\n").map((line, i) => {
// //     if (line.includes("📍") || line.includes("💰") || line.includes("⏰") || line.includes("🚜")) {
// //       return <div key={i} className="text-green-700 font-semibold mt-2">{line}</div>;
// //     }
// //     return <div key={i}>{line}</div>;
// //   });
// // }

// // function Chatbot() {
// //   const token = localStorage.getItem("token");

// //   const initialMessage = {
// //     sender: "bot",
// //     text: "👋 Namaste! Ask me where to sell your crops in Haldwani.",
// //     time: new Date().toLocaleTimeString()
// //   };

// //   const [messages, setMessages] = useState([initialMessage]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const messagesEndRef = useRef(null);

// //   // ✅ EXISTING SCROLL
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   // 🔥 STEP 6: FETCH CHATS FROM DB
// //   useEffect(() => {
// //     const fetchChats = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", {
// //           headers: { Authorization: token },
// //         });

// //         const data = await res.json();

// //         if (data.length > 0) {
// //           setMessages(data[0].messages); // load latest chat
// //         }
// //       } catch (err) {
// //         console.log("Error fetching chats");
// //       }
// //     };

// //     if (token) fetchChats();
// //   }, []);

// //   /* New Chat */
// //   const newChat = () => {
// //     setMessages([initialMessage]);
// //     setInput("");
// //   };

// //   /* Send Message */
// //   const sendMessage = async (text) => {
// //     const messageText = text || input;
// //     if (!messageText.trim() || loading) return;

// //     setInput("");

// //     const userMessage = {
// //       sender: "user",
// //       text: messageText,
// //       time: new Date().toLocaleTimeString()
// //     };

// //     // 🔥 SAVE USER MESSAGE TO DB
// //     await fetch("http://localhost:5000/api/chats/message", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: token,
// //       },
// //       body: JSON.stringify({
// //         chatId: "temp_chat_id",
// //         message: userMessage,
// //       }),
// //     });

// //     setMessages(prev => [...prev, userMessage]);
// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: messageText }),
// //       });

// //       const data = await res.json();

// //       const botMessage = {
// //         sender: "bot",
// //         text: data.reply,
// //         time: new Date().toLocaleTimeString()
// //       };

// //       // 🔥 SAVE BOT MESSAGE TO DB
// //       await fetch("http://localhost:5000/api/chats/message", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: token,
// //         },
// //         body: JSON.stringify({
// //           chatId: "temp_chat_id",
// //           message: botMessage,
// //         }),
// //       });

// //       setMessages(prev => [...prev, botMessage]);

// //     } catch {
// //       setMessages(prev => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: "⚠️ Server error. Please try again.",
// //           time: new Date().toLocaleTimeString()
// //         }
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex bg-gray-100">

// //       {/* SIDEBAR */}
// //       <div className="w-64 bg-green-900 text-white flex flex-col p-6">
// //         <h1 className="text-2xl font-bold mb-8">🌾 AgroAI</h1>

// //         <button
// //           onClick={newChat}
// //           className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg mb-6"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="mt-auto text-xs opacity-70">
// //           AI Assistant for Farmers
// //         </div>
// //       </div>

// //       {/* CHAT AREA */}
// //       <div className="flex-1 flex flex-col">

// //         {/* HEADER */}
// //         <div className="bg-white border-b px-6 py-4 flex items-center gap-3">
// //           <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">
// //             🤖
// //           </div>
// //           <div>
// //             <h2 className="font-semibold">Crop Selling Assistant</h2>
// //             <p className="text-xs text-green-600">● Online</p>
// //           </div>
// //         </div>

// //         {/* CHAT */}
// //         <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-green-50">

// //           {messages.map((msg, i) => (
// //             <div
// //               key={i}
// //               className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// //             >
// //               <div
// //                 className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow ${
// //                   msg.sender === "user"
// //                     ? "bg-green-700 text-white rounded-br-none"
// //                     : "bg-white border rounded-bl-none"
// //                 }`}
// //               >
// //                 {msg.sender === "bot"
// //                   ? formatBotMessage(msg.text)
// //                   : msg.text}

// //                 <p className="text-[10px] opacity-60 text-right mt-1">
// //                   {msg.time}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="flex justify-start">
// //               <TypingIndicator />
// //             </div>
// //           )}

// //           <div ref={messagesEndRef}></div>
// //         </div>

// //         {/* SUGGESTIONS */}
// //         {messages.length === 1 && (
// //           <div className="px-6 pb-3 flex flex-wrap gap-2">
// //             {suggestions.map((s, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => sendMessage(s)}
// //                 className="bg-white border px-3 py-2 rounded-lg text-sm hover:bg-gray-50"
// //               >
// //                 {s}
// //               </button>
// //             ))}
// //           </div>
// //         )}

// //         {/* INPUT */}
// //         <div className="p-4 bg-white border-t flex items-center gap-3">
// //           <input
// //             value={input}
// //             disabled={loading}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //             placeholder="Ask about crops, price, buyers..."
// //             className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
// //           />

// //           <button
// //             onClick={() => sendMessage()}
// //             disabled={loading}
// //             className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800"
// //           >
// //             ➤
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;



// // import { useState, useRef, useEffect } from "react";

// // /* Suggestions */
// // const suggestions = [
// //   "Tomato price in Haldwani",
// //   "Where can I sell onions?",
// //   "Best time to sell potatoes",
// //   "Cauliflower market price"
// // ];

// // /* Typing Indicator */
// // const TypingIndicator = () => (
// //   <div className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow">
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></span>
// //     <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></span>
// //   </div>
// // );

// // /* Format Bot Response */
// // function formatBotMessage(text) {
// //   return text.split("\n").map((line, i) => {
// //     if (line.includes("📍") || line.includes("💰") || line.includes("⏰") || line.includes("🚜")) {
// //       return <div key={i} className="text-green-700 font-semibold mt-2">{line}</div>;
// //     }
// //     return <div key={i}>{line}</div>;
// //   });
// // }

// // function Chatbot() {
// //   const token = localStorage.getItem("token");

// //   const initialMessage = {
// //     sender: "bot",
// //     text: "👋 Namaste! Ask me where to sell your crops in Haldwani.",
// //     time: new Date().toLocaleTimeString()
// //   };

// //   const [messages, setMessages] = useState([initialMessage]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   // ✅ NEW: real chatId
// //   const [chatId, setChatId] = useState(null);

// //   const messagesEndRef = useRef(null);

// //   // scroll
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   // 🔥 FETCH OR CREATE CHAT
// //   useEffect(() => {
// //     const fetchChats = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", {
// //           headers: { Authorization: token },
// //         });

// //         const data = await res.json();

// //         if (data.length > 0) {
// //           setMessages(data[0].messages);
// //           setChatId(data[0]._id);
// //         } else {
// //           // 🔥 CREATE CHAT IF NONE
// //           const createRes = await fetch("http://localhost:5000/api/chats", {
// //             method: "POST",
// //             headers: { Authorization: token },
// //           });

// //           const newChat = await createRes.json();
// //           setChatId(newChat._id);
// //           setMessages(initialMessage ? [initialMessage] : []);
// //         }

// //       } catch (err) {
// //         console.log("Error fetching chats");
// //       }
// //     };

// //     if (token) fetchChats();
// //   }, []);

// //   /* New Chat */
// //   const newChat = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chats", {
// //         method: "POST",
// //         headers: { Authorization: token },
// //       });

// //       const newChat = await res.json();

// //       setChatId(newChat._id);
// //       setMessages([initialMessage]);
// //       setInput("");

// //     } catch {
// //       console.log("Error creating chat");
// //     }
// //   };

// //   /* Send Message */
// //   const sendMessage = async (text) => {
// //     const messageText = text || input;
// //     if (!messageText.trim() || loading) return;

// //     setInput("");

// //     const userMessage = {
// //       sender: "user",
// //       text: messageText,
// //       time: new Date().toLocaleTimeString()
// //     };

// //     // 🔥 SAVE USER MESSAGE (only if chatId exists)
// //     if (chatId) {
// //       await fetch("http://localhost:5000/api/chats/message", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: token,
// //         },
// //         body: JSON.stringify({
// //           chatId: chatId,
// //           message: userMessage,
// //         }),
// //       });
// //     }

// //     setMessages(prev => [...prev, userMessage]);
// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ message: messageText }),
// //       });

// //       const data = await res.json();

// //       const botMessage = {
// //         sender: "bot",
// //         text: data.reply,
// //         time: new Date().toLocaleTimeString()
// //       };

// //       // 🔥 SAVE BOT MESSAGE
// //       if (chatId) {
// //         await fetch("http://localhost:5000/api/chats/message", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: token,
// //           },
// //           body: JSON.stringify({
// //             chatId: chatId,
// //             message: botMessage,
// //           }),
// //         });
// //       }

// //       setMessages(prev => [...prev, botMessage]);

// //     } catch {
// //       setMessages(prev => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: "⚠️ Server error. Please try again.",
// //           time: new Date().toLocaleTimeString()
// //         }
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex bg-gray-100">

// //       {/* SIDEBAR */}
// //       <div className="w-64 bg-green-900 text-white flex flex-col p-6">
// //         <h1 className="text-2xl font-bold mb-8">🌾 AI Chatbot</h1>

// //         <button
// //           onClick={newChat}
// //           className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg mb-6 cursor-pointer"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="mt-auto text-xs opacity-70">
// //           AI Assistant for Farmers
// //         </div>
// //       </div>

// //       {/* CHAT AREA */}
// //       <div className="flex-1 flex flex-col">

// //         {/* HEADER */}
// //         <div className="bg-white border-b px-6 py-4 flex items-center gap-3">
// //           <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center">
// //             🤖
// //           </div>
// //           <div>
// //             <h2 className="font-semibold">Crop Selling Assistant</h2>
// //             <p className="text-xs text-green-600">● Online</p>
// //           </div>
// //         </div>

// //         {/* CHAT */}
// //         <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-green-50">

// //           {messages.map((msg, i) => (
// //             <div
// //               key={i}
// //               className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// //             >
// //               <div
// //                 className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow ${
// //                   msg.sender === "user"
// //                     ? "bg-green-700 text-white rounded-br-none"
// //                     : "bg-white border rounded-bl-none"
// //                 }`}
// //               >
// //                 {msg.sender === "bot"
// //                   ? formatBotMessage(msg.text)
// //                   : msg.text}

// //                 <p className="text-[10px] opacity-60 text-right mt-1">
// //                   {msg.time}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}

// //           {loading && (
// //             <div className="flex justify-start">
// //               <TypingIndicator />
// //             </div>
// //           )}

// //           <div ref={messagesEndRef}></div>
// //         </div>

// //         {/* INPUT */}
// //         <div className="p-4 bg-white border-t flex items-center gap-3">
// //           <input
// //             value={input}
// //             disabled={loading}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //             placeholder="Ask about crops, price, buyers..."
// //             className="flex-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
// //           />

// //           <button
// //             onClick={() => sendMessage()}
// //             disabled={loading}
// //             className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800"
// //           >
// //             ➤
// //           </button>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;

// // import { useState, useRef, useEffect, useCallback } from "react";

// // /* ─── Suggestions ─────────────────────────────────────────────── */
// // const SUGGESTIONS = [
// //   { label: "🍅 Tomato price today", query: "Tomato price in Haldwani today" },
// //   { label: "🧅 Sell onions", query: "Where can I sell onions in Haldwani?" },
// //   { label: "🥔 Potato buyers", query: "Best buyers for potatoes near me" },
// //   { label: "🥦 Cauliflower mandi", query: "Cauliflower mandi price and best time to sell" },
// // ];

// // /* ─── Format bot message ───────────────────────────────────────── */
// // function formatBotMessage(text) {
// //   const lines = text.split("\n");
// //   return lines.map((line, i) => {
// //     const isHeader = /^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)/.test(line.trim());
// //     const isBullet = line.trim().startsWith("•");
// //     if (isHeader) {
// //       return (
// //         <div key={i} className="agro-section-header">
// //           {line}
// //         </div>
// //       );
// //     }
// //     if (isBullet) {
// //       return (
// //         <div key={i} className="agro-bullet">
// //           {line}
// //         </div>
// //       );
// //     }
// //     if (line.trim() === "" || line.trim().startsWith("━")) {
// //       return <div key={i} className="agro-divider" />;
// //     }
// //     return (
// //       <div key={i} className="agro-line">
// //         {line}
// //       </div>
// //     );
// //   });
// // }

// // /* ─── Typing dots ──────────────────────────────────────────────── */
// // const TypingDots = () => (
// //   <div className="typing-dots">
// //     <span /><span /><span />
// //   </div>
// // );

// // /* ─── Voice button states ──────────────────────────────────────── */
// // const MicIcon = ({ active, listening }) => (
// //   <svg viewBox="0 0 24 24" fill="none" className={`mic-icon ${active ? "mic-active" : ""} ${listening ? "mic-listening" : ""}`}>
// //     <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor" />
// //     <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
// //     <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //     <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
// //   </svg>
// // );

// // const SendIcon = () => (
// //   <svg viewBox="0 0 24 24" fill="none" className="send-icon">
// //     <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
// //     <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
// //   </svg>
// // );

// // /* ═══════════════════════════════════════════════════════════════ */
// // /*  MAIN CHATBOT COMPONENT                                         */
// // /* ═══════════════════════════════════════════════════════════════ */
// // function Chatbot() {
// //   const token = localStorage.getItem("token");
// //   const farmerName = localStorage.getItem("farmerName") || null;

// //   const INITIAL_MSG = {
// //     sender: "bot",
// //     text: farmerName
// //       ? `👋 Namaste ${farmerName}! Main ek AI Assitant hoon — aapka personal fasal bechne ka assistant.`
// //       : "👋 Namaste! I'm AI Assitant — your personal crop selling assistant.",
// //     time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
// //   };

// //   const [messages, setMessages] = useState([INITIAL_MSG]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [chatId, setChatId] = useState(null);
// //   const [isListening, setIsListening] = useState(false);
// //   const [voiceSupported, setVoiceSupported] = useState(false);
// //   const [voiceLang, setVoiceLang] = useState("en-IN");
// //   const [transcript, setTranscript] = useState("");
// //   const [showLangPicker, setShowLangPicker] = useState(false);
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [showSuggestions, setShowSuggestions] = useState(true);

// //   const messagesEndRef = useRef(null);
// //   const recognitionRef = useRef(null);
// //   const inputRef = useRef(null);

// //   /* ── scroll to bottom ── */
// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   /* ── check voice support ── */
// //   useEffect(() => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (SpeechRecognition) setVoiceSupported(true);
// //   }, []);

// //   /* ── fetch/create chat ── */
// //   useEffect(() => {
// //     if (!token) return;
// //     (async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/chats", {
// //           headers: { Authorization: token },
// //         });
// //         const data = await res.json();
// //         if (data.length > 0) {
// //           setMessages(data[0].messages.length ? data[0].messages : [INITIAL_MSG]);
// //           setChatId(data[0]._id);
// //           setShowSuggestions(data[0].messages.length <= 1);
// //         } else {
// //           const cr = await fetch("http://localhost:5000/api/chats", {
// //             method: "POST",
// //             headers: { Authorization: token },
// //           });
// //           const newChat = await cr.json();
// //           setChatId(newChat._id);
// //         }
// //       } catch {}
// //     })();
// //   }, []);

// //   /* ── voice recognition ── */
// //   const startListening = useCallback(() => {
// //     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// //     if (!SpeechRecognition) return;

// //     const recognition = new SpeechRecognition();
// //     recognition.lang = voiceLang;
// //     recognition.interimResults = true;
// //     recognition.maxAlternatives = 1;

// //     recognition.onstart = () => setIsListening(true);

// //     recognition.onresult = (e) => {
// //       const t = Array.from(e.results)
// //         .map((r) => r[0].transcript)
// //         .join("");
// //       setTranscript(t);
// //       setInput(t);
// //     };

// //     recognition.onend = () => {
// //       setIsListening(false);
// //       setTranscript("");
// //     };

// //     recognition.onerror = () => {
// //       setIsListening(false);
// //       setTranscript("");
// //     };

// //     recognitionRef.current = recognition;
// //     recognition.start();
// //   }, [voiceLang]);

// //   const stopListening = useCallback(() => {
// //     recognitionRef.current?.stop();
// //     setIsListening(false);
// //   }, []);

// //   const toggleVoice = () => {
// //     if (isListening) {
// //       stopListening();
// //       if (input.trim()) sendMessage(input);
// //     } else {
// //       startListening();
// //     }
// //   };

// //   /* ── text-to-speech for bot replies ── */
// //   const speakText = (text) => {
// //     if (!window.speechSynthesis) return;
// //     window.speechSynthesis.cancel();
// //     const plain = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
// //     const utterance = new SpeechSynthesisUtterance(plain);
// //     utterance.lang = voiceLang;
// //     utterance.rate = 0.95;
// //     utterance.onstart = () => setIsSpeaking(true);
// //     utterance.onend = () => setIsSpeaking(false);
// //     window.speechSynthesis.speak(utterance);
// //   };

// //   /* ── new chat ── */
// //   const newChat = async () => {
// //     try {
// //       const res = await fetch("http://localhost:5000/api/chats", {
// //         method: "POST",
// //         headers: { Authorization: token },
// //       });
// //       const chat = await res.json();
// //       setChatId(chat._id);
// //       setMessages([INITIAL_MSG]);
// //       setInput("");
// //       setShowSuggestions(true);
// //     } catch {}
// //   };

// //   /* ── save message to DB ── */
// //   const saveMessage = async (message) => {
// //     if (!chatId || !token) return;
// //     await fetch("http://localhost:5000/api/chats/message", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json", Authorization: token },
// //       body: JSON.stringify({ chatId, message }),
// //     }).catch(() => {});
// //   };

// //   /* ── send message ── */
// //   const sendMessage = async (text) => {
// //     const msg = (text || input).trim();
// //     if (!msg || loading) return;

// //     setInput("");
// //     setShowSuggestions(false);

// //     const userMsg = {
// //       sender: "user",
// //       text: msg,
// //       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
// //     };

// //     await saveMessage(userMsg);
// //     setMessages((prev) => [...prev, userMsg]);
// //     setLoading(true);

// //     try {
// //       const res = await fetch("http://localhost:5000/api/chat", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message: msg, farmerName }),
// //       });
// //       const data = await res.json();

// //       // Auto-detect reply language for TTS
// //       const isHindi = /[\u0900-\u097F]/.test(data.reply);
// //       if (isHindi) setVoiceLang("hi-IN");

// //       const botMsg = {
// //         sender: "bot",
// //         text: data.reply,
// //         time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
// //         meta: data.meta || null,
// //       };

// //       await saveMessage(botMsg);
// //       setMessages((prev) => [...prev, botMsg]);

// //     } catch {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           sender: "bot",
// //           text: "⚠️ Server error. Please try again.",
// //           time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
// //         },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   /* ─────────────────────────────────────────────────────────────── */
// //   return (
// //     <>
// //       <style>{CSS}</style>

// //       <div className="agro-root">

// //         {/* ── SIDEBAR ── */}
// //         <aside className="agro-sidebar">
// //           <div className="agro-logo">
// //             <span className="agro-logo-icon">🌾</span>
// //             <div>
// //               <div className="agro-logo-title">AgroAI</div>
// //               <div className="agro-logo-sub">Crop Intelligence</div>
// //             </div>
// //           </div>

// //           <button className="agro-new-chat" onClick={newChat}>
// //             <span>＋</span> New Conversation
// //           </button>

// //           {/* Language switcher */}
// //           <div className="agro-lang-section">
// //             <div className="agro-lang-label">Voice Language</div>
// //             <div className="agro-lang-toggle">
// //               <button
// //                 className={`agro-lang-btn ${voiceLang === "en-IN" ? "active" : ""}`}
// //                 onClick={() => setVoiceLang("en-IN")}
// //               >
// //                 🇬🇧 English
// //               </button>
// //               <button
// //                 className={`agro-lang-btn ${voiceLang === "hi-IN" ? "active" : ""}`}
// //                 onClick={() => setVoiceLang("hi-IN")}
// //               >
// //                 🇮🇳 हिंदी
// //               </button>
// //             </div>
// //           </div>

// //           <div className="agro-sidebar-footer">
          
// //             <div className="footer-badge">📡 Live Mandi Data</div> 
// //             <div className="footer-tag">Made for Farmers of Uttarakhand</div>
// //           </div>
// //         </aside>

// //         {/* ── MAIN CHAT ── */}
// //         <main className="agro-main">

// //           {/* Header */}
// //           <header className="agro-header">
// //             <div className="agro-header-left">
// //               <div className="agro-avatar">🤖</div>
// //               <div>
// //                 <div className="agro-header-title">Crop Selling Assistant</div>
// //                 <div className="agro-header-status">
// //                   <span className="status-dot" />
// //                   Online · Haldwani Market
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="agro-header-right">
// //               {isSpeaking && (
// //                 <div className="speaking-badge">
// //                   🔊 Speaking...
// //                 </div>
// //               )}
// //               <div className="agro-voice-lang-badge">
// //                 {voiceLang === "hi-IN" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
// //               </div>
// //             </div>
// //           </header>

// //           {/* Messages */}
// //           <div className="agro-messages">

// //             {messages.map((msg, i) => (
// //               <div key={i} className={`agro-msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}>
// //                 {msg.sender === "bot" && (
// //                   <div className="bot-avatar-sm">🌾</div>
// //                 )}
// //                 <div className={`agro-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
// //                   <div className="bubble-content">
// //                     {msg.sender === "bot" ? formatBotMessage(msg.text) : msg.text}
// //                   </div>

// //                   {/* Meta tags from server */}
// //                   {msg.meta && (
// //                     <div className="meta-tags">
// //                       <span className="meta-tag">🌱 {msg.meta.crop}</span>
// //                       <span className="meta-tag">📍 {msg.meta.location}</span>
// //                       {msg.meta.quantity > 0 && (
// //                         <span className="meta-tag">⚖️ {msg.meta.quantity}kg</span>
// //                       )}
// //                       <span className="meta-tag">
// //                         {msg.meta.language === "hindi" ? "🇮🇳 Hindi" : "🇬🇧 English"}
// //                       </span>
// //                     </div>
// //                   )}

// //                   <div className="bubble-footer">
// //                     <span className="bubble-time">{msg.time}</span>
// //                     {msg.sender === "bot" && (
// //                       <button
// //                         className="speak-btn"
// //                         onClick={() => speakText(msg.text)}
// //                         title="Listen to this"
// //                       >
// //                         🔊
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}

// //             {loading && (
// //               <div className="agro-msg-row bot-row">
// //                 <div className="bot-avatar-sm">🌾</div>
// //                 <div className="bot-bubble agro-bubble">
// //                   <TypingDots />
// //                 </div>
// //               </div>
// //             )}

// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Suggestions */}
// //           {showSuggestions && (
// //             <div className="agro-suggestions">
// //               {SUGGESTIONS.map((s, i) => (
// //                 <button
// //                   key={i}
// //                   className="suggestion-pill"
// //                   onClick={() => sendMessage(s.query)}
// //                 >
// //                   {s.label}
// //                 </button>
// //               ))}
// //             </div>
// //           )}

// //           {/* Voice transcript preview */}
// //           {isListening && transcript && (
// //             <div className="voice-transcript">
// //               <span className="transcript-dot" />
// //               {transcript}
// //             </div>
// //           )}

// //           {/* Input bar */}
// //           <div className="agro-input-bar">
// //             {isListening && (
// //               <div className="listening-ring" />
// //             )}
// //             <input
// //               ref={inputRef}
// //               value={input}
// //               disabled={loading}
// //               onChange={(e) => setInput(e.target.value)}
// //               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //               placeholder={
// //                 isListening
// //                   ? "🎤 Listening... speak now"
// //                   : voiceLang === "hi-IN"
// //                   ? "अपनी फसल के बारे में पूछें..."
// //                   : "Ask about crops, price, buyers..."
// //               }
// //               className="agro-input"
// //             />

// //             {voiceSupported && (
// //               <button
// //                 className={`agro-mic-btn ${isListening ? "listening" : ""}`}
// //                 onClick={toggleVoice}
// //                 title={isListening ? "Stop listening" : "Start voice input"}
// //               >
// //                 <MicIcon active={voiceSupported} listening={isListening} />
// //                 {isListening && <span className="mic-pulse" />}
// //               </button>
// //             )}

// //             <button
// //               className="agro-send-btn"
// //               onClick={() => sendMessage()}
// //               disabled={loading || !input.trim()}
// //             >
// //               <SendIcon />
// //             </button>
// //           </div>

// //           <div className="agro-footer-note">
// //             AgroAI uses live mandi data + LLaMA AI · Prices are indicative
// //           </div>
// //         </main>
// //       </div>
// //     </>
// //   );
// // }

// // /* ═══════════════════════════════════════════════════════════════ */
// // /*  CSS                                                             */
// // /* ═══════════════════════════════════════════════════════════════ */
// // const CSS = `
// //   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

// //   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //   :root {
// //     --agro-bg: #0a0f0a;
// //     --agro-surface: #111711;
// //     --agro-card: #161e16;
// //     --agro-border: rgba(255,255,255,0.07);
// //     --agro-green: #22c55e;
// //     --agro-green-dim: #16a34a;
// //     --agro-green-glow: rgba(34,197,94,0.15);
// //     --agro-gold: #f59e0b;
// //     --agro-text: #e8f5e9;
// //     --agro-text-dim: rgba(232,245,233,0.55);
// //     --agro-user-bubble: linear-gradient(135deg, #16a34a, #15803d);
// //     --agro-bot-bubble: #1a241a;
// //     --radius: 18px;
// //     --radius-sm: 10px;
// //     --font-display: 'Syne', sans-serif;
// //     --font-body: 'DM Sans', sans-serif;
// //     --sidebar-w: 260px;
// //   }

// //   html, body, #root { height: 100%; background: var(--agro-bg); }

// //   .agro-root {
// //     display: flex;
// //     height: 100vh;
// //     font-family: var(--font-body);
// //     color: var(--agro-text);
// //     overflow: hidden;
// //     background: var(--agro-bg);
// //   }

// //   /* ── SIDEBAR ── */
// //   .agro-sidebar {
// //     width: var(--sidebar-w);
// //     min-width: var(--sidebar-w);
// //     background: var(--agro-surface);
// //     border-right: 1px solid var(--agro-border);
// //     display: flex;
// //     flex-direction: column;
// //     padding: 24px 16px;
// //     gap: 20px;
// //     overflow-y: auto;
// //   }

// //   .agro-logo {
// //     display: flex;
// //     align-items: center;
// //     gap: 12px;
// //     padding: 8px 4px;
// //   }
// //   .agro-logo-icon { font-size: 32px; filter: drop-shadow(0 0 12px #22c55e88); }
// //   .agro-logo-title {
// //     font-family: var(--font-display);
// //     font-weight: 800;
// //     font-size: 20px;
// //     color: var(--agro-green);
// //     letter-spacing: -0.5px;
// //   }
// //   .agro-logo-sub {
// //     font-size: 10px;
// //     color: var(--agro-text-dim);
// //     letter-spacing: 1.5px;
// //     text-transform: uppercase;
// //     margin-top: 1px;
// //   }

// //   .agro-new-chat {
// //     display: flex;
// //     align-items: center;
// //     gap: 8px;
// //     background: var(--agro-green-glow);
// //     border: 1px solid rgba(34,197,94,0.3);
// //     color: var(--agro-green);
// //     padding: 10px 16px;
// //     border-radius: var(--radius-sm);
// //     font-family: var(--font-body);
// //     font-size: 14px;
// //     font-weight: 500;
// //     cursor: pointer;
// //     transition: all 0.2s;
// //   }
// //   .agro-new-chat:hover {
// //     background: rgba(34,197,94,0.25);
// //     border-color: var(--agro-green);
// //     transform: translateY(-1px);
// //     box-shadow: 0 4px 20px var(--agro-green-glow);
// //   }

// //   .agro-lang-section { display: flex; flex-direction: column; gap: 8px; }
// //   .agro-lang-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--agro-text-dim); }
// //   .agro-lang-toggle { display: flex; gap: 6px; }
// //   .agro-lang-btn {
// //     flex: 1;
// //     padding: 7px 4px;
// //     border-radius: 8px;
// //     border: 1px solid var(--agro-border);
// //     background: transparent;
// //     color: var(--agro-text-dim);
// //     font-size: 12px;
// //     cursor: pointer;
// //     transition: all 0.2s;
// //     font-family: var(--font-body);
// //   }
// //   .agro-lang-btn.active {
// //     background: var(--agro-green-glow);
// //     border-color: var(--agro-green);
// //     color: var(--agro-green);
// //     font-weight: 500;
// //   }
// //   .agro-lang-btn:hover:not(.active) { border-color: rgba(255,255,255,0.15); color: var(--agro-text); }

// //   .agro-sidebar-stats {
// //     display: flex;
// //     gap: 8px;
// //   }
// //   .stat-card {
// //     flex: 1;
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     border-radius: 10px;
// //     padding: 10px 6px;
// //     text-align: center;
// //   }
// //   .stat-num { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--agro-green); }
// //   .stat-lbl { font-size: 9px; color: var(--agro-text-dim); text-transform: uppercase; letter-spacing: 1px; margin-top: 2px; }

// //   .agro-sidebar-footer { margin-top: auto; display: flex; flex-direction: column; gap: 6px; }
// //   .footer-badge {
// //     font-size: 11px;
// //     color: var(--agro-text-dim);
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     padding: 5px 10px;
// //     border-radius: 6px;
// //   }
// //   .footer-tag {
// //     font-size: 10px;
// //     color: var(--agro-text-dim);
// //     text-align: center;
// //     margin-top: 4px;
// //     opacity: 0.6;
// //   }

// //   /* ── MAIN ── */
// //   .agro-main {
// //     flex: 1;
// //     display: flex;
// //     flex-direction: column;
// //     overflow: hidden;
// //     background: radial-gradient(ellipse at 60% 0%, rgba(34,197,94,0.05) 0%, transparent 60%), var(--agro-bg);
// //   }

// //   /* Header */
// //   .agro-header {
// //     padding: 16px 24px;
// //     border-bottom: 1px solid var(--agro-border);
// //     display: flex;
// //     align-items: center;
// //     justify-content: space-between;
// //     background: rgba(10,15,10,0.8);
// //     backdrop-filter: blur(10px);
// //   }
// //   .agro-header-left { display: flex; align-items: center; gap: 12px; }
// //   .agro-avatar {
// //     width: 42px; height: 42px;
// //     background: linear-gradient(135deg, #16a34a, #15803d);
// //     border-radius: 12px;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 20px;
// //     box-shadow: 0 0 20px rgba(34,197,94,0.3);
// //   }
// //   .agro-header-title { font-family: var(--font-display); font-weight: 700; font-size: 16px; }
// //   .agro-header-status { font-size: 12px; color: var(--agro-text-dim); display: flex; align-items: center; gap: 5px; margin-top: 2px; }
// //   .status-dot { width: 7px; height: 7px; background: var(--agro-green); border-radius: 50%; box-shadow: 0 0 6px var(--agro-green); animation: pulse 2s infinite; }
// //   @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

// //   .agro-header-right { display: flex; align-items: center; gap: 10px; }
// //   .speaking-badge {
// //     font-size: 12px; color: var(--agro-gold);
// //     background: rgba(245,158,11,0.1);
// //     border: 1px solid rgba(245,158,11,0.3);
// //     padding: 4px 10px; border-radius: 20px;
// //     animation: fadeIn 0.3s;
// //   }
// //   .agro-voice-lang-badge {
// //     font-size: 12px; color: var(--agro-text-dim);
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     padding: 4px 10px; border-radius: 20px;
// //   }

// //   /* Messages */
// //   .agro-messages {
// //     flex: 1;
// //     overflow-y: auto;
// //     padding: 24px;
// //     display: flex;
// //     flex-direction: column;
// //     gap: 16px;
// //     scrollbar-width: thin;
// //     scrollbar-color: rgba(34,197,94,0.2) transparent;
// //   }
// //   .agro-messages::-webkit-scrollbar { width: 4px; }
// //   .agro-messages::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.2); border-radius: 4px; }

// //   .agro-msg-row { display: flex; align-items: flex-end; gap: 10px; animation: slideUp 0.25s ease; }
// //   @keyframes slideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// //   .user-row { justify-content: flex-end; }
// //   .bot-row { justify-content: flex-start; }

// //   .bot-avatar-sm {
// //     width: 30px; height: 30px; min-width: 30px;
// //     background: linear-gradient(135deg, #166534, #15803d);
// //     border-radius: 10px;
// //     display: flex; align-items: center; justify-content: center;
// //     font-size: 14px;
// //   }

// //   .agro-bubble {
// //     max-width: 68%;
// //     padding: 14px 18px;
// //     border-radius: var(--radius);
// //     font-size: 14px;
// //     line-height: 1.6;
// //   }
// //   .user-bubble {
// //     background: var(--agro-user-bubble);
// //     color: #fff;
// //     border-bottom-right-radius: 4px;
// //     box-shadow: 0 4px 20px rgba(22,163,74,0.3);
// //   }
// //   .bot-bubble {
// //     background: var(--agro-bot-bubble);
// //     border: 1px solid var(--agro-border);
// //     border-bottom-left-radius: 4px;
// //     color: var(--agro-text);
// //   }

// //   /* Formatted bot content */
// //   .agro-section-header {
// //     font-weight: 600; color: var(--agro-green);
// //     margin-top: 8px; margin-bottom: 2px;
// //     font-size: 13px; letter-spacing: 0.3px;
// //   }
// //   .agro-bullet { padding-left: 4px; color: var(--agro-text); font-size: 13.5px; }
// //   .agro-line { color: var(--agro-text); }
// //   .agro-divider { height: 8px; }

// //   /* Meta tags */
// //   .meta-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--agro-border); }
// //   .meta-tag {
// //     font-size: 11px; padding: 3px 8px; border-radius: 20px;
// //     background: rgba(34,197,94,0.08);
// //     border: 1px solid rgba(34,197,94,0.2);
// //     color: var(--agro-green);
// //   }

// //   /* Bubble footer */
// //   .bubble-footer { display: flex; align-items: center; justify-content: flex-end; gap: 6px; margin-top: 8px; }
// //   .bubble-time { font-size: 10px; opacity: 0.45; }
// //   .speak-btn {
// //     background: none; border: none; cursor: pointer; font-size: 13px;
// //     opacity: 0.5; transition: opacity 0.2s; padding: 0;
// //   }
// //   .speak-btn:hover { opacity: 1; }

// //   /* Typing dots */
// //   .typing-dots { display: flex; gap: 5px; align-items: center; padding: 4px 0; }
// //   .typing-dots span {
// //     width: 8px; height: 8px;
// //     background: var(--agro-green);
// //     border-radius: 50%;
// //     animation: bounce 1.2s infinite;
// //     opacity: 0.7;
// //   }
// //   .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
// //   .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
// //   @keyframes bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-8px)} }

// //   /* Suggestions */
// //   .agro-suggestions {
// //     display: flex; flex-wrap: wrap; gap: 8px;
// //     padding: 0 24px 12px;
// //     animation: fadeIn 0.4s ease;
// //   }
// //   @keyframes fadeIn { from{opacity:0} to{opacity:1} }
// //   .suggestion-pill {
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     color: var(--agro-text);
// //     padding: 8px 14px;
// //     border-radius: 20px;
// //     font-size: 13px;
// //     cursor: pointer;
// //     font-family: var(--font-body);
// //     transition: all 0.2s;
// //   }
// //   .suggestion-pill:hover {
// //     border-color: var(--agro-green);
// //     color: var(--agro-green);
// //     background: var(--agro-green-glow);
// //     transform: translateY(-1px);
// //   }

// //   /* Voice transcript */
// //   .voice-transcript {
// //     margin: 0 24px 8px;
// //     background: rgba(34,197,94,0.05);
// //     border: 1px solid rgba(34,197,94,0.2);
// //     border-radius: 10px;
// //     padding: 8px 14px;
// //     font-size: 13px;
// //     color: var(--agro-green);
// //     display: flex; align-items: center; gap: 8px;
// //   }
// //   .transcript-dot {
// //     width: 8px; height: 8px; min-width: 8px;
// //     background: #ef4444; border-radius: 50%;
// //     animation: blink 1s infinite;
// //     box-shadow: 0 0 6px #ef4444;
// //   }
// //   @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

// //   /* Input bar */
// //   .agro-input-bar {
// //     padding: 12px 20px 12px;
// //     display: flex; align-items: center; gap: 10px;
// //     background: rgba(10,15,10,0.9);
// //     border-top: 1px solid var(--agro-border);
// //     position: relative;
// //   }
// //   .listening-ring {
// //     position: absolute; inset: 0;
// //     border-radius: 0;
// //     box-shadow: inset 0 0 0 2px rgba(34,197,94,0.4);
// //     animation: ringPulse 1.5s infinite;
// //     pointer-events: none;
// //   }
// //   @keyframes ringPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }

// //   .agro-input {
// //     flex: 1;
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     border-radius: 14px;
// //     padding: 13px 18px;
// //     color: var(--agro-text);
// //     font-family: var(--font-body);
// //     font-size: 14px;
// //     outline: none;
// //     transition: border-color 0.2s;
// //   }
// //   .agro-input:focus { border-color: rgba(34,197,94,0.5); }
// //   .agro-input::placeholder { color: var(--agro-text-dim); }
// //   .agro-input:disabled { opacity: 0.6; }

// //   .agro-mic-btn {
// //     width: 46px; height: 46px; min-width: 46px;
// //     border-radius: 14px;
// //     background: var(--agro-card);
// //     border: 1px solid var(--agro-border);
// //     cursor: pointer;
// //     display: flex; align-items: center; justify-content: center;
// //     position: relative;
// //     transition: all 0.2s;
// //     color: var(--agro-text-dim);
// //   }
// //   .agro-mic-btn:hover { border-color: var(--agro-green); color: var(--agro-green); }
// //   .agro-mic-btn.listening {
// //     background: rgba(239,68,68,0.1);
// //     border-color: #ef4444;
// //     color: #ef4444;
// //     box-shadow: 0 0 20px rgba(239,68,68,0.2);
// //   }
// //   .mic-icon { width: 20px; height: 20px; }
// //   .mic-pulse {
// //     position: absolute; inset: -3px;
// //     border-radius: 16px;
// //     border: 2px solid #ef4444;
// //     animation: micPulse 1s infinite;
// //     pointer-events: none;
// //   }
// //   @keyframes micPulse { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(1.3);opacity:0} }

// //   .agro-send-btn {
// //     width: 46px; height: 46px; min-width: 46px;
// //     border-radius: 14px;
// //     background: linear-gradient(135deg, #16a34a, #15803d);
// //     border: none;
// //     cursor: pointer;
// //     display: flex; align-items: center; justify-content: center;
// //     color: white;
// //     transition: all 0.2s;
// //     box-shadow: 0 4px 15px rgba(22,163,74,0.3);
// //   }
// //   .agro-send-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(22,163,74,0.45); }
// //   .agro-send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
// //   .send-icon { width: 18px; height: 18px; }

// //   .agro-footer-note {
// //     text-align: center;
// //     font-size: 10px;
// //     color: var(--agro-text-dim);
// //     opacity: 0.45;
// //     padding: 6px;
// //     letter-spacing: 0.3px;
// //   }

// //   /* Scrollbar */
// //   .agro-sidebar::-webkit-scrollbar { width: 3px; }
// //   .agro-sidebar::-webkit-scrollbar-thumb { background: var(--agro-border); border-radius: 3px; }
// // `;

// // export default Chatbot;

// import { useState, useRef, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// /* ─── Quick suggestions ─────────────────────────────────────────── */
// const SUGGESTIONS = [
//   { label: "🍅 Tamatar ka bhav", query: "Haldwani mein tamatar ka bhav kya hai aaj?" },
//   { label: "🧅 Pyaz kahan bechun", query: "Pyaz 60 kg kahan bechun Haldwani mein?" },
//   { label: "🥔 Aloo buyers", query: "Best buyers for potatoes near Haldwani" },
//   { label: "🥦 Gobhi mandi", query: "Cauliflower mandi price and best time to sell" },
//   { label: "💰 Best price tips", query: "How to get maximum price for my crops?" },
//   { label: "⏰ Kab bechna chahiye", query: "Sabji bechne ka sabse accha samay kab hai?" },
// ];

// /* ─── Particle for background ───────────────────────────────────── */
// function GrainOverlay() {
//   return (
//     <svg className="grain-svg" xmlns="http://www.w3.org/2000/svg">
//       <filter id="grain">
//         <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
//         <feColorMatrix type="saturate" values="0" />
//       </filter>
//       <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
//     </svg>
//   );
// }

// /* ─── Format bot message with rich markup ───────────────────────── */
// function BotMessage({ text }) {
//   const lines = text.split("\n");
//   return (
//     <div className="bot-content">
//       {lines.map((line, i) => {
//         const trimmed = line.trim();
//         if (!trimmed) return <div key={i} className="msg-spacer" />;
//         if (/^━+$/.test(trimmed)) return <div key={i} className="msg-divider" />;

//         const sectionMatch = trimmed.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
//         if (sectionMatch) {
//           return (
//             <div key={i} className="msg-section">
//               <span className="section-icon">{sectionMatch[1]}</span>
//               <span className="section-title">{sectionMatch[2]}</span>
//             </div>
//           );
//         }
//         if (trimmed.startsWith("•")) {
//           return (
//             <div key={i} className="msg-bullet">
//               <span className="bullet-dot" />
//               <span>{trimmed.slice(1).trim()}</span>
//             </div>
//           );
//         }
//         return <p key={i} className="msg-text">{trimmed}</p>;
//       })}
//     </div>
//   );
// }

// /* ─── Typing indicator ──────────────────────────────────────────── */
// function TypingIndicator() {
//   return (
//     <div className="typing-wrap">
//       <div className="bot-avatar-sm">
//         <span>🌾</span>
//       </div>
//       <div className="typing-bubble">
//         <div className="typing-bar" />
//         <div className="typing-bar" style={{ animationDelay: "0.2s", width: "55%" }} />
//         <div className="typing-bar" style={{ animationDelay: "0.35s", width: "35%" }} />
//       </div>
//     </div>
//   );
// }

// /* ─── SVG Icons ─────────────────────────────────────────────────── */
// const IconSend = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const IconMic = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/>
//     <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
//     <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconMicOff = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconHome = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const IconPlus = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
//   </svg>
// );
// const IconSpeak = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
//     <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconCopy = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
//     <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/>
//   </svg>
// );
// const IconMenu = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//     <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// /* ═══════════════════════════════════════════════════════════════ */
// /*  MAIN CHATBOT                                                    */
// /* ═══════════════════════════════════════════════════════════════ */
// export default function Chatbot() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const farmerName = localStorage.getItem("farmerName") || null;

//   const INIT = {
//     sender: "bot",
//     text: farmerName
//       ? `Namaste ${farmerName} ji! 🌾\n\nMain AgroAI hoon — aapka personal fasal bechne ka saathi.`
//       : `Namaste! 🌾\nI'm AgroAI — your personal crop selling assistant for Haldwani.`,
//     time: now(),
//     id: "init",
//   };

//   function now() {
//     return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   }

//   const [messages, setMessages] = useState([INIT]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [chatId, setChatId] = useState(null);
//   const [isListening, setIsListening] = useState(false);
//   const [voiceSupported, setVoiceSupported] = useState(false);
//   const [voiceLang, setVoiceLang] = useState("en-IN");
//   const [transcript, setTranscript] = useState("");
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [copiedId, setCopiedId] = useState(null);
//   const [charCount, setCharCount] = useState(0);
//   const [mobileSidebar, setMobileSidebar] = useState(false);

//   const bottomRef = useRef(null);
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
//   useEffect(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (SR) setVoiceSupported(true);
//   }, []);

//   useEffect(() => {
//     if (!token) return;
//     (async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
//         const data = await res.json();
//         if (data.length > 0) {
//           setMessages(data[0].messages.length ? data[0].messages : [INIT]);
//           setChatId(data[0]._id);
//           setShowSuggestions(data[0].messages.length <= 1);
//         } else {
//           const cr = await fetch("http://localhost:5000/api/chats", {
//             method: "POST", headers: { Authorization: token },
//           });
//           const chat = await cr.json();
//           setChatId(chat._id);
//         }
//       } catch {}
//     })();
//   }, []);

//   /* ── Voice ── */
//   const startListening = useCallback(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return;
//     const r = new SR();
//     r.lang = voiceLang;
//     r.interimResults = true;
//     r.onstart = () => setIsListening(true);
//     r.onresult = (e) => {
//       const t = Array.from(e.results).map(x => x[0].transcript).join("");
//       setTranscript(t);
//       setInput(t);
//       setCharCount(t.length);
//     };
//     r.onend = () => { setIsListening(false); setTranscript(""); };
//     r.onerror = () => { setIsListening(false); setTranscript(""); };
//     recognitionRef.current = r;
//     r.start();
//   }, [voiceLang]);

//   const stopListening = useCallback(() => {
//     recognitionRef.current?.stop();
//     setIsListening(false);
//   }, []);

//   const toggleVoice = () => {
//     if (isListening) { stopListening(); if (input.trim()) sendMessage(input); }
//     else startListening();
//   };

//   const speakText = (text) => {
//     if (!window.speechSynthesis) return;
//     window.speechSynthesis.cancel();
//     const clean = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
//     const u = new SpeechSynthesisUtterance(clean);
//     u.lang = voiceLang; u.rate = 0.92;
//     u.onstart = () => setIsSpeaking(true);
//     u.onend = () => setIsSpeaking(false);
//     window.speechSynthesis.speak(u);
//   };

//   const copyText = (text, id) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopiedId(id);
//       setTimeout(() => setCopiedId(null), 2000);
//     });
//   };

//   /* ── New chat ── */
//   const newChat = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/chats", {
//         method: "POST", headers: { Authorization: token },
//       });
//       const chat = await res.json();
//       setChatId(chat._id);
//       setMessages([INIT]);
//       setInput(""); setCharCount(0);
//       setShowSuggestions(true);
//       setMobileSidebar(false);
//     } catch {
//       setMessages([INIT]);
//       setShowSuggestions(true);
//     }
//   };

//   const saveMessage = async (msg) => {
//     if (!chatId || !token) return;
//     await fetch("http://localhost:5000/api/chats/message", {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Authorization: token },
//       body: JSON.stringify({ chatId, message: msg }),
//     }).catch(() => {});
//   };

//   /* ── Send ── */
//   const sendMessage = async (text) => {
//     const msg = (text || input).trim();
//     if (!msg || loading) return;
//     setInput(""); setCharCount(0);
//     setShowSuggestions(false);

//     const userMsg = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
//     await saveMessage(userMsg);
//     setMessages(p => [...p, userMsg]);
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: msg, farmerName }),
//       });
//       const data = await res.json();
//       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
//       const botMsg = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
//       await saveMessage(botMsg);
//       setMessages(p => [...p, botMsg]);
//     } catch {
//       setMessages(p => [...p, {
//         sender: "bot",
//         text: "⚠️ Server error. Please try again.",
//         time: now(), id: Date.now() + "_err",
//       }]);
//     } finally {
//       setLoading(false);
//       setTimeout(() => inputRef.current?.focus(), 100);
//     }
//   };

//   const handleKey = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
//   };

//   /* ═══ RENDER ═══════════════════════════════════════════════════ */
//   return (
//     <>
//       <style>{CSS}</style>
//       <GrainOverlay />

//       <div className="chat-root">

//         {/* ══ SIDEBAR ══════════════════════════════════════════════ */}
//         <AnimatePresence>
//           {(sidebarOpen || mobileSidebar) && (
//             <motion.aside
//               key="sidebar"
//               initial={{ x: -280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -280, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="sidebar"
//             >
//               {/* Brand */}
//               <div className="sb-brand">
//                 <div className="sb-logo">🌾</div>
//                 <div>
//                   <div className="sb-title">AgroAI</div>
//                   <div className="sb-sub">Crop Intelligence</div>
//                 </div>
//               </div>

//               {/* Home button */}
//               <button className="sb-home-btn" onClick={() => navigate("/")}>
//                 <IconHome />
//                 Back to Home
//               </button>

//               {/* New chat */}
//               <button className="sb-new-btn" onClick={newChat}>
//                 <IconPlus />
//                 New Conversation
//               </button>

//               <div className="sb-divider" />

//               {/* Farmer info */}
//               {farmerName && (
//                 <div className="sb-farmer">
//                   <div className="sb-farmer-avatar">{farmerName[0].toUpperCase()}</div>
//                   <div>
//                     <div className="sb-farmer-name">{farmerName}</div>
//                     <div className="sb-farmer-tag">Registered Farmer</div>
//                   </div>
//                 </div>
//               )}

//               {/* Voice Language */}
//               <div className="sb-section-label">Voice Language</div>
//               <div className="sb-lang-row">
//                 {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([val, flag, lbl]) => (
//                   <button
//                     key={val}
//                     className={`sb-lang-btn ${voiceLang === val ? "sb-lang-active" : ""}`}
//                     onClick={() => setVoiceLang(val)}
//                   >
//                     {flag} {lbl}
//                   </button>
//                 ))}
//               </div>

//               {/* Live status */}
//               <div className="sb-section-label" style={{ marginTop: 24 }}>Market Status</div>
//               <div className="sb-status-card">
//                 <div className="sb-status-row">
//                   <span className="live-dot" />
//                   <span className="sb-status-text">Live Mandi Data</span>
//                 </div>
//                 <div className="sb-status-row" style={{ marginTop: 6 }}>
//                   <span className="sb-status-loc">📍 Haldwani · Uttarakhand</span>
//                 </div>
//                 <div className="sb-crop-pills">
//                   {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => (
//                     <span key={c} className="sb-crop-pill">{c}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* Tips */}
//               <div className="sb-tip">
//                 💡 <strong>Pro tip:</strong> Mention your crop name and quantity for hyper-accurate advice.
//               </div>

//               <div className="sb-footer">
//                 <div className="sb-footer-text">Made for farmers of Uttarakhand</div>
//                 {/* <div className="sb-footer-tech">Powered by LLaMA · Groq AI</div> */}
//               </div>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* ══ MAIN ════════════════════════════════════════════════ */}
//         <div className="chat-main">

//           {/* ── Header ── */}
//           <header className="chat-header">
//             <div className="ch-left">
//               <button className="ch-menu-btn" onClick={() => { setSidebarOpen(p => !p); setMobileSidebar(p => !p); }}>
//                 <IconMenu />
//               </button>
//               <div className="ch-avatar">🤖</div>
//               <div>
//                 <div className="ch-title">AgroAI Assistant</div>
//                 <div className="ch-status">
//                   <span className="ch-dot" />
//                   Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}
//                 </div>
//               </div>
//             </div>

//             <div className="ch-right">
//               <AnimatePresence>
//                 {isSpeaking && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="speaking-badge"
//                   >
//                     <span className="speaking-wave" />
//                     <span className="speaking-wave" style={{ animationDelay: "0.15s" }} />
//                     <span className="speaking-wave" style={{ animationDelay: "0.3s" }} />
//                     Speaking
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//               {/* Mobile home btn */}
//               <button className="ch-home-mobile" onClick={() => navigate("/")} title="Go to Home">
//                 <IconHome />
//               </button>
//             </div>
//           </header>

//           {/* ── Messages ── */}
//           <div className="chat-messages">

//             <AnimatePresence initial={false}>
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={msg.id || i}
//                   initial={{ opacity: 0, y: 16, scale: 0.97 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
//                   className={`msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
//                 >
//                   {msg.sender === "bot" && (
//                     <div className="bot-avatar-sm"><span>🌾</span></div>
//                   )}

//                   <div className={`bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
//                     {msg.sender === "bot"
//                       ? <BotMessage text={msg.text} />
//                       : <p className="user-text">{msg.text}</p>
//                     }

//                     {/* Meta tags */}
//                     {msg.meta && (
//                       <div className="meta-row">
//                         {msg.meta.crop && <span className="meta-chip">🌱 {msg.meta.crop}</span>}
//                         {msg.meta.location && <span className="meta-chip">📍 {msg.meta.location}</span>}
//                         {msg.meta.quantity > 0 && <span className="meta-chip">⚖️ {msg.meta.quantity}kg</span>}
//                         <span className="meta-chip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
//                       </div>
//                     )}

//                     {/* Footer */}
//                     <div className="bubble-foot">
//                       <span className="bubble-time">{msg.time}</span>
//                       {msg.sender === "bot" && (
//                         <div className="bubble-actions">
//                           <button
//                             className="bbl-action-btn"
//                             onClick={() => speakText(msg.text)}
//                             title="Listen"
//                           >
//                             <IconSpeak />
//                           </button>
//                           <button
//                             className="bbl-action-btn"
//                             onClick={() => copyText(msg.text, msg.id || i)}
//                             title="Copy"
//                           >
//                             {copiedId === (msg.id || i) ? <span style={{ color: "#BBEC6C", fontSize: 11 }}>✓</span> : <IconCopy />}
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {msg.sender === "user" && (
//                     <div className="user-avatar-sm">
//                       {farmerName ? farmerName[0].toUpperCase() : "👤"}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {loading && <TypingIndicator />}
//             <div ref={bottomRef} />
//           </div>

//           {/* ── Suggestions ── */}
//           <AnimatePresence>
//             {showSuggestions && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 className="suggestions-wrap"
//               >
//                 <div className="suggestions-label">Quick questions</div>
//                 <div className="suggestions-row">
//                   {SUGGESTIONS.map((s, i) => (
//                     <motion.button
//                       key={i}
//                       whileHover={{ scale: 1.03, y: -1 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="suggestion-chip"
//                       onClick={() => sendMessage(s.query)}
//                     >
//                       {s.label}
//                     </motion.button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* ── Voice transcript ── */}
//           <AnimatePresence>
//             {isListening && transcript && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="transcript-bar"
//               >
//                 <span className="rec-dot" />
//                 <span className="transcript-text">{transcript}</span>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* ── Input ── */}
//           <div className={`input-wrap ${isListening ? "input-listening" : ""}`}>
//             <div className="input-inner">
//               <textarea
//                 ref={inputRef}
//                 value={input}
//                 disabled={loading}
//                 rows={1}
//                 onChange={(e) => { setInput(e.target.value); setCharCount(e.target.value.length); }}
//                 onKeyDown={handleKey}
//                 placeholder={
//                   isListening ? "🎤 Listening... speak now"
//                   : voiceLang === "hi-IN" ? "Apni fasal ke baare mein poochho..."
//                   : "Ask about crops, prices, buyers..."
//                 }
//                 className="chat-input"
//                 style={{ resize: "none", overflow: "hidden" }}
//                 onInput={(e) => {
//                   e.target.style.height = "auto";
//                   e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
//                 }}
//               />

//               <div className="input-actions">
//                 {charCount > 0 && (
//                   <span className="char-count">{charCount}</span>
//                 )}

//                 {voiceSupported && (
//                   <motion.button
//                     whileHover={{ scale: 1.08 }}
//                     whileTap={{ scale: 0.92 }}
//                     className={`action-btn mic-btn ${isListening ? "mic-on" : ""}`}
//                     onClick={toggleVoice}
//                     title={isListening ? "Stop" : "Voice input"}
//                   >
//                     {isListening ? <IconMicOff /> : <IconMic />}
//                     {isListening && <span className="mic-ring" />}
//                   </motion.button>
//                 )}

//                 <motion.button
//                   whileHover={{ scale: 1.08 }}
//                   whileTap={{ scale: 0.92 }}
//                   className="action-btn send-btn"
//                   onClick={() => sendMessage()}
//                   disabled={loading || !input.trim()}
//                 >
//                   <IconSend />
//                 </motion.button>
//               </div>
//             </div>

//             <div className="input-footer-note">
//               AgroAI · Live mandi data + LLaMA AI · Prices are indicative 
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// :root {
//   --bg: #050c05;
//   --surface: #0a120a;
//   --card: #0f1a0f;
//   --border: rgba(255,255,255,0.06);
//   --border-2: rgba(187,236,108,0.12);
//   --lime: #BBEC6C;
//   --lime-dim: rgba(187,236,108,0.55);
//   --lime-glow: rgba(187,236,108,0.08);
//   --lime-glow2: rgba(187,236,108,0.15);
//   --green: #22c55e;
//   --green-dim: rgba(34,197,94,0.6);
//   --text: #e8ede8;
//   --text-2: rgba(232,237,232,0.55);
//   --text-3: rgba(232,237,232,0.3);
//   --red: #f87171;
//   --user-bg: linear-gradient(145deg, #1a3a1a, #153015);
//   --bot-bg: #0f1a0f;
//   --radius: 20px;
//   --radius-sm: 12px;
//   --fw: 'DM Sans', sans-serif;
//   --fd: 'Instrument Serif', serif;
//   --fm: 'Geist Mono', monospace;
//   --sidebar: 272px;
// }

// html, body, #root { height: 100%; background: var(--bg); }

// .grain-svg {
//   position: fixed; inset: 0;
//   width: 100%; height: 100%;
//   pointer-events: none; z-index: 0;
// }

// .chat-root {
//   display: flex;
//   height: 100vh;
//   font-family: var(--fw);
//   color: var(--text);
//   overflow: hidden;
//   position: relative;
//   background:
//     radial-gradient(ellipse 60% 50% at 0% 0%, rgba(187,236,108,0.04) 0%, transparent 60%),
//     radial-gradient(ellipse 40% 60% at 100% 100%, rgba(34,197,94,0.03) 0%, transparent 60%),
//     var(--bg);
// }

// /* ── SIDEBAR ─────────────────────────────────── */
// .sidebar {
//   width: var(--sidebar);
//   min-width: var(--sidebar);
//   height: 100vh;
//   background: var(--surface);
//   border-right: 1px solid var(--border);
//   display: flex;
//   flex-direction: column;
//   padding: 20px 16px;
//   gap: 12px;
//   overflow-y: auto;
//   overflow-x: hidden;
//   z-index: 50;
//   flex-shrink: 0;
// }
// .sidebar::-webkit-scrollbar { width: 3px; }
// .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

// .sb-brand {
//   display: flex; align-items: center; gap: 10px;
//   padding: 4px 2px 12px;
//   border-bottom: 1px solid var(--border);
// }
// .sb-logo { font-size: 28px; filter: drop-shadow(0 0 10px rgba(187,236,108,0.5)); }
// .sb-title {
//   font-family: var(--fd);
//   font-size: 20px;
//   color: var(--lime);
//   letter-spacing: -0.3px;
// }
// .sb-sub {
//   font-size: 9px; color: var(--text-3);
//   text-transform: uppercase; letter-spacing: 2px;
//   margin-top: 1px;
// }

// .sb-home-btn {
//   display: flex; align-items: center; gap: 8px;
//   background: transparent;
//   border: 1px solid var(--border);
//   color: var(--text-2);
//   padding: 9px 14px;
//   border-radius: var(--radius-sm);
//   font-family: var(--fw); font-size: 13px; font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s;
//   width: 100%;
// }
// .sb-home-btn:hover {
//   border-color: rgba(187,236,108,0.3);
//   color: var(--lime);
//   background: var(--lime-glow);
// }

// .sb-new-btn {
//   display: flex; align-items: center; gap: 8px;
//   background: var(--lime-glow2);
//   border: 1px solid var(--border-2);
//   color: var(--lime);
//   padding: 10px 14px;
//   border-radius: var(--radius-sm);
//   font-family: var(--fw); font-size: 13px; font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s;
//   width: 100%;
// }
// .sb-new-btn:hover {
//   background: rgba(187,236,108,0.2);
//   border-color: rgba(187,236,108,0.4);
//   transform: translateY(-1px);
//   box-shadow: 0 4px 20px rgba(187,236,108,0.1);
// }

// .sb-divider { height: 1px; background: var(--border); margin: 2px 0; }

// .sb-farmer {
//   display: flex; align-items: center; gap: 10px;
//   background: var(--card);
//   border: 1px solid var(--border);
//   border-radius: var(--radius-sm);
//   padding: 10px 12px;
// }
// .sb-farmer-avatar {
//   width: 34px; height: 34px; min-width: 34px;
//   background: linear-gradient(135deg, #1a3a1a, #153015);
//   border: 1.5px solid var(--border-2);
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 14px; font-weight: 700; color: var(--lime);
//   font-family: var(--fd);
// }
// .sb-farmer-name { font-size: 13px; font-weight: 600; color: var(--text); }
// .sb-farmer-tag { font-size: 10px; color: var(--green-dim); margin-top: 1px; }

// .sb-section-label {
//   font-size: 9px; text-transform: uppercase;
//   letter-spacing: 2px; color: var(--text-3);
//   margin-top: 4px;
//   padding: 0 2px;
// }

// .sb-lang-row { display: flex; gap: 6px; }
// .sb-lang-btn {
//   flex: 1; padding: 8px 4px; border-radius: 8px;
//   border: 1px solid var(--border);
//   background: transparent; color: var(--text-2);
//   font-size: 12px; cursor: pointer; transition: all 0.2s;
//   font-family: var(--fw);
// }
// .sb-lang-btn:hover { border-color: rgba(187,236,108,0.2); color: var(--text); }
// .sb-lang-active {
//   background: var(--lime-glow2) !important;
//   border-color: var(--border-2) !important;
//   color: var(--lime) !important;
//   font-weight: 600 !important;
// }

// .sb-status-card {
//   background: var(--card); border: 1px solid var(--border);
//   border-radius: var(--radius-sm); padding: 12px;
// }
// .sb-status-row { display: flex; align-items: center; gap: 7px; }
// .live-dot {
//   width: 7px; height: 7px; border-radius: 50%;
//   background: var(--lime);
//   box-shadow: 0 0 8px var(--lime);
//   animation: livePulse 2s infinite;
//   flex-shrink: 0;
// }
// @keyframes livePulse { 0%,100%{opacity:1;box-shadow:0 0 8px var(--lime)} 50%{opacity:0.5;box-shadow:0 0 4px var(--lime)} }
// .sb-status-text { font-size: 12px; color: var(--lime); font-weight: 500; }
// .sb-status-loc { font-size: 11px; color: var(--text-2); }
// .sb-crop-pills { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
// .sb-crop-pill {
//   font-size: 10px; padding: 3px 8px; border-radius: 20px;
//   background: rgba(255,255,255,0.03);
//   border: 1px solid var(--border);
//   color: var(--text-2);
// }

// .sb-tip {
//   font-size: 11px; color: var(--text-2);
//   background: rgba(187,236,108,0.04);
//   border: 1px solid rgba(187,236,108,0.08);
//   border-radius: 10px; padding: 10px 12px;
//   line-height: 1.5;
// }
// .sb-tip strong { color: var(--lime-dim); }

// .sb-footer { margin-top: auto; padding-top: 8px; }
// .sb-footer-text { font-size: 10px; color: var(--text-3); text-align: center; }
// .sb-footer-tech { font-family: var(--fm); font-size: 9px; color: var(--text-3); text-align: center; margin-top: 3px; opacity: 0.6; }

// /* ── CHAT MAIN ───────────────────────────────── */
// .chat-main {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   min-width: 0;
// }

// /* Header */
// .chat-header {
//   display: flex; align-items: center; justify-content: space-between;
//   padding: 14px 20px;
//   border-bottom: 1px solid var(--border);
//   background: rgba(5,12,5,0.85);
//   backdrop-filter: blur(16px);
//   z-index: 10;
//   flex-shrink: 0;
// }
// .ch-left { display: flex; align-items: center; gap: 12px; }
// .ch-menu-btn {
//   background: none; border: none; cursor: pointer;
//   color: var(--text-2); padding: 6px;
//   border-radius: 8px; transition: all 0.2s;
//   display: flex; align-items: center;
// }
// .ch-menu-btn:hover { color: var(--lime); background: var(--lime-glow); }
// .ch-avatar {
//   width: 40px; height: 40px;
//   background: linear-gradient(135deg, #1a3a1a, #153015);
//   border: 1.5px solid var(--border-2);
//   border-radius: 14px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 18px;
//   box-shadow: 0 0 20px rgba(187,236,108,0.15);
// }
// .ch-title { font-family: var(--fd); font-size: 16px; color: var(--text); }
// .ch-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-2); margin-top: 1px; }
// .ch-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 6px var(--lime); animation: livePulse 2s infinite; }

// .ch-right { display: flex; align-items: center; gap: 10px; }
// .speaking-badge {
//   display: flex; align-items: center; gap: 5px;
//   font-size: 12px; color: var(--lime);
//   background: var(--lime-glow2);
//   border: 1px solid var(--border-2);
//   padding: 5px 12px; border-radius: 20px;
// }
// .speaking-wave {
//   display: inline-block; width: 3px; height: 12px;
//   background: var(--lime); border-radius: 2px;
//   animation: wave 0.8s ease-in-out infinite alternate;
// }
// @keyframes wave { from{height:4px;opacity:0.4} to{height:14px;opacity:1} }

// .ch-home-mobile {
//   display: none;
//   background: transparent; border: 1px solid var(--border);
//   border-radius: 10px; padding: 8px;
//   color: var(--text-2); cursor: pointer; transition: all 0.2s;
//   align-items: center;
// }
// .ch-home-mobile:hover { border-color: var(--border-2); color: var(--lime); background: var(--lime-glow); }

// /* Messages */
// .chat-messages {
//   flex: 1;
//   overflow-y: auto;
//   padding: 28px 24px;
//   display: flex; flex-direction: column; gap: 20px;
//   scrollbar-width: thin;
//   scrollbar-color: rgba(187,236,108,0.12) transparent;
// }
// .chat-messages::-webkit-scrollbar { width: 4px; }
// .chat-messages::-webkit-scrollbar-thumb { background: rgba(187,236,108,0.12); border-radius: 4px; }

// .msg-row { display: flex; align-items: flex-end; gap: 10px; }
// .user-row { justify-content: flex-end; }
// .bot-row { justify-content: flex-start; }

// .bot-avatar-sm {
//   width: 32px; height: 32px; min-width: 32px;
//   background: linear-gradient(135deg, #1a3a1a, #153015);
//   border: 1px solid var(--border-2);
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 15px;
//   flex-shrink: 0;
// }
// .user-avatar-sm {
//   width: 32px; height: 32px; min-width: 32px;
//   background: linear-gradient(135deg, #1a3a1a, #0f2010);
//   border: 1px solid var(--border-2);
//   border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 13px; font-weight: 700;
//   color: var(--lime); font-family: var(--fd);
//   flex-shrink: 0;
// }

// .bubble {
//   max-width: 66%;
//   padding: 14px 18px;
//   border-radius: 20px;
//   position: relative;
// }
// .user-bubble {
//   background: var(--user-bg);
//   border: 1px solid rgba(187,236,108,0.12);
//   border-bottom-right-radius: 5px;
//   box-shadow: 0 4px 24px rgba(187,236,108,0.07);
// }
// .bot-bubble {
//   background: var(--bot-bg);
//   border: 1px solid var(--border);
//   border-bottom-left-radius: 5px;
// }
// .user-text { font-size: 14px; color: var(--text); line-height: 1.6; }

// /* Bot message formatting */
// .bot-content { display: flex; flex-direction: column; gap: 5px; }
// .msg-section {
//   display: flex; align-items: center; gap: 7px;
//   margin-top: 8px; margin-bottom: 2px;
// }
// .section-icon { font-size: 15px; }
// .section-title { font-size: 13px; font-weight: 600; color: var(--lime); letter-spacing: 0.2px; }
// .msg-bullet {
//   display: flex; align-items: flex-start; gap: 8px;
//   font-size: 13.5px; color: var(--text); line-height: 1.55; padding-left: 4px;
// }
// .bullet-dot {
//   width: 5px; height: 5px; min-width: 5px;
//   background: var(--lime-dim); border-radius: 50%; margin-top: 6px;
// }
// .msg-text { font-size: 13.5px; color: var(--text-2); line-height: 1.6; }
// .msg-spacer { height: 4px; }
// .msg-divider { height: 1px; background: var(--border); margin: 6px 0; }

// /* Meta row */
// .meta-row {
//   display: flex; flex-wrap: wrap; gap: 5px;
//   margin-top: 10px; padding-top: 10px;
//   border-top: 1px solid var(--border);
// }
// .meta-chip {
//   font-size: 10px; font-family: var(--fm);
//   padding: 3px 8px; border-radius: 20px;
//   background: rgba(187,236,108,0.06);
//   border: 1px solid var(--border-2);
//   color: var(--lime-dim);
// }

// /* Bubble footer */
// .bubble-foot {
//   display: flex; align-items: center; justify-content: space-between;
//   margin-top: 8px; padding-top: 6px;
//   border-top: 1px solid rgba(255,255,255,0.04);
// }
// .bubble-time { font-size: 10px; font-family: var(--fm); color: var(--text-3); }
// .bubble-actions { display: flex; gap: 4px; }
// .bbl-action-btn {
//   background: none; border: none; cursor: pointer;
//   color: var(--text-3); padding: 4px;
//   border-radius: 6px; transition: all 0.2s;
//   display: flex; align-items: center;
// }
// .bbl-action-btn:hover { color: var(--lime); background: var(--lime-glow); }

// /* Typing indicator */
// .typing-wrap { display: flex; align-items: flex-end; gap: 10px; }
// .typing-bubble {
//   background: var(--bot-bg);
//   border: 1px solid var(--border);
//   border-radius: 20px; border-bottom-left-radius: 5px;
//   padding: 16px 18px;
//   display: flex; flex-direction: column; gap: 8px;
//   min-width: 100px;
// }
// .typing-bar {
//   height: 8px; border-radius: 4px;
//   background: linear-gradient(90deg, rgba(187,236,108,0.15), rgba(187,236,108,0.06));
//   width: 100%;
//   animation: shimmer 1.4s ease-in-out infinite;
// }
// @keyframes shimmer {
//   0%,100%{opacity:0.4} 50%{opacity:1}
// }

// /* Suggestions */
// .suggestions-wrap { padding: 0 20px 10px; flex-shrink: 0; }
// .suggestions-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--text-3); margin-bottom: 8px; }
// .suggestions-row { display: flex; flex-wrap: wrap; gap: 7px; }
// .suggestion-chip {
//   background: var(--card);
//   border: 1px solid var(--border);
//   color: var(--text-2);
//   padding: 8px 14px; border-radius: 20px;
//   font-size: 12.5px; cursor: pointer;
//   font-family: var(--fw);
//   transition: all 0.2s;
// }
// .suggestion-chip:hover {
//   border-color: var(--border-2);
//   color: var(--lime); background: var(--lime-glow);
// }

// /* Transcript */
// .transcript-bar {
//   margin: 0 20px 8px;
//   background: rgba(248,113,113,0.05);
//   border: 1px solid rgba(248,113,113,0.2);
//   border-radius: 10px; padding: 8px 14px;
//   font-size: 13px; color: var(--red);
//   display: flex; align-items: center; gap: 8px;
//   overflow: hidden;
// }
// .rec-dot {
//   width: 8px; height: 8px; min-width: 8px;
//   background: var(--red); border-radius: 50%;
//   animation: blink 1s infinite;
//   box-shadow: 0 0 6px var(--red);
// }
// @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
// .transcript-text { font-family: var(--fm); font-size: 12px; }

// /* Input */
// .input-wrap {
//   flex-shrink: 0;
//   padding: 12px 20px 8px;
//   border-top: 1px solid var(--border);
//   background: rgba(5,12,5,0.9);
//   backdrop-filter: blur(16px);
//   transition: border-color 0.3s;
// }
// .input-listening { border-color: rgba(248,113,113,0.3) !important; }

// .input-inner {
//   display: flex; align-items: flex-end; gap: 8px;
//   background: var(--card);
//   border: 1px solid var(--border);
//   border-radius: 16px;
//   padding: 10px 10px 10px 16px;
//   transition: border-color 0.25s;
// }
// .input-inner:focus-within { border-color: rgba(187,236,108,0.25); box-shadow: 0 0 0 3px rgba(187,236,108,0.04); }

// .chat-input {
//   flex: 1; background: transparent; border: none; outline: none;
//   color: var(--text); font-family: var(--fw); font-size: 14px;
//   line-height: 1.5; padding: 3px 0;
//   min-height: 24px; max-height: 120px;
// }
// .chat-input::placeholder { color: var(--text-3); }
// .chat-input:disabled { opacity: 0.5; }

// .input-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
// .char-count { font-family: var(--fm); font-size: 10px; color: var(--text-3); }

// .action-btn {
//   width: 38px; height: 38px; min-width: 38px;
//   border-radius: 11px; border: none;
//   cursor: pointer; display: flex; align-items: center; justify-content: center;
//   transition: all 0.2s; position: relative;
// }
// .mic-btn {
//   background: var(--surface);
//   border: 1px solid var(--border);
//   color: var(--text-2);
// }
// .mic-btn:hover { border-color: var(--border-2); color: var(--lime); background: var(--lime-glow); }
// .mic-on {
//   background: rgba(248,113,113,0.1) !important;
//   border-color: rgba(248,113,113,0.4) !important;
//   color: var(--red) !important;
//   box-shadow: 0 0 16px rgba(248,113,113,0.15);
// }
// .mic-ring {
//   position: absolute; inset: -4px;
//   border-radius: 14px; border: 2px solid var(--red);
//   animation: micRing 1.2s ease-out infinite; pointer-events: none;
// }
// @keyframes micRing { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(1.5);opacity:0} }

// .send-btn {
//   background: linear-gradient(135deg, #2d6a1a, #1a4a10);
//   border: 1px solid rgba(187,236,108,0.2);
//   color: var(--lime);
//   box-shadow: 0 2px 12px rgba(187,236,108,0.1);
// }
// .send-btn:hover:not(:disabled) { background: linear-gradient(135deg, #3a8020, #2a6015); box-shadow: 0 4px 20px rgba(187,236,108,0.2); }
// .send-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none !important; }

// .input-footer-note {
//   text-align: center; font-size: 9.5px;
//   color: var(--text-3); padding: 6px 0 2px;
//   letter-spacing: 0.3px; font-family: var(--fm);
//   opacity: 0.6;
// }

// /* ── RESPONSIVE ───────────────────────────── */
// @media (max-width: 768px) {
//   :root { --sidebar: 100vw; }
//   .sidebar {
//     position: fixed; top: 0; left: 0; height: 100%;
//     z-index: 200;
//     box-shadow: 4px 0 40px rgba(0,0,0,0.6);
//   }
//   .ch-home-mobile { display: flex !important; }
//   .bubble { max-width: 85%; }
//   .chat-messages { padding: 16px; }
// }
// `;







// import { useState, useRef, useEffect, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import collegeLogo from "../assets/cot.jpg";

// /* ─── Quick suggestions ─────────────────────────────────────────── */
// const SUGGESTIONS = [
//   { label: "🍅 Tamatar ka bhav", query: "Haldwani mein tamatar ka bhav kya hai aaj?" },
//   { label: "🧅 Pyaz kahan bechun", query: "Pyaz 60 kg kahan bechun Haldwani mein?" },
//   { label: "🥔 Aloo buyers", query: "Best buyers for potatoes near Haldwani" },
//   { label: "🥦 Gobhi mandi", query: "Cauliflower mandi price and best time to sell" },
//   { label: "💰 Best price tips", query: "How to get maximum price for my crops?" },
//   { label: "⏰ Kab bechna chahiye", query: "Sabji bechne ka sabse accha samay kab hai?" },
// ];

// /* ─── Grain overlay ──────────────────────────────────────────────── */
// function GrainOverlay() {
//   return (
//     <svg className="grain-svg" xmlns="http://www.w3.org/2000/svg">
//       <filter id="grain">
//         <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
//         <feColorMatrix type="saturate" values="0" />
//       </filter>
//       <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
//     </svg>
//   );
// }

// /* ─── COLLEGE BANNER ─────────────────────────────────────────────── */
// function CollegeBanner() {
//   return (
//     <div className="college-banner">
//       <div className="banner-shimmer" />
//       <div className="banner-inner">
//         <div className="banner-logo-wrap">
//           <img src={collegeLogo} alt="College Logo" className="banner-logo" />
//           <div className="banner-logo-ring" />
//         </div>
//         <div className="banner-text-block">
//           <div className="banner-hindi-title">कृषि प्रौद्योगिकी संस्थान</div>
//           <div className="banner-eng-title">College of Technology · Pantnagar</div>
//           <div className="banner-tagline">
//             G.B. Pant University of Agriculture &amp; Technology
//           </div>
//         </div>
//         <div className="banner-divider-v" />
//         <div className="banner-right">
//           <div className="banner-app-name">AgroAI</div>
//           <div className="banner-app-sub">Intelligent Crop Market Assistant</div>
//           <div className="banner-pills">
//             <span className="banner-pill">🌾 Live Mandi</span>
//             <span className="banner-pill">🤖 AI Powered</span>
//             <span className="banner-pill">🇮🇳 Uttarakhand</span>
//           </div>
//         </div>
//       </div>
//       <div className="banner-bottom-bar">
//         <span className="banner-quote">
//           "Empowering farmers of Uttarakhand with AI-driven market intelligence"
//         </span>
//         <span className="banner-live-badge">
//           <span className="live-dot-sm" /> Live Data Active
//         </span>
//       </div>
//     </div>
//   );
// }

// /* ─── Format bot message ────────────────────────────────────────── */
// function BotMessage({ text }) {
//   const lines = text.split("\n");
//   return (
//     <div className="bot-content">
//       {lines.map((line, i) => {
//         const trimmed = line.trim();
//         if (!trimmed) return <div key={i} className="msg-spacer" />;
//         if (/^━+$/.test(trimmed)) return <div key={i} className="msg-divider" />;
//         const sectionMatch = trimmed.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
//         if (sectionMatch) {
//           return (
//             <div key={i} className="msg-section">
//               <span className="section-icon">{sectionMatch[1]}</span>
//               <span className="section-title">{sectionMatch[2]}</span>
//             </div>
//           );
//         }
//         if (trimmed.startsWith("•")) {
//           return (
//             <div key={i} className="msg-bullet">
//               <span className="bullet-dot" />
//               <span>{trimmed.slice(1).trim()}</span>
//             </div>
//           );
//         }
//         return <p key={i} className="msg-text">{trimmed}</p>;
//       })}
//     </div>
//   );
// }

// /* ─── Typing indicator ──────────────────────────────────────────── */
// function TypingIndicator() {
//   return (
//     <div className="typing-wrap">
//       <div className="bot-avatar-sm"><span>🌾</span></div>
//       <div className="typing-bubble">
//         <div className="typing-bar" />
//         <div className="typing-bar" style={{ animationDelay: "0.2s", width: "55%" }} />
//         <div className="typing-bar" style={{ animationDelay: "0.35s", width: "35%" }} />
//       </div>
//     </div>
//   );
// }

// /* ─── Icons ─────────────────────────────────────────────────────── */
// const IconSend = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//     <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const IconMic = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/>
//     <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
//     <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconMicOff = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconHome = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
//     <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const IconPlus = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//     <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
//   </svg>
// );
// const IconSpeak = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
//     <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );
// const IconCopy = () => (
//   <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//     <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
//     <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/>
//   </svg>
// );
// const IconMenu = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//     <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// /* ═══════════════════════════════════════════════════════════════ */
// /*  MAIN CHATBOT                                                    */
// /* ═══════════════════════════════════════════════════════════════ */
// export default function Chatbot() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const farmerName = localStorage.getItem("farmerName") || null;

//   function now() {
//     return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   }

//   const INIT = {
//     sender: "bot",
//     text: farmerName
//       ? `Namaste ${farmerName} ji! 🌾\n\nMain AgroAI hoon — aapka personal fasal bechne ka saathi.`
//       : `Namaste! 🌾\nI'm AgroAI — your personal crop selling assistant for Haldwani.`,
//     time: now(),
//     id: "init",
//   };

//   const [messages, setMessages] = useState([INIT]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [chatId, setChatId] = useState(null);
//   const [isListening, setIsListening] = useState(false);
//   const [voiceSupported, setVoiceSupported] = useState(false);
//   const [voiceLang, setVoiceLang] = useState("en-IN");
//   const [transcript, setTranscript] = useState("");
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [copiedId, setCopiedId] = useState(null);
//   const [charCount, setCharCount] = useState(0);
//   const [mobileSidebar, setMobileSidebar] = useState(false);

//   const bottomRef = useRef(null);
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
//   useEffect(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (SR) setVoiceSupported(true);
//   }, []);

//   useEffect(() => {
//     if (!token) return;
//     (async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
//         const data = await res.json();
//         if (data.length > 0) {
//           setMessages(data[0].messages.length ? data[0].messages : [INIT]);
//           setChatId(data[0]._id);
//           setShowSuggestions(data[0].messages.length <= 1);
//         } else {
//           const cr = await fetch("http://localhost:5000/api/chats", {
//             method: "POST", headers: { Authorization: token },
//           });
//           const chat = await cr.json();
//           setChatId(chat._id);
//         }
//       } catch {}
//     })();
//   }, []);

//   const startListening = useCallback(() => {
//     const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SR) return;
//     const r = new SR();
//     r.lang = voiceLang; r.interimResults = true;
//     r.onstart = () => setIsListening(true);
//     r.onresult = (e) => {
//       const t = Array.from(e.results).map(x => x[0].transcript).join("");
//       setTranscript(t); setInput(t); setCharCount(t.length);
//     };
//     r.onend = () => { setIsListening(false); setTranscript(""); };
//     r.onerror = () => { setIsListening(false); setTranscript(""); };
//     recognitionRef.current = r; r.start();
//   }, [voiceLang]);

//   const stopListening = useCallback(() => {
//     recognitionRef.current?.stop(); setIsListening(false);
//   }, []);

//   const toggleVoice = () => {
//     if (isListening) { stopListening(); if (input.trim()) sendMessage(input); }
//     else startListening();
//   };

//   const speakText = (text) => {
//     if (!window.speechSynthesis) return;
//     window.speechSynthesis.cancel();
//     const clean = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
//     const u = new SpeechSynthesisUtterance(clean);
//     u.lang = voiceLang; u.rate = 0.92;
//     u.onstart = () => setIsSpeaking(true);
//     u.onend = () => setIsSpeaking(false);
//     window.speechSynthesis.speak(u);
//   };

//   const copyText = (text, id) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopiedId(id); setTimeout(() => setCopiedId(null), 2000);
//     });
//   };

//   const newChat = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/chats", {
//         method: "POST", headers: { Authorization: token },
//       });
//       const chat = await res.json();
//       setChatId(chat._id);
//     } catch {}
//     setMessages([INIT]); setInput(""); setCharCount(0);
//     setShowSuggestions(true); setMobileSidebar(false);
//   };

//   const saveMessage = async (msg) => {
//     if (!chatId || !token) return;
//     await fetch("http://localhost:5000/api/chats/message", {
//       method: "POST",
//       headers: { "Content-Type": "application/json", Authorization: token },
//       body: JSON.stringify({ chatId, message: msg }),
//     }).catch(() => {});
//   };

//   const sendMessage = async (text) => {
//     const msg = (text || input).trim();
//     if (!msg || loading) return;
//     setInput(""); setCharCount(0); setShowSuggestions(false);
//     const userMsg = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
//     await saveMessage(userMsg);
//     setMessages(p => [...p, userMsg]);
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: msg, farmerName }),
//       });
//       const data = await res.json();
//       if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
//       const botMsg = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
//       await saveMessage(botMsg);
//       setMessages(p => [...p, botMsg]);
//     } catch {
//       setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_err" }]);
//     } finally {
//       setLoading(false); setTimeout(() => inputRef.current?.focus(), 100);
//     }
//   };

//   const handleKey = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
//   };

//   /* ═══ RENDER ═══════════════════════════════════════════════════ */
//   return (
//     <>
//       <style>{CSS}</style>
//       <GrainOverlay />

//       <div className="chat-root">
//         {/* ══ SIDEBAR ══════════════════════════════════════════════ */}
//         <AnimatePresence>
//           {(sidebarOpen || mobileSidebar) && (
//             <motion.aside
//               key="sidebar"
//               initial={{ x: -280, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -280, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="sidebar"
//             >
//               <div className="sb-brand">
//                 <div className="sb-logo">🌾</div>
//                 <div>
//                   <div className="sb-title">AgroAI</div>
//                   <div className="sb-sub">Crop Intelligence</div>
//                 </div>
//               </div>

//               <button className="sb-home-btn" onClick={() => navigate("/")}>
//                 <IconHome /> Back to Home
//               </button>

//               <button className="sb-new-btn" onClick={newChat}>
//                 <IconPlus /> New Conversation
//               </button>

//               <div className="sb-divider" />

//               {farmerName && (
//                 <div className="sb-farmer">
//                   <div className="sb-farmer-avatar">{farmerName[0].toUpperCase()}</div>
//                   <div>
//                     <div className="sb-farmer-name">{farmerName}</div>
//                     <div className="sb-farmer-tag">Registered Farmer</div>
//                   </div>
//                 </div>
//               )}

//               <div className="sb-section-label">Voice Language</div>
//               <div className="sb-lang-row">
//                 {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([val, flag, lbl]) => (
//                   <button key={val} className={`sb-lang-btn ${voiceLang === val ? "sb-lang-active" : ""}`} onClick={() => setVoiceLang(val)}>
//                     {flag} {lbl}
//                   </button>
//                 ))}
//               </div>

//               <div className="sb-section-label" style={{ marginTop: 24 }}>Market Status</div>
//               <div className="sb-status-card">
//                 <div className="sb-status-row">
//                   <span className="live-dot" />
//                   <span className="sb-status-text">Live Mandi Data</span>
//                 </div>
//                 <div className="sb-status-row" style={{ marginTop: 6 }}>
//                   <span className="sb-status-loc">📍 Haldwani · Uttarakhand</span>
//                 </div>
//                 <div className="sb-crop-pills">
//                   {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => (
//                     <span key={c} className="sb-crop-pill">{c}</span>
//                   ))}
//                 </div>
//               </div>

//               <div className="sb-tip">
//                 💡 <strong>Pro tip:</strong> Mention your crop name and quantity for hyper-accurate advice.
//               </div>

//               <div className="sb-footer">
//                 <div className="sb-footer-text">Made for farmers of Uttarakhand</div>
//               </div>
//             </motion.aside>
//           )}
//         </AnimatePresence>

//         {/* ══ MAIN ════════════════════════════════════════════════ */}
//         <div className="chat-main">

//           {/* ── COLLEGE BANNER ── */}
//           <CollegeBanner />

//           {/* ── Chat Header ── */}
//           <header className="chat-header">
//             <div className="ch-left">
//               <button className="ch-menu-btn" onClick={() => { setSidebarOpen(p => !p); setMobileSidebar(p => !p); }}>
//                 <IconMenu />
//               </button>
//               <div className="ch-avatar">🤖</div>
//               <div>
//                 <div className="ch-title">AgroAI Assistant</div>
//                 <div className="ch-status">
//                   <span className="ch-dot" />
//                   Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}
//                 </div>
//               </div>
//             </div>

//             <div className="ch-right">
//               <AnimatePresence>
//                 {isSpeaking && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="speaking-badge"
//                   >
//                     <span className="speaking-wave" />
//                     <span className="speaking-wave" style={{ animationDelay: "0.15s" }} />
//                     <span className="speaking-wave" style={{ animationDelay: "0.3s" }} />
//                     Speaking
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//               <button className="ch-home-mobile" onClick={() => navigate("/")} title="Go to Home">
//                 <IconHome />
//               </button>
//             </div>
//           </header>

//           {/* ── Messages ── */}
//           <div className="chat-messages">
//             <AnimatePresence initial={false}>
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={msg.id || i}
//                   initial={{ opacity: 0, y: 16, scale: 0.97 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
//                   className={`msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
//                 >
//                   {msg.sender === "bot" && (
//                     <div className="bot-avatar-sm"><span>🌾</span></div>
//                   )}

//                   <div className={`bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
//                     {msg.sender === "bot"
//                       ? <BotMessage text={msg.text} />
//                       : <p className="user-text">{msg.text}</p>
//                     }

//                     {msg.meta && (
//                       <div className="meta-row">
//                         {msg.meta.crop && <span className="meta-chip">🌱 {msg.meta.crop}</span>}
//                         {msg.meta.location && <span className="meta-chip">📍 {msg.meta.location}</span>}
//                         {msg.meta.quantity > 0 && <span className="meta-chip">⚖️ {msg.meta.quantity}kg</span>}
//                         <span className="meta-chip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
//                       </div>
//                     )}

//                     <div className="bubble-foot">
//                       <span className="bubble-time">{msg.time}</span>
//                       {msg.sender === "bot" && (
//                         <div className="bubble-actions">
//                           <button className="bbl-action-btn" onClick={() => speakText(msg.text)} title="Listen">
//                             <IconSpeak />
//                           </button>
//                           <button className="bbl-action-btn" onClick={() => copyText(msg.text, msg.id || i)} title="Copy">
//                             {copiedId === (msg.id || i) ? <span style={{ color: "#BBEC6C", fontSize: 11 }}>✓</span> : <IconCopy />}
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {msg.sender === "user" && (
//                     <div className="user-avatar-sm">
//                       {farmerName ? farmerName[0].toUpperCase() : "👤"}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </AnimatePresence>

//             {loading && <TypingIndicator />}
//             <div ref={bottomRef} />
//           </div>

//           {/* ── Suggestions ── */}
//           <AnimatePresence>
//             {showSuggestions && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 className="suggestions-wrap"
//               >
//                 <div className="suggestions-label">Quick questions</div>
//                 <div className="suggestions-row">
//                   {SUGGESTIONS.map((s, i) => (
//                     <motion.button
//                       key={i}
//                       whileHover={{ scale: 1.03, y: -1 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="suggestion-chip"
//                       onClick={() => sendMessage(s.query)}
//                     >
//                       {s.label}
//                     </motion.button>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* ── Voice transcript ── */}
//           <AnimatePresence>
//             {isListening && transcript && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="transcript-bar"
//               >
//                 <span className="rec-dot" />
//                 <span className="transcript-text">{transcript}</span>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* ── Input ── */}
//           <div className={`input-wrap ${isListening ? "input-listening" : ""}`}>
//             <div className="input-inner">
//               <textarea
//                 ref={inputRef}
//                 value={input}
//                 disabled={loading}
//                 rows={1}
//                 onChange={(e) => { setInput(e.target.value); setCharCount(e.target.value.length); }}
//                 onKeyDown={handleKey}
//                 placeholder={
//                   isListening ? "🎤 Listening... speak now"
//                   : voiceLang === "hi-IN" ? "Apni fasal ke baare mein poochho..."
//                   : "Ask about crops, prices, buyers..."
//                 }
//                 className="chat-input"
//                 style={{ resize: "none", overflow: "hidden" }}
//                 onInput={(e) => {
//                   e.target.style.height = "auto";
//                   e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
//                 }}
//               />
//               <div className="input-actions">
//                 {charCount > 0 && <span className="char-count">{charCount}</span>}
//                 {voiceSupported && (
//                   <motion.button
//                     whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
//                     className={`action-btn mic-btn ${isListening ? "mic-on" : ""}`}
//                     onClick={toggleVoice} title={isListening ? "Stop" : "Voice input"}
//                   >
//                     {isListening ? <IconMicOff /> : <IconMic />}
//                     {isListening && <span className="mic-ring" />}
//                   </motion.button>
//                 )}
//                 <motion.button
//                   whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
//                   className="action-btn send-btn"
//                   onClick={() => sendMessage()}
//                   disabled={loading || !input.trim()}
//                 >
//                   <IconSend />
//                 </motion.button>
//               </div>
//             </div>
//             <div className="input-footer-note">
//               AgroAI · Live mandi data + LLaMA AI · Prices are indicative
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════ */
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;600;700&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

// *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// :root {
//   --bg: #050c05;
//   --surface: #0a120a;
//   --card: #0f1a0f;
//   --border: rgba(255,255,255,0.06);
//   --border-2: rgba(187,236,108,0.12);
//   --lime: #BBEC6C;
//   --lime-dim: rgba(187,236,108,0.55);
//   --lime-glow: rgba(187,236,108,0.08);
//   --lime-glow2: rgba(187,236,108,0.15);
//   --green: #22c55e;
//   --green-dim: rgba(34,197,94,0.6);
//   --text: #e8ede8;
//   --text-2: rgba(232,237,232,0.55);
//   --text-3: rgba(232,237,232,0.3);
//   --red: #f87171;
//   --gold: #F0C040;
//   --gold-dim: rgba(240,192,64,0.6);
//   --gold-glow: rgba(240,192,64,0.1);
//   --banner-bg1: #5a0a0a;
//   --banner-bg2: #7a1010;
//   --user-bg: linear-gradient(145deg, #1a3a1a, #153015);
//   --bot-bg: #0f1a0f;
//   --radius: 20px;
//   --radius-sm: 12px;
//   --fw: 'DM Sans', sans-serif;
//   --fd: 'Instrument Serif', serif;
//   --fh: 'Noto Serif Devanagari', serif;
//   --fm: 'Geist Mono', monospace;
//   --sidebar: 272px;
// }

// html, body, #root { height: 100%; background: var(--bg); }

// .grain-svg {
//   position: fixed; inset: 0;
//   width: 100%; height: 100%;
//   pointer-events: none; z-index: 0;
// }

// .chat-root {
//   display: flex;
//   height: 100vh;
//   font-family: var(--fw);
//   color: var(--text);
//   overflow: hidden;
//   position: relative;
//   background:
//     radial-gradient(ellipse 60% 50% at 0% 0%, rgba(187,236,108,0.04) 0%, transparent 60%),
//     radial-gradient(ellipse 40% 60% at 100% 100%, rgba(34,197,94,0.03) 0%, transparent 60%),
//     var(--bg);
// }

// /* ═══ COLLEGE BANNER ════════════════════════════════════════════ */
// .college-banner {
//   position: relative;
//   overflow: hidden;
//   background: linear-gradient(135deg, #6b0f0f 0%, #8b1a1a 30%, #6b0f0f 60%, #4a0a0a 100%);
//   border-bottom: 2px solid rgba(240,192,64,0.4);
//   flex-shrink: 0;
//   z-index: 5;
// }

// .banner-shimmer {
//   position: absolute; inset: 0;
//   background: linear-gradient(105deg,
//     transparent 20%,
//     rgba(240,192,64,0.06) 40%,
//     rgba(240,192,64,0.12) 50%,
//     rgba(240,192,64,0.06) 60%,
//     transparent 80%
//   );
//   background-size: 200% 100%;
//   animation: bannerShimmer 4s ease-in-out infinite;
//   pointer-events: none;
// }
// @keyframes bannerShimmer {
//   0% { background-position: 200% 0; }
//   100% { background-position: -200% 0; }
// }

// .banner-inner {
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 14px 24px;
//   position: relative;
//   z-index: 1;
// }

// .banner-logo-wrap {
//   position: relative;
//   flex-shrink: 0;
// }

// .banner-logo {
//   width: 72px;
//   height: 72px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 2.5px solid var(--gold);
//   box-shadow:
//     0 0 0 4px rgba(240,192,64,0.15),
//     0 0 20px rgba(240,192,64,0.3),
//     0 4px 20px rgba(0,0,0,0.5);
//   display: block;
// }

// .banner-logo-ring {
//   position: absolute; inset: -6px;
//   border-radius: 50%;
//   border: 1.5px solid rgba(240,192,64,0.3);
//   animation: logoRingPulse 3s ease-in-out infinite;
//   pointer-events: none;
// }
// @keyframes logoRingPulse {
//   0%, 100% { opacity: 0.3; transform: scale(1); }
//   50% { opacity: 0.8; transform: scale(1.04); }
// }

// .banner-text-block {
//   flex: 1;
//   min-width: 0;
// }

// .banner-hindi-title {
//   font-family: var(--fh);
//   font-size: 20px;
//   font-weight: 700;
//   color: #ffffff;
//   letter-spacing: 0.5px;
//   line-height: 1.2;
//   text-shadow: 0 2px 8px rgba(0,0,0,0.5);
// }

// .banner-eng-title {
//   font-family: var(--fd);
//   font-size: 14px;
//   color: var(--gold);
//   letter-spacing: 0.8px;
//   margin-top: 3px;
//   font-style: italic;
// }

// .banner-tagline {
//   font-size: 11px;
//   color: rgba(255,255,255,0.65);
//   margin-top: 4px;
//   letter-spacing: 0.3px;
//   font-family: var(--fw);
// }

// .banner-divider-v {
//   width: 1px;
//   height: 56px;
//   background: linear-gradient(to bottom, transparent, rgba(240,192,64,0.4), transparent);
//   flex-shrink: 0;
// }

// .banner-right {
//   flex-shrink: 0;
//   text-align: right;
// }

// .banner-app-name {
//   font-family: var(--fd);
//   font-size: 26px;
//   font-style: italic;
//   color: var(--lime);
//   letter-spacing: -0.5px;
//   line-height: 1;
//   text-shadow: 0 0 20px rgba(187,236,108,0.4);
// }

// .banner-app-sub {
//   font-size: 10px;
//   color: rgba(187,236,108,0.6);
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
//   margin-top: 3px;
//   font-family: var(--fw);
// }

// .banner-pills {
//   display: flex;
//   gap: 5px;
//   margin-top: 8px;
//   justify-content: flex-end;
//   flex-wrap: wrap;
// }

// .banner-pill {
//   font-size: 9.5px;
//   padding: 3px 8px;
//   border-radius: 20px;
//   background: rgba(255,255,255,0.08);
//   border: 1px solid rgba(240,192,64,0.2);
//   color: rgba(255,255,255,0.75);
//   font-family: var(--fw);
// }

// .banner-bottom-bar {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 7px 24px;
//   background: rgba(0,0,0,0.25);
//   border-top: 1px solid rgba(240,192,64,0.12);
//   position: relative;
//   z-index: 1;
// }

// .banner-quote {
//   font-family: var(--fd);
//   font-style: italic;
//   font-size: 11.5px;
//   color: rgba(255,255,255,0.6);
//   letter-spacing: 0.2px;
// }

// .banner-live-badge {
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   font-size: 10px;
//   color: var(--lime);
//   font-family: var(--fm);
//   flex-shrink: 0;
// }

// .live-dot-sm {
//   width: 6px; height: 6px; border-radius: 50%;
//   background: var(--lime);
//   box-shadow: 0 0 6px var(--lime);
//   animation: livePulse 2s infinite;
// }

// /* ── SIDEBAR ─────────────────────────────────── */
// .sidebar {
//   width: var(--sidebar);
//   min-width: var(--sidebar);
//   height: 100vh;
//   background: var(--surface);
//   border-right: 1px solid var(--border);
//   display: flex;
//   flex-direction: column;
//   padding: 20px 16px;
//   gap: 12px;
//   overflow-y: auto;
//   overflow-x: hidden;
//   z-index: 50;
//   flex-shrink: 0;
// }
// .sidebar::-webkit-scrollbar { width: 3px; }
// .sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

// .sb-brand {
//   display: flex; align-items: center; gap: 10px;
//   padding: 4px 2px 12px;
//   border-bottom: 1px solid var(--border);
// }
// .sb-logo { font-size: 28px; filter: drop-shadow(0 0 10px rgba(187,236,108,0.5)); }
// .sb-title { font-family: var(--fd); font-size: 20px; color: var(--lime); letter-spacing: -0.3px; }
// .sb-sub { font-size: 9px; color: var(--text-3); text-transform: uppercase; letter-spacing: 2px; margin-top: 1px; }

// .sb-home-btn {
//   display: flex; align-items: center; gap: 8px;
//   background: transparent; border: 1px solid var(--border);
//   color: var(--text-2); padding: 9px 14px; border-radius: var(--radius-sm);
//   font-family: var(--fw); font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; width: 100%;
// }
// .sb-home-btn:hover { border-color: rgba(187,236,108,0.3); color: var(--lime); background: var(--lime-glow); }

// .sb-new-btn {
//   display: flex; align-items: center; gap: 8px;
//   background: var(--lime-glow2); border: 1px solid var(--border-2); color: var(--lime);
//   padding: 10px 14px; border-radius: var(--radius-sm);
//   font-family: var(--fw); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; width: 100%;
// }
// .sb-new-btn:hover { background: rgba(187,236,108,0.2); border-color: rgba(187,236,108,0.4); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(187,236,108,0.1); }

// .sb-divider { height: 1px; background: var(--border); margin: 2px 0; }

// .sb-farmer {
//   display: flex; align-items: center; gap: 10px;
//   background: var(--card); border: 1px solid var(--border);
//   border-radius: var(--radius-sm); padding: 10px 12px;
// }
// .sb-farmer-avatar {
//   width: 34px; height: 34px; min-width: 34px;
//   background: linear-gradient(135deg, #1a3a1a, #153015);
//   border: 1.5px solid var(--border-2); border-radius: 10px;
//   display: flex; align-items: center; justify-content: center;
//   font-size: 14px; font-weight: 700; color: var(--lime); font-family: var(--fd);
// }
// .sb-farmer-name { font-size: 13px; font-weight: 600; color: var(--text); }
// .sb-farmer-tag { font-size: 10px; color: var(--green-dim); margin-top: 1px; }

// .sb-section-label { font-size: 9px; text-transform: uppercase; letter-spacing: 2px; color: var(--text-3); margin-top: 4px; padding: 0 2px; }

// .sb-lang-row { display: flex; gap: 6px; }
// .sb-lang-btn { flex: 1; padding: 8px 4px; border-radius: 8px; border: 1px solid var(--border); background: transparent; color: var(--text-2); font-size: 12px; cursor: pointer; transition: all 0.2s; font-family: var(--fw); }
// .sb-lang-btn:hover { border-color: rgba(187,236,108,0.2); color: var(--text); }
// .sb-lang-active { background: var(--lime-glow2) !important; border-color: var(--border-2) !important; color: var(--lime) !important; font-weight: 600 !important; }

// .sb-status-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; }
// .sb-status-row { display: flex; align-items: center; gap: 7px; }
// .live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 8px var(--lime); animation: livePulse 2s infinite; flex-shrink: 0; }
// @keyframes livePulse { 0%,100%{opacity:1;box-shadow:0 0 8px var(--lime)} 50%{opacity:0.5;box-shadow:0 0 4px var(--lime)} }
// .sb-status-text { font-size: 12px; color: var(--lime); font-weight: 500; }
// .sb-status-loc { font-size: 11px; color: var(--text-2); }
// .sb-crop-pills { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
// .sb-crop-pill { font-size: 10px; padding: 3px 8px; border-radius: 20px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); color: var(--text-2); }

// .sb-tip { font-size: 11px; color: var(--text-2); background: rgba(187,236,108,0.04); border: 1px solid rgba(187,236,108,0.08); border-radius: 10px; padding: 10px 12px; line-height: 1.5; }
// .sb-tip strong { color: var(--lime-dim); }
// .sb-footer { margin-top: auto; padding-top: 8px; }
// .sb-footer-text { font-size: 10px; color: var(--text-3); text-align: center; }

// /* ── CHAT MAIN ───────────────────────────────── */
// .chat-main {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   min-width: 0;
// }

// /* Chat Header */
// .chat-header {
//   display: flex; align-items: center; justify-content: space-between;
//   padding: 14px 20px;
//   border-bottom: 1px solid var(--border);
//   background: rgba(5,12,5,0.85);
//   backdrop-filter: blur(16px);
//   z-index: 10; flex-shrink: 0;
// }
// .ch-left { display: flex; align-items: center; gap: 12px; }
// .ch-menu-btn { background: none; border: none; cursor: pointer; color: var(--text-2); padding: 6px; border-radius: 8px; transition: all 0.2s; display: flex; align-items: center; }
// .ch-menu-btn:hover { color: var(--lime); background: var(--lime-glow); }
// .ch-avatar { width: 40px; height: 40px; background: linear-gradient(135deg, #1a3a1a, #153015); border: 1.5px solid var(--border-2); border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 0 20px rgba(187,236,108,0.15); }
// .ch-title { font-family: var(--fd); font-size: 16px; color: var(--text); }
// .ch-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-2); margin-top: 1px; }
// .ch-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 6px var(--lime); animation: livePulse 2s infinite; }

// .ch-right { display: flex; align-items: center; gap: 10px; }
// .speaking-badge { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--lime); background: var(--lime-glow2); border: 1px solid var(--border-2); padding: 5px 12px; border-radius: 20px; }
// .speaking-wave { display: inline-block; width: 3px; height: 12px; background: var(--lime); border-radius: 2px; animation: wave 0.8s ease-in-out infinite alternate; }
// @keyframes wave { from{height:4px;opacity:0.4} to{height:14px;opacity:1} }
// .ch-home-mobile { display: none; background: transparent; border: 1px solid var(--border); border-radius: 10px; padding: 8px; color: var(--text-2); cursor: pointer; transition: all 0.2s; align-items: center; }
// .ch-home-mobile:hover { border-color: var(--border-2); color: var(--lime); background: var(--lime-glow); }

// /* Messages */
// .chat-messages { flex: 1; overflow-y: auto; padding: 28px 24px; display: flex; flex-direction: column; gap: 20px; scrollbar-width: thin; scrollbar-color: rgba(187,236,108,0.12) transparent; }
// .chat-messages::-webkit-scrollbar { width: 4px; }
// .chat-messages::-webkit-scrollbar-thumb { background: rgba(187,236,108,0.12); border-radius: 4px; }

// .msg-row { display: flex; align-items: flex-end; gap: 10px; }
// .user-row { justify-content: flex-end; }
// .bot-row { justify-content: flex-start; }

// .bot-avatar-sm { width: 32px; height: 32px; min-width: 32px; background: linear-gradient(135deg, #1a3a1a, #153015); border: 1px solid var(--border-2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
// .user-avatar-sm { width: 32px; height: 32px; min-width: 32px; background: linear-gradient(135deg, #1a3a1a, #0f2010); border: 1px solid var(--border-2); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--lime); font-family: var(--fd); flex-shrink: 0; }

// .bubble { max-width: 66%; padding: 14px 18px; border-radius: 20px; position: relative; }
// .user-bubble { background: var(--user-bg); border: 1px solid rgba(187,236,108,0.12); border-bottom-right-radius: 5px; box-shadow: 0 4px 24px rgba(187,236,108,0.07); }
// .bot-bubble { background: var(--bot-bg); border: 1px solid var(--border); border-bottom-left-radius: 5px; }
// .user-text { font-size: 14px; color: var(--text); line-height: 1.6; }

// .bot-content { display: flex; flex-direction: column; gap: 5px; }
// .msg-section { display: flex; align-items: center; gap: 7px; margin-top: 8px; margin-bottom: 2px; }
// .section-icon { font-size: 15px; }
// .section-title { font-size: 13px; font-weight: 600; color: var(--lime); letter-spacing: 0.2px; }
// .msg-bullet { display: flex; align-items: flex-start; gap: 8px; font-size: 13.5px; color: var(--text); line-height: 1.55; padding-left: 4px; }
// .bullet-dot { width: 5px; height: 5px; min-width: 5px; background: var(--lime-dim); border-radius: 50%; margin-top: 6px; }
// .msg-text { font-size: 13.5px; color: var(--text-2); line-height: 1.6; }
// .msg-spacer { height: 4px; }
// .msg-divider { height: 1px; background: var(--border); margin: 6px 0; }

// .meta-row { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border); }
// .meta-chip { font-size: 10px; font-family: var(--fm); padding: 3px 8px; border-radius: 20px; background: rgba(187,236,108,0.06); border: 1px solid var(--border-2); color: var(--lime-dim); }

// .bubble-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.04); }
// .bubble-time { font-size: 10px; font-family: var(--fm); color: var(--text-3); }
// .bubble-actions { display: flex; gap: 4px; }
// .bbl-action-btn { background: none; border: none; cursor: pointer; color: var(--text-3); padding: 4px; border-radius: 6px; transition: all 0.2s; display: flex; align-items: center; }
// .bbl-action-btn:hover { color: var(--lime); background: var(--lime-glow); }

// .typing-wrap { display: flex; align-items: flex-end; gap: 10px; }
// .typing-bubble { background: var(--bot-bg); border: 1px solid var(--border); border-radius: 20px; border-bottom-left-radius: 5px; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px; min-width: 100px; }
// .typing-bar { height: 8px; border-radius: 4px; background: linear-gradient(90deg, rgba(187,236,108,0.15), rgba(187,236,108,0.06)); width: 100%; animation: shimmer 1.4s ease-in-out infinite; }
// @keyframes shimmer { 0%,100%{opacity:0.4} 50%{opacity:1} }

// .suggestions-wrap { padding: 0 20px 10px; flex-shrink: 0; }
// .suggestions-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--text-3); margin-bottom: 8px; }
// .suggestions-row { display: flex; flex-wrap: wrap; gap: 7px; }
// .suggestion-chip { background: var(--card); border: 1px solid var(--border); color: var(--text-2); padding: 8px 14px; border-radius: 20px; font-size: 12.5px; cursor: pointer; font-family: var(--fw); transition: all 0.2s; }
// .suggestion-chip:hover { border-color: var(--border-2); color: var(--lime); background: var(--lime-glow); }

// .transcript-bar { margin: 0 20px 8px; background: rgba(248,113,113,0.05); border: 1px solid rgba(248,113,113,0.2); border-radius: 10px; padding: 8px 14px; font-size: 13px; color: var(--red); display: flex; align-items: center; gap: 8px; overflow: hidden; }
// .rec-dot { width: 8px; height: 8px; min-width: 8px; background: var(--red); border-radius: 50%; animation: blink 1s infinite; box-shadow: 0 0 6px var(--red); }
// @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
// .transcript-text { font-family: var(--fm); font-size: 12px; }

// .input-wrap { flex-shrink: 0; padding: 12px 20px 8px; border-top: 1px solid var(--border); background: rgba(5,12,5,0.9); backdrop-filter: blur(16px); transition: border-color 0.3s; }
// .input-listening { border-color: rgba(248,113,113,0.3) !important; }
// .input-inner { display: flex; align-items: flex-end; gap: 8px; background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 10px 10px 10px 16px; transition: border-color 0.25s; }
// .input-inner:focus-within { border-color: rgba(187,236,108,0.25); box-shadow: 0 0 0 3px rgba(187,236,108,0.04); }
// .chat-input { flex: 1; background: transparent; border: none; outline: none; color: var(--text); font-family: var(--fw); font-size: 14px; line-height: 1.5; padding: 3px 0; min-height: 24px; max-height: 120px; }
// .chat-input::placeholder { color: var(--text-3); }
// .chat-input:disabled { opacity: 0.5; }

// .input-actions { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
// .char-count { font-family: var(--fm); font-size: 10px; color: var(--text-3); }
// .action-btn { width: 38px; height: 38px; min-width: 38px; border-radius: 11px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; position: relative; }
// .mic-btn { background: var(--surface); border: 1px solid var(--border); color: var(--text-2); }
// .mic-btn:hover { border-color: var(--border-2); color: var(--lime); background: var(--lime-glow); }
// .mic-on { background: rgba(248,113,113,0.1) !important; border-color: rgba(248,113,113,0.4) !important; color: var(--red) !important; box-shadow: 0 0 16px rgba(248,113,113,0.15); }
// .mic-ring { position: absolute; inset: -4px; border-radius: 14px; border: 2px solid var(--red); animation: micRing 1.2s ease-out infinite; pointer-events: none; }
// @keyframes micRing { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(1.5);opacity:0} }
// .send-btn { background: linear-gradient(135deg, #2d6a1a, #1a4a10); border: 1px solid rgba(187,236,108,0.2); color: var(--lime); box-shadow: 0 2px 12px rgba(187,236,108,0.1); }
// .send-btn:hover:not(:disabled) { background: linear-gradient(135deg, #3a8020, #2a6015); box-shadow: 0 4px 20px rgba(187,236,108,0.2); }
// .send-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none !important; }

// .input-footer-note { text-align: center; font-size: 9.5px; color: var(--text-3); padding: 6px 0 2px; letter-spacing: 0.3px; font-family: var(--fm); opacity: 0.6; }

// /* ── RESPONSIVE ───────────────────────────── */
// @media (max-width: 768px) {
//   :root { --sidebar: 100vw; }
//   .sidebar { position: fixed; top: 0; left: 0; height: 100%; z-index: 200; box-shadow: 4px 0 40px rgba(0,0,0,0.6); }
//   .ch-home-mobile { display: flex !important; }
//   .bubble { max-width: 85%; }
//   .chat-messages { padding: 16px; }
//   .banner-inner { padding: 12px 16px; gap: 12px; }
//   .banner-hindi-title { font-size: 15px; }
//   .banner-eng-title { font-size: 12px; }
//   .banner-tagline { display: none; }
//   .banner-logo { width: 54px; height: 54px; }
//   .banner-app-name { font-size: 20px; }
//   .banner-divider-v { display: none; }
//   .banner-pills { display: none; }
//   .banner-bottom-bar { padding: 6px 16px; }
//   .banner-quote { font-size: 10px; }
// }
// `;



import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import collegeLogo from "../assets/cot.jpg";

/* ─── Quick suggestions ─────────────────────────────────────────── */
const SUGGESTIONS = [
  { label: "🍅 Tamatar ka bhav", query: "Haldwani mein tamatar ka bhav kya hai aaj?" },
  { label: "🧅 Pyaz kahan bechun", query: "Pyaz 60 kg kahan bechun Haldwani mein?" },
  { label: "🥔 Aloo buyers", query: "Best buyers for potatoes near Haldwani" },
  { label: "🥦 Gobhi mandi", query: "Cauliflower mandi price and best time to sell" },
  { label: "💰 Best price tips", query: "How to get maximum price for my crops?" },
  { label: "⏰ Kab bechna chahiye", query: "Sabji bechne ka sabse accha samay kab hai?" },
];

/* ─── Welcome screen crop topics (like Pragyanam's knowledge topics) ─── */
const CROP_TOPICS = [
  { icon: "🍅", label: "Tamatar (Tomato)" },
  { icon: "🧅", label: "Pyaz (Onion)" },
  { icon: "🥔", label: "Aloo (Potato)" },
  { icon: "🥦", label: "Gobhi (Cauliflower)" },
  { icon: "🥕", label: "Gajar (Carrot)" },
  // { icon: "🌽", label: "Makka (Maize)" },
  // { icon: "🫘", label: "Dal (Pulses)" },
  // { icon: "🌾", label: "Gehu (Wheat)" },
  // { icon: "🍐", label: "Nashpati (Pear)" },
  // { icon: "🍎", label: "Seb (Apple)" },
  // { icon: "🫚", label: "Sarson (Mustard)" },
  // { icon: "🌿", label: "Dhaniya (Coriander)" },
];

/* ─── Grain overlay ──────────────────────────────────────────────── */
function GrainOverlay() {
  return (
    <svg className="grain-svg" xmlns="http://www.w3.org/2000/svg" style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.04" />
    </svg>
  );
}

/* ─── Format bot message ────────────────────────────────────────── */
function BotMessage({ text }) {
  const lines = text.split("\n");
  return (
    <div className="bot-content">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="msg-spacer" />;
        if (/^━+$/.test(trimmed)) return <div key={i} className="msg-divider" />;
        const sectionMatch = trimmed.match(/^(📍|💰|⏰|🚜|📈|🚚|🌾|✅|⚠️)\s*(.*)/);
        if (sectionMatch) {
          return (
            <div key={i} className="msg-section">
              <span className="section-icon">{sectionMatch[1]}</span>
              <span className="section-title">{sectionMatch[2]}</span>
            </div>
          );
        }
        if (trimmed.startsWith("•")) {
          return (
            <div key={i} className="msg-bullet">
              <span className="bullet-dot" />
              <span>{trimmed.slice(1).trim()}</span>
            </div>
          );
        }
        return <p key={i} className="msg-text">{trimmed}</p>;
      })}
    </div>
  );
}

/* ─── Typing indicator ──────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="typing-wrap">
      <div className="bot-avatar-sm"><span>🌾</span></div>
      <div className="typing-bubble">
        <div className="typing-bar" />
        <div className="typing-bar" style={{ animationDelay: "0.2s", width: "55%" }} />
        <div className="typing-bar" style={{ animationDelay: "0.35s", width: "35%" }} />
      </div>
    </div>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────── */
const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconMic = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="2" width="6" height="11" rx="3" fill="currentColor"/>
    <path d="M5 11a7 7 0 0014 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconMicOff = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 9v3a3 3 0 005.12 2.12M15 9.34V5a3 3 0 00-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 16.95A7 7 0 015 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconHome = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);
const IconSpeak = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor"/>
    <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconCopy = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 5V6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN CHATBOT                                                    */
/* ═══════════════════════════════════════════════════════════════ */
export default function Chatbot() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const farmerName = localStorage.getItem("farmerName") || null;

  function now() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const INIT = {
    sender: "bot",
    text: farmerName
      ? `Namaste ${farmerName} ji! 🌾\n\nMain AgroAI hoon — aapka personal fasal bechne ka saathi.`
      : `Namaste! 🌾\nI'm AgroAI — your personal crop selling assistant for Haldwani.`,
    time: now(),
    id: "init",
  };

  const [messages, setMessages] = useState([INIT]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceLang, setVoiceLang] = useState("en-IN");
  const [transcript, setTranscript] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); // starts CLOSED like Pragyanam
  const [copiedId, setCopiedId] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);
  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) setVoiceSupported(true);
  }, []);

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await fetch("http://localhost:5000/api/chats", { headers: { Authorization: token } });
        const data = await res.json();
        if (data.length > 0) {
          setMessages(data[0].messages.length ? data[0].messages : [INIT]);
          setChatId(data[0]._id);
          setShowSuggestions(data[0].messages.length <= 1);
        } else {
          const cr = await fetch("http://localhost:5000/api/chats", {
            method: "POST", headers: { Authorization: token },
          });
          const chat = await cr.json();
          setChatId(chat._id);
        }
      } catch {}
    })();
  }, []);

  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const r = new SR();
    r.lang = voiceLang; r.interimResults = true;
    r.onstart = () => setIsListening(true);
    r.onresult = (e) => {
      const t = Array.from(e.results).map(x => x[0].transcript).join("");
      setTranscript(t); setInput(t); setCharCount(t.length);
    };
    r.onend = () => { setIsListening(false); setTranscript(""); };
    r.onerror = () => { setIsListening(false); setTranscript(""); };
    recognitionRef.current = r; r.start();
  }, [voiceLang]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop(); setIsListening(false);
  }, []);

  const toggleVoice = () => {
    if (isListening) { stopListening(); if (input.trim()) sendMessage(input); }
    else startListening();
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/[📍💰⏰🚜📈🚚🌾✅⚠️•━]/g, "").replace(/\n/g, ". ");
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = voiceLang; u.rate = 0.92;
    u.onstart = () => setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(u);
  };

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id); setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const newChat = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/chats", {
        method: "POST", headers: { Authorization: token },
      });
      const chat = await res.json();
      setChatId(chat._id);
    } catch {}
    setMessages([INIT]); setInput(""); setCharCount(0);
    setShowSuggestions(true); setSidebarOpen(false);
  };

  const saveMessage = async (msg) => {
    if (!chatId || !token) return;
    await fetch("http://localhost:5000/api/chats/message", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({ chatId, message: msg }),
    }).catch(() => {});
  };

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput(""); setCharCount(0); setShowSuggestions(false);
    const userMsg = { sender: "user", text: msg, time: now(), id: Date.now() + "_u" };
    await saveMessage(userMsg);
    setMessages(p => [...p, userMsg]);
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, farmerName }),
      });
      const data = await res.json();
      if (/[\u0900-\u097F]/.test(data.reply)) setVoiceLang("hi-IN");
      const botMsg = { sender: "bot", text: data.reply, time: now(), id: Date.now() + "_b", meta: data.meta || null };
      await saveMessage(botMsg);
      setMessages(p => [...p, botMsg]);
    } catch {
      setMessages(p => [...p, { sender: "bot", text: "⚠️ Server error. Please try again.", time: now(), id: Date.now() + "_err" }]);
    } finally {
      setLoading(false); setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  /* ═══ RENDER ═══════════════════════════════════════════════════ */
  return (
    <>
      <style>{CSS}</style>
      <GrainOverlay />

      <div className="chat-root">

        {/* ══ SIDEBAR TOGGLE ARROW (always visible) ══════════════ */}
        <button
          className={`sidebar-toggle-btn ${sidebarOpen ? "sidebar-toggle-open" : ""}`}
          onClick={() => setSidebarOpen(p => !p)}
          title={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? "✕" : ">"}
        </button>

        {/* ══ SIDEBAR DRAWER ══════════════════════════════════════ */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="sidebar-backdrop"
                onClick={() => setSidebarOpen(false)}
              />

              {/* Sidebar panel */}
              <motion.aside
                key="sidebar"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                className="sidebar"
              >
                <div className="sb-brand">
                  <div className="sb-logo">🌾</div>
                  <div>
                    <div className="sb-title">AgroAI</div>
                    <div className="sb-sub">Crop Intelligence</div>
                  </div>
                </div>

                <button className="sb-home-btn" onClick={() => navigate("/")}>
                  <IconHome /> Back to Home
                </button>

                <button className="sb-new-btn" onClick={newChat}>
                  <IconPlus /> New Conversation
                </button>

                <div className="sb-divider" />

                {farmerName && (
                  <div className="sb-farmer">
                    <div className="sb-farmer-avatar">{farmerName[0].toUpperCase()}</div>
                    <div>
                      <div className="sb-farmer-name">{farmerName}</div>
                      <div className="sb-farmer-tag">Registered Farmer</div>
                    </div>
                  </div>
                )}

                <div className="sb-section-label">Voice Language</div>
                <div className="sb-lang-row">
                  {[["en-IN", "🇬🇧", "English"], ["hi-IN", "🇮🇳", "हिंदी"]].map(([val, flag, lbl]) => (
                    <button key={val} className={`sb-lang-btn ${voiceLang === val ? "sb-lang-active" : ""}`} onClick={() => setVoiceLang(val)}>
                      {flag} {lbl}
                    </button>
                  ))}
                </div>

                <div className="sb-section-label" style={{ marginTop: 24 }}>Market Status</div>
                <div className="sb-status-card">
                  <div className="sb-status-row">
                    <span className="live-dot" />
                    <span className="sb-status-text">Live Mandi Data</span>
                  </div>
                  <div className="sb-status-row" style={{ marginTop: 6 }}>
                    <span className="sb-status-loc">📍 Haldwani · Uttarakhand</span>
                  </div>
                  <div className="sb-crop-pills">
                    {["🍅 Tamatar", "🧅 Pyaz", "🥔 Aloo", "🥦 Gobhi"].map(c => (
                      <span key={c} className="sb-crop-pill">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="sb-tip">
                  💡 <strong>Pro tip:</strong> Mention your crop name and quantity for hyper-accurate advice.
                </div>

                <div className="sb-footer">
                  <div className="sb-footer-text">Made for farmers of Uttarakhand</div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ══ MAIN CONTENT ════════════════════════════════════════ */}
        <div className="chat-main">

          {/* ── COLLEGE BANNER (with gap on all sides like Pragyanam) ── */}
          <div className="banner-outer">
            <div className="college-banner">
              <div className="banner-shimmer" />
              <div className="banner-inner">
                <div className="banner-logo-wrap">
                  <img src={collegeLogo} alt="College Logo" className="banner-logo" />
                  <div className="banner-logo-ring" />
                </div>
                <div className="banner-text-block">
                  <div className="banner-hindi-title">प्रौद्योगिकी महाविद्यालय</div>
                  <div className="banner-eng-title">College of Technology, Pantnagar</div>
                  <div className="banner-tagline">
                    G.B. Pant University of Agriculture &amp; Technology
                  </div>
                </div>
                <div className="banner-divider-v" />
                <div className="banner-right">
                  <div className="banner-app-name">AgroAI</div>
                  <div className="banner-app-sub">Intelligent Crop Market Assistant</div>
                  <div className="banner-pills">
                    <span className="banner-pill">🌾 Live Mandi</span>
                    <span className="banner-pill">🤖 AI Powered</span>
                    <span className="banner-pill">🇮🇳 Uttarakhand</span>
                  </div>
                </div>
              </div>
              <div className="banner-bottom-bar">
                <span className="banner-quote">
                  "Empowering farmers of Uttarakhand with AI-driven market intelligence"
                </span>
                <span className="banner-live-badge">
                  <span className="live-dot-sm" /> Live Data Active
                </span>
              </div>
            </div>
          </div>

          {/* ── CHAT INTERFACE CARD (the main card with gap on sides) ── */}
          <div className="chat-card-outer">
            <div className="chat-card">

              {/* Chat Header */}
              <header className="chat-header">
                <div className="ch-left">
                  <div className="ch-avatar">🤖</div>
                  <div>
                    <div className="ch-title">AgroAI Assistant</div>
                    <div className="ch-status">
                      <span className="ch-dot" />
                      Online · {voiceLang === "hi-IN" ? "हिंदी मोड" : "English Mode"}
                    </div>
                  </div>
                </div>
                <div className="ch-right">
                  <AnimatePresence>
                    {isSpeaking && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="speaking-badge"
                      >
                        <span className="speaking-wave" />
                        <span className="speaking-wave" style={{ animationDelay: "0.15s" }} />
                        <span className="speaking-wave" style={{ animationDelay: "0.3s" }} />
                        Speaking
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button className="ch-home-mobile" onClick={() => navigate("/")} title="Go to Home">
                    <IconHome />
                  </button>
                </div>
              </header>

              {/* Messages */}
              <div className="chat-messages">

                {/* ── WELCOME CARD (Pragyanam-style, shown when only init message) ── */}
                {showSuggestions && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="welcome-card"
                  >
                    <div className="wc-namaste">🙏 AgroAI mein aapka swagat hai।</div>
                    <div className="wc-subtitle-hi">फसल बाजार, मूल्य और खरीदार की जानकारी की चेतनमयी दुनिया</div>
                    <p className="wc-desc">
                      Namaste! Main <strong>AgroAI</strong> hoon — G.B. Pant University ke College of Technology, Pantnagar ka
                      AI-powered fasal bazar saathi. Aap mujhse in vishyon par charcha kar sakte hain:
                    </p>
                    <div className="wc-crops-grid">
                      {CROP_TOPICS.map((t, i) => (
                        <button
                          key={i}
                          className="wc-crop-btn"
                          onClick={() => sendMessage(`Tell me about ${t.label} prices and market in Haldwani`)}
                        >
                          <span className="wc-crop-icon">{t.icon}</span>
                          <span className="wc-crop-label">{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={msg.id || i}
                      initial={{ opacity: 0, y: 16, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className={`msg-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
                    >
                      {msg.sender === "bot" && (
                        <div className="bot-avatar-sm"><span>🌾</span></div>
                      )}

                      <div className={`bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
                        {msg.sender === "bot"
                          ? <BotMessage text={msg.text} />
                          : <p className="user-text">{msg.text}</p>
                        }

                        {msg.meta && (
                          <div className="meta-row">
                            {msg.meta.crop && <span className="meta-chip">🌱 {msg.meta.crop}</span>}
                            {msg.meta.location && <span className="meta-chip">📍 {msg.meta.location}</span>}
                            {msg.meta.quantity > 0 && <span className="meta-chip">⚖️ {msg.meta.quantity}kg</span>}
                            <span className="meta-chip">{msg.meta.priceSource === "live" ? "🟢 Live" : "📊 Est."}</span>
                          </div>
                        )}

                        <div className="bubble-foot">
                          <span className="bubble-time">{msg.time}</span>
                          {msg.sender === "bot" && (
                            <div className="bubble-actions">
                              <button className="act-btn" onClick={() => speakText(msg.text)} title="Listen">
                                <IconSpeak />
                              </button>
                              <button className="act-btn" onClick={() => copyText(msg.text, msg.id)} title="Copy">
                                {copiedId === msg.id ? "✓" : <IconCopy />}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && <TypingIndicator />}
                <div ref={bottomRef} />
              </div>

              {/* Quick Suggestions */}
              {/* <AnimatePresence>
                {showSuggestions && messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="quick-suggestions"
                  >
                    <div className="qs-label">QUICK QUESTIONS</div>
                    <div className="qs-row">
                      {SUGGESTIONS.map((s, i) => (
                        <button key={i} className="qs-btn" onClick={() => sendMessage(s.query)}>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence> */}

              {/* Input Area */}
              <div className="input-area">
                {isListening && (
                  <div className="listening-bar">
                    <div className="listening-waves">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="lw-bar" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <span className="listening-text">{transcript || "Listening..."}</span>
                  </div>
                )}
                <div className="input-row">
                  <textarea
                    ref={inputRef}
                    className="chat-input"
                    value={input}
                    onChange={e => { setInput(e.target.value); setCharCount(e.target.value.length); }}
                    onKeyDown={handleKey}
                    placeholder="Ask about crops, prices, buyers..."
                    rows={1}
                    maxLength={500}
                  />
                  {voiceSupported && (
                    <button className={`mic-btn ${isListening ? "mic-active" : ""}`} onClick={toggleVoice} title="Voice input">
                      {isListening ? <IconMicOff /> : <IconMic />}
                    </button>
                  )}
                  <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}>
                    <IconSend />
                  </button>
                </div>
                <div className="input-footer-bar">
                  <span className="input-footer-txt">AgroAI · Live mandi data + LLaMA AI · Prices are indicative</span>
                </div>
              </div>

            </div>{/* /chat-card */}
          </div>{/* /chat-card-outer */}

        </div>{/* /chat-main */}
      </div>{/* /chat-root */}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
/*  CSS                                                             */
/* ═══════════════════════════════════════════════════════════════ */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: #1a1f16;
    color: #e8f0e4;
    min-height: 100vh;
  }

  /* ── ROOT LAYOUT ─────────────────────────────────────────── */
  .chat-root {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1f16 0%, #0f1a0c 50%, #1a2010 100%);
  }

  /* ── SIDEBAR TOGGLE BUTTON (the green > arrow) ──────────── */
  .sidebar-toggle-btn {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 200;
    background: #2d7a22;
    color: #fff;
    border: none;
    border-radius: 0 8px 8px 0;
    width: 32px;
    height: 56px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 0 12px rgba(0,0,0,0.4);
    transition: background 0.2s, width 0.2s;
    letter-spacing: 0;
  }
  .sidebar-toggle-btn:hover {
    background: #3a9e2e;
    width: 38px;
  }
  .sidebar-toggle-btn.sidebar-toggle-open {
    left: 280px;
    border-radius: 0 8px 8px 0;
    background: #c0392b;
    font-size: 14px;
  }

  /* ── SIDEBAR BACKDROP ────────────────────────────────────── */
  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 149;
  }

  /* ── SIDEBAR ─────────────────────────────────────────────── */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: #141a10;
    border-right: 1px solid #2a3a24;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 24px 16px 16px;
    z-index: 150;
    overflow-y: auto;
  }

  .sb-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #2a3a24; }
  .sb-logo { font-size: 28px; }
  .sb-title { font-size: 18px; font-weight: 700; color: #7ecb5a; }
  .sb-sub { font-size: 11px; color: #6a8a5e; text-transform: uppercase; letter-spacing: 0.8px; }

  .sb-home-btn {
    display: flex; align-items: center; gap: 8px;
    background: transparent; border: 1px solid #2a3a24; color: #a8c89a;
    padding: 9px 14px; border-radius: 8px; cursor: pointer; font-size: 13.5px;
    transition: all 0.18s; margin-bottom: 10px; width: 100%;
  }
  .sb-home-btn:hover { background: #1e2e18; color: #7ecb5a; border-color: #3a5a2e; }

  .sb-new-btn {
    display: flex; align-items: center; gap: 8px; justify-content: center;
    background: #2d7a22; border: none; color: #fff;
    padding: 10px 14px; border-radius: 8px; cursor: pointer; font-size: 13.5px; font-weight: 600;
    transition: all 0.18s; width: 100%;
  }
  .sb-new-btn:hover { background: #3a9e2e; }

  .sb-divider { height: 1px; background: #2a3a24; margin: 16px 0; }
  .sb-section-label { font-size: 10px; color: #5a7a4e; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px; }

  .sb-farmer { display: flex; align-items: center; gap: 10px; background: #1e2e18; border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; }
  .sb-farmer-avatar { width: 36px; height: 36px; border-radius: 50%; background: #2d7a22; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #fff; }
  .sb-farmer-name { font-size: 13.5px; font-weight: 600; color: #c8e8b4; }
  .sb-farmer-tag { font-size: 10.5px; color: #6a8a5e; }

  .sb-lang-row { display: flex; gap: 8px; }
  .sb-lang-btn { flex: 1; padding: 8px; border-radius: 7px; border: 1px solid #2a3a24; background: transparent; color: #a8c89a; font-size: 12.5px; cursor: pointer; transition: all 0.18s; }
  .sb-lang-btn:hover { background: #1e2e18; }
  .sb-lang-active { background: #1e3a14 !important; border-color: #2d7a22 !important; color: #7ecb5a !important; font-weight: 600; }

  .sb-status-card { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 10px; padding: 12px 14px; }
  .sb-status-row { display: flex; align-items: center; gap: 7px; }
  .sb-status-text { font-size: 12.5px; font-weight: 600; color: #7ecb5a; }
  .sb-status-loc { font-size: 12px; color: #8aaa7e; }
  .sb-crop-pills { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
  .sb-crop-pill { background: #1e3a14; border: 1px solid #3a5a2e; border-radius: 20px; padding: 2px 8px; font-size: 11px; color: #a8c89a; }
  .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; animation: pulse 2s infinite; }

  .sb-tip { background: #1a2a14; border-left: 3px solid #2d7a22; border-radius: 0 8px 8px 0; padding: 10px 12px; font-size: 12px; color: #8aaa7e; margin-top: 16px; line-height: 1.5; }
  .sb-footer { margin-top: auto; padding-top: 20px; }
  .sb-footer-text { font-size: 11px; color: #4a6a3e; text-align: center; }

  /* ── MAIN CONTENT ─────────────────────────────────────────── */
  .chat-main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 40px; /* space for toggle button */
  }

  /* ── BANNER OUTER (provides gap on all sides) ─────────────── */
  .banner-outer {
    padding: 20px 24px 0 24px;
  }

  /* ── COLLEGE BANNER ─────────────────────────────────────────── */
  .college-banner {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #8b1a1a 0%, #6b1414 40%, #4a1010 100%);
    border-radius: 14px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .banner-shimmer {
    position: absolute; inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%);
    animation: shimmer 4s infinite;
  }
  @keyframes shimmer { 0%,100% { transform: translateX(-100%); } 50% { transform: translateX(100%); } }

  .banner-inner {
    position: relative; display: flex; align-items: center;
    gap: 20px; padding: 18px 24px;
  }
  .banner-logo-wrap { position: relative; flex-shrink: 0; }
  .banner-logo { width: 68px; height: 68px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(255,255,255,0.2); }
  .banner-logo-ring { position: absolute; inset: -3px; border-radius: 50%; border: 1.5px solid rgba(255,220,100,0.3); animation: spin 12s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .banner-text-block { flex: 1; min-width: 0; }
  .banner-hindi-title { font-size: 18px; font-weight: 700; color: #fff; line-height: 1.3; }
  .banner-eng-title { font-size: 13px; color: rgba(255,200,150,0.9); margin-top: 2px; font-style: italic; }
  .banner-tagline { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 3px; }

  .banner-divider-v { width: 1px; height: 56px; background: rgba(255,255,255,0.15); flex-shrink: 0; }

  .banner-right { flex-shrink: 0; text-align: right; }
  .banner-app-name { font-size: 22px; font-weight: 800; color: #ffd700; letter-spacing: -0.5px; font-style: italic; }
  .banner-app-sub { font-size: 10.5px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; }
  .banner-pills { display: flex; gap: 5px; justify-content: flex-end; flex-wrap: wrap; }
  .banner-pill { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 20px; padding: 2px 8px; font-size: 10.5px; color: rgba(255,255,255,0.8); }

  .banner-bottom-bar {
    position: relative; display: flex; justify-content: space-between; align-items: center;
    padding: 8px 24px; background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.07);
    flex-wrap: wrap; gap: 6px;
  }
  .banner-quote { font-size: 11.5px; font-style: italic; color: rgba(255,255,200,0.7); }
  .banner-live-badge { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #4ade80; font-weight: 600; }
  .live-dot-sm { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

  /* ── CHAT CARD OUTER (gap on sides and bottom) ─────────────── */
  .chat-card-outer {
    padding: 16px 24px 20px 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* ── CHAT CARD ─────────────────────────────────────────────── */
  .chat-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #141a10;
    border: 1px solid #2a3a24;
    border-radius: 14px;
    overflow: hidden;
    min-height: calc(100vh - 220px);
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  }

  /* ── CHAT HEADER ────────────────────────────────────────────── */
  .chat-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 20px; background: #0f1a0c;
    border-bottom: 1px solid #2a3a24; flex-shrink: 0;
  }
  .ch-left { display: flex; align-items: center; gap: 12px; }
  .ch-avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, #2d7a22, #1a4a12); display: flex; align-items: center; justify-content: center; font-size: 18px; border: 1.5px solid #3a5a2e; }
  .ch-title { font-size: 15px; font-weight: 700; color: #c8e8b4; }
  .ch-status { display: flex; align-items: center; gap: 5px; font-size: 11.5px; color: #7aaa60; }
  .ch-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: pulse 2s infinite; }
  .ch-right { display: flex; align-items: center; gap: 10px; }
  .ch-home-mobile { background: transparent; border: 1px solid #2a3a24; color: #8aaa7e; padding: 7px 9px; border-radius: 8px; cursor: pointer; transition: all 0.18s; display: flex; align-items: center; }
  .ch-home-mobile:hover { background: #1e2e18; color: #7ecb5a; }

  .speaking-badge { display: flex; align-items: center; gap: 5px; background: #1e3a14; border: 1px solid #2d7a22; border-radius: 20px; padding: 4px 10px; font-size: 11.5px; color: #7ecb5a; }
  .speaking-wave { display: inline-block; width: 3px; height: 12px; background: #4ade80; border-radius: 2px; animation: wave 0.6s ease-in-out infinite alternate; }
  @keyframes wave { to { height: 4px; } }

  /* ── MESSAGES ───────────────────────────────────────────────── */
  .chat-messages {
    flex: 1; overflow-y: auto; padding: 20px 20px 10px;
    display: flex; flex-direction: column; gap: 16px;
    scrollbar-width: thin; scrollbar-color: #2a3a24 transparent;
  }

  /* ── WELCOME CARD (Pragyanam-style) ──────────────────────── */
  .welcome-card {
    background: #1a2a14;
    border: 1px solid #2a3a24;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 8px;
  }
  .wc-namaste {
    font-size: 22px;
    font-weight: 700;
    color: #c8e8b4;
    margin-bottom: 4px;
    font-family: 'Segoe UI', sans-serif;
  }
  .wc-subtitle-hi {
    font-size: 13.5px;
    color: #8aaa7e;
    margin-bottom: 12px;
    font-style: italic;
  }
  .wc-desc {
    font-size: 13.5px;
    color: #a8c89a;
    line-height: 1.65;
    margin-bottom: 18px;
  }
  .wc-desc strong { color: #7ecb5a; }

  /* ── CROP TOPICS GRID (like Pragyanam's knowledge grid) ─── */
  .wc-crops-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .wc-crop-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #0f1a0c;
    border: 1px solid #2a3a24;
    border-radius: 8px;
    padding: 10px 13px;
    cursor: pointer;
    transition: all 0.18s;
    text-align: left;
    color: #a8c89a;
  }
  .wc-crop-btn:hover {
    background: #1e3a14;
    border-color: #3a5a2e;
    color: #7ecb5a;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  }
  .wc-crop-icon { font-size: 18px; flex-shrink: 0; }
  .wc-crop-label { font-size: 12.5px; font-weight: 500; }

  /* ── MESSAGE ROWS ────────────────────────────────────────── */
  .msg-row { display: flex; align-items: flex-end; gap: 8px; }
  .user-row { flex-direction: row-reverse; }
  .bot-row { flex-direction: row; }

  .bot-avatar-sm { width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #2d7a22, #1a4a12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; border: 1.5px solid #3a5a2e; }

  .bubble { max-width: 72%; border-radius: 14px; padding: 12px 15px; position: relative; }
  .user-bubble { background: linear-gradient(135deg, #2d7a22, #1e5a18); border-bottom-right-radius: 4px; }
  .bot-bubble { background: #1a2a14; border: 1px solid #2a3a24; border-bottom-left-radius: 4px; }

  .user-text { font-size: 14px; color: #e8f5e0; line-height: 1.55; }
  .bot-content { font-size: 13.5px; line-height: 1.6; color: #c8e8b4; }
  .msg-text { margin-bottom: 4px; }
  .msg-spacer { height: 6px; }
  .msg-divider { height: 1px; background: #2a3a24; margin: 8px 0; }
  .msg-section { display: flex; align-items: center; gap: 6px; font-weight: 700; color: #7ecb5a; font-size: 13px; margin: 8px 0 2px; }
  .section-icon { font-size: 15px; }
  .msg-bullet { display: flex; align-items: flex-start; gap: 7px; margin: 3px 0; font-size: 13px; color: #a8c89a; }
  .bullet-dot { width: 5px; height: 5px; border-radius: 50%; background: #4a8a3e; flex-shrink: 0; margin-top: 7px; }

  .meta-row { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
  .meta-chip { background: rgba(45,122,34,0.2); border: 1px solid rgba(45,122,34,0.35); border-radius: 20px; padding: 2px 7px; font-size: 10.5px; color: #7ecb5a; }

  .bubble-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 7px; gap: 8px; }
  .bubble-time { font-size: 10.5px; color: #5a7a4e; }
  .bubble-actions { display: flex; gap: 4px; }
  .act-btn { background: transparent; border: 1px solid #2a3a24; color: #6a8a5e; width: 24px; height: 24px; border-radius: 5px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 11px; transition: all 0.15s; }
  .act-btn:hover { background: #1e3a14; color: #7ecb5a; border-color: #3a5a2e; }

  /* ── TYPING ──────────────────────────────────────────────── */
  .typing-wrap { display: flex; align-items: flex-end; gap: 8px; }
  .typing-bubble { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 14px; border-bottom-left-radius: 4px; padding: 12px 16px; display: flex; flex-direction: column; gap: 5px; min-width: 80px; }
  .typing-bar { height: 5px; border-radius: 3px; background: linear-gradient(90deg, #2d7a22, #4ade80, #2d7a22); background-size: 200% 100%; animation: shimmerBar 1.4s ease-in-out infinite; width: 75%; }
  @keyframes shimmerBar { 0%,100% { background-position: 0% 50%; opacity: 0.5; } 50% { background-position: 100% 50%; opacity: 1; } }

  /* ── QUICK SUGGESTIONS ──────────────────────────────────── */
  .quick-suggestions { padding: 6px 20px 10px; border-top: 1px solid #2a3a24; background: #0f1a0c; }
  .qs-label { font-size: 9.5px; color: #5a7a4e; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 7px; }
  .qs-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .qs-btn { background: #1a2a14; border: 1px solid #2a3a24; border-radius: 20px; padding: 5px 12px; font-size: 12px; color: #8aaa7e; cursor: pointer; transition: all 0.18s; white-space: nowrap; }
  .qs-btn:hover { background: #1e3a14; color: #7ecb5a; border-color: #3a5a2e; }

  /* ── INPUT AREA ─────────────────────────────────────────── */
  .input-area { border-top: 1px solid #2a3a24; background: #0f1a0c; flex-shrink: 0; padding: 12px 16px 10px; }
  .listening-bar { display: flex; align-items: center; gap: 10px; background: #1a2a14; border: 1px solid #2d7a22; border-radius: 8px; padding: 8px 12px; margin-bottom: 8px; }
  .listening-waves { display: flex; gap: 3px; align-items: center; }
  .lw-bar { width: 3px; height: 16px; background: #4ade80; border-radius: 2px; animation: lvWave 0.6s ease-in-out infinite alternate; }
  @keyframes lvWave { to { height: 5px; } }
  .listening-text { font-size: 12.5px; color: #7ecb5a; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .input-row { display: flex; align-items: flex-end; gap: 8px; }
  .chat-input {
    flex: 1; background: #1a2a14; border: 1px solid #2a3a24; border-radius: 10px;
    color: #c8e8b4; padding: 11px 14px; font-size: 14px; resize: none;
    outline: none; line-height: 1.5; max-height: 120px; overflow-y: auto;
    transition: border-color 0.18s;
    font-family: inherit;
  }
  .chat-input:focus { border-color: #3a6a2e; }
  .chat-input::placeholder { color: #4a6a3e; }

  .mic-btn {
    width: 42px; height: 42px; border-radius: 10px; border: 1px solid #2a3a24;
    background: #1a2a14; color: #8aaa7e; cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.18s; flex-shrink: 0;
  }
  .mic-btn:hover { background: #1e3a14; color: #7ecb5a; }
  .mic-active { background: #3a1a1a !important; border-color: #c0392b !important; color: #e74c3c !important; animation: micPulse 1s ease-in-out infinite; }
  @keyframes micPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.4); } 50% { box-shadow: 0 0 0 8px rgba(192,57,43,0); } }

  .send-btn {
    width: 42px; height: 42px; border-radius: 10px; border: none;
    background: linear-gradient(135deg, #2d7a22, #1e5a18); color: #fff;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: all 0.18s; flex-shrink: 0;
  }
  .send-btn:hover:not(:disabled) { background: linear-gradient(135deg, #3a9e2e, #2d7a22); transform: scale(1.04); }
  .send-btn:disabled { opacity: 0.35; cursor: not-allowed; }

  .input-footer-bar { margin-top: 7px; text-align: center; }
  .input-footer-txt { font-size: 10.5px; color: #3a5a2e; }

  /* ── SCROLLBAR ───────────────────────────────────────────── */
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #2a3a24; border-radius: 3px; }

  /* ── RESPONSIVE ─────────────────────────────────────────── */
  @media (max-width: 600px) {
    .banner-outer { padding: 12px 12px 0; }
    .chat-card-outer { padding: 10px 12px 14px; }
    .banner-inner { flex-wrap: wrap; gap: 12px; padding: 14px 16px; }
    .banner-right { width: 100%; text-align: left; }
    .banner-app-name { font-size: 18px; }
    .wc-crops-grid { grid-template-columns: repeat(2, 1fr); }
    .bubble { max-width: 88%; }
    .chat-main { padding-left: 36px; }
    .sidebar-toggle-btn.sidebar-toggle-open { left: 260px; }
    .sidebar { width: 260px; }
  }
`;




