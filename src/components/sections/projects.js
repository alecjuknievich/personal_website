import React, {Component} from "react";
import "../../App.css"
import FishSwimming from "../animations/swimming-fish";
import SharkSwimming from "../animations/swimming-shark";

class Projects extends Component {
    render() {
        return (
            <div id="Projects">
                <h1 className="section-header">Projects</h1>

                <div className="section-div">
                    <div className="info-div">
                        <div className="text-div">
                            <h2>Automation Tools</h2>
                            <p>Create UI and backend to manage and execute automation tasks for: </p>
                            <p>- <a target="_blank" rel="noreferrer" href="https://github.com/alecjuknievich/cNFTBot">NFT Sniping Bot</a></p>
                            <p>- Bypassing bot security on ecommerce websites to purchase high demand items</p>
                            <p>- Everyday web tasks</p>

                            <h5>Daily tools:</h5>
                            <p> Python | Firebase | NodeJS | Express | React | Typescript | Electron </p>
                        </div>
                    </div>
                    <div className="filler-div">
                        <FishSwimming/>
                    </div>
                </div>

                <div className="section-div">
                    <div className="filler-div">
                        <SharkSwimming/>
                    </div>
                    <div className="info-div">
                        <div className="text-div">
                            <h2>NFT Development</h2>
                            <p>Create smart contracts and web application for minting NFTs on ETH</p>
                            <p>Types of Smart Contracts:</p>
                            <p>- <a target="_blank" rel="noreferrer" href="https://github.com/alecjuknievich/nft-smart-contracts">NFT Token Mints</a> (both on chain and off chain art)</p>
                            <p>- <a target="_blank" rel="noreferrer" href="https://github.com/alecjuknievich/off-chain-whitelist-api">Signature Validation</a></p>
                            <p>- ERC-20 Tokens </p>

                            <h5>Daily tools:</h5>
                            <p> Solidity | Truffle | Ganesh | React | Angular | Firebase </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects