import React, { Component, forwardRef, useRef, useImperativeHandle  } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";


const styles = {
   


};


const projectContainer = ({projectId, name, method, xRotate, yRotate, path, imagePath, coverId, project}) =>  {

    return(
        <div style={{color: '-webkit-link', cursor: 'pointer'}} onClick={path}>
            <div className="parent" id={projectId}>
                <div className="project">
                    <div class="positioning">
                        <span class="linkName">{name}</span>
                    </div>
                    <div className="cover" id={coverId}></div>
                </div>
            </div>
        </div>
    
    )
};

const Project = injectSheet(styles)(projectContainer);

export default Project;