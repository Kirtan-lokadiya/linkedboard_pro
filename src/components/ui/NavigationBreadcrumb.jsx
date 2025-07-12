import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const NavigationBreadcrumb = ({ customBreadcrumbs = null, className = '' }) => {
  const location = useLocation();

  // Route mapping for breadcrumb generation
  const routeMap = {
    '/home-dashboard': { label: 'Home', icon: 'Home' },
    '/blog-detail-view': { label: 'Blog Post', icon: 'FileText' },
    '/ideas-whiteboard': { label: 'Ideas Whiteboard', icon: 'Lightbulb' },
    '/connection-network-tree': { label: 'Network', icon: 'Users' },
    '/products-showcase': { label: 'Products', icon: 'Package' },
    '/search-results': { label: 'Search Results', icon: 'Search' }
  };

  // Generate breadcrumbs from current path
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/home-dashboard', icon: 'Home' }];

    // If we're not on home page, add current page
    if (location.pathname !== '/home-dashboard') {
      const currentRoute = routeMap[location.pathname];
      if (currentRoute) {
        breadcrumbs.push({
          label: currentRoute.label,
          path: location.pathname,
          icon: currentRoute.icon,
          current: true
        });
      }
    } else {
      breadcrumbs[0].current = true;
    }

    // Handle special cases like blog detail view coming from home
    if (location.pathname === '/blog-detail-view') {
      const urlParams = new URLSearchParams(location.search);
      const fromHome = urlParams.get('from') === 'home';
      
      if (fromHome) {
        breadcrumbs[breadcrumbs.length - 1].label = 'Article';
      }
    }

    // Handle search results with query
    if (location.pathname === '/search-results') {
      const urlParams = new URLSearchParams(location.search);
      const query = urlParams.get('q');
      
      if (query) {
        breadcrumbs[breadcrumbs.length - 1].label = `Search: "${query}"`;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs if only home
  if (breadcrumbs.length <= 1 && breadcrumbs[0]?.current) {
    return null;
  }

  const handleBackNavigation = () => {
    // Smart back navigation
    if (location.pathname === '/blog-detail-view') {
      const urlParams = new URLSearchParams(location.search);
      const fromHome = urlParams.get('from') === 'home';
      
      if (fromHome) {
        window.history.back();
      } else {
        window.location.href = '/home-dashboard';
      }
    } else {
      window.history.back();
    }
  };

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      {/* Back Button */}
      <button
        onClick={handleBackNavigation}
        className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-muted transition-micro mr-2"
        title="Go back"
      >
        <Icon name="ArrowLeft" size={16} className="text-text-secondary" />
      </button>

      {/* Breadcrumb Items */}
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={14} 
                className="text-text-secondary mx-2" 
              />
            )}
            
            {crumb.current ? (
              <span className="flex items-center space-x-2 text-foreground font-medium">
                <Icon name={crumb.icon} size={16} />
                <span>{crumb.label}</span>
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="flex items-center space-x-2 text-text-secondary hover:text-foreground transition-micro"
              >
                <Icon name={crumb.icon} size={16} />
                <span>{crumb.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>

      {/* Additional Context Actions */}
      {location.pathname === '/blog-detail-view' && (
        <div className="ml-auto flex items-center space-x-2">
          <button
            className="flex items-center space-x-1 px-3 py-1 text-xs text-text-secondary hover:text-foreground hover:bg-muted rounded-md transition-micro"
            title="Share article"
          >
            <Icon name="Share2" size={14} />
            <span>Share</span>
          </button>
          <button
            className="flex items-center space-x-1 px-3 py-1 text-xs text-text-secondary hover:text-foreground hover:bg-muted rounded-md transition-micro"
            title="Bookmark article"
          >
            <Icon name="Bookmark" size={14} />
            <span>Save</span>
          </button>
        </div>
      )}

      {location.pathname === '/search-results' && (
        <div className="ml-auto flex items-center space-x-2">
          <button
            className="flex items-center space-x-1 px-3 py-1 text-xs text-text-secondary hover:text-foreground hover:bg-muted rounded-md transition-micro"
            title="Filter results"
          >
            <Icon name="Filter" size={14} />
            <span>Filter</span>
          </button>
          <button
            className="flex items-center space-x-1 px-3 py-1 text-xs text-text-secondary hover:text-foreground hover:bg-muted rounded-md transition-micro"
            title="Sort results"
          >
            <Icon name="ArrowUpDown" size={14} />
            <span>Sort</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationBreadcrumb;