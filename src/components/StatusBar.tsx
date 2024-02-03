import styled from 'styled-components';

import { ReactComponent as TimeSVG } from '../assets/SBtime.svg';
import { ReactComponent as AlarmSVG } from '../assets/SBalarm.svg';
import { ReactComponent as SignalSVG } from '../assets/SBsignal.svg';
import { ReactComponent as BatterySVG } from '../assets/SBbattery.svg';
import { ReactComponent as BluetoothSVG } from '../assets/SBbluetooth.svg';
import { ReactComponent as WifiSVG } from '../assets/SBwifi.svg';


const StatusBarConteiner = styled.div `
    position: fixed;
    height: 40px;
    width: 100%;
    top: 0%;
`

const StatusBarWrapper = styled.div `
    background-color: #154962;
    padding-right: 5.55%;
    padding-left: 5.55%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ConteinerTime = styled.div `
    display: flex;
    justify-content: space-between;
`

const ConteinerBadges = styled.div `
    display: flex;
    justify-content: space-between;
    gap: 2px;
`

export default function StatusBar () {

  return (

    <StatusBarConteiner>
        <StatusBarWrapper>
            <ConteinerTime>
                <TimeSVG/>
            </ConteinerTime>
            <ConteinerBadges>
                <AlarmSVG/>
                <BluetoothSVG/>
                <WifiSVG/>
                <SignalSVG/>
                <BatterySVG/>
            </ConteinerBadges>
        </StatusBarWrapper>
    </StatusBarConteiner>
    
  );

};