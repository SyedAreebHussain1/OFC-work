import "./style.css"
const Dashboard = () => {
    return (
        <div className="mainDashboard">
            <h1>Dashboard</h1>
            <div >
                <div className="ratingBox flexs">
                    <div className="todaySale">
                        <p style={{ color: 'gray', fontSize: '10px' }}>Today's Sales</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px' }}>$53,000</h5>
                        <p style={{ color: 'green' }}>+30%</p>
                    </div>
                    <div className="todayUser">
                        <p style={{ color: 'gray', fontSize: '10px' }}>Today's User</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px' }}>3,200</h5>
                        <p style={{ color: 'green' }}>+20%</p>
                    </div>
                    <div className="newClient">
                        <p style={{ color: 'gray', fontSize: '10px' }}>New Client</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px' }}>+1,200</h5>
                        <p style={{ color: 'red' }}>-20%</p>
                    </div>
                    <div className="newOrders">
                        <p style={{ color: 'gray', fontSize: '10px' }}>New Orders</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px' }}>$13,200</h5>
                        <p style={{ color: 'green' }}>20%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard