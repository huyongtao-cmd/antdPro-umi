/*
 * @Description: 
 * @Author: hyt
 * @Date: 2022-05-01 14:42:04
 * @LastEditTime: 2022-05-01 17:35:31
 * @LastEditors: hyt
 */
import { LineChartOutlined, PieChartTwoTone, StepForwardOutlined } from '@ant-design/icons';
import MyCard from '../components/card';

const DemoPage: React.FC = () => {

    return (
        <>
            <MyCard
                headerBordered
                title={'卡片'}
                icon={<PieChartTwoTone />}
            >
                123
            </MyCard>
        </>
    )
}
export default DemoPage;