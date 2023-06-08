import React from "react";
import MenuItems from "../menu-items/menu-items";
import './directory.scss'
import {connect} from 'react-redux'
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
            <div className="directory-menu">
                {sections.map(({id,...otherSectionItems}) => (
                    <MenuItems key={id} {...otherSectionItems} />
                ))}
            </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);