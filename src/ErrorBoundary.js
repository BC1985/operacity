import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, Redirect: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo, Redirect: true });
  }
  render() {
    const errorWrapper = {
      padding: "50% 20%",
      marginBottom: "30%",
      fontFamily: "Fjalla One"
    };
    if (this.state.error) {
      return (
        <div style={errorWrapper}>
          <h1> Gosh darn it...</h1>
          <p>Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
