import React from 'react';
import InfoItem from "../InfoItem/InfoItem";
import {User} from "../../../../../core/types/user";

interface InfoGroupProps {
    user: User;
}

const InfoGroup: React.FC<InfoGroupProps> = ({user}) => {
    return (
        <div>
            <InfoItem name={"ФИО:"} value={user.name}/>
            <InfoItem name={"город:"} value={user.address.city}/>
            <InfoItem name={"компания:"} value={user.company.name}/>
        </div>
    );
};

export default InfoGroup;