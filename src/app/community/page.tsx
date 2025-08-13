import { Metadata } from 'next';
import CommunityContent from './CommunityContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "MyGets Community | Connect, Share, and Innovate in Procurement",
  description: "Join the MyGets community to connect with procurement professionals, OCDS experts, and sustainability advocates. Share insights, ask questions, and drive innovation in procurement technology.",
  openGraph: {
    title: "MyGets Community | Connect, Share, and Innovate in Procurement",
    description: "Join the MyGets community to connect with procurement professionals, OCDS experts, and sustainability advocates. Share insights, ask questions, and drive innovation in procurement technology.",
  }
};

export default function CommunityPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl">
              <div className="h-12 bg-white/20 rounded-lg animate-pulse mb-6"></div>
              <div className="h-6 bg-white/20 rounded-lg animate-pulse mb-4 w-3/4"></div>
              <div className="h-10 bg-white/20 rounded-lg animate-pulse w-48"></div>
            </div>
          </div>
        </div>
        <div className="space-y-8 md:space-y-12 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-3/4 mx-auto mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse w-5/6"></div>
            </div>
          </div>
          <div className="py-8 md:py-10 bg-slate-50 rounded-lg md:rounded-xl shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="h-8 bg-gray-200 rounded-lg animate-pulse w-64 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-3 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-lg animate-pulse mb-4 w-full"></div>
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse w-32"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <CommunityContent />
    </Suspense>
  );
}

// TODO: PRODUCTION - Integrate with your chosen forum backend (e.g., Discourse, Flarum, or a custom solution).
// This will involve setting up the forum software, configuring its API, and fetching/posting data.
// TODO: PRODUCTION - Implement robust user authentication and profile management. This should integrate seamlessly with your main MyGets user accounts if applicable.
// TODO: PRODUCTION - Develop and implement content submission forms (new topics, replies) and moderation tools (flags, edits, deletions, user management) for the forum.

