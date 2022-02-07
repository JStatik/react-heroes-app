const getLastPath = () => {
    try {
        return localStorage.getItem('uhalp') || '/dashboard/dc';
    } catch(err) {
        // console.log(err);
        return '/dashboard/dc';
    }
};

export default getLastPath;
