import React from 'react';
import {Nav, NavItem, Navlink} from 'shards-react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'shards-ui/dist/shards.min.css';


function Nav2() {
    return (
        <div className="App">
        {/* we can replace tabs with fill, pills justified*/}
            <Nav tabs>
                <NavItem>
                    <Navlink active href="#">
                        Active
                    </Navlink>
                </NavItem>        

                <NavItem>
                    <Navlink active href="#">
                        Link
                    </Navlink>
                    </NavItem>

                <NavItem>
                    <Navlink active href="#">
                        Link
                    </Navlink>
                </NavItem>

                <NavItem>
                    <Navlink disabled href="#">
                        Disabled Link
                    </Navlink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Nav2
