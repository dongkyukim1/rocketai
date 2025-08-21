import Image from 'next/image';
import SajuTable from './components/SajuTable';

export default function Page() {
  return (
    <main className="container">
      <section className="panel">
        <Image src="/quiz/1~3.png" alt="panel-1-3" width={720} height={5080} priority />
      </section>
      {/* 말풍선 오버레이 */}
      <section className="overlay bubbles" aria-hidden>
        <div className="bubble center b1">이제 본격적으로<br/>OO님의 사주팔자를<br/>분석해볼 차례네요.</div>
        <div className="bubble center b2">제가 oo님의 사주를<br/>보기 쉽게 표로 정리했어요</div>
      </section>
      <section className="panel overlay">
        <SajuTable />
      </section>
    </main>
  );
}


