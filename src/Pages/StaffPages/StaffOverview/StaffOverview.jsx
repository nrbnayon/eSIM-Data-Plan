import SectionTitle from "../../../components/SectionTitle";
import IssueChart from "./IssueChart";
import TicketCard from "./TicketCard";


const StaffOverview = () => {
    return (
        <div>
            <SectionTitle title={'Stuff Overview'} description={'Track, manage and forecast your customers and orders.'}/>
            <TicketCard/>
            <IssueChart/>
        </div>
    );
};

export default StaffOverview;