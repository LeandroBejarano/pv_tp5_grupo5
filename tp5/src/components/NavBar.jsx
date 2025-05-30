function NavBar({ children }) {
    const navContainer = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '20px',
        backgroundColor: '#e0f7f7',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '40px',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };
    return (
        <header style={navContainer}>{children}</header>
    )
}

export default NavBar