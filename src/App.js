import React from 'react';
import './App.css';
import request from 'superagent';
import { Button,Row, Col,Icon,Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : '',
        }
    }

    componentDidMount() {
        this.serverRequest = request
            .get(this.props.source)
            .query({msg : "HI"})
            .then(response =>{
                this.setState({
                    msg : response.body.data
                });
            })
    }


    componentWillUnmount() {
        this.serverRequest.abort();
    }


    callback(key) {
        console.log(key);
    }


    render() {
        return (
            <div>
                <Row style={{marginTop:10}}>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Icon type="bars" />
                        <h3 style={{display : "inline-block", marginLeft:10}}>标题</h3>
                        <div style={{display: "inline-block", float:"right"}}>
                            <a target={"_blank"} href={"https://1x.ant.design/components/tabs/"}>antd组件</a>
                        </div>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{marginTop:20}}>
                    <Col span={4}></Col>
                    <Col span={26}>
                        <Tabs defaultActiveKey="1" onChange={this.callback()}>
                            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
                        </Tabs>

                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        );
    }
}

export default App;
