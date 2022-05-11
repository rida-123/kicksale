import './table.css'
const Table=()=>{
    return(
        <>
        <div className='table' style={{paddingBottom:"50px"}}>
            <h3 className='tableHeading'>KickSale Tier & Access to IMO</h3>
         <br></br>
         <br></br>
         <center>
         <table className='tables' >
             <tr>
                 <th>ACCESS</th>
                 <th>TIER</th>
                 <th>KICK POWER <br></br>REQUIREMENT</th>
                 <th>ALLOCATION TIER</th>
                 <th>LOTTERY POOL</th>
             </tr>
             <tr>
                 <td>
                     FCFS
                 </td>
                 <td>Tier 1</td>
                 <td>100+</td>
                 <td>1x</td>
                 <td>1-9</td>
             </tr>
             <tr>
                 <td>
                     FCFS
                 </td>
                 <td>Tier 2</td>
                 <td>500+</td>
                 <td>2x</td>
                 <td>10-19</td>
             </tr>
             <tr>
                 <td>
                     FCFS
                 </td>
                 <td>Tier 3</td>
                 <td>1000+</td>
                 <td>4x</td>
                 <td>20-29</td>
             </tr>
             <tr>
                 <td>
                     FCFS
                 </td>
                 <td>Tier 4</td>
                 <td>10000+</td>
                 <td>8x</td>
                 <td>30-50</td>
             </tr>
             <tr>
                 <td>
                     FCFS
                 </td>
                 <td>Tier 5</td>
                 <td>100000+</td>
                 <td>16x</td>
                 <td>70+</td>
             </tr>
         </table>
         </center>
    
        </div>
        </>
    )
}
export default Table;