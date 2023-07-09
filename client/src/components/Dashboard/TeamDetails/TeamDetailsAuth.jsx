 
import SingleTaskProvider from '../../../context/SingleTaskProvider';
import TeamDetails from './TeamDetails';

const TeamDetailsAuth = () => {
    return (
        <SingleTaskProvider>
            <TeamDetails />
        </SingleTaskProvider>

    );
};

export default TeamDetailsAuth;