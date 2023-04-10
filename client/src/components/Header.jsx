import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [login, setLogin] = useState(true);

  const handleTheme = () => {
    const html = document.querySelector('html');
    if (theme === 'light') {
      setTheme((prev) => 'dark');
      html.classList.add('dark');
    } else {
      setTheme((prev) => 'light');
      html.classList.remove('dark');
    }
  };
  return (
    <div className="flex h-10 items-center justify-between p-10 lg:mx-20">
      <Link to="/">
        <span className="cursor-pointer text-2xl font-bold">c.log</span>
      </Link>
      <div className="flex items-center space-x-5">
        {theme === 'light' ? (
          <BsMoonFill
            className="cursor-pointer text-xl"
            onClick={handleTheme}
          />
        ) : (
          <BsFillSunFill
            className="cursor-pointer text-2xl"
            onClick={handleTheme}
          />
        )}

        <BiSearch className="cursor-pointer text-2xl" />
        {login && (
          <Link to="/write">
            <button className="text-lg font-bold">글쓰기</button>
          </Link>
        )}
        {!login && (
          <Link to="/login">
            <button className="text-lg font-bold">로그인</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
