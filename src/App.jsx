import React, { useState } from 'react';

export default function App() {
  // State for Community Engagement (Prayer & Praise Wall)
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah M.",
      text: "Vanessa's worship leading last Sunday truly moved my spirit. Thank you for your obedience to God's call! The atmosphere was so pure.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "David T.",
      text: "Praying for the upcoming young adult retreat. So grateful for your leadership and the safe spaces you create for our youth.",
      date: "1 week ago"
    }
  ]);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;
    
    const newEntry = {
      id: Date.now(),
      name: newName,
      text: newMessage,
      date: "Just now"
    };
    
    setMessages([newEntry, ...messages]);
    setNewName("");
    setNewMessage("");
  };

  // Gallery Data: Alternating Landscape and Tall images
  const galleryImages = [
    { id: 1, type: "landscape", alt: "Worship Leading", src: "https://images.unsplash.com/photo-1510511459019-5efa3cd4fc0d?auto=format&fit=crop&q=80&w=800&h=450" },
    { id: 2, type: "tall", alt: "Faith and Devotion", src: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 3, type: "landscape", alt: "Community Gathering", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800&h=450" },
    { id: 4, type: "tall", alt: "Young Adult Leadership", src: "https://images.unsplash.com/photo-1529156069898-49953eb1f5ff?auto=format&fit=crop&q=80&w=600&h=800" },
    { id: 5, type: "landscape", alt: "Graphic Design & Creativity", src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800&h=450" },
    { id: 6, type: "tall", alt: "Praise and Worship", src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=600&h=800" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 font-sans selection:bg-purple-900 selection:text-white pb-20 overflow-x-hidden">
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm p-6 flex justify-between items-center text-xs tracking-widest uppercase border-b border-stone-800">
        <a href="#" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          {/* Using a relative path for the public folder asset */}
          <img src="logo.png" alt="Vanessa Brown Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold tracking-[0.2em] text-white hidden sm:block">Vanessa Brown</span>
        </a>
        <nav className="space-x-6 lg:space-x-8 hidden md:block">
          <a href="#about" className="hover:text-purple-400 transition-colors duration-300">Heart</a>
          <a href="#ministry" className="hover:text-purple-400 transition-colors duration-300">Ministries</a>
          <a href="#gallery" className="hover:text-purple-400 transition-colors duration-300">Gallery</a>
          <a href="#community" className="hover:text-purple-400 transition-colors duration-300">Community</a>
        </nav>
        <a 
          href="#community" 
          className="border border-purple-500 text-purple-400 px-6 py-2 hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Engage
        </a>
      </header>

      {/* Hero Section - Kirk Franklin Inspired */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between overflow-hidden border-b border-stone-800">
        {}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1920&auto=format&fit=crop')` }}
        >
            {/* Gradient overlays to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-[#0a0a0a] z-0"></div>
            <div className="absolute inset-0 bg-black/10 z-0"></div> 
        </div>

        {}
        <div className="relative z-10 w-full px-6 md:px-12 pt-12 flex justify-between items-start">
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-stone-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                <span>Serving Now · Radiating Love · Worldwide</span>
            </div>
            
            {/* Vertical Text - Left Edge */}
            <div className="absolute left-6 md:left-12 top-[40vh] -rotate-90 origin-left text-[0.55rem] tracking-[0.4em] uppercase text-stone-500 hidden md:block whitespace-nowrap">
                Est. 2015 · Ministry & Worship
            </div>
        </div>

        {}
        <div className="relative z-10 w-full flex flex-col items-center justify-center flex-grow pointer-events-none -mt-16">
            <h1 className="text-[20vw] md:text-[14vw] leading-[0.75] font-serif font-bold text-white text-center w-full uppercase tracking-tighter drop-shadow-2xl">
                VANESSA
            </h1>
            <h1 className="text-[20vw] md:text-[14vw] leading-[0.75] font-serif font-bold text-white text-center w-full uppercase tracking-tighter md:ml-32 drop-shadow-2xl">
                BROWN
            </h1>
        </div>

        {}
        <div className="relative z-10 w-full px-6 md:px-12 pb-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            {/* Stats / Roles (Left) */}
            <div className="flex flex-wrap gap-8 md:gap-16 text-left">
                <div>
                    <p className="text-[0.55rem] tracking-[0.25em] text-stone-500 uppercase mb-3">Primary Calling</p>
                    <p className="text-3xl md:text-5xl font-serif text-white tracking-tight">HEAD OF PRAISE</p>
                </div>
                <div>
                    <p className="text-[0.55rem] tracking-[0.25em] text-stone-500 uppercase mb-3">Community Focus</p>
                    <p className="text-3xl md:text-5xl font-serif text-white tracking-tight">YOUNG ADULTS</p>
                </div>
                <div className="hidden sm:block">
                    <p className="text-[0.55rem] tracking-[0.25em] text-stone-500 uppercase mb-3">Creative Arts</p>
                    <p className="text-3xl md:text-5xl font-serif text-white tracking-tight">GRAPHICS</p>
                </div>
            </div>

            {/* Action Buttons (Right) */}
            <div className="flex gap-4 w-full lg:w-auto">
                <a href="#community" className="flex-1 lg:flex-none text-center bg-purple-600 hover:bg-purple-700 text-white font-bold text-[0.65rem] tracking-widest uppercase px-8 py-4 transition-colors">
                    Engage Community →
                </a>
                <a href="#about" className="flex-1 lg:flex-none text-center border border-stone-600 hover:border-white text-white text-[0.65rem] tracking-widest uppercase px-8 py-4 transition-colors">
                    Learn More →
                </a>
            </div>
        </div>
      </section>

      {}
      <div className="bg-[#0a0a0a] py-6 overflow-hidden border-b border-stone-800 flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-4 md:space-x-10 text-xl md:text-3xl font-serif italic text-stone-400 px-6 text-center">
          <span className="hover:text-purple-400 transition-colors cursor-default">Worship Leading</span>
          <span className="text-purple-600 text-sm hidden md:inline">◆</span>
          <span className="hover:text-purple-400 transition-colors cursor-default">Event Planning</span>
          <span className="text-purple-600 text-sm hidden md:inline">◆</span>
          <span className="hover:text-purple-400 transition-colors cursor-default">Graphic Design</span>
          <span className="text-purple-600 text-sm hidden md:inline">◆</span>
          <span className="hover:text-purple-400 transition-colors cursor-default">Compassion</span>
        </div>
      </div>

      {/* About & Mission Section */}
      <section id="about" className="py-24 px-6 md:px-12 flex justify-center border-b border-stone-800">
        <div className="max-w-4xl text-center">
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-8">◆ Colossians 3:14 ◆</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white mb-8 uppercase">
            And above all these things put on <span className="text-purple-400 italic lowercase">charity</span>, which is the bond of perfectness.
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Vanessa Brown is a devoted Christian dedicated to serving her community. As a gifted singer and passionate leader, she radiates love and compassion in everything she does. Her ultimate goal is to lead others into the presence of God and foster deep, authentic spiritual connections.
          </p>
        </div>
      </section>

      {/* Ministries / Grid Section */}
      <section id="ministry" className="py-24 px-6 md:px-12 bg-[#050505] border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 uppercase tracking-tight">
            More than a <span className="text-purple-400 italic lowercase">singer.</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mb-16 text-lg leading-relaxed">
            A true leader builds community. Vanessa channels her faith through multiple avenues, quietly building spaces that shape modern worship, spiritual growth, and fellowship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-stone-800 p-10 hover:border-purple-500/50 transition-colors duration-500 group bg-stone-950">
              <p className="text-xs text-purple-400 tracking-widest uppercase mb-4">01 · The Ministry</p>
              <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-300 transition-colors">HEAD OF PRAISE</h3>
              <p className="text-stone-500 text-sm italic mb-6">Worship Leading · Ministry Direction</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Guiding the congregation into the presence of God. Vanessa oversees the praise team with grace, fostering an environment where pure, uninterrupted worship can thrive.
              </p>
            </div>

            <div className="border border-stone-800 p-10 hover:border-purple-500/50 transition-colors duration-500 group bg-stone-950">
              <p className="text-xs text-purple-400 tracking-widest uppercase mb-4">02 · The Next Generation</p>
              <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-300 transition-colors">YOUNG ADULT LEADER</h3>
              <p className="text-stone-500 text-sm italic mb-6">Mentorship · Spiritual Guidance</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Committed to the spiritual growth of young adults. Creating safe, engaging spaces for the next generation to ask questions, grow in their faith, and build lasting fellowship.
              </p>
            </div>

            <div className="border border-stone-800 p-10 hover:border-purple-500/50 transition-colors duration-500 group bg-stone-950">
              <p className="text-xs text-purple-400 tracking-widest uppercase mb-4">03 · The Gatherings</p>
              <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-300 transition-colors">EVENT PLANNER</h3>
              <p className="text-stone-500 text-sm italic mb-6">Coordination · Administration</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Bringing visions to life. From church retreats to community outreach programs, Vanessa organizes spiritual gatherings with meticulous attention to detail and a spirit of hospitality.
              </p>
            </div>

            <div className="border border-stone-800 p-10 hover:border-purple-500/50 transition-colors duration-500 group bg-stone-950">
              <p className="text-xs text-purple-400 tracking-widest uppercase mb-4">04 · The Visuals</p>
              <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-300 transition-colors">GRAPHIC DESIGN</h3>
              <p className="text-stone-500 text-sm italic mb-6">Spiritual Content · Advertising</p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Translating the message into visual art. Designing compelling flyers, sermon series graphics, and social media content that effectively and beautifully advertises spiritual truths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 md:px-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 uppercase tracking-tight text-center">
            Moments in <span className="text-purple-400 italic lowercase">Ministry</span>
          </h2>
          <p className="text-stone-500 text-center mb-16 text-sm tracking-widest uppercase">Capturing the heart of worship and community</p>

          {/* Grid Layout for Gallery (Landscape, Tall alternating) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max items-start">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className={`overflow-hidden rounded-sm group relative ${
                  image.type === 'landscape' 
                    ? 'aspect-video lg:col-span-2' 
                    : 'aspect-[3/4] lg:col-span-1'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/50 transition-colors duration-500 m-4 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section id="community" className="py-24 px-6 md:px-12 bg-stone-950 border-b border-stone-800">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 uppercase tracking-tight">
              Community <span className="text-purple-400 italic lowercase">Wall</span>
            </h2>
            <p className="text-stone-400 mb-8 text-lg leading-relaxed">
              Share a prayer request, a testimony, or a word of encouragement for Vanessa and the ministry. Let us fellowship together in spirit and in truth.
            </p>
            
            <form onSubmit={handleMessageSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs text-purple-400 tracking-widest uppercase mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-stone-800 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-purple-400 tracking-widest uppercase mb-2">Message or Prayer</label>
                <textarea 
                  id="message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows="4"
                  className="w-full bg-[#0a0a0a] border border-stone-800 p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Leave a word of encouragement..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white px-8 py-4 tracking-widest text-sm uppercase hover:bg-purple-700 transition-colors duration-300"
              >
                Post to Wall
              </button>
            </form>
          </div>

          {/* Messages Side */}
          <div className="lg:w-1/2 flex flex-col space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {messages.length === 0 ? (
              <p className="text-stone-500 italic">No messages yet. Be the first to share!</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="bg-[#0a0a0a] border-l-2 border-purple-500 p-6 relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     {/* Decorative Quote Icon */}
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 17H17L19 13V7H13V13H16L14 17ZM6 17H9L11 13V7H5V13H8L6 17Z" />
                     </svg>
                  </div>
                  <p className="text-stone-300 italic mb-4 leading-relaxed relative z-10">"{msg.text}"</p>
                  <div className="flex justify-between items-center text-xs tracking-widest uppercase text-stone-500">
                    <span className="text-purple-400 font-bold">{msg.name}</span>
                    <span>{msg.date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-[#0a0a0a]">
        <h2 className="text-2xl font-serif text-white mb-6 uppercase">Stay Connected</h2>
        <p className="text-stone-400 max-w-md mx-auto mb-8 text-sm">For ministry inquiries, event planning, or graphic design consultations, please reach out.</p>
        <div className="flex justify-center space-x-6 mb-12 text-sm tracking-widest text-purple-400 uppercase">
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
           <a href="#" className="hover:text-white transition-colors">Facebook</a>
           <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
        <p className="text-xs text-stone-600 tracking-widest uppercase">
          © {new Date().getFullYear()} Vanessa Brown. Radiating Love & Compassion.
        </p>
      </footer>
      
    </div>
  );
}