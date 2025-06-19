
import Card from "../ui/dashboard/card/card"
import Charts from "../ui/dashboard/charts/charts"
import styles from "../ui/dashboard/dashboard.module.css" 
import RightBar from "../ui/dashboard/rightBar/rightbar"
import Transactions from "../ui/dashboard/transactions/transactions"


const Dashboard = () => {
    return (
    
    <div className={styles.wrapper}>
        <div className={styles.main}>
        <div className={styles.card}>
            <Card />
            <Card />
            <Card />
        </div>
        <Transactions/>
        <Charts />
    
    </div>
    <div className={styles.side}>
    <RightBar />    
    </div> 
   </div>

    )
}

export default Dashboard