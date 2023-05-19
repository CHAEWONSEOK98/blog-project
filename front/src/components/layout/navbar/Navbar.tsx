// react-router
import { Link } from 'react-router-dom';

// icon
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="sticky top-0 flex w-full items-center justify-between p-5 shadow-md">
      <h1 className="text-xl font-bold">
        <Link to={`/`}>Foodie</Link>
      </h1>
      <div className="flex items-center space-x-3">
        <button className="cursor-pointer">
          <FaSearch />
        </button>
        <span className="bg-red-300 font-bold">
          <Link to={`/write`}>글쓰기</Link>
        </span>
        <span className=" font-bold">로그인</span>
        <span className=" font-bold">회원가입</span>
        <span className=" font-bold">
          <Link to={`/my`}>My</Link>
        </span>
      </div>
    </header>
  );
};

export default Navbar;
