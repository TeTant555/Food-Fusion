import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import DefaultLayout from '@/layouts/DefaultLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from '@/modules/home/HomeView';
import About from '@/modules/aboutUs/About';
import RecipeCollection from '@/modules/recipeCollection/RecipeCollection';
import CommunityCookbook from '@/modules/communityCookbook/CommunityCookbook';
import Contact from '@/modules/contactUs/Contact';
import CulinaryResource from '@/modules/culinaryResource/CulinaryResource';
import EducationResource from '@/modules/educationResource/EducationResource';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: (
                    <HomeView />
                )
            },
            {
                path: 'about',
                element: (
                    <About />
                )
            },
            {
                path: 'collection',
                element: (
                    <RecipeCollection />
                )
            },
            {
                path: 'cookbook',
                element: (
                    <CommunityCookbook />
                )
            },
            {
                path: 'contact',
                element: (
                    <Contact />
                )
            },
            {
                path: 'culinary_resource',
                element: (
                    <CulinaryResource />
                )
            },
            {
                path: 'education_resource',
                element: (
                    <EducationResource />
                )
            },
        ]
    }
]);

const Wrapper = () => {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <Toaster />
            </QueryClientProvider>
        </>
    );
};

export default Wrapper;
