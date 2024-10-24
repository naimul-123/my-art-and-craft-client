import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const NotFound = () => {
    return (
        <div className="bg-[url('/404.jpg')] min-h-screen bg-cover bg-center bg-no-repeat hero">
            <Helmet>
                <title>404</title>
            </Helmet>
            <div className='hero-content'>
                <Link to="/" className="text-5xl btn btn-primary link btn-lg">Go to home page</Link >
            </div>
        </div>
    );
};

export default NotFound;