// icon
import { FaSearch, FaMapMarkerAlt, FaAngleDown } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <section className="mx-auto w-96 ">
      <div className="text-center">
        <h1 className="font-bold">음식점 찾기</h1>
        <p>
          <strong>리뷰</strong>를 남겨보세요
        </p>
      </div>

      <form className="border-2 p-5">
        <div>
          <button>
            <FaSearch />
          </button>
          <input placeholder="검색어를 입력하세요" />
        </div>

        <div className="flex">
          <FaMapMarkerAlt />
          <div className="flex justify-between">
            <select id="korea">
              <option value="전체">전체</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="충청">충청</option>
              <option value="경상">부산</option>
              <option value="전라">전라</option>
              <option value="제주">전라</option>
            </select>
            <button>
              <FaAngleDown />
            </button>
          </div>
        </div>

        <button>검색</button>
      </form>
    </section>
  );
};

export default SearchInput;
