import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col lg:p-10">
        <input
          id="titleId"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={handleTitle}
          className="boder-2  py-6 text-3xl font-bold outline-none placeholder:font-bold lg:text-5xl"
          ref={titleRef}
        />
        <div className="h-2 w-20 border-2 border-black bg-black"></div>
        <textarea
          value={text}
          placeholder="이야기를 적어보세요"
          className="mt-10 h-96 outline-none "
          onChange={handleText}
        />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full justify-between border-t-2  p-4 shadow-2xl">
        <div className="flex space-x-2">
          <Link to="/">
            <button className="flex items-center space-x-2">
              <FaArrowLeft className="text-xl" />
              <span className="p-2 text-xl font-bold">나가기</span>
            </button>
          </Link>
        </div>
        <div className="space-x-5">
          <button className="text-lg font-bold text-[#C7B9FC]">임시저장</button>
          <button className="w-28 rounded-lg bg-[#C7B9FC] p-2 text-lg font-bold text-white">
            출간하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Write;
