
import { NavLink } from 'react-router-dom';
import {ReactComponent as Fullview} from '../assets/fullflow.svg';

import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";

// function handleClick() {
//     window.location.href='/list'
// }
// window.onload=function(){
// let el = document.getElementsByClassName('b1')
// el.addEventListener('click', handleClick, false)
// }

export const Flow2 = () => {

    useLayoutEffect(() => {
    
        var root = am5.Root.new("chartdiv");
    
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    var data = [{
      name: "View",
      children: [{
        name: "TNC",
        children: [{
          name: "Sponsor Visits",
          children: [
            {name:"Applied",
            value: 44},
            {name:"NA",
            value:44}
        ]}, {
          name: "Fol ups",
          children: [
            {name:"Applied",
            value: 44},
            {name:"NA",
            value:44}
        ]
        }, {
          name: "Applied",
          value: 25
        },{
          name: "NA",
          value:13
      }]
      }, {
        name: "BOOK",
        children: [{
          name: "Applied",
          value: 62
        }]
      }, {
        name: "Revisited",
        children: [ {
          name: "Applied",
          value: 92
        }, {
          name: "NA",
          value: 17
        }]
      }, {
        name: "NA",
        value:50
      }]
    }];
    
    
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
      })
    );
    
    var series = container.children.push(
      am5hierarchy.Tree.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 5,
        topDepth: 0,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        orientation: "horizontal"
      })
    );
    
    
    
    series.data.setAll(data);
    series.set("selectedDataItem", series.dataItems[0]);
    
    
        // Add cursor
        // chart.set("cursor", am5xy.XYCursor.new(root, {}));
    
        return () => {
          root.dispose();
        };
      }, []);
    
      return (
        <div className="maincontainer">
        <div id="chartdiv" style={{ width: "100%", height: "90vh" }}></div>
        </div>
      );
        
    // return(
    // <div className="maincontainer">
    //     <div className='fullviewcontainer'>
        
    //     <NavLink to="/list">
    //     <Fullview className="ffsvg"/>
    //     </NavLink>
    //     </div>
    // </div>
    // )
}
