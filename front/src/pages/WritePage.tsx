// react-router
import { Link } from 'react-router-dom';

const WritePage = () => {
  return (
    <form className="max-w-7xl">
      <section className="mb-10">
        <h1>음식점 정보를 입력해주세요.</h1>
        <hr />

        <select id="koreaRegion">
          <option value="전체">전체</option>
          <option value="서울">서울</option>
          <option value="경기도">경기도</option>
          <option value="강원도">강원도</option>
          <option value="충청도">충청도</option>
          <option value="경상도">전라도</option>
          <option value="전라도">경상도</option>
          <option value="제주도">제주도</option>
        </select>

        <select id="countryCategory">
          <option value="한국">한국</option>
          <option value="일본">일본</option>
          <option value="중국">중국</option>
          <option value="양식">양식</option>
          <option value="그외">그외</option>
        </select>
      </section>

      <section>
        <div className="mb-10">
          <h1>리뷰를 남겨주세요.</h1>
          <hr />
        </div>

        <div className="">
          <div className="flex flex-col">
            <input
              id="restaurantName"
              type="text"
              placeholder="음식점 이름을 입력해주세요!"
              className="mb-5 border-2 px-3 py-5"
            />
          </div>
          <textarea
            className="w-full  border-2 px-3 py-5"
            placeholder="음식점 리뷰를 남겨주세요!"
          />
        </div>
      </section>

      <div className="space-x-4">
        <button>
          <Link to={`/`}>취소</Link>
        </button>
        <button type="submit">
          <Link to={`/`}>글 등록</Link>
        </button>
      </div>
    </form>
  );
};

export default WritePage;
