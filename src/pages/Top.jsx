import { Link } from 'react-router-dom';
import '../Top.css';

export const Top = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"></link>
      <div className="top-wrapper">
        <h1>TOP page</h1>
        <Link to="/task">GO TO Task management App</Link>
      </div>
    </>
  );
};
