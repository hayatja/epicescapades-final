import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Page Not Found</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
};

export default NoMatch;
