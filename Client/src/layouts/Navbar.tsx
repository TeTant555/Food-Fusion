import { Book, ChefHat, Menu, Trees} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/store';
import useAuth from '@/hooks/useAuth';
import { clearUserData } from '@/store/features/authSlice';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

const Navbar = ({
  logo = {
    url: "https://i.pinimg.com/736x/7a/0b/9a/7a0b9a6daf563e0ecb5281b61ac77c78.jpg",
    src: "https://i.pinimg.com/736x/7a/0b/9a/7a0b9a6daf563e0ecb5281b61ac77c78.jpg",
    alt: "Food Fusion Image",
    title: "Food Fusion",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Recipe Collection",
      url: "/collection",
    },
    {
      title: "Community Cookbook",
      url: "/cookbook",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Culinary Resource",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "/culinary_resource",
        },
        {
          title: "Education Resource",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/education_resource",
        },
      ],
    },
  ],
  onLoginClick,
  onSignUpClick,
}: NavbarProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const { userLogout } = useAuth();

  const handleLogout = () => {
    userLogout();
    dispatch(clearUserData());
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  // Utility to hash userId for display
  const hashUserId = (id: unknown) => {
    if (typeof id !== 'string') return '';
    return id ? `${id.slice(0, 5)}...${id.slice(-2)}` : '';
  };

  return (
    <section className="sticky top-0 z-50 py-2 sm:py-4 px-3 sm:px-6 lg:px-10 bg-pri drop-shadow-lg">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Menu - Hidden on mobile and tablet */}
        <nav className="hidden xl:flex min-w-full justify-between items-center">
          <div className="flex items-center gap-6 xl:gap-8">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2 shrink-0">
              <ChefHat className="text-sec" size={35} />
              <span className="group text-nowrap inline-flex w-max items-center justify-center rounded-md bg-pri px-3 py-2 text-base lg:text-lg font-medium transition-colors inter text-sec">
                {logo.title}
              </span>
            </Link>
            
            {/* Navigation Menu */}
            <div className="flex items-center">
              <NavigationMenu className="inter font-bold">
                <NavigationMenuList className="inter text-txt font-bold gap-1">
                  {menu.map((item) => renderMenuItem(item, location.pathname))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden xl:flex inter font-bold items-center gap-2 shrink-0">
            {user.email ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-txt text-sm font-semibold leading-tight text-left">
                  <span className="inter"><span className="font-bold">Email:</span> {user.email}</span>
                  <span className="inter"><span className="font-bold">UserId:</span> {hashUserId(user.userId)}</span>
                </div>
                <Button className="w-20 h-10 bg-sec text-ter inter hover:bg-sec/80 shadow-lg !border-0 ml-2" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button className="w-20 h-10 bg-sec inter !hover:text-ter !text-ter hover:bg-sec/80 shadow-lg !border-0" variant="outline" size="sm" onClick={onLoginClick}>
                  Login
                </Button>
                <Button className="w-20 h-10 bg-sec inter !text-ter hover:bg-sec/80 shadow-lg !border-0" variant="outline" size="sm" onClick={onSignUpClick}>
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Tablet Menu - Visible on medium to large screens */}
        <nav className="hidden lg:flex xl:hidden min-w-full justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2 shrink-0">
              <ChefHat className="text-sec" size={35} />
              <span className="group text-nowrap inline-flex w-max items-center justify-center rounded-md bg-pri px-3 py-2 text-base lg:text-lg font-medium transition-colors inter text-sec">
                {logo.title}
              </span>
            </Link>
            
            {/* Compact Navigation */}
            <div className="flex items-center">
              <NavigationMenu className="inter font-bold">
                <NavigationMenuList className="inter font-bold gap-1">
                  {menu.slice(0, 4).map((item) => renderCompactMenuItem(item, location.pathname))}
                  {menu.length > 4 && (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="group inline-flex w-max items-center justify-center rounded-md bg-pri px-3 py-2 text-lg font-bold inter transition-colors hover:bg-sec/30 hover:text-accent-foreground focus:text-sec">
                        More
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="align-right bg-popover text-popover-foreground w-80 min-w-80">
                        {menu.slice(4).map((item) => (
                          <NavigationMenuLink asChild key={item.title} className="w-full inter">
                            {item.items ? (
                              <div className="p-2">
                                <div className="font-semibold inter text-sm mb-2">{item.title}</div>
                                {item.items.map((subItem) => (
                                  <SubMenuLink key={subItem.title} item={subItem} />
                                ))}
                              </div>
                            ) : (
                              <Link
                                className="flex items-center rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-sec/30 hover:text-accent-foreground focus:text-sec"
                                to={item.url}
                              >
                                <div className="text-sm font-semibold">{item.title}</div>
                              </Link>
                            )}
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden lg:flex xl:hidden inter font-bold items-center gap-2 shrink-0">
            {user.email ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-txt text-sm font-semibold leading-tight text-left">
                  <span className="inter"><span className="font-bold">Email:</span> {user.email}</span>
                  <span className="inter"><span className="font-bold">UserId:</span> {hashUserId(user.userId)}</span>
                </div>
                <Button className="w-18 h-9 bg-sec text-ter inter hover:bg-sec/80 shadow-lg !border-0 ml-2" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button className="w-18 h-9 bg-sec inter !text-ter !hover:text-ter hover:bg-sec/80 shadow-lg !border-0" variant="outline" size="sm" onClick={onLoginClick}>
                  Login
                </Button>
                <Button className="w-18 h-9 bg-sec inter text-ter hover:bg-sec/80 shadow-lg !border-0" size="sm" onClick={onSignUpClick}>
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu - Visible on small screens */}
        <div className="flex lg:hidden">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2 shrink-0">
              <ChefHat className="text-sec" size={35} />
              <span className="group text-nowrap inline-flex w-max items-center justify-center rounded-md bg-pri px-3 py-2 text-base lg:text-lg font-medium transition-colors inter text-sec">
                {logo.title}
              </span>
            </Link>
            
            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 bg-sec/50 hover:bg-sec/70 w-8 sm:h-10 sm:w-10">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto w-full bg-pri sm:w-80">
                <SheetHeader className="flex flex-row items-center justify-between">
                  <SheetTitle>
                  <Link to={logo.url} className="flex items-center gap-2 shrink-0" onClick={handleMobileNavClick}>
                    <ChefHat className="text-sec" size={35} />
                    <span className="group text-nowrap inline-flex w-max items-center justify-center rounded-md bg-pri px-3 py-2 text-base lg:text-lg font-medium transition-colors inter text-sec">
                      {logo.title}
                    </span>
                  </Link>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, location.pathname, handleMobileNavClick))}
                  </Accordion>

                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-3 pt-4 border-t lg:hidden">
                    {user.email ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col text-txt text-sm font-semibold leading-tight text-left">
                          <span className="inter"><span className="font-bold">Email:</span> {user.email}</span>
                          <span className="inter"><span className="font-bold">UserId:</span> {hashUserId(user.userId)}</span>
                        </div>
                        <Button className="w-full bg-sec text-ter inter hover:bg-sec/80 shadow-md !border-0 font-semibold mt-2" onClick={() => { handleLogout(); setIsOpen(false); }}>
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Button className="w-full bg-sec hover:bg-sec/80 text-ter shadow-md !border-0 font-semibold" onClick={() => { if (onLoginClick) onLoginClick(); setIsOpen(false); }}>
                          Login
                        </Button>
                        <Button className="w-full bg-sec text-ter hover:bg-sec/80 shadow-md !border- font-semibold" onClick={() => { if (onSignUpClick) onSignUpClick(); setIsOpen(false); }}>
                          Sign up
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = item.url === pathname;

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={`group inline-flex w-max items-center justify-center rounded-md
                      bg-pri px-3 xl:px-4 py-2 text-lg font-bold inter transition-colors
                      hover:bg-sec/30 hover:text-accent-foreground focus:text-sec
                      ${isActive ? "text-sec bg-pri" : ""}`}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className="align-right bg-popover text-popover-foreground w-80 min-w-80 xl:w-96"
        >
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-full">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild className={`group inline-flex w-max items-center justify-center rounded-md bg-pri px-3 xl:px-4 py-2 text-lg font-medium transition-colors hover:bg-sec/30 hover:text-accent-foreground focus:bg-ter focus:text-sec ${isActive ? "text-sec" : ""}`}>
        <Link to={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderCompactMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = item.url === pathname;

  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={`group inline-flex w-max items-center justify-center rounded-md bg-pri px-2 py-1 text-lg font-bold inter transition-colors hover:bg-sec/30 hover:text-accent-foreground focus:text-sec ${
            isActive ? "text-sec" : ""
          }`}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground absolute right-0 w-80 min-w-80">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-full">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={`group inline-flex w-max items-center justify-center rounded-md bg-pri px-2 py-1 text-lg font-medium transition-colors hover:bg-sec/30 hover:text-accent-foreground focus:text-sec ${
          isActive ? "text-sec" : ""
        }`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string, onNavigate: () => void) => {
  const isActive = item.url === pathname;

  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger
          className={`text-base py-2 font-semibold hover:no-underline ${
            isActive ? "text-sec" : ""
          }`}
        >
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2 pl-4">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} onNavigate={onNavigate} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      to={item.url}
      className={`text-base py-2 font-semibold block hover:text-sec transition-colors ${
        isActive ? "text-sec" : ""
      }`}
      onClick={onNavigate}
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item, onNavigate }: { item: MenuItem; onNavigate?: () => void }) => {
  return (
    <Link
      className="flex flex-row gap-3 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-sec/30 hover:text-accent-foreground focus:text-sec"
      to={item.url}
      onClick={onNavigate}
    >
      <div className="text-foreground">{item.icon}</div>
      <div className="flex-1">
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-xs leading-snug text-muted-foreground mt-1">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };