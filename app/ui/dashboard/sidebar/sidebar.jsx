import styles from "../sidebar/sidebar.module.css"
import {MdDashboard,MdSupervisedUserCircle,MdShoppingBag,MdAttachMoney,MdWork,MdAnalytics,MdPeople,MdOutlineSettings,MdHelpCenter,MdLogout}from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
    {
        title : "Pages",
        list: [
            {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard/>,
            },
            {
            title: "Users",
            path: "/dashboard/users",
            icon: <MdSupervisedUserCircle/>,
            },
            {
            title: "Products",
            path: "/dashboard/products",
            icon: <MdShoppingBag/>,
            },
            {
            title: "Transactions",
            path: "/dashboard/transactions",
            icon: <MdAttachMoney/>,
            },
        ],
    },
    {   title : "Analytics",
        list: [
            {
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <MdWork/>,
            },
            {
            title: "Reports",
            path: "/dashboard/reports",
            icon: <MdAnalytics/>,
            },
            {
            title: "Teams",
            path: "/dashboard/teams>",
            icon: <MdPeople/>,
            },
        ],    
    },
    {
        title: "User",
        list:[
            {
            title:"Settings",
            path:"/dashboard/settings>",
            icon: <MdOutlineSettings/>,
            },
            {
            title:"Help",
            path:"/dashboard/help",
            icon: <MdHelpCenter/>,
            },
        ],
    },  
];

const Sidebar = () => {
    return (
    
    <div className={styles.container}>
        <div className={styles.user}>
            <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"/>
            <div className={styles.userDetail}>
            <span className={styles.username} >Rahul Singh</span>
            <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
        <ul className={styles.list}>
                 {menuItems.map((cat)=>(
                <li key={cat.title}>
                <span className={styles.cat}>{cat.title}</span>
                {cat.list.map((item)=>(
                    <MenuLink item={item} key={item.title}/>
                ))}
                
                </li>
                ))}  
        </ul>
        <button className={styles.logout}>
            <MdLogout />Logout
        </button>
     </div>
          
    )
}

export default Sidebar