import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSetLastPath = () => {
    const { pathname, search } = useLocation();

    useEffect(() => {
        let hero, params;

        try {
            if(search) {
                params = new URLSearchParams(window.location.search);
                hero = params.get('hero') || '';
            }

            if(!hero)
                localStorage.setItem('uhalp', pathname);
            else
                localStorage.setItem('uhalp', `${ pathname }?hero=${ hero }`);
        } catch(err) {
            // console.log(err);
            localStorage.setItem('uhalp', '/dashboard/dc');
        }
    }, [pathname, search]);
};

export default useSetLastPath;
