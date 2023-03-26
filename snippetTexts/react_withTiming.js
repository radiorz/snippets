import React, { Component } from "react";
function withTiming(WrappedComponent) {
  return class extends WrappedComponent {
    constructor(props) {
      super(props);
      this.start = 0;
      this.end = 0;
    }
    componentWillMount() {
      super.componentWillMount && super.componentWillMount();
      this.start = Date.now();
    }
    componentDidMount() {
      super.componentDidMount && super.componentDidMount();
      this.end = Date.now();
      console.log(
        `${WrappedComponent.name} 组件渲染时间为 ${this.end - this.start} ms`
      );
    }
    render() {
      return super.render();
    }
  };
}

export default withTiming;
