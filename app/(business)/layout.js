import AuthNav from "@/components/navBar/businessNav/authNav";
import Footer from "@/components/footer/page";


export default function BusinessLayout({ children }) {
    const styles = {
        height: "100dvh",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center"
    }

    return (
        <div
            // style={styles}
        >
            <AuthNav />
            {children}
            <Footer />
        </div>
    )
}