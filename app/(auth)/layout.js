export default function AuthLayout({children}) {
    const styles = {
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    
    return (
        <div style={styles}>
            {children}
        </div>
    )
}