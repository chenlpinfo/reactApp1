import React, { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef<any>(null);
  const secondCatRef = useRef<any>(null);
  const thirdCatRef = useRef<any>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img src='https://placekitten.com/g/200/200' alt='Tom' ref={firstCatRef} />
          </li>
          <li>
            <img src='https://placekitten.com/g/300/200' alt='Maru' ref={secondCatRef} />
          </li>
          <li>
            <img src='https://placekitten.com/g/250/200' alt='Jellylorum' ref={thirdCatRef} />
          </li>
        </ul>
      </div>
    </>
  );
}
