import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingSidebar = () => {
  const trendingTopics = [
    {
      id: 1,
      title: "AI in Product Development",
      posts: 1247,
      trend: "up",
      category: "Technology"
    },
    {
      id: 2,
      title: "Remote Work Best Practices",
      posts: 892,
      trend: "up",
      category: "Workplace"
    },
    {
      id: 3,
      title: "Sustainable Business Models",
      posts: 634,
      trend: "stable",
      category: "Business"
    },
    {
      id: 4,
      title: "Digital Transformation",
      posts: 521,
      trend: "down",
      category: "Technology"
    },
    {
      id: 5,
      title: "Leadership in Crisis",
      posts: 445,
      trend: "up",
      category: "Leadership"
    }
  ];

  const suggestedConnections = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Product Designer",
      company: "Google",
      mutualConnections: 12,
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Engineering Manager",
      company: "Meta",
      mutualConnections: 8,
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Data Scientist",
      company: "Netflix",
      mutualConnections: 15,
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "CloudSync Pro",
      description: "Enterprise collaboration platform for distributed teams",
      category: "Productivity",
      rating: 4.8,
      users: "10K+"
    },
    {
      id: 2,
      name: "DataViz Studio",
      description: "Advanced data visualization and analytics tool",
      category: "Analytics",
      rating: 4.6,
      users: "5K+"
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-card border border-border rounded-lg shadow-card">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Trending Topics</h3>
        </div>
        <div className="p-4 space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.id} className="flex items-center justify-between hover:bg-muted/50 p-2 rounded-lg transition-micro cursor-pointer">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-text-secondary">#{index + 1}</span>
                  <h4 className="text-sm font-medium text-foreground truncate">{topic.title}</h4>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-text-secondary">{topic.posts} posts</span>
                  <span className="text-xs text-text-secondary">•</span>
                  <span className="text-xs text-text-secondary">{topic.category}</span>
                </div>
              </div>
              <Icon 
                name={getTrendIcon(topic.trend)} 
                size={16} 
                className={getTrendColor(topic.trend)}
              />
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full text-sm" iconName="ArrowRight" iconPosition="right" iconSize={14}>
            View all trends
          </Button>
        </div>
      </div>

      {/* Suggested Connections */}
      <div className="bg-card border border-border rounded-lg shadow-card">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">People you may know</h3>
        </div>
        <div className="p-4 space-y-4">
          {suggestedConnections.map((person) => (
            <div key={person.id} className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={24} color="white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{person.name}</h4>
                <p className="text-xs text-text-secondary truncate">{person.title} at {person.company}</p>
                <p className="text-xs text-text-secondary mt-1">{person.mutualConnections} mutual connections</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Button variant="outline" size="xs" iconName="UserPlus" iconPosition="left" iconSize={12}>
                    Connect
                  </Button>
                  <Button variant="ghost" size="xs">
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <Link to="/connection-network-tree">
            <Button variant="ghost" className="w-full text-sm" iconName="Users" iconPosition="left" iconSize={14}>
              View all suggestions
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-card border border-border rounded-lg shadow-card">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Featured Products</h3>
        </div>
        <div className="p-4 space-y-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border border-border rounded-lg p-3 hover:bg-muted/30 transition-micro">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium text-foreground">{product.name}</h4>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-warning fill-current" />
                  <span className="text-xs text-text-secondary">{product.rating}</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-text-secondary">{product.category}</span>
                  <span className="text-xs text-text-secondary">{product.users} users</span>
                </div>
                <Button variant="ghost" size="xs" iconName="ExternalLink" iconPosition="right" iconSize={12}>
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-border">
          <Link to="/products-showcase">
            <Button variant="ghost" className="w-full text-sm" iconName="Package" iconPosition="left" iconSize={14}>
              Explore all products
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg shadow-card">
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Quick Actions</h3>
        </div>
        <div className="p-4 space-y-2">
          <Link to="/ideas-whiteboard">
            <Button variant="ghost" className="w-full justify-start" iconName="Lightbulb" iconPosition="left" iconSize={16}>
              Create new idea
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start" iconName="Calendar" iconPosition="left" iconSize={16}>
            Schedule meeting
          </Button>
          <Button variant="ghost" className="w-full justify-start" iconName="FileText" iconPosition="left" iconSize={16}>
            Write article
          </Button>
          <Button variant="ghost" className="w-full justify-start" iconName="Users" iconPosition="left" iconSize={16}>
            Find colleagues
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-card border border-border rounded-lg shadow-card p-4">
        <div className="text-center">
          <p className="text-xs text-text-secondary mb-2">
            © {new Date().getFullYear()} LinkedBoard Pro
          </p>
          <div className="flex justify-center space-x-3 text-xs text-text-secondary">
            <button className="hover:text-foreground transition-micro">Privacy</button>
            <button className="hover:text-foreground transition-micro">Terms</button>
            <button className="hover:text-foreground transition-micro">Help</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSidebar;