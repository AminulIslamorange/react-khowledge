
import profile from '../../../src/assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2  max-w-7xl mx-auto'>
            <h2>Knowledge Cafe</h2>
            <img src={profile}/>
        </header>
    );
};

export default Header;