'use client';

import Link from "next/link";

export default function CommunityContent() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mygets.net";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Now Full Width */}
      <section className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Welcome to the MyGets Innovators Hub!
            </h1>
            <p className="text-xl mb-8 font-sans">
              This is your space to connect, collaborate, and co-create the future of procurement. Share your expertise, learn from peers, and help shape the MyGets platform.
            </p>
            <div className="flex justify-start">
              <Link 
                href="#forum-section"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                Explore Discussions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content with proper padding */}
      <div className="space-y-8 md:space-y-12 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        {/* Community Intro Section */}
        <section id="community-intro" className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 font-sans text-center text-gray-800">
            A Catalyst for Procurement Excellence and Innovation
          </h2>
          <div className="space-y-4 text-gray-700 text-center leading-relaxed font-sans">
            <p className="text-base">
              The MyGets Community is more than just a forum; it's a dynamic ecosystem for procurement professionals, OCDS advocates, sustainability champions, and technology partners. We are dedicated to fostering knowledge sharing, innovative problem-solving, and robust networking within the global procurement landscape.
            </p>
            <p className="text-base">
              Our mission is to cultivate a supportive and forward-thinking environment where members can freely exchange ideas, tackle complex challenges, share proven best practices, and stay at the forefront of procurement technology, open contracting, and sustainable sourcing.
            </p>
          </div>
        </section>

        {/* Forum Section */}
        <section id="forum-section" className="py-8 md:py-10 bg-slate-50 rounded-lg md:rounded-xl shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10 text-center text-gray-800">
              Featured Discussions & Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Discussion Cards */}
              {[
                {
                  title: "Maximizing OCDS for Sustainable Procurement Goals",
                  author: "Alex Chen",
                  time: "3 days ago",
                  replies: "8 replies",
                  excerpt: "Exploring practical strategies to leverage OCDS data for tracking and improving sustainability metrics in public and private sector procurement..."
                },
                {
                  title: "Integrating MyGets with ERP Systems: Challenges & Solutions",
                  author: "Sarah Miller",
                  time: "6 days ago",
                  replies: "12 replies",
                  excerpt: "Share your experiences and best practices for integrating MyGets with systems like SAP, Oracle, or custom ERPs. What are the common hurdles?"
                },
                {
                  title: "Innovation Spotlight: AI in Procurement Analytics",
                  author: "MyGets Team",
                  time: "2 days ago",
                  type: "Announcement",
                  excerpt: "Join our upcoming webinar on how AI is transforming spend analytics and risk management within the MyGets platform. Plus, a sneak peek at new features!"
                }
              ].map((discussion, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-blue-700 font-sans">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 md:mb-3 font-sans">
                    Posted by {discussion.author} | {discussion.time} {discussion.replies && `| ${discussion.replies}`}
                  </p>
                  <p className="text-base text-gray-700 mb-4 md:mb-5 leading-relaxed font-sans">
                    {discussion.excerpt}
                  </p>
                  <Link 
                    href="#"
                    className="text-blue-700 hover:text-blue-800 font-medium transition-colors group inline-flex items-center text-sm md:text-base font-sans"
                  >
                    {discussion.type ? 'Learn More & Register' : 'Read More & Join Discussion'}
                    <span className="group-hover:ml-1 transition-all">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Link 
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 inline-block"
              >
                View All Discussions & Categories
              </Link>
            </div>
          </div>
        </section>

        {/* Community Guidelines Section */}
        <section id="community-guidelines" className="max-w-3xl mx-auto px-4 py-6 md:py-8 bg-white rounded-lg md:rounded-xl shadow-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center text-gray-800">
            Our Community Values
          </h2>
          <ul className="list-none space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-base font-sans">
            {[
              "Be respectful, inclusive, and courteous to all members. Diverse perspectives enrich our community.",
              "Share generously: your knowledge, experiences, and constructive feedback are invaluable.",
              "Stay on topic and contribute meaningfully to discussions. Help keep conversations focused and productive.",
              "No spamming or excessive self-promotion. Relevant sharing is welcome in appropriate contexts.",
              "Uphold confidentiality and respect intellectual property rights.",
              "Report any violations to the community moderators to help maintain a positive environment."
            ].map((guideline, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 text-xl md:text-2xl mr-2 md:mr-3 mt-1">✓</span>
                {guideline}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-600 text-center text-base font-sans">
            By participating, you agree to embody these values, ensuring the MyGets Community remains a thriving hub for professional growth and collaboration.
          </p>
        </section>

        {/* FAQ Section */}
        <section id="community-faq" className="py-8 md:py-10 bg-slate-100 rounded-lg md:rounded-xl shadow-lg">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-center text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  question: "How do I join the MyGets Community and participate in discussions?",
                  answer: "Currently, browsing discussions is open. To post, reply, or access certain features, you will need to register for a MyGets Community account. Details will be provided upon the full launch of our integrated forum platform. MyGets platform users may have streamlined access."
                },
                {
                  question: "Can I ask product-specific questions about MyGets features?",
                  answer: "Absolutely! The community is an excellent place for peer-to-peer support and to ask questions about MyGets features, implementation strategies, and best practices. While MyGets staff will participate, for urgent technical support, please use the official support channels."
                },
                {
                  question: "How can I contribute to the MyGets Community?",
                  answer: "Share your procurement experiences, answer questions from fellow members, provide constructive feedback on the MyGets platform, participate in discussions, and suggest topics for webinars or articles. Your active participation is key to a vibrant community!"
                },
                {
                  question: "Is there a Code of Conduct?",
                  answer: "Yes, our Community Guidelines (outlined above) serve as our Code of Conduct. We expect all members to adhere to these to ensure a respectful and productive environment for everyone."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                  <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 md:mb-3 font-sans">
                    {faq.question}
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 