import styles from './SajuTable.module.css';

type BadgeColor = 'black' | 'red' | 'teal' | 'white';

type Badge = {
  main: string;
  sub: string;
  color: BadgeColor;
};

type Column = {
  header: string;
  tenStar: [string, string];
  heavenly: Badge;
  earthly: Badge;
  star: [string, string];
  luck: [string, string];
  godKill: [string, string];
  noble: [string, string];
};

type SajuData = {
  owner: string;
  datetime: string;
  columns: Column[]; // 4 columns: 時, 日, 月, 年
};

const defaultData: SajuData = {
  owner: '김로켓님',
  datetime: '1980년 8월27일 08:10',
  columns: [
    {
      header: '時',
      tenStar: ['傷官', '(상관)'],
      heavenly: { main: '壬', sub: '陽水', color: 'black' },
      earthly: { main: '寅', sub: '陽木', color: 'teal' },
      star: ['比肩', '(비견)'],
      luck: ['死', '(사)'],
      godKill: ['劫殺', '(겁살)'],
      noble: ['(없음)', ''],
    },
    {
      header: '日',
      tenStar: ['比肩', '(비견)'],
      heavenly: { main: '丁', sub: '陰火', color: 'red' },
      earthly: { main: '巳', sub: '陰火', color: 'red' },
      star: ['劫財', '(겁재)'],
      luck: ['帝旺', '(제왕)'],
      godKill: ['地殺', '(지살)'],
      noble: ['(없음)', ''],
    },
    {
      header: '月',
      tenStar: ['傷官', '(상관)'],
      heavenly: { main: '癸', sub: '陰水', color: 'black' },
      earthly: { main: '亥', sub: '陰水', color: 'black' },
      star: ['食神', '(식신)'],
      luck: ['胎', '(태)'],
      godKill: ['驛馬殺', '(역마살)'],
      noble: ['天乙', '(천을귀인)'],
    },
    {
      header: '年',
      tenStar: ['傷官', '(상관)'],
      heavenly: { main: '癸', sub: '陰水', color: 'black' },
      earthly: { main: '酉', sub: '陰金', color: 'white' },
      star: ['偏財', '(편재)'],
      luck: ['長生', '(장생)'],
      godKill: ['將星殺', '(장성살)'],
      noble: ['太極·文昌', ''],
    },
  ],
};

function BadgeBox({ badge, top }: { badge: Badge; top?: string }) {
  return (
    <div className={`${styles.badge} ${styles[badge.color]}`}>
      {top ? <div className={styles.badgeTop}>{top}</div> : null}
      <div className={styles.badgeMain}>{badge.main}</div>
      <div className={styles.badgeSub}>{badge.sub}</div>
    </div>
  );
}

export default function SajuTable({ data = defaultData }: { data?: SajuData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={`${styles.title} fw-300`}>{data.owner}의 사주</div>
          <div className={`${styles.datetime} fw-700`}>{data.datetime}</div>
        </div>

        {/* 상단 열 헤더 */}
        <div className={styles.grid}>
          <div className={`${styles.colHead} fw-700`}></div>
          {data.columns.map((c) => (
            <div key={`h-${c.header}`} className={`${styles.colHead} fw-700`}>
              {c.header}
            </div>
          ))}

          {/* 십성 */}
          <div className={styles.rowHead}>
            <span>十星</span>
            <span>(십성)</span>
          </div>
          {data.columns.map((c) => (
            <div key={`tenStar-${c.header}`} className={`${styles.cell} ${styles.cellWhite} ${styles.rowMid}`}>
              <div className={styles.pairCn}>{c.tenStar[0]}</div>
              <div className={styles.pairKr}>{c.tenStar[1]}</div>
            </div>
          ))}

          {/* 천간 배지 */}
          <div className={`${styles.rowHead} ${styles.rowHeadTall} ${styles.thinDivider}`}>
            <span>天干</span>
            <span>(천간)</span>
          </div>
          {[
            "임",
            "정",
            "계",
            "계"
          ].map((top, idx) => {
            const c = data.columns[idx];
            return (
              <div key={`heavenly-${c.header}`} className={`${styles.cell} ${styles.rowTall} ${styles.cellWhite} ${styles.thinDivider}`}>
                <BadgeBox badge={c.heavenly} top={top} />
              </div>
            );
          })}

          {/* 지지 배지 */}
          <div className={`${styles.rowHead} ${styles.rowHeadTall}`}>
            <span>地支</span>
            <span>(지지)</span>
          </div>
          {["인", "사", "해", "유"].map((top, idx) => {
            const c = data.columns[idx];
            return (
              <div key={`earthly-${c.header}`} className={`${styles.cell} ${styles.rowTall} ${styles.cellWhite}`}>
                <BadgeBox badge={c.earthly} top={top} />
              </div>
            );
          })}

          {/* 십성(실성) */}
          <div className={styles.rowHead}>
            <span>十星</span>
            <span>(십성)</span>
          </div>
          {data.columns.map((c) => (
            <div key={`star-${c.header}`} className={`${styles.cell} ${styles.cellWhite} ${styles.rowMid}`}>
              <div className={styles.pairCn}>{c.star[0]}</div>
              <div className={styles.pairKr}>{c.star[1]}</div>
            </div>
          ))}

          {/* 십이운성 */}
          <div className={styles.rowHead}>
            <span>十二運星</span>
            <span>(십이운성)</span>
          </div>
          {data.columns.map((c) => (
            <div key={`luck-${c.header}`} className={`${styles.cell} ${styles.cellWhite} ${styles.rowMid}`}>
              <div className={styles.pairCn}>{c.luck[0]}</div>
              <div className={styles.pairKr}>{c.luck[1]}</div>
            </div>
          ))}

          {/* 십이신살 */}
          <div className={styles.rowHead}>
            <span>十二神殺</span>
            <span>(십이신살)</span>
          </div>
          {data.columns.map((c) => (
            <div key={`god-${c.header}`} className={`${styles.cell} ${styles.cellWhite} ${styles.rowMid}`}>
              <div className={styles.pairCn}>{c.godKill[0]}</div>
              <div className={styles.pairKr}>{c.godKill[1]}</div>
            </div>
          ))}

          {/* 귀인 */}
          <div className={`${styles.rowHead} ${styles.rowVeryTall}`}>
            <span>貴人</span>
            <span>(귀인)</span>
          </div>
          {data.columns.map((c, idx) => (
            <div key={`noble-${c.header}`} className={`${styles.cell} ${styles.rowVeryTall} ${styles.cellWhite}`}>
              {idx < data.columns.length - 1 ? (
                <>
                  <div className={c.noble[0].startsWith('(') ? styles.pairKr : styles.pairCn}>{c.noble[0]}</div>
                  {c.noble[1] ? <div className={styles.pairKr}>{c.noble[1]}</div> : null}
                </>
              ) : (
                <div className={styles.stack}>
                  <div>
                    <div className={styles.pairCn}>天乙</div>
                    <div className={styles.pairKr}>(천을귀인)</div>
                  </div>
                  <div>
                    <div className={styles.pairCn}>太極</div>
                    <div className={styles.pairKr}>(태극귀인)</div>
                  </div>
                  <div>
                    <div className={styles.pairCn}>文昌</div>
                    <div className={styles.pairKr}>(문창귀인)</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


