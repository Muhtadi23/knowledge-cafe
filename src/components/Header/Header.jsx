import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container flex justify-between items-center p-4 mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;