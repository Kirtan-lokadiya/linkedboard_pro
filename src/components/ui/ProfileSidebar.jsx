import React, { useState } from 'react';

import Icon from '../AppIcon';
import Button from './Button';

const ProfileSidebar = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const profileData = {
    name: 'John Doe',
    title: 'Senior Product Manager',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    headline: 'Driving innovation in product development with 8+ years of experience in tech startups and enterprise solutions.',
    avatar: null,
    stats: {
      connections: 1247,
      ideas: 89,
      posts: 156,
      profileViews: 127
    }
  };

  const activityFeed = [
    {
      type: 'idea',
      title: 'Posted new idea about AI integration',
      time: '2 hours ago',
      color: 'success'
    },
    {
      type: 'connection',
      title: 'Connected with Sarah Johnson',
      time: '1 day ago',
      color: 'primary'
    },
    {
      type: 'update',
      title: 'Updated product showcase',
      time: '3 days ago',
      color: 'warning'
    },
    {
      type: 'post',
      title: 'Shared insights on remote work',
      time: '1 week ago',
      color: 'secondary'
    }
  ];

  const quickActions = [
    { 
      label: 'Create Post', 
      icon: 'Plus', 
      action: () => console.log('Create post'),
      variant: 'default'
    },
    { 
      label: 'New Idea', 
      icon: 'Lightbulb', 
      action: () => window.location.href = '/ideas-whiteboard',
      variant: 'outline'
    },
    { 
      label: 'Find Connections', 
      icon: 'UserPlus', 
      action: () => window.location.href = '/connection-network-tree',
      variant: 'outline'
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      success: 'bg-success',
      primary: 'bg-primary',
      warning: 'bg-warning',
      secondary: 'bg-secondary'
    };
    return colorMap[color] || 'bg-muted';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-card border border-border rounded-lg shadow-card ${className}`}>
      {/* Profile Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="User" size={32} color="white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-foreground truncate">
                {profileData.name}
              </h2>
              <p className="text-sm text-text-secondary truncate">
                {profileData.title}
              </p>
              <p className="text-xs text-text-secondary truncate">
                {profileData.company}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleExpanded}
            className="w-8 h-8 flex-shrink-0"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
          </Button>
        </div>

        {isExpanded && (
          <>
            <div className="mb-4">
              <p className="text-sm text-text-secondary leading-relaxed">
                {profileData.headline}
              </p>
            </div>

            <div className="flex items-center text-xs text-text-secondary">
              <Icon name="MapPin" size={12} className="mr-1" />
              <span>{profileData.location}</span>
            </div>
          </>
        )}
      </div>

      {isExpanded && (
        <>
          {/* Stats Section */}
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground mb-4">Your Activity</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{profileData.stats.connections}</div>
                <div className="text-xs text-text-secondary">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{profileData.stats.ideas}</div>
                <div className="text-xs text-text-secondary">Ideas</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{profileData.stats.posts}</div>
                <div className="text-xs text-text-secondary">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">{profileData.stats.profileViews}</div>
                <div className="text-xs text-text-secondary">Profile Views</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  onClick={action.action}
                  className="w-full justify-start h-10"
                  iconName={action.icon}
                  iconPosition="left"
                  iconSize={16}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {activityFeed.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClass(activity.color)}`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{activity.title}</p>
                    <p className="text-xs text-text-secondary">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="w-full mt-4 text-sm"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={14}
            >
              View all activity
            </Button>
          </div>

          {/* Profile Performance */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">Profile Performance</span>
              <span className="text-xs text-success">+12%</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-secondary">Profile Views</span>
              <span className="text-xs font-semibold text-foreground">{profileData.stats.profileViews} this week</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: '68%' }}></div>
            </div>
            <p className="text-xs text-text-secondary mt-2">
              Your profile is performing better than 68% of similar profiles
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileSidebar;