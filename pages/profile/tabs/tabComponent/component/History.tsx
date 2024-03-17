import { useState } from 'react';
import { FONTFAMILY, colors } from '../../../../../utils';
import styles from './styles/components.module.css';
import { useAppSelector } from '../../../../../state/hooks';
const History = () => {
  const recentActivities = [
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
    {
      activiy: 'Shared experience on Instagram ',
      point: ' 100',
      date: '12-12-2023',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [ActivityPerPage] = useState(5);

  const indexOfLastActivity = currentPage * ActivityPerPage;
  const indexOfFirstActivity = indexOfLastActivity - ActivityPerPage;
  const currentActivity = recentActivities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={styles.tableSection}>
        <div
          style={{
            overflowX: 'auto',
          }}
        >
          <table className={styles.customers}>
            <thead>
              <tr style={{ fontFamily: FONTFAMILY.normal }}>
                <th>Activities</th>
                <th>Points</th>
                {windowSize > 641 && <th>Date</th>}
              </tr>
            </thead>

            <tbody>
              {currentActivity.map((recentActivities, index) => {
                return (
                  <tr>
                    <td>
                      <div>
                        <p
                          style={{
                            fontFamily: FONTFAMILY.normal,
                            color: colors.greenDeep,
                          }}
                          className="text-[14px] leading-4 font-medium"
                        >
                          {recentActivities.activiy}
                        </p>
                        <p
                          className="text-[12px] sm:hidden"
                          style={{
                            fontFamily: FONTFAMILY.normal,
                            color: colors.gray7,
                          }}
                        >
                          {recentActivities.date}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p
                        style={{
                          fontFamily: FONTFAMILY.normal,
                          color: colors.greenDeep,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: FONTFAMILY.bold,
                            color: colors.green4,
                          }}
                        >
                          +
                        </span>
                        {recentActivities.point}
                      </p>
                    </td>
                    <td className="hidden">
                      <p
                        className="text-[12px]"
                        style={{
                          fontFamily: FONTFAMILY.normal,
                          color: colors.green,
                        }}
                      >
                        {recentActivities.date}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row justify-center sm:justify-end mt-3">
        {Array.from(
          { length: Math.ceil(recentActivities.length / ActivityPerPage) },
          (_, i) => (
            <button
              style={{
                backgroundColor:
                  currentPage === i + 1 ? colors.orange : colors.white,
                color: currentPage === i + 1 ? colors.white : colors.black,
                margin: '0 5px',
                padding: ' 8px 10px',
                borderRadius: '5px',
              }}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default History;
