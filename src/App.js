import React from 'react';
import './App.css';
//import request from 'superagent';
import { Row, Col } from 'antd';
import Title from './component/Title';
import Tab from './component/Tab';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : '',
        }
    }

    componentDidMount() {
        // this.serverRequest = request
        //     .get(this.props.source)
        //     .query({msg : "HI"})
        //     .then(response =>{
        //         this.setState({
        //             msg : response.body.data
        //         });
        //     })
    }


    componentWillUnmount() {
        // this.serverRequest.abort();
    }


    render() {
        return (
            <div>
                <Row style={{marginTop:10}}>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Title/>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{marginTop:20}}>
                    <Col span={4}></Col>
                    <Col span={26}>
                        <Tab></Tab>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        );
    }
}

export default App;
