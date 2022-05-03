/*
 * @Description: 
 * @Author: hyt
 * @Date: 2022-05-01 15:04:21
 * @LastEditTime: 2022-05-01 17:28:52
 * @LastEditors: hyt
 */

import styles from './style.less'
import classnames from 'classnames'
import ProCard from '@ant-design/pro-card'
const MyCard = (props: any) => {
    console.log(props);

    return (
        <>
            <ProCard
                className={!props.icon ? styles.myCard : styles.myCardAndIcon}
                title={<div className={styles.cardTitle}>{props.title}</div>}
                headerBordered={props.headerBordered}
                {...props}
            >
                {props.icon && <div className={styles.cardIcon}>{props.icon}</div>}
                {props.children}
            </ProCard>
        </>
    )
}

export default MyCard