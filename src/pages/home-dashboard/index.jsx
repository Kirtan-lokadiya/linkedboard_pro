import React from 'react';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import ProfileSidebar from '../../components/ui/ProfileSidebar';
import NavigationBreadcrumb from '../../components/ui/NavigationBreadcrumb';
import PostCreationCard from './components/PostCreationCard';
import FeedContainer from './components/FeedContainer';
import TrendingSidebar from './components/TrendingSidebar';

const HomeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Layout */}
      <div className="flex">
        {/* Left Sidebar - Desktop Only */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 lg:ml-80 pt-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <NavigationBreadcrumb />
            </div>
            
            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Profile Sidebar (Hidden on Mobile) */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <ProfileSidebar />
                </div>
              </div>
              
              {/* Center Column - Main Feed */}
              <div className="lg:col-span-6">
                {/* Post Creation */}
                <PostCreationCard />
                
                {/* Feed Container */}
                <FeedContainer />
              </div>
              
              {/* Right Column - Trending & Suggestions */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <TrendingSidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeDashboard;