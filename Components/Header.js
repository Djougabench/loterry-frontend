import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            <h1> Decentralize Lottery</h1>
            <div></div>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
