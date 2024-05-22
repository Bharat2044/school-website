const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'        
        }}>
            <h1>404 | Page Not Found</h1>
            <img src="/images/not-found.png" alt="Not Found Image" width="400px" />
        </div>
    );
}

export default NotFound;