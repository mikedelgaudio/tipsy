import { Component } from "react";
import ErrorComponent from "./ErrorComponent";

interface State {
  hasError: boolean;
  error: { message: ""; stack: "" };
  info: { componentStack: "" };
}

class ErrorBoundary extends Component<any, State> {
  state: State = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError = (error: any) => {
    return { hasError: true };
  };

  componentDidCatch = (error: any, info: any) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
