import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';

import Trend from './trend'

export default class BetIndex extends Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <Router>
                <div>
                    <div className='betHeader'>
                        <div className='left'>大佬</div>
                        <div className='mid'>小赤佬</div>
                        <div className='right'>

                        <Link to='/trend'>走势图</Link>
                        {/*路由匹配*/}
                        <Route path='/trend'
                               render={() => (
                                   <Redirect to="/trend" />
                               )}
                        />
                        </div>
                    </div>
                </div>
            </Router>


        )
    }
}