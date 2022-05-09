import React from 'react';
import useServices from '../../Hooks/useServices';
import Loading from '../../SharePage/Loading/Loading';
import AllBrand from '../AllBrand/AllBrand';
import Banner from '../Banner/Banner';
import Mission from '../Mission/Mission';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';

const Home = () => {
    const { services } = useServices();
    console.log(services);
    return (
        <div>
            {
                services.length === 0 ?
                    <Loading></Loading> :
                    <>
                        <Banner></Banner>
                        <Mission></Mission>
                        <Services></Services>
                        <AllBrand></AllBrand>
                        <OurTeam></OurTeam>
                    </>

            }
        </div>
    );
};

export default Home;