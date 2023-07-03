import { Component, ReactNode } from "react";
import './NavHeader.css';

export class NavHeader extends Component {

    render(): ReactNode {
        return (
            <div className="nav-header d-flex">
                <div className="nav-item">
                    Home
                </div>

                <div>
                    Devices
                </div>
            </div>
        )
    }
}
