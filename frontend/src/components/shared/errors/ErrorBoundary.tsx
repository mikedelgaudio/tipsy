import { Component } from "react";
import ErrorComponent from "./ErrorComponent";

interface State {
  error: string | null;
  errorInfo: string | null;
}

class ErrorBoundary extends Component {
  state = {
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
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorComponent /> : children;
  }
}

export default ErrorBoundary;
