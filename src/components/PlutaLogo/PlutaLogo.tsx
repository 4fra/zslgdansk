import {Image} from '@mantine/core';
import {useRouter} from 'next/navigation';

const PlutaLogo = ({h = 48}: { h?: number }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <Image
            className={"logoContainer"}
            src="/domofon.png"
            alt="ZSL Logo"
            w={"auto"}
            h={h}
            onClick={handleClick}
            style={{cursor: 'pointer'}}
        />
    );
};

export default PlutaLogo;