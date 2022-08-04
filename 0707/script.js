//const date = new Date(); //현재 날짜 객체가 만들어짐.
//지정날짜 객체 만들기 ex) const date2 = new Date(2022, 8, 7) -> 9월 7일/ 주의! 달은 0부터 시작

// const viewYear = date.getFullYear();
// const viewMonth = date.getMonth(); // month, day는 0으로 시작함.
// const viewDate = date.getDate();
// const viewDay = date.getDay(); // 0 1 2 3 4 5 6 (일 월 화 수 목 금)

// // 이번 달 마지막 날짜 가져오기
// const thisLast = new Date(viewYear, viewMonth + 1, 0); //Date 객체 생성시 0을 넣어주면 마지막 날짜를 알아서 계산해서 보여줌
// const thisDate = thisLast.getDate();
// const thisDay = thisLast.getDay();

// //저번 달 마지막 날짜 가져오기
// const prevLast = new Date(viewYear, viewMonth, 0);
// const prevDate = prevLast.getDate();
// const prevDay = prevLast.getDay();

// //전체 날짜(저번달 일주일+이번달+다음달 일주일) 만들기 위한 배열 만들기
// //Array(n): 길이가 n인 배열을 만드는 메서드
// //keys(): array의 index로 값을 채움. BUT index iterator로 생성됨 -> 전개 구문으로 펼쳐줘야 함! (...)
// //slice(startIndex, lsatIndex): 배열을 잘라주는 메서드
// const prevDates = [];
// const thisDates = [...Array(thisDate + 1).keys()].slice(1); //이번달 날짜(31일까지 31개)가 들어 있는 배열 만들기
// const nextDates = [];

// // 전 달 마지막 요일이 토요일인 경우 그릴 필요가 없다. (토요일 - 6)
// if (prevDay !== 6) {
//   for (let i = 0; i < prevDay + 1; i++) {
//     prevDates.unshift(prevDate - i);
//   }
// }
// for (let i = 1; i < 7 - thisDay; i++) {
//   nextDates.push(i);
// }

// const dates = prevDates.concat(thisDates, nextDates);
// dates.forEach((date, i) => {
//   dates[i] = `<div class="date">${date}</div>`;
// });

// document.querySelector(".dates").innerHTML = dates.join("");

//함수로 만들기

let date = new Date();

const makeCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector(".year-month").textContent = `${viewYear}년 ${
    viewMonth + 1
  }월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const prevDate = prevLast.getDate();
  const prevDay = prevLast.getDay();

  const thisLast = new Date(viewYear, viewMonth + 1, 0);
  const thisDate = thisLast.getDate();
  const thisDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(thisDate + 1).keys()].slice(1);
  const nextDates = [];

  if (prevDay !== 6) {
    for (let i = 0; i < prevDay + 1; i++) {
      prevDates.unshift(prevDate - i);
    }
  }

  for (let i = 1; i < 7 - thisDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);

  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(thisDate);
  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

    dates[
      i
    ] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });

  document.querySelector(".dates").innerHTML = dates.join("");

  const today = new Date();
  if (viewYear === today.getFullYear() && viewMonth === today.getMonth()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerHTML === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};

//함수 실행
makeCalendar();

// let date = new Date();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  makeCalendar();
};

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  makeCalendar();
};

const curMonth = () => {
  date = new Date();
  makeCalendar();
};
