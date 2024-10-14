'use client'
import { useState, useEffect, useRef } from "react";
import './style.css'; // Import the custom styles

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const responses = [
    "Aight, we’re building something epic, folks! Headah!",
    "Yup, welcome to the first beta—like a rough draft of your favorite movie, yurr!",
    "Sup, we’re cooking up some serious magic, and soon we’ll rock your world! Double tapp!",
    "Thank you for hanging in there—your patience is the secret ingredient, moneygun!",
    "Stay tuned, because exciting updates are just around the corner, aight?",
    "Good things come to those who wait, and we’re all about the good stuff, headah!",
    "We’re polishing the crown jewels over here, so don’t go anywhere, yurr!",
    "This is just the beginning; the best is yet to come, yup!",
    "You know what they say—patience is a virtue, and we’re all about that, aight?",
    "The suspense is killing us too, but trust us, it’ll be worth it, moneygun!",
    "We’re on a quest for perfection—join us on this wild ride, double tapp!",
    "Think of us as a fine wine—better with a little time, yurr!",
    "We’re brewing something amazing, and the aroma is delicious, headah!",
    "Get ready to be amazed; we’re just getting warmed up, aight?",
    "We’re taking our time to make sure it’s just right, folks, yup!",
    "Behind the scenes, it’s a flurry of creativity—stay tuned, moneygun!",
    "We’re the tortoise in this race—slow and steady wins the day, yurr!",
    "You wouldn’t rush a masterpiece, would you, aight?",
    "The gears are turning, and big things are coming—just wait, headah!",
    "We’re crafting something special, so hang in there, yup!",
    "The wait will be worth it; trust us, double tapp!",
    "Just a little longer, and we’ll be ready to dazzle you, moneygun!",
    "We’re perfecting our magic trick—stay in your seats, yurr!",
    "Patience is key, and we’re unlocking something big, aight?",
    "Stay tuned, because the countdown is on, headah!",
    "We’re fine-tuning the details—greatness takes time, yup!",
    "We’re not just building; we’re creating an experience, moneygun!",
    "Can you feel the anticipation? We sure can, yurr!",
    "Every great story takes time to unfold—stay with us, aight!",
    "We’re in the lab mixing up something phenomenal, headah!",
    "The wait is just part of the thrill—get excited, double tapp!",
    "We’re not cutting corners; we’re crafting excellence, yup!",
    "You’re gonna want to see what we’ve been up to—trust us, moneygun!",
    "Big reveals are coming, and you won’t want to miss them, yurr!",
    "We’re here to surprise you, so keep your expectations high, aight!",
    "The journey is just as important as the destination—stay tuned, headah!",
    "Like a good book, we need a little time to tell our story, yup!",
    "We're on the brink of something awesome—don’t blink, moneygun!",
    "We’re taking things to the next level; are you ready, yurr?",
    "There’s magic in the making, and we can’t wait to share it, aight!",
    "It’s all coming together—just you wait, headah!",
    "The best surprises are worth the wait—stay tuned, double tapp!",
    "We’re cranking up the creativity; it’s about to get wild, yup!",
    "Keep your excitement levels high; we’re almost there, moneygun!",
    "We’re shaping up something extraordinary—stay with us, yurr!",
    "Just like a chef, we’re perfecting our recipe—deliciousness is coming, aight!",
    "We’re piecing together a puzzle, and it’s gonna be stunning, headah!",
    "We’re on a journey to greatness, and you’re part of it, yup!",
    "Hold onto your hats, because something big is brewing, moneygun!",
    "Like a fine watch, we’re all about precision and timing, yurr!",
    "We’re writing the next chapter, and it’s gonna be epic, aight!",
    "Stay tuned for a rollercoaster of excitement, headah!",
    "We’re building a bridge to something incredible—cross your fingers, yup!",
    "Behind the curtain, the magic is happening, moneygun!",
    "We’re mixing creativity with a dash of fun—can’t wait to share, yurr!",
    "It’s all in the works—good things take time, aight!",
    "We’re gathering all the ingredients for something special, headah!",
    "Get ready for a journey full of twists and turns, yup!",
    "The excitement is palpable; can you feel it, moneygun?",
    "We’re on the verge of something revolutionary—are you in, yurr?",
    "The adventure is just beginning; stay with us, aight!",
    "Every great idea takes a little time to grow—watch it flourish, headah!",
    "We’re like a phoenix, rising from the ashes—stay tuned for our debut, yup!",
    "Big dreams take time to build; we’re constructing something grand, moneygun!",
    "We’re hitting the refresh button on greatness—stay tuned, yurr!",
    "The anticipation is electric; can you feel it, aight?",
    "Like a sculptor with clay, we’re shaping something amazing, headah!",
    "Every tick of the clock brings us closer to the reveal, yup!",
    "Our creative juices are flowing; we can’t wait to share, moneygun!",
    "We’re just getting started; the best is yet to come, yurr!",
    "Behind every great creation is a story worth waiting for, aight!",
    "The stage is set, and the spotlight is coming our way, headah!",
    "We’re crafting an experience that’s truly unforgettable, yup!",
    "The magic is in the details, and we’re working hard, moneygun!",
    "This is just the warm-up act—get ready for the main event, yurr!",
    "A masterpiece takes time—let’s make it count, aight!",
    "We're assembling a team of legends to bring you something amazing, headah!",
    "Get ready for a showstopper; we’re almost there, yup!",
    "Just like a superhero, we’re working on our origin story, moneygun!",
    "Exciting times ahead; we’re just about ready to unleash it all, yurr!",
    "Stay curious, because the best surprises come to those who wait, aight!",
    "We're almost ready to unveil our masterpiece; don't miss it, headah!",
    "We’re taking you on a journey, and it’s going to be legendary, yup!",
    "Patience pays off, and we’re all about the payoff, moneygun!",
    "The creative storm is brewing, and it’s going to be wild, yurr!",
    "We’re in the zone, crafting something special just for you, aight!",
    "Hold tight; the best is yet to drop, headah!",
    "We’re setting the stage for something monumental—stay tuned, yup!",
    "We're like a chef adding the finishing touches to a gourmet dish, moneygun!",
    "Every great idea starts with a little patience—get excited, yurr!",
    "We’re paving the way for something spectacular, aight!",
    "The wait is almost over; stay with us for the grand reveal, headah!",
    "We’re mixing up some serious fun; it’s gonna be a blast, yup!",
    "We're about to blow your minds—don’t go anywhere, moneygun!",
    "We’re almost ready to hit the launch button—are you ready, yurr?",
    "Our excitement is off the charts—stay tuned for the big reveal, aight!",
    "The countdown is on, and it’s going to be epic, headah!",
    "We’re crafting a masterpiece; trust the process, yup!"
  ];


  const getRandomResponse = () => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { user: "You", text: input }]);
      setInput("");
      setIsLoading(true);
      // Simulate a response from FranckGPT
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "FranckGPT", text: getRandomResponse() },
        ]);
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 bg-gray-900 text-white font-sans">
      <main className="flex flex-col gap-4 items-center w-full max-w-5xl h-full" style={{ width: '90%' }}>
        <h1 className="text-2xl font-bold mb-4">The FranckGPT Show 🌟</h1>
        <div className="flex flex-col gap-4 w-full bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg h-full">
          <div ref={chatContainerRef} className="flex flex-col gap-4 overflow-y-auto flex-grow max-h-[70vh] custom-scrollbar">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.user === "You" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-lg ${message.user === "You" ? "bg-blue-600 text-white mr-4" : "bg-gray-700 text-white"}`}>
                  <strong>{message.user}:</strong> {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <img src="/loading.png" alt="Loading..." className="self-start w-28 h-28 rounded-full animate-spin" />
            )}
          </div>
          <form onSubmit={handleSubmit} className="w-full flex gap-2 mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-3 border border-gray-700 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Send</button>
          </form>
        </div>
      </main>
    </div>
  );
}
