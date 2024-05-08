import Excel from 'exceljs';
import { useState } from 'react';

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// 注册模块
registerAllModules();

export default function XLSXPreView() {
  const [data, setData] = useState([]);

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    console.log('file', file);

    const workbook = new Excel.Workbook();
    console.log('workbook', workbook);
    await workbook.xlsx.load(file);

    // 第一个工作表
    const worksheet = workbook.getWorksheet(2);

    // 遍历工作表中的所有行（包括空行）
    const sheetData: any = [];
    worksheet?.eachRow({ includeEmpty: true }, function (row: any) {
      // console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
      // 使用row.values获取每一行的值时总会多出一条空数据(第一条)，这里我把它删除
      const row_values = row?.values?.slice(1);
      sheetData.push(row_values);
    });
    setData(sheetData);
  };

  return (
    <>
      <input type="file" onChange={handleFile} />
      <div id="table_view">
        <HotTable
          data={data}
          readOnly={true}
          rowHeaders={true}
          colHeaders={true}
          width="100vw"
          height="auto"
          licenseKey="non-commercial-and-evaluation" // 一定得加这个，handsontable是收费的，加了这个才能免费用
        />
      </div>
    </>
  );
}
