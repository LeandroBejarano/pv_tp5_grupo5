import welcome from '../assets/welcome.png'
function Inicio() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            <img src={welcome} alt="index" style={{ display: 'block', margin: '0 auto' }} />
        </div>
    )
}

export default Inicio