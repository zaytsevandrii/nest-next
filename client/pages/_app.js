import "../styles/globals.css"
import Navigate from "../components/Navigate"

function MyApp({ Component, pageProps }) {
    return (
        <>
                <Component {...pageProps} />
        </>
    )
}

export default MyApp
