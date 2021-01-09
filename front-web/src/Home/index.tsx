import './styles.css';

import { ReactComponent as MainImage } from './motocicle.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br /> que entregamos <br /> para você!!!
                    </h1>
                        <p className='home-subtitle'>
                            Escolha o seu pedido e em poucos minutos <br /> levaremoss na sua porta
                    </p>
                        <Link className="home-btn-order" to="/orders">FAZER PEDIDO</Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}

export default Home;