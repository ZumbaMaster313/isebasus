import React, { Component, forwardRef, useRef, useImperativeHandle  } from 'react';
import injectSheet from 'react-jss';
import withStyles from "react-jss";
import PropTypes from "prop-types";


const styles = {
   


};


const Container = ({}) =>  {

    return(
        <div class="body">
            <div class="projects"></div>
        </div>
    )
};

const Description = injectSheet(styles)(Container);

export default Description;