import "./style.css"
const Dashboard = (props) => {
    console.log('props',props)
    return (
        <div className="mainDashboard">
            <div>Dashboard</div>
            <div>
                <div className="ratingBox flexs">
                    <div className="todaySale">
                        <p style={{ color: 'gray', fontSize: '10px', width: '50%' }}>Today's Sales</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '55%' }}>$53,000</h5>
                        <p style={{ color: 'green', width: '35%' }}>+30%</p>
                    </div>
                    <div className="todayUser">
                        <p style={{ color: 'gray', fontSize: '10px', width: '55%' }}>Today's User</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '65%' }}>3,200</h5>
                        <p style={{ color: 'green', width: '45%' }}>+20%</p>
                    </div>
                    <div className="newClient">
                        <p style={{ color: 'gray', fontSize: '10px', width: '40%' }}>New Client</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '40%' }}>+1,200</h5>
                        <p style={{ color: 'red', width: '35%' }}>-20%</p>
                    </div>
                    <div className="newOrders">
                        <p style={{ color: 'gray', fontSize: '10px', width: '50%' }}>New Orders</p>
                        <h5 style={{ fontWeight: 'bold', fontSize: '30px', width: '90%' }}>$13,200</h5>
                        <p style={{ color: 'green', width: '40%' }}>20%</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="activeUser flexs">
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard