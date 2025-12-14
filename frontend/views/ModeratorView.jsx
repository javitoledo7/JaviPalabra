function ModeratorView({ onLogin }) {
    return (
        <>
            <h2>Moderator Panel</h2>
            <button onClick={() => onLogin(null)}>
                Return to Log In
            </button>
        </>
    )
}

export default ModeratorView