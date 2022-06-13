import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '前端react项目开发build中使用dll动态链接库文件'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
            </div>
        )
    }
}

export default App