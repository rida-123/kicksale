import StakingHeader from "../stakingHeader/stakingHeader";
import StakingNav from "../stakingNav/stakingNav";
import FooterStake from "../footerStake/footerStake";
import './staking.css'
const Staking=()=>{

    return(
        <>
     <div className="myStaking">
<StakingNav></StakingNav>
<StakingHeader></StakingHeader>
<FooterStake></FooterStake>
     </div>
        </>
    )
}
export default Staking;