import React, { useMemo } from 'react'
import { isMacOs, isMobile, isMobileOnly } from 'react-device-detect';

 const FixedFirstColumTable = () => {
    const operationReport = [
      {
        "targetDay": "2021/12/01",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/02",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/03",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/04",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/05",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/06",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/07",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/08",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/09",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/10",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/11",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/12",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/13",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/14",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/15",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/16",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/17",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/18",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/19",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/20",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/21",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/22",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/23",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/24",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/25",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/26",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/27",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "2021/12/28",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      },
      {
        "targetDay": "",
        "maleCount": 0,
        "womanCount": 0,
        "sexTotalCount": 0,
        "firstCount": 0,
        "secondCount": 0,
        "thirdCount": 0,
        "regularCount": 0,
        "visitNumCount": 0,
        "unaccountCount": 0,
        "priceTotal": 0
      }
    
    ]

    const tblRows = useMemo(() => ['日付', '男性', '女性', '計', '', '初回', '2回目', '3回目', '常連', '計', '', '回数', '金額'], []);


    return (
        <div
          className="periodSalesTable newDesignTable nobackground"
          style={{
            height: 'auto', minHeight: '10%', padding: isMacOs ? '35px' : '0px', maxHeight: 'calc(100vh - 300px)'
          }}
        >
          <table className="table table-bordered text-nowrap" id="periodSales">
            <thead>
              <tr>
                {tblRows.map((item: any, index: any) => (
                  <th
                    style={index === 0 ? {
                      top: 0, left: 0, zIndex: 99,
                    } : { zIndex: 95, top: 0 }}
                    className={index === 0 ? 'stickyStyle bgGray fristColSticky stickyStyle' : ' text-center bgGray stickyStyle'}
                  >
                    {item}
                  </th>
                ))}

              </tr>
            </thead>
            <tbody>
              {
                operationReport?.map((item: any) => (
                  <tr>
                    <td
                      className={item.targetDay !== '' ? 'stickyStyle fristColSticky' : 'text-center stickyStyle fristColSticky'}
                      style={{ top: '0', left: '0', zIndex: 95 }}
                    >
                      {item.targetDay !== '' ? item.targetDay : '合計'}
                    </td>
                    <td className="text-right pr-10 stickyStyle">{item.maleCount ? item.maleCount : 0}</td>
                    <td className="text-right pr-10 stickyStyle">{item.womanCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.sexTotalCount}</td>
                    <td className="text-right pr-10 stickyStyle bgGray" />
                    <td className="text-right pr-10 stickyStyle">{item.firstCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.secondCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.thirdCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.regularCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.visitNumCount}</td>
                    <td className="text-right pr-10 stickyStyle bgGray" />
                    <td className="text-right pr-10 stickyStyle">{item.unaccountCount}</td>
                    <td className="text-right pr-10 stickyStyle">{item.priceTotal}</td>

                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
    )
}
export default FixedFirstColumTable
