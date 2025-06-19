import styles from "./transactions.module.css"

const Transactions = () =>{
    return(
        <div className={styles.container}>
            <h2>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>

                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>

                    </tr>
                </thead>
            </table>            
        </div>
    )
}


export default Transactions


