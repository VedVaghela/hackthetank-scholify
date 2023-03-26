
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
      name: "Root",
      children: [{
        name: "NA",
        children: [{
          name: "A00",
          value: 88
        }, {
          name: "A01",
          value: 23
        }, {
          name: "A02",
          value: 25
        }]
      }, {
        name: "REV",
        children: [{
          name: "A00",
          value: 62
        }, {
          name: "B11",
          value: 4
        }]
      }, {
        name: "C0",
        children: [{
          name: "C20",
          value: 11
        }, {
          name: "C21",
          value: 92
        }, {
          name: "C22",
          value: 17
        }]
      }, {
        name: "D0",
        children: [{
          name: "D30",
          value: 95
        }, {
          name: "D31",
          value: 84
        }, {
          name: "D32",
          value: 75
        }]
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
