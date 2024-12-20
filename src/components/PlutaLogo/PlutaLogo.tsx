import {Image} from '@mantine/core';

const PlutaLogo = ({h = 48}: { h?: number }) => (
    <Image className={"logoContainer"} src="/domofon.png" alt="ZSL Logo" w={"auto"} h={h}/>
);

export default PlutaLogo;