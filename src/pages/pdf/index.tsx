import { exportPDF } from '@/pages/pdf/PDF';

const PDFDemo = () => {
  return (
    <div>
      <div id={'pdf'}>
        <div>123</div>
      </div>
      <div
        onClick={() => {
          exportPDF('demo.pdf', 'pdf');
        }}
      >
        点击
      </div>
    </div>
  );
};

export default PDFDemo;
